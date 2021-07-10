import { Billboard } from "./Billboard";

export class Projectile extends Billboard {
    constructor(animation, x, y, directionX, directionY, speed, maxDistance) {
        super(animation, x, y);
        this.startX = x;
        this.startY = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.speed = speed;
        this.maxDistance = maxDistance;
    }

    update() {
        this.x += this.directionX * speed;
        this.y += this.directionY * speed;
    }

    reachedMaxDistance() {
        return this.maxDistance < Math.sqrt(Math.pow(this.x - this.startX, 2) + Math.pow(this.y - this.startY, 2));
    }

    copy(x, y, directionX, directionY) {
        return new Projectile(this.animation, x, y, directionX, directionY, this.speed, this.maxDistance);
    }
    
}