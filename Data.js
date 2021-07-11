class Data {
    constructor() {
        this.textures = ["trashcan", "couch", "sparks","defaultScrewDriver", "attackScrewDriver", "walls", "billboards", "floors", "skybox"];
    }

    load() {
        this.loadTextures();
        this.createAnimations();
        this.createProjectiles();
        this.createBillboards();
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
    }

    createBillboards() {
        const testBillboard = new Billboard(this.animations["test"], 0, 0);
        this.billboards = {};
        this.billboards["test"] = testBillboard;
        this.billboards["couch"] = new Billboard(this.animations["couch"], 0, 0);
        this.billboards["trashcan"] = new Billboard(this.animations["trashcan"], 0, 0);
    }

    createProjectiles() {
        this.projectiles = {};
        this.projectiles["sparks"] = new Projectile(this.animations["sparks"], 0,0, 0,0, 0.2, 3);
    }

    createEnemies() {

    }

    createWeapons() {
        this.weapons = {};
        //Screw Driver
        this.weapons["screwDriver"] = new Weapon("Screw Driver", 
        this.animations["defaultScrewDriver"], this.animations["attackScrewDriver"], this.animations["defaultScrewDriver"],
        false, this.projectiles["sparks"], 0);
    }
}