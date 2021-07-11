class Level
{
  constructor(levelArray, data, skyboxImage, useShade, shadeColor, billboards, enemies)
  {
    this.levelArray = levelArray;
    this.width = levelArray.length;
    this.height = levelArray[0].length;
    this.data = data;
    this.skybox = skyboxImage;
    this.useShade = useShade;
    this.shadeColor = shadeColor;

    this.projectiles = [];

    this.loadBillboards(billboards);
    this.loadEnemies(enemies);
  }

  getAllBillboards() {
    return this.billboards.concat(this.projectiles).concat(this.enemies);
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
      this.projectiles.indexOf(projectilesToRemove[p]);
      this.projectiles.splice(p, 1);
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
    for (let b = 0; b < enemies.length; b++) {
      this.enemies.push(this.data.enemies[enemies[b].type].copy(enemies[b].x, enemies[b].y));
    }
  }

  isWall(x, y)
  {
    //for out of bounds just put a wall
    if (x < 0 || x >= this.levelArray.length || y < 0 || y >= this.levelArray[x].length)
      return true;
    else
      return this.levelArray[x][y] > 0 && this.levelArray[x][y] < 100;
  }

  isPassable(x, y) {
    return !this.isWall(x, y);
  }

  wallTextureAt(x, y)
  {
    if (x < 0 || x >= this.levelArray.length || y < 0 || y >= this.levelArray[x].length)
      return "#000000";
    else
    {
      switch(this.levelArray[x][y])
      {
        case 1:
          return this.data.textures["walls"];
          break;
        case 2:
          return this.data.textures["drywall"];
          break;
      }
    }
  }

  billboardTexture(type)
  {
    
  }
}