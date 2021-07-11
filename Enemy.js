//import { Billboard } from "./Billboard";

class Enemy extends Billboard {
    constructor(name, maxLife, speed, isRanged, isStationary, projectile, walkAnimation, attackAnimation, destroyAnimation, x, y) {
        super(walkAnimation, x, y);
        this.name = name;
        this.life = maxLife;
        this.maxLife = maxLife;
        this.isRanged = isRanged;
        this.projectile = projectile;
        this.attackAnimation = attackAnimation;
        this.hasSeenCamera = false;
        this.isStationary = isStationary;
        this.speed = speed;
        this.destroyAnimation = destroyAnimation;
    }

    update(level, camera, updateInterval) {
        for (let p = 0; p < level.projectiles.length; p++) {
            if (level.projectiles[p].playerOwned && level.projectiles[p].isInside(this)) {
                this.life--;
                level.projectiles[p].hitWall = true;
            }
        }

        if (this.life <= 0) {
            if (this.activeAnimation != this.destroyAnimation)
                this.activeAnimation = this.destroyAnimation;
            return;
        }

        const maxViewRange = 15;
        //if we've seen the player find a way to get to him
        //first determine if we're even in range to see him
        const distanceFromPlayer = Math.sqrt(Math.pow(camera.x - this.x, 2) + Math.pow(camera.y - this.y, 2));
        if (distanceFromPlayer < maxViewRange) {
            const angle = Math.atan2(camera.x - this.x, camera.y - this.y);
            const playerInView = this.rayCastForWallsOrPlayer(level, camera, maxViewRange, angle);

            if (!this.hasSeenCamera && playerInView)
                this.hasSeenCamera = true;

            if (this.hasSeenCamera) {
                this.move(angle, playerInView, updateInterval);
                this.attack(angle, playerInView, distanceFromPlayer, level);             
            }
        }
    }

    move(angle, playerInView, updateInterval, distanceFromPlayer) {
        if ((this.isRanged && playerInView) || this.isStationary)
            return;
        
        if (distanceFromPlayer > 2) {
            let x = this.x + Math.sin(angle) * this.speed * updateInterval;
            let y = this.y + Math.cos(angle) * this.speed * updateInterval;
            if (!level.isWall(Math.floor(x), Math.floor(y)))
            {
                this.x = x;
                this.y = y;
            }
        }
    }

    attack(angle, playerInView, distanceFromPlayer, level) {
        if (this.attackAnimation == this.activeAnimation && this.attackAnimation.isAnimating())
            return;
        else if (this.attackAnimation == this.activeAnimation && !this.attackAnimation.isAnimating()) {
            this.activeAnimation = this.defaultAnimation;
            this.activeAnimation.start();
        }
        else if (playerInView && this.isRanged){
            this.activeAnimation.stop();
            this.activeAnimation = this.attackAnimation;
            this.activeAnimation.start();
            if (this.projectile !== undefined) {
                level.projectiles.push(this.projectile.copy(this.x, this.y, Math.sin(angle), Math.cos(angle)));
            }
        }
        else if (playerInView && !this.isRanged && distanceFromPlayer < 2) {
            this.activeAnimation.stop();
            this.activeAnimation = this.attackAnimation;
            this.activeAnimation.start();
            //TODO: DETERMINE DAMAGE TO PLAYER
        }
    }

    rayCastForWallsOrPlayer(level, camera, maxViewRange, angle) {
        
        for(let i = 0; i < maxViewRange; i += 0.5) {
            let x = this.x + Math.sin(angle) * i;
            let y = this.y + Math.cos(angle) * i;
            if (level.isWall(Math.floor(x), Math.floor(y))) 
                return false;
            else if (camera.isInside(x, y)) 
                return true;
        }

        return false;
    }

    copy(x, y) {
        return new Enemy(this.name, this.maxLife, this.speed, this.isRanged, this.isStationary, this.projectile, this.defaultAnimation, this.attackAnimation, this.destroyAnimation, x, y);
    }
}