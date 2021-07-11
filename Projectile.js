class Projectile extends Billboard {
    constructor(animation, x, y, directionX, directionY, speed, maxDistance) {
        super(animation, x, y);
        this.startX = x;
        this.startY = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.speed = speed;
        this.maxDistance = maxDistance;
        this.hitWall = false;
        this.playerOwned = false;
    }

    update(level) {
        if (!this.activeAnimation.isAnimating())
            this.activeAnimation.start();
            
        this.x += this.directionX * this.speed;
        this.y += this.directionY * this.speed;

        if (level.isWall(Math.round(this.x), Math.round(this.y)))
            this.hitWall = true;
    }

    reachedMaxDistanceOrHitWall() {
        return (this.maxDistance < Math.sqrt(Math.pow(this.x - this.startX, 2) + Math.pow(this.y - this.startY, 2))) || this.hitWall;
    }

    copy(x, y, directionX, directionY, playerOwned) {
        let projectile = new Projectile(this.defaultAnimation, x, y, directionX, directionY, this.speed, this.maxDistance);
        if (playerOwned !== undefined) {
            projectile.playerOwned = playerOwned;
        }
        return projectile;
    }
    
}