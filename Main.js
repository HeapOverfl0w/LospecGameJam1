class Main
{
  constructor(ctx)
  {
    this.data = new Data();
    this.data.load();
    this.ctx = ctx;
    // let demoLevel = [[2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4,4,4],
    //                  [2,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,3,3,4],
    //                  [2,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,3,3,4],
    //                  [2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    //                  [2,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,1,1,1],
    //                  [2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    //                  [2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    //                  [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]]
    // this.level = new Level(demoLevel, this.data, document.getElementById("skybox"), true, "#1d1c1f", 
    // [{type: "test", x: 2, y: 2}, {type: "couch", x: 5, y: 5}, {type: "trashcan", x: 6, y: 6}, {type: "pottedplant", x: 5, y: 2}, {type: "computerdesk", x: 5, y: 3}],
    // [{type: "turret", x: 2, y: 10}, {type: "melee", x: 6, y: 2}],
    // [{type: "pistol", x: 3, y: 12}, {type: "ammo", x: 6, y: 10}, {type:"health", x: 6.5, y: 14}, {type:"fireaxe", x: 6, y: 16}, {type:"ar", x: 3, y: 17}]);
    this.level = ApartmentLevel4;
    this.level.loadData(this.data);
    this.camera = new Camera(15, 10, 0, Math.PI * (4/18), 5, this.data.weapons["screwDriver"]);
    this.rayCaster = new RayCaster(15);
    this.FPS = 30;
    this.fpsCounter = 0;
    this.lastSecond = new Date().getTime();

    this.keysDown = [];
    this.mouseDown = false;
  }

  initialize()
  {
    setInterval(this.update, 1000/this.FPS, this);
  }

  update(main)
  {
    for (let k = 0; k < main.keysDown.length; k++)
      main.camera.handleKeyDown(main.keysDown[k], main.level, 1/main.FPS);

    main.level.update(main.level, main.camera, 1/main.FPS);

    main.rayCaster.draw(main.ctx, main.camera, main.level);

    //draw HUD data
    main.camera.drawHUD(main.ctx);

    if (main.mouseDown)
      main.camera.handleMouseDown(main.level);

    main.fpsCounter++;
    if (new Date().getTime() - main.lastSecond > 1000)
    {
      console.log(main.fpsCounter);
      main.fpsCounter = 0;
      main.lastSecond = new Date().getTime();
    }
  }

  handleMouseMove(movementx) {
    let angle = movementx * 0.1 * Math.PI / 180
    this.camera.angle = (this.camera.angle + angle) % (2 * Math.PI);
    if (this.angle < 0)
      this.camera.angle = this.camera.angle + (2 * Math.PI);
  }

  handleMouseDown() {
    this.mouseDown = true;
  }

  handleMouseUp() {
    this.mouseDown = false;
    this.camera.handleMouseUp();
  }

  handleKeyDown(keyCode)
  {
    if (!this.keysDown.includes(keyCode))
      this.keysDown.push(keyCode);
  }

  handleKeyUp(keyCode)
  {
    let removeAt = -1;
    for(let k = 0; k < this.keysDown.length; k++)
    {
      if (this.keysDown[k] == keyCode)
        removeAt = k;
    }
    
    if (removeAt != -1)
      this.keysDown.splice(removeAt,1);

    if (keyCode == 70) {
      this.camera.handleKeyUp(keyCode);
    }

    if (keyCode == 65 || keyCode == 68) {
      if (!this.keysDown.includes(65) && !this.keysDown.includes(68))
        this.camera.isStrafing = false;
    }
  }
}