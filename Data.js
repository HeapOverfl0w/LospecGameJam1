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
            "walls", 
            "billboards", 
            "floors", 
            "skybox",
            "enemyshot",
            "pistolpowerup",
            "bulletprojectile",
            "attackPistol",
            "defaultPistol",
            "ammopowerup",
            "healthpowerup"
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
        this.animations["attackScrewDriver"] = new Animation(this.textures["attackScrewDriver"], 240,135,3,100,true);
        this.animations["sparks"] = new Animation(this.textures["sparks"], 16, 16, 3, 100, false);
        this.animations["couch"] = new Animation(this.textures["couch"], this.textures["couch"].width, this.textures["couch"].height, 1, 0, false);
        this.animations["trashcan"] = new Animation(this.textures["trashcan"], this.textures["trashcan"].width, this.textures["trashcan"].height, 1, 0, false);
        this.animations["pottedplant"] = new Animation(this.textures["pottedplant"], this.textures["pottedplant"].width, this.textures["pottedplant"].height, 1, 0, false);
        this.animations["computerdesk"] = new Animation(this.textures["computerdesk"], this.textures["computerdesk"].width, this.textures["computerdesk"].height, 1, 0, false);
        this.animations["enemyturret"] = new Animation(this.textures["enemyturret"], this.textures["enemyturret"].width, this.textures["enemyturret"].height, 1, 0, false);
        this.animations["enemyturretdestroyed"] = new Animation(this.textures["enemyturretdestroyed"], this.textures["enemyturretdestroyed"].width, this.textures["enemyturretdestroyed"].height, 1, 0, false);
        this.animations["enemyturretattack"] = new Animation(this.textures["enemyturretattack"], 32,32,3,400,false);
        this.animations["enemyshot"] = new Animation(this.textures["enemyshot"], 16,16,3,200,false);
        this.animations["pistolpowerup"] = new Animation(this.textures["pistolpowerup"], 16, 16, 4, 300, true);
        this.animations["bulletprojectile"] = new Animation(this.textures["bulletprojectile"], 16, 16, 1, 0, false);
        this.animations["defaultPistol"] = new Animation(this.textures["defaultPistol"], 240,135,3,300,true);
        this.animations["attackPistol"] = new Animation(this.textures["attackPistol"], 240,135,3,300,false);
        this.animations["ammopowerup"] = new Animation(this.textures["ammopowerup"], 16, 16, 6, 200, true);
        this.animations["healthpowerup"] = new Animation(this.textures["healthpowerup"], 16, 16, 6, 200, true);
    }

    createBillboards() {
        const testBillboard = new Billboard(this.animations["test"], 0, 0);
        this.billboards = {};
        this.billboards["test"] = testBillboard;
        this.billboards["couch"] = new Billboard(this.animations["couch"], 0, 0);
        this.billboards["trashcan"] = new Billboard(this.animations["trashcan"], 0, 0);
        this.billboards["pottedplant"] = new Billboard(this.animations["pottedplant"], 0, 0);
        this.billboards["computerdesk"] = new Billboard(this.animations["computerdesk"], 0, 0);
    }

    createProjectiles() {
        this.projectiles = {};
        this.projectiles["sparks"] = new Projectile(this.animations["sparks"], 0,0, 0,0, 0.2, 2, 1);
        this.projectiles["enemyshot"] = new Projectile(this.animations["enemyshot"], 0,0, 0,0, 0.5, 20, 1);
        this.projectiles["bulletprojectile"] = new Projectile(this.animations["bulletprojectile"], 0,0,0,0,0.5,20,1);
    }

    createPowerups() {
        this.powerups = {};
        this.powerups["pistol"] = new Powerup("pistol", this.animations["pistolpowerup"], 0, 0);
        this.powerups["ammo"] = new Powerup("ammo", this.animations["ammopowerup"], 0, 0);
        this.powerups["health"] = new Powerup("health", this.animations["healthpowerup"], 0, 0);
    }

    createEnemies() {
        this.enemies = [];
        this.enemies["turret"] = new Enemy("Turret", 3, 0, true, true, this.projectiles["enemyshot"],this.animations["enemyturret"],this.animations["enemyturretattack"],this.animations["enemyturretdestroyed"],0,0);
    }

    createWeapons() {
        this.weapons = {};
        //Screw Driver
        this.weapons["screwDriver"] = new Weapon("Screw Driver", 
        this.animations["defaultScrewDriver"], this.animations["attackScrewDriver"], this.animations["defaultScrewDriver"],
        false, this.projectiles["sparks"], 0);

        //Pistol TODO: ADD RELOAD ANIMATION
        this.weapons["pistol"] = new Weapon("Pistol",
        this.animations["defaultPistol"], this.animations["attackPistol"], this.animations["defaultPistol"], 
        true, this.projectiles["bulletprojectile"], 8);
    }
}