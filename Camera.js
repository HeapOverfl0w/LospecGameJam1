class Camera
{
  constructor(startX, startY, startAngle, fov, speed, defaultWeapon)
  {
    this.x = startX;
    this.y = startY;
    this.angle = startAngle;
    this.fov = fov;
    this.speed = speed;
    this.height = 16;
    this.isStrafing = false;

    this.activeWeapon = defaultWeapon;
    this.activeWeapon.switchTo();
    this.weapons = [ defaultWeapon ];
    this.playerHealth = 10;
  }

  isInside(x, y) {
    const cameraWidth = 0.75;
    return (x + cameraWidth / 2 > this.x &&
        x - cameraWidth / 2 < this.x &&
        y + cameraWidth / 2 > this.y &&
        y - cameraWidth / 2 < this.y);
  }

  draw(screenBuffer) {
    this.activeWeapon.draw(screenBuffer);
  }

  drawHUD(ctx) {
    let height = ctx.canvas.height;
    let width = ctx.canvas.width;
    //draw health
    ctx.fillStyle = "#f63f4c";
    ctx.fillText(Math.round(this.playerHealth / 10 * 100) + "%", 10, height - 10);
    //draw ammo
    if (this.activeWeapon.isRanged) {
      ctx.fillStyle = "#37313b";
      ctx.fillText(this.activeWeapon.magazineAmmo + " : " + this.activeWeapon.ammo, 35, height - 10);
    }

    ctx.fillStyle = "#000000";
    ctx.fillText((Math.round(this.x * 10) / 10) + "," + (Math.round(this.y * 10) / 10), width - 40, height - 10);
  }

  handleMouseDown(level) {
    this.activeWeapon.attack(level, this);
  }

  handleMouseUp( ) {
    this.activeWeapon.stopAttack();
  }

  handleKeyUp(keyCode) {
    //switch weapons on F
    if (this.activeWeapon.isReady() && keyCode == 70) {
      let requestedWeaponIndex = this.weapons.indexOf(this.activeWeapon) + 1;
      if (this.weapons.length <= requestedWeaponIndex) {
        this.activeWeapon.stopAttack();
        this.weapons[0].switchTo();
        this.activeWeapon = this.weapons[0];
      }
      else {
        this.activeWeapon.stopAttack();
        this.weapons[requestedWeaponIndex].switchTo();
        this.activeWeapon = this.weapons[requestedWeaponIndex];
      }
    }
  }

  handleKeyDown(keyCode, level, updateInterval)
  {
    let adjustedX = this.x;
    let adjustedY = this.y;
    let actualX = this.x;
    let actualY = this.y;
    let previousX = this.x;
    let previousY = this.y;

    if (keyCode == 87)
    { //W
      let modifier = this.isStrafing ? 0.4 : 1;
      adjustedX = this.x + Math.sin(this.angle) * this.speed * modifier * updateInterval;
      adjustedY = this.y + Math.cos(this.angle) * this.speed * modifier * updateInterval;
      actualX = adjustedX;
      actualY = adjustedY;
      if (!level.isPassable(Math.floor(adjustedX), Math.floor(adjustedY)))
      {
        actualX = this.x;
        actualY = this.y;
      }
    }
    if (keyCode == 83)
    { //S
      let modifier = this.isStrafing ? 0.2 : 0.5;
      adjustedX = this.x - Math.sin(this.angle) * this.speed * modifier * updateInterval;
      adjustedY = this.y - Math.cos(this.angle) * this.speed * modifier * updateInterval;
      actualX = adjustedX;
      actualY = adjustedY;
      let floorAdjustedX = Math.floor(adjustedX);
      let floorAdjustedY = Math.floor(adjustedY);
      if (!level.isPassable(floorAdjustedX, floorAdjustedY))
      {
        actualX = this.x;
        actualY = this.y;
      }
    }
    if (keyCode == 65)
    { //A
      adjustedX = this.x - Math.sin(this.angle + Math.PI/2) * this.speed * (0.4) * updateInterval;
      adjustedY = this.y - Math.cos(this.angle + Math.PI/2) * this.speed * (0.4) * updateInterval;
      actualX = adjustedX;
      actualY = adjustedY;
      let floorAdjustedX = Math.floor(adjustedX);
      let floorAdjustedY = Math.floor(adjustedY);
      if (!level.isPassable(floorAdjustedX, floorAdjustedY)) {
        actualX = this.x;
        actualY = this.y;
      }
      this.isStrafing = true;
    }
    if (keyCode == 68)
    { //D
      adjustedX = this.x - Math.sin(this.angle - Math.PI/2) * this.speed * (0.4) * updateInterval;
      adjustedY = this.y - Math.cos(this.angle - Math.PI/2) * this.speed * (0.4) * updateInterval;
      actualX = adjustedX;
      actualY = adjustedY;
      let floorAdjustedX = Math.floor(adjustedX);
      let floorAdjustedY = Math.floor(adjustedY);
      if (!level.isPassable(floorAdjustedX, floorAdjustedY)) {
        actualX = this.x;
        actualY = this.y;
      }
      this.isStrafing = true;
    }

    if (level.isDoor(Math.floor(adjustedX), Math.floor(adjustedY))) {
      let previousXDiff = Math.abs(adjustedX - previousX);
      let previousYDiff = Math.abs(adjustedY - previousY);

      if (previousXDiff > previousYDiff) {
        if (adjustedX > previousX) {
          actualX = this.x + 1;
        }
        else if (adjustedX < previousX) {
          actualX = this.x - 1;
        }
      }
      else {
        if (adjustedY > previousY) {
          actualY = this.y + 1;
        }
        else if (adjustedY < previousY) {
          actualY = this.y - 1;
        }
      }
    }

    this.x = actualX;
    this.y = actualY;
  }
}