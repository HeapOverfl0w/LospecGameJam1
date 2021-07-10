export class Weapon {
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

    isReady() {
        return this.activeAnimation === this.defaultAnimation;
    }

    attack(level, camera) {
        //only shoot if weapon is ready and ammo is in the magazine
        if (this.isReady() && this.magazineAmmo > 0) {
            this.activeAnimation = this.attackAnimation;
            this.activeAnimation.start();
            if (this.projectile !== undefined) {
                level.projectiles.push(this.projectile.copy(camera.x, camera.y, Math.sin(camera.angle), Math.cos(camera.angle)));
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

    draw(ctx) {
        if (!this.isReady() && !this.activeAnimation.isAnimating()) {
            this.activeAnimation = this.defaultAnimation;
            this.activeAnimation.start();
        }
        this.activeAnimation.draw(ctx, 0, 0, ctx.canvas.width, ctx.canvas.height);
    }
}