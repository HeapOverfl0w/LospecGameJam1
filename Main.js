class Main
{
  constructor(ctx)
  {
    this.audio = new AudioHandler();
    this.data = new Data();
    this.data.load();
    this.ctx = ctx;
    this.level = StreetsLevel1.copy();
    this.level.loadData(this.data);

    this.activeCutscene = this.data.introCutscene;
    //17, 67
    this.camera = new Camera(2, 2, 0, Math.PI * (6/18), 6, this.data.weapons["screwDriver"]);
    this.rayCaster = new RayCaster(20);
    this.FPS = 30;
    this.fpsCounter = 0;
    this.startTime = Date.now();
    this.endTime = 0;

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
      //render end game stats
      if (main.activeCutscene == main.data.endGameCutscene && main.activeCutscene.isOver()) {
        let timeinMS = main.endTime - main.startTime;
        main.ctx.fillStyle = "#1d1c1f";
        main.ctx.fillText("Play Time: " + Math.floor((timeinMS / (1000 * 60 * 60)) % 24) + " : " + Math.floor((timeinMS / (1000 * 60)) % 60) + " : " + Math.floor((timeinMS / 1000) % 60), 65, 70);
        let artifactsFound = 0;
        for (let w = 0; w < main.camera.weapons; w++) {
          if (main.camera.weapons[w].name == "fireaxe" || main.camera.weapons[w].name == "introtoc") {
            artifactsFound++;
          }
        }
        main.ctx.fillText("Artifacts Found: " + artifactsFound + " / 2", 65, 80);
      }
      main.activeCutscene.update();
      main.activeCutscene.draw(main.ctx);
      return;
    }

    for (let k = 0; k < main.keysDown.length; k++)
      main.camera.handleKeyDown(main.keysDown[k], main.level, 1/main.FPS);

    main.level.update(main.level, main.camera, main.data, main.audio, 1/main.FPS);

    main.rayCaster.draw(main.ctx, main.camera, main.level);

    main.audio.update();

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

    //death check
    // if (main.camera.playerHealth <= 0) {
    //   main.activeCutscene = main.data.deathCutscene;
    //   main.activeCutscene.restart();
    // }

    //win check
    if (main.level.enemies[0] != undefined && main.level.enemies[0].currentMode != undefined &&
        main.level.enemies[0].life <= 0 && !main.level.enemies[0].activeAnimation.isAnimating()) {
          main.activeCutscene = main.data.endGameCutscene;
          main.activeCutscene.restart();
          main.endTime = Date.now();
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
    if (this.activeCutscene !== undefined && (this.activeCutscene.skippable || (this.activeCutscene.isOver()))) {
      if (this.activeCutscene != this.data.introCutscene) {
        this.restartGame();
      }
      else {
        this.audio.playAndLoopMusic();
      }
      this.activeCutscene = undefined;
    }

    if (keyCode == 86) {
      this.audio.toggleMute();
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

  restartGame() {
    this.startTime = new Date().getTime();
    this.camera.stopAllWeaponAnimations();
    this.camera = new Camera(17, 67, 0, Math.PI * (6/18), 6, this.data.weapons["screwDriver"]);
    this.level = ApartmentLevel4.copy();
    this.level.loadData(this.data);
  }
}