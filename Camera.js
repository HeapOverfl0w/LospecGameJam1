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
    this.playerMaxHealth = 20;
    this.playerHealth = this.playerMaxHealth;
    this.hudBoxImage = document.getElementById("hudbox");
  }

  stopAllWeaponAnimations() {
    for (let w = 0; w < this.weapons.length; w++) {
      this.weapons[w].activeAnimation.stop();
    }
  }

  isInside(x, y) {
    const cameraWidth = 0.6;
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

    ctx.drawImage(this.hudBoxImage,8,height - 20);
    //draw health
    ctx.fillStyle = "#f63f4c";
    ctx.fillText(Math.round(this.playerHealth / this.playerMaxHealth * 100) + "%", 18, height - 10);
    //draw ammo
    if (this.activeWeapon.isRanged) {
      ctx.fillStyle = "#37313b";
      ctx.fillText(this.activeWeapon.magazineAmmo + ":" + this.activeWeapon.ammo, 48, height - 10);
    }

    // ctx.fillStyle = "#000000";
    // ctx.fillText((Math.round(this.x * 10) / 10) + "," + (Math.round(this.y * 10) / 10), width - 40, height - 10);
  }

  handleMouseDown(level, audio) {
    this.activeWeapon.attack(level, this, audio);
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
    }
    if (keyCode == 83)
    { //S
      let modifier = this.isStrafing ? 0.2 : 0.5;
      adjustedX = this.x - Math.sin(this.angle) * this.speed * modifier * updateInterval;
      adjustedY = this.y - Math.cos(this.angle) * this.speed * modifier * updateInterval;
      actualX = adjustedX;
      actualY = adjustedY;
    }
    if (keyCode == 65)
    { //A
      adjustedX = this.x - Math.sin(this.angle + Math.PI/2) * this.speed * (0.4) * updateInterval;
      adjustedY = this.y - Math.cos(this.angle + Math.PI/2) * this.speed * (0.4) * updateInterval;
      actualX = adjustedX;
      actualY = adjustedY;
      this.isStrafing = true;
    }
    if (keyCode == 68)
    { //D
      adjustedX = this.x - Math.sin(this.angle - Math.PI/2) * this.speed * (0.4) * updateInterval;
      adjustedY = this.y - Math.cos(this.angle - Math.PI/2) * this.speed * (0.4) * updateInterval;
      actualX = adjustedX;
      actualY = adjustedY;
      this.isStrafing = true;
    }

    let floorAdjustedX = Math.floor(adjustedX);
    let floorAdjustedY = Math.floor(adjustedY);
    if (!level.isPassable(floorAdjustedX, floorAdjustedY)) {
      actualX = this.x;
      actualY = this.y;
    }

    if (level.isDoor(floorAdjustedX, floorAdjustedY))
    {
      let doorMoveX = (floorAdjustedX - Math.floor(previousX)) * 2;
      let doorMoveY = (floorAdjustedY - Math.floor(previousY)) * 2;
      actualX = adjustedX + doorMoveX;
      actualY = adjustedY + doorMoveY;
    }

    // if (level.isDoor(Math.floor(adjustedX), Math.floor(adjustedY))) {
    //   let previousXDiff = Math.abs(adjustedX - previousX);
    //   let previousYDiff = Math.abs(adjustedY - previousY);

    //   if (previousXDiff > previousYDiff) {
    //     if (adjustedX > previousX) {
    //       actualX = this.x + 1;
    //     }
    //     else if (adjustedX < previousX) {
    //       actualX = this.x - 1;
    //     }
    //   }
    //   else {
    //     if (adjustedY > previousY) {
    //       actualY = this.y + 1;
    //     }
    //     else if (adjustedY < previousY) {
    //       actualY = this.y - 1;
    //     }
    //   }

    //   //first check to see if we're in a wall
    //   if (!level.isPassable(Math.floor(actualX), Math.floor(actualY))) {
    //     if (level.isPassable(Math.floor(actualX + 1), Math.floor(actualY)))
    //       actualX = actualX + 1;
    //     else if (level.isPassable(Math.floor(actualX), Math.floor(actualY + 1)))
    //       actualY = actualY + 1;
    //     else if (level.isPassable(Math.floor(actualX + 1), Math.floor(actualY+1))) {
    //       actualY = actualY + 1;
    //       actualX = actualX + 1;
    //     }
    //     else if (level.isPassable(Math.floor(actualX), Math.floor(actualY-1))) {
    //       actualY = actualY - 1;
    //     }
    //     else if (level.isPassable(Math.floor(actualX-1), Math.floor(actualY))) {
    //       actualY = actualX - 1;
    //     }
    //     else if (level.isPassable(Math.floor(actualX-1), Math.floor(actualY-1))) {
    //       actualY = actualY - 1;
    //       actualX = actualX - 1;
    //     }
    //     console.log("Here");
    //   }
    // }

    this.x = actualX;
    this.y = actualY;
  }
}