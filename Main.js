class Main
{
  constructor(ctx)
  {
    this.audio = new AudioHandler();
    this.data = new Data();
    this.data.load();
    this.ctx = ctx;
    this.level = bossRoom;//ApartmentLevel4;
    this.level.loadData(this.data);

    this.activeCutscene = this.data.introCutscene;
    //17, 67
    this.camera = new Camera(1, 1, 0, Math.PI * (6/18), 6, this.data.weapons["screwDriver"]);
    this.rayCaster = new RayCaster(20);
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
    //render cutscene
    if (main.activeCutscene !== undefined) {
      main.activeCutscene.update();
      main.activeCutscene.draw(main.ctx);
      return;
    }

    for (let k = 0; k < main.keysDown.length; k++)
      main.camera.handleKeyDown(main.keysDown[k], main.level, 1/main.FPS);

    main.level.update(main.level, main.camera, main.data, main.audio, 1/main.FPS);

    main.rayCaster.draw(main.ctx, main.camera, main.level);

    let teleport = main.level.getTeleportOnPlayer(main.camera);
    if (teleport !== undefined) {
      teleport.toLevel.loadData(main.data);
      main.level.stopAllAnimations();
      main.level = teleport.toLevel;
      main.camera.x = teleport.toLevelX;
      main.camera.y = teleport.toLevelY;
    }

    //draw HUD data
    main.camera.drawHUD(main.ctx);

    if (main.mouseDown)
      main.camera.handleMouseDown(main.level, main.audio);

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
    if (this.activeCutscene !== undefined) {
      this.activeCutscene = undefined;
    }

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