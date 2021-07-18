class Data {
    constructor() {
        this.textures = [
            "enemyturret", 
            "enemyturretdestroyed", 
            "enemyturretattack", 
            "computerdesk", 
            "pottedplant", 
            "drywall", 
            "trashcan", 
            "couch", 
            "sparks",
            "defaultScrewDriver", 
            "attackScrewDriver", 
            "brick", 
            "billboards", 
            "floors", 
            "enemyshot",
            "pistolpowerup",
            "bulletprojectile",
            "attackPistol",
            "defaultPistol",
            "ammopowerup",
            "healthpowerup",
            "vent",
            "cobblestone",
            "cobblestonetall",
            "fireaxe",
            "fireaxeattack",
            "fireaxepowerup",
            "bluesparks",
            "npc_melee_attack",
            "npc_melee_move",
            "ar",
            "arattack",
            "arreload",
            "arpowerup",
            "carpet",
            "wallpaper",
            "brickwindow",
            "ceilingDryWall",
            "wallpaperdoor",
            "wallpapervent",
            "elevatordoors",
            "pistolreload",
            "deaddude",
            "fridge",
            "comfychair",
            "tv",
            "bed",
            "endtable",
            "statue",
            "enemyrangedmove",
            "enemyrangeddeath",
            "enemyrangedattack",
            "streetlamp",
            "exitsign",
            "cardboardbox",
            "bush",
            "shotgun",
            "shotgunattack",
            "shotgunreload",
            "shotgunpowerup",
            "shotgunblast",
            "hellraiser",
            "hellraiserattack",
            "hellraiserdeath",
            "introtoc",
            "darkblades",
            "introtocattack",
            "introtocpowerup",
            "grass",
            "sidewalk1",
            "sidewalk2",
            "sidewalk3",
            "sidewalk4",
            "sidewalk5",
            "sidewalk6",
            "sidewalk7",
            "sidewalk8",
            "sidewalk9",
            "sidewalk10",
            "sidewalk11",
            "sidewalk12",
            "sidewalk13",
            "sidewalk14",
            "sidewalk15",
            "sidewalk16",
            "sidewalk17",
            "sidewalk18",
            "concrete1",
            "concrete2",
            "concrete3",
            "concrete4",
            "concrete5",
            "concrete6",
            "concrete7",
            "concrete8",
            "concrete9",
            "concrete10",
            "concrete11",
            "concrete12",
            "concrete13",
            "crosswalk1",
            "crosswalk2",
            "bossroomwall",
            "bossroomwall1",
            "bossroomfloor",
            "bossroomfloor1",
            "bossroomwallwires",
            "evilfire",
            "boss",
            "bossattack",
            "bosssecondattack",
            "bossteleport",
            "bossroomfloorlit",
            "bossdeath",
            "intro_scene1",
            "intro_scene2"
        ];
    }

    load() {
        this.loadTextures();
        this.createAnimations();
        this.createProjectiles();
        this.createBillboards();
        this.createPowerups();
        this.createEnemies();
        this.createWeapons();
        this.createHazards();
        this.createTeleports();

        this.createCutscenes();
    }

    loadTextures() {
        let canvas = document.createElement("canvas");
        let ctx = canvas.getContext("2d");

        let textures = {};

        for (let i = 0; i < this.textures.length; i++) {
            let img = new Image();
            img.src = "resources\\" + this.textures[i] + ".png";
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);
            let imgData = ctx.getImageData(0,0,img.width,img.height);
            textures[this.textures[i]] = imgData;
        }
        this.textures = textures;
    }

    createAnimations() {
        const testAnimation = new Animation(this.textures["billboards"], 64, 102, 2, 1000, true);

        this.animations = {};
        this.animations["test"] = testAnimation;
        this.animations["defaultScrewDriver"] = new Animation(this.textures["defaultScrewDriver"], 240,135,3,100,true);
        this.animations["attackScrewDriver"] = new Animation(this.textures["attackScrewDriver"], 240,135,3,350,false);
        this.animations["sparks"] = new Animation(this.textures["sparks"], 16, 16, 3, 100, false);
        this.animations["couch"] = new Animation(this.textures["couch"], this.textures["couch"].width, this.textures["couch"].height, 1, 0, false);
        this.animations["trashcan"] = new Animation(this.textures["trashcan"], this.textures["trashcan"].width, this.textures["trashcan"].height, 1, 0, false);
        this.animations["pottedplant"] = new Animation(this.textures["pottedplant"], this.textures["pottedplant"].width, this.textures["pottedplant"].height, 1, 0, false);
        this.animations["computerdesk"] = new Animation(this.textures["computerdesk"], this.textures["computerdesk"].width, this.textures["computerdesk"].height, 1, 0, false);
        this.animations["enemyturret"] = new Animation(this.textures["enemyturret"], this.textures["enemyturret"].width, this.textures["enemyturret"].height, 1, 0, false);
        this.animations["enemyturretdestroyed"] = new Animation(this.textures["enemyturretdestroyed"], this.textures["enemyturretdestroyed"].width, this.textures["enemyturretdestroyed"].height, 1, 0, false);
        this.animations["enemyturretattack"] = new Animation(this.textures["enemyturretattack"], 32,32,3,500,false);
        this.animations["enemyshot"] = new Animation(this.textures["enemyshot"], 16,16,3,200,false);
        this.animations["pistolpowerup"] = new Animation(this.textures["pistolpowerup"], 16, 16, 8, 200, true);
        this.animations["bulletprojectile"] = new Animation(this.textures["bulletprojectile"], 16, 16, 1, 0, false);
        this.animations["defaultPistol"] = new Animation(this.textures["defaultPistol"], 240,135,3,300,true);
        this.animations["attackPistol"] = new Animation(this.textures["attackPistol"], 240,135,3,300,false);
        this.animations["reloadPistol"] = new Animation(this.textures["pistolreload"], 240,135,6,300,false);
        this.animations["ammopowerup"] = new Animation(this.textures["ammopowerup"], 16, 16, 6, 200, true);
        this.animations["healthpowerup"] = new Animation(this.textures["healthpowerup"], 16, 16, 6, 200, true);
        this.animations["bluesparks"] = new Animation(this.textures["bluesparks"], 16, 16, 3, 100, false);
        this.animations["fireaxepowerup"] = new Animation(this.textures["fireaxepowerup"], 16, 16, 8, 200, true);
        this.animations["defaultfireaxe"] = new Animation(this.textures["fireaxe"], 240,135,3,400,true);
        this.animations["attackfireaxe"] = new Animation(this.textures["fireaxeattack"], 240,135,5,200,false);
        this.animations["enemymeleeattack"] = new Animation(this.textures["npc_melee_attack"],32,32,11,100,false);
        this.animations["enemymeleemove"] = new Animation(this.textures["npc_melee_move"],32,32,6,100,true);
        this.animations["defaultar"] = new Animation(this.textures["ar"], 240,135,3,400,true);
        this.animations["attackar"] = new Animation(this.textures["arattack"], 240,135,2,100,false);
        this.animations["reloadar"] = new Animation(this.textures["arreload"], 240,135,6,300,false);
        this.animations["arpowerup"] = new Animation(this.textures["arpowerup"], 16, 16, 8, 200, true);
        this.animations["elevatordoors"] = new Animation(this.textures["elevatordoors"], 32, 32, 6, 300, true);
        this.animations["deaddude"] = new Animation(this.textures["deaddude"], 32, 32, 1, 0, true);
        this.animations["comfychair"] = new Animation(this.textures["comfychair"], 41, 32, 1, 0, true);
        this.animations["tv"] = new Animation(this.textures["tv"], 32, 32, 1, 0, true);
        this.animations["fridge"] = new Animation(this.textures["fridge"], 41, 44, 1, 0, true);
        this.animations["bed"] = new Animation(this.textures["bed"], 45, 32, 1, 0, true);
        this.animations["endtable"] = new Animation(this.textures["endtable"], 16, 32, 1, 0, true);
        this.animations["statue"] = new Animation(this.textures["statue"], 32, 64, 1, 0, true);
        this.animations["enemyrangedmove"] = new Animation(this.textures["enemyrangedmove"], 32, 32, 4, 200, true);
        this.animations["enemyrangedattack"] = new Animation(this.textures["enemyrangedattack"], 32, 32, 3, 300, false);
        this.animations["enemyrangeddeath"] = new Animation(this.textures["enemyrangeddeath"], 32, 32, 6, 300, false);
        this.animations["exitsign"] = new Animation(this.textures["exitsign"],18,64,1,0,true);
        this.animations["streetlamp"] = new Animation(this.textures["streetlamp"],16,64,1,0,true);
        this.animations["cardboardbox"] = new Animation(this.textures["cardboardbox"],25,40,1,0,true);
        this.animations["bush"] = new Animation(this.textures["bush"],33,45,1,0,true);
        this.animations["defaultshotgun"] = new Animation(this.textures["shotgun"], 240,135,3,500,true);
        this.animations["attackshotgun"] = new Animation(this.textures["shotgunattack"], 240,135,3,150,false);
        this.animations["reloadshotgun"] = new Animation(this.textures["shotgunreload"], 240,135,8,250,false);
        this.animations["shotgunpowerup"] = new Animation(this.textures["shotgunpowerup"], 16, 16, 8, 200, true);
        this.animations["shotgunblast"] = new Animation(this.textures["shotgunblast"],16,16,2,50,true);
        this.animations["hellraisermove"] = new Animation(this.textures["hellraiser"], 32, 40, 6, 100, true);
        this.animations["hellraiserattack"] = new Animation(this.textures["hellraiserattack"], 32, 40, 3, 250, false);
        this.animations["hellraiserdeath"] = new Animation(this.textures["hellraiserdeath"], 32, 40, 7, 150, false);
        this.animations["darkblades"] = new Animation(this.textures["darkblades"],16,16,2,100,true);
        this.animations["defaultintrotoc"] = new Animation(this.textures["introtoc"], 240,135,3,500, true);
        this.animations["attackintrotoc"] = new Animation(this.textures["introtocattack"], 240,135,3, 150, false);
        this.animations["introtocpowerup"] = new Animation(this.textures["introtocpowerup"], 16, 16, 8, 200, true);
        this.animations["bossdefault"] = new Animation(this.textures["boss"], 64, 75, 4, 200, true);
        this.animations["bossattack"] = new Animation(this.textures["bossattack"], 64, 75, 9, 80, false);
        this.animations["bosssecondattack"] = new Animation(this.textures["bosssecondattack"], 64, 75, 8, 150, false);
        this.animations["bossteleport"] = new Animation(this.textures["bossteleport"], 64, 75, 5, 200, false);
        this.animations["bossdeath"] = new Animation(this.textures["bossdeath"], 64, 75, 14, 200, false);
        this.animations["evilfire"] = new Animation(this.textures["evilfire"], 64, 64, 2, 400, true);

        //cutscene animations
        this.animations["intro_scene1"] = new Animation(this.textures["intro_scene1"], 240, 135, 6, 800, false);
        this.animations["intro_scene2"] = new Animation(this.textures["intro_scene2"], 240, 135, 6, 800, false);
    }

    createHazards() {
        this.hazards = {};
        this.hazards["evilfire"] = new Hazard(this.animations["evilfire"], 0,0, 1, 0.5);
    }

    createTeleports() {
        this.teleports = {};
        this.teleports["apartmentlevel4down"] = new Teleport(this.animations["elevatordoors"],0,0,streetslevel1,2,2);
    }

    createBillboards() {
        const testBillboard = new Billboard(this.animations["test"], 0, 0);
        this.billboards = {};
        this.billboards["test"] = testBillboard;
        this.billboards["couch"] = new Billboard(this.animations["couch"], 0, 0);
        this.billboards["trashcan"] = new Billboard(this.animations["trashcan"], 0, 0);
        this.billboards["pottedplant"] = new Billboard(this.animations["pottedplant"], 0, 0);
        this.billboards["computerdesk"] = new Billboard(this.animations["computerdesk"], 0, 0);
        this.billboards["deaddude"] = new Billboard(this.animations["deaddude"], 0, 0);
        this.billboards["comfychair"] = new Billboard(this.animations["comfychair"], 0, 0);
        this.billboards["fridge"] = new Billboard(this.animations["fridge"], 0, 0);
        this.billboards["tv"] = new Billboard(this.animations["tv"], 0, 0);
        this.billboards["bed"] = new Billboard(this.animations["bed"], 0, 0);
        this.billboards["endtable"] = new Billboard(this.animations["endtable"], 0, 0);
        this.billboards["statue"] = new Billboard(this.animations["statue"], 0, 0);
        this.billboards["exitsign"] = new Billboard(this.animations["exitsign"], 0, 0);
        this.billboards["streetlamp"] = new Billboard(this.animations["streetlamp"], 0, 0);
        this.billboards["cardboardbox"] = new Billboard(this.animations["cardboardbox"], 0, 0);
        this.billboards["bush"] = new Billboard(this.animations["bush"],0,0);
    }

    createProjectiles() {
        this.projectiles = {};
        this.projectiles["sparks"] = new Projectile(this.animations["sparks"], 0,0, 0,0, 0.2, 2, 1);
        this.projectiles["bluesparks"] = new Projectile(this.animations["bluesparks"], 0,0, 0,0, 0.4, 20, 1);
        this.projectiles["enemyshot"] = new Projectile(this.animations["enemyshot"], 0,0, 0,0, 0.5, 20, 1);
        this.projectiles["bulletprojectile"] = new Projectile(this.animations["bulletprojectile"], 0,0,0,0,0.5,25,1);
        this.projectiles["shotgunblast"] = new Projectile(this.animations["shotgunblast"],0,0,0,0,0.6,10,3);
        this.projectiles["darkblades"] = new Projectile(this.animations["darkblades"],0,0,0,0,0.2,7,2);
    }

    createPowerups() {
        this.powerups = {};
        this.powerups["pistol"] = new Powerup("pistol", this.animations["pistolpowerup"], 0, 0);
        this.powerups["fireaxe"] = new Powerup("fireaxe", this.animations["fireaxepowerup"], 0, 0);
        this.powerups["ar"] = new Powerup("ar", this.animations["arpowerup"], 0, 0);
        this.powerups["ammo"] = new Powerup("ammo", this.animations["ammopowerup"], 0, 0);
        this.powerups["health"] = new Powerup("health", this.animations["healthpowerup"], 0, 0);
        this.powerups["shotgun"] = new Powerup("shotgun", this.animations["shotgunpowerup"], 0, 0);
        this.powerups["introtoc"] = new Powerup("introtoc", this.animations["introtocpowerup"], 0, 0);
    }

    createEnemies() {
        this.enemies = [];
        this.enemies["turret"] = new Enemy("Turret", 3, 0, true, true, this.projectiles["enemyshot"],this.animations["enemyturret"],this.animations["enemyturretattack"],this.animations["enemyturretdestroyed"],0,0);
        //TODO: ADD MELEE ENEMY KILL ANIMATION
        this.enemies["melee"] = new Enemy("Melee", 2, 2, false, false, this.projectiles["sparks"],this.animations["enemymeleemove"],this.animations["enemymeleeattack"],this.animations["enemyturretdestroyed"],0,0);
        this.enemies["ranged"] = new Enemy("Ranged", 3, 1, true, false, this.projectiles["enemyshot"],this.animations["enemyrangedmove"],this.animations["enemyrangedattack"],this.animations["enemyrangeddeath"],0,0);
        this.enemies["hellraiser"] = new Enemy("Hellraiser", 5, 1, true, false, this.projectiles["enemyshot"],this.animations["hellraisermove"],this.animations["hellraiserattack"],this.animations["hellraiserdeath"],0,0);
        this.enemies["boss"] = new Boss(this.projectiles["bluesparks"], this.animations["bossdefault"], this.animations["bossattack"], this.animations["bosssecondattack"], this.animations["bossteleport"], this.animations["bossdeath"],0,0);
    }

    createWeapons() {
        this.weapons = {};
        //Screw Driver
        this.weapons["screwDriver"] = new Weapon("screwdriver", 
        this.animations["defaultScrewDriver"], this.animations["attackScrewDriver"], this.animations["defaultScrewDriver"],
        false, this.projectiles["sparks"], 0);

        //Pistol
        this.weapons["pistol"] = new Weapon("pistol",
        this.animations["defaultPistol"], this.animations["attackPistol"], this.animations["reloadPistol"], 
        true, this.projectiles["bulletprojectile"], 8);

        //Fireaxe
        this.weapons["fireaxe"] = new Weapon("fireaxe", 
        this.animations["defaultfireaxe"], this.animations["attackfireaxe"], this.animations["defaultfireaxe"],
        false, this.projectiles["bluesparks"], 0);

        //AR
        this.weapons["ar"] = new Weapon("ar", 
        this.animations["defaultar"], this.animations["attackar"], this.animations["reloadar"],
        true, this.projectiles["bulletprojectile"], 20);

        //Shotgun
        this.weapons["shotgun"] = new Weapon("shotgun", 
        this.animations["defaultshotgun"], this.animations["attackshotgun"], this.animations["reloadshotgun"],
        true, this.projectiles["shotgunblast"], 2);

        //IntroToC
        this.weapons["introtoc"] = new Weapon("introtoc", 
        this.animations["defaultintrotoc"], this.animations["attackintrotoc"], this.animations["defaultintrotoc"],
        false, this.projectiles["darkblades"], 0);
    }

    createCutscenes() {
        this.introCutscene =  new Cutscene(
            [this.animations["intro_scene1"],
            ["The year is 2026. 5 years since github copilot", 
            "was introduced. It was supposed to make our", 
            "software lives easier.",
            "Who would've thought an AI that could write", 
            "code would take over the world? It all happened", 
            "when one crazed front end developer tried to",
            "learn C and wrote the function",
            "'AIToTakeOverTheWorld()'... Of course copilot", 
            "wrote the function and took over the ", 
            "developer's mind with dark spellware. ",
            "The developer is now only known as ", 
            "'The Neuromancer'. Part human and part AI. ",
            "His armies are coming for you..."],
            this.animations["intro_scene2"]
        ]);
    }
}