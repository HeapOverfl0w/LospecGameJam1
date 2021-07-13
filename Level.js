class Level
{
  constructor(levelArray, skyboxImage, useShade, shadeColor, billboards, enemies, powerups)
  {
    this.levelArray = levelArray;
    this.width = levelArray.length;
    this.height = levelArray[0].length;
    this.skybox = skyboxImage;
    this.useShade = useShade;
    this.shadeColor = shadeColor;

    this.billboardTypes = billboards;
    this.enemyTypes = enemies;
    this.powerupTypes = powerups;


    this.projectiles = [];
  }

  loadData(data) {
    this.data = data;
    this.loadBillboards(this.billboardTypes);
    this.loadEnemies(this.enemyTypes);
    this.loadPowerups(this.powerupTypes);
  }

  getAllBillboards() {
    return this.billboards.concat(this.projectiles).concat(this.enemies).concat(this.powerups);
  }

  update(level, camera, updateInterval) {
    for (let e = 0; e < this.enemies.length; e++) {
      this.enemies[e].update(level, camera, updateInterval);
    }
    //remove unnecessary projectiles
    let projectilesToRemove = [];
    for (let p = 0; p < this.projectiles.length; p++){
      this.projectiles[p].update(this);
      if (this.projectiles[p].reachedMaxDistanceOrHitWall())
        projectilesToRemove.push(this.projectiles[p]);
    }

    for (let p = 0; p < projectilesToRemove.length; p++) {
      let index = this.projectiles.indexOf(projectilesToRemove[p]);
      this.projectiles[index].activeAnimation.stop();
      this.projectiles.splice(index, 1);
    }

    //remove collected powerups
    let powerupsToRemove = [];
    for (let p = 0; p < this.powerups.length; p++){
      this.powerups[p].update(this.data, camera);
      if (this.powerups[p].collected)
        powerupsToRemove.push(this.powerups[p]);
    }

    for (let p = 0; p < powerupsToRemove.length; p++) {
      let index = this.powerups.indexOf(powerupsToRemove[p]);
      this.powerups[index].activeAnimation.stop();
      this.powerups.splice(index, 1);
    }
  }

  loadBillboards(billboards) {
    this.billboards = [];
    for (let b = 0; b < billboards.length; b++) {
      this.billboards.push(this.data.billboards[billboards[b].type].copy(billboards[b].x, billboards[b].y));
    }
  }

  loadEnemies(enemies) {
    this.enemies = [];
    for (let e = 0; e < enemies.length; e++) {
      this.enemies.push(this.data.enemies[enemies[e].type].copy(enemies[e].x, enemies[e].y));
    }
  }

  loadPowerups(powerups) {
    this.powerups = [];
    for (let p = 0; p < powerups.length; p++) {
      this.powerups.push(this.data.powerups[powerups[p].type].copy(powerups[p].x, powerups[p].y));
    }
  }

  isDoor(x, y) {
    return this.levelArray[x][y] == 5;
  }

  isWall(x, y)
  {
    //for out of bounds just put a wall
    return this.wallTextureAt(x, y) !== undefined;
  }

  isPassable(x, y) {
    return !this.isWall(x, y);
  }

  wallTextureAt(x, y)
  {
    switch(this.levelArray[x][y])
    {
      case 1:
        return this.data.textures["brick"];
      case 2:
        return this.data.textures["drywall"];
      case 3:
        return this.data.textures["wallpaper"];
      case 4:
        return this.data.textures["brickwindow"];
      case 5:
        return this.data.textures["wallpaperdoor"];
      default:
        return undefined;
    }
  }

  getCeilingTextureAt(x,y) {
    switch(this.levelArray[x][y]) {
      case 0:
      case 6:
        return this.data.textures["ceilingDryWall"];
      default:
        return undefined;
    }
  }

  getFloorTextureAt(x,y) {
    switch(this.levelArray[x][y]) {
      case 0:
        return this.data.textures["floors"];
      case 6:
        return this.data.textures["carpet"];
      default:
        return this.data.textures["floors"];
    }
  }

  copy() {
    return new Level([...this.levelArray], this.data, this.skybox, this.useShade, this.shadeColor, this.billboardTypes, this.enemyTypes, this.powerupTypes);
  }
}