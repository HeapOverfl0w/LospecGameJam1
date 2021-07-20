class Level
{
  constructor(levelArray, skyboxImage, useShade, shadeColor, billboards, enemies, powerups, hazards,teleports)
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
    this.hazardTypes = hazards;
    this.teleportTypes = teleports;

    this.projectiles = [];
  }

  loadData(data) {
    this.data = data;
    this.loadBillboards(this.billboardTypes);
    this.loadEnemies(this.enemyTypes);
    this.loadPowerups(this.powerupTypes);
    this.loadHazards(this.hazardTypes);
    this.loadTeleports(this.teleportTypes);
  }

  getAllBillboards() {
    return this.billboards.concat(this.projectiles).concat(this.enemies).concat(this.powerups).concat(this.teleports).concat(this.hazards);
  }

  getTeleportOnPlayer(camera) {
    for(let t = 0; t < this.teleports.length; t++){
      if (this.teleports[t].isPlayerInside(camera))
        return this.teleports[t];
    }

    return undefined;
  }

  stopAllAnimations() {
    let billboards = this.getAllBillboards();
    for(let b = 0; b < billboards.length; b++){
      billboards[b].activeAnimation.stop();
    }
  }

  update(level, camera, data,  audio, updateInterval) {
    for (let e = 0; e < this.enemies.length; e++) {
      this.enemies[e].update(level, camera, data, audio, updateInterval);
    }
    //See if Hazards hurt the player
    for (let h = 0; h < this.hazards.length; h++) {
      this.hazards[h].update(camera, audio);
    }
    //remove unnecessary projectiles
    let projectilesToRemove = [];
    for (let p = 0; p < this.projectiles.length; p++){
      this.projectiles[p].update(this, camera, audio);
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
      this.powerups[p].update(this.data, camera, audio);
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

  loadTeleports(teleports) {
    this.teleports = [];
    for (let p = 0; p < teleports.length; p++) {
      this.teleports.push(this.data.teleports[teleports[p].type].copy(teleports[p].x, teleports[p].y));
    }
  }

  loadHazards(hazards) {
    this.hazards = [];
    for (let h = 0; h < hazards.length; h++) {
      this.hazards.push(this.data.hazards[hazards[h].type].copy(hazards[h].x, hazards[h].y));
    }
  }

  isDoor(x, y) {
    return this.levelArray[x][y] == 5 || this.levelArray[x][y] == 7 || this.levelArray[x][y] == 73 || this.levelArray[x][y] == 34 || this.levelArray[x][y] == 78;
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
      case 7:
        return this.data.textures["wallpapervent"];
      case 8:
        return this.data.textures["vent"];
      case 11:
        return this.data.textures["cobblestonetall"];
      case 34:
        return this.data.textures["drywalldoor"];
      case 62:
        return this.data.textures["bossroomwall"];
      case 63:
        return this.data.textures["bossroomwall1"];
      case 64:
        return this.data.textures["bossroomwallwires"];
      case 65:
        return this.data.textures["bossroomfloor1"];
      case 66:
        return this.data.textures["cleanwhitewall"];
      case 68:
        return this.data.textures["serverrack1"];
      case 69:
        return this.data.textures["serverrack2"];
      case 72:
        return this.data.textures["cleanwhitewalldoorclosed"];
      case 73:
        return this.data.textures["cleanwhitewalldooropen"];
      case 77:
        return this.data.textures["wallpapermailboxes"];
      case 78:
        return this.data.textures["guardsheddoor"];
      case 79:
        return this.data.textures["guardshedwall"];
      case 80:
        return this.data.textures["guardshedcorner"];
      case 81:
        return this.data.textures["fence"];
      case 82:
        return this.data.textures["brokendoorwallpaper-2"];
      case 83:
        return this.data.textures["stairs"];
      default:
        return undefined;
    }
  }

  getCeilingTextureAt(x,y) {
    switch(this.levelArray[x][y]) {
      case 0:
      case 6:
        return this.data.textures["ceilingDryWall"];
      case 9:
        return this.data.textures["vent"];
      case 67:
        return this.data.textures["cleanwhitewall"];
      case 70:
        return this.data.textures["cleanwhitewall"];
      case 71:
        return this.data.textures["cleanwhitewall"];
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
      case 9:
        return this.data.textures["vent"];
      case 12:
        return this.data.textures["cobblestone"];
      case 13:
        return this.data.textures["grass"];
      case 14:
        return this.data.textures["sidewalk1"];
      case 15:
        return this.data.textures["sidewalk2"];
      case 16:
        return this.data.textures["sidewalk3"];
      case 17:
        return this.data.textures["sidewalk4"];
      case 18:
        return this.data.textures["sidewalk5"];
      case 19:
        return this.data.textures["sidewalk6"];
      case 20:
        return this.data.textures["sidewalk7"];
      case 21:
        return this.data.textures["sidewalk8"];
      case 22:
        return this.data.textures["sidewalk9"];
      case 23:
        return this.data.textures["sidewalk10"];
      case 24:
        return this.data.textures["sidewalk11"];
      case 25:
        return this.data.textures["sidewalk12"];
      case 26:
        return this.data.textures["sidewalk13"];
      case 27:
        return this.data.textures["sidewalk14"];
      case 28:
        return this.data.textures["sidewalk15"];
      case 29:
        return this.data.textures["sidewalk16"];
      case 30:
        return this.data.textures["sidewalk17"];
      case 31:
        return this.data.textures["sidewalk18"];
      case 32:
        return this.data.textures["crosswalk1"];
      case 33:
        return this.data.textures["crosswalk2"];
      case 35:
        return this.data.textures["concrete1"];
      case 36:
        return this.data.textures["concrete2"];
      case 37:
        return this.data.textures["concrete3"];
      case 38:
        return this.data.textures["concrete4"];
      case 39:
        return this.data.textures["concrete5"];
      case 40:
        return this.data.textures["concrete6"];
      case 41:
        return this.data.textures["concrete7"];
      case 42:
        return this.data.textures["concrete8"];
      case 43:
        return this.data.textures["concrete9"];
      case 44:
        return this.data.textures["concrete10"];
      case 45:
        return this.data.textures["concrete11"];
      case 46:
        return this.data.textures["concrete12"];
      case 47:
        return this.data.textures["concrete13"];
      case 60:
        return this.data.textures["bossroomfloor"];
      case 61:
        return this.data.textures["bossroomfloor1"];
      case 75:
        return this.data.textures["bossroomfloorlit"];
      case 67:
        return this.data.textures["blackfloorshiny"];
      case 70:
        return this.data.textures["cleanwhitewall"];
      case 71:
        return this.data.textures["bluecarpet"];
      default:
        return this.data.textures["floors"];
    }
  }

  copy() {
    return new Level([...this.levelArray], this.skybox, this.useShade, this.shadeColor, this.billboardTypes, this.enemyTypes, this.powerupTypes, this.hazardTypes, this.teleportTypes);
  }
}