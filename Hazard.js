class Hazard extends Billboard{
    constructor(animation, x, y, damage, radius) {
        super(animation,x,y);
        this.damage = damage;
        this.radius = radius;
        this.ready = true;
    }

    update(camera) {
        if (this.x + this.radius > camera.x &&
            this.x - this.radius < camera.x &&
            this.y + this.radius > camera.y &&
            this.y - this.radius < camera.y) {
                if (this.ready) {
                    camera.playerHealth -= this.damage;
                    this.ready = false;
                    this.setTimeout((hazard) => {hazard.ready = true;}, 1000, this);
                }
        }
    }

    copy(x, y)
    {
        return new Hazard(this.animation.copy(), x, y, this.damage, this.radius);
    }
}