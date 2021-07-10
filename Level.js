class Level
{
  constructor(levelArray, data, skyboxImage, useShade, shadeColor, billboards)
  {
    this.levelArray = levelArray;
    this.width = levelArray.length;
    this.height = levelArray[0].length;
    this.data = data;
    this.skybox = skyboxImage;
    this.useShade = useShade;
    this.shadeColor = shadeColor;

    this.loadBillboards(billboards);
  }

  loadBillboards(billboards) {
    this.billboards = [];
    for (let b = 0; b < billboards.length; b++) {
      this.billboards.push(this.data.billboards[billboards[b].type].copy(billboards[b].x, billboards[b].y));
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
      }
    }
  }

  billboardTexture(type)
  {
    
  }
}