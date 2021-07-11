class Weapon {
    constructor(name, defaultAnimation, attackAnimation, reloadAnimation, isRanged, projectile, maxMagazineSize) {
        this.name = name;
        this.defaultAnimation = defaultAnimation;
        this.activeAnimation = defaultAnimation;
        this.attackAnimation = attackAnimation;
        this.reloadAnimation = reloadAnimation;
        this.isRanged = isRanged;
        this.projectile = projectile;
        this.ammo = 0;
        this.maxMagazineSize = maxMagazineSize;
        this.magazineAmmo = 0;
    }

    switchTo() {
        this.activeAnimation = this.defaultAnimation;
        this.activeAnimation.start();
    }

    isReady() {
        return this.activeAnimation === this.defaultAnimation;
    }

    attack(level, camera) {
        //only shoot if weapon is ready and ammo is in the magazine
        if (this.isReady() && (this.magazineAmmo > 0 || !this.isRanged)) {
            this.activeAnimation.stop();
            this.activeAnimation = this.attackAnimation;
            this.activeAnimation.start();
            if (this.projectile !== undefined) {
                level.projectiles.push(this.projectile.copy(camera.x, camera.y, Math.sin(camera.angle), Math.cos(camera.angle), true));
            }
        }
    }

    reload() {
        if (this.magazineAmmo !== this.maxMagazineSize && this.ammo > 0) {
            this.activeAnimation = this.reloadAnimation;
            this.activeAnimation.start();
            this.ammo -= this.maxMagazineSize - this.magazineAmmo;
            this.magazineAmmo = this.maxMagazineSize;
            if (this.ammo < 0) {
                this.magazineAmmo += this.ammo;
                this.ammo = 0;
            }
        }
    }

    stopAttack() {
        this.activeAnimation.requestEnd();
    }

    draw(screenBuffer) {
        if (!this.isReady() && !this.activeAnimation.isAnimating()) {
            this.activeAnimation = this.defaultAnimation;
            this.activeAnimation.start();
        }

        let animationFrameBuffer = this.activeAnimation.getFrameBuffer();
        for (let i = 0; i < animationFrameBuffer.data.length; i = i + 4) {
            if (animationFrameBuffer.data[i+3] != 0) {
                screenBuffer.data[i] = animationFrameBuffer.data[i];
                screenBuffer.data[i+1] = animationFrameBuffer.data[i+1];
                screenBuffer.data[i+2] = animationFrameBuffer.data[i+2];
                screenBuffer.data[i+3] = animationFrameBuffer.data[i+3];
            }
        }
    }
}