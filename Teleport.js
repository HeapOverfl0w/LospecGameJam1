class Teleport extends Billboard {
    constructor(animation, x, y, toLevel, toLevelX, toLevelY) {
        super(animation, x, y);
        this.toLevel = toLevel;
        this.toLevelX = toLevelX;
        this.toLevelY = toLevelY;
    }

    isPlayerInside(camera) {
        return camera.isInside(this.x, this.y);
    }

    copy(x,y) {
        return new Teleport(this.defaultAnimation, x, y, this.toLevel, this.toLevelX, this.toLevelY);
    }
}