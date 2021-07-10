export class Billboard {
    constructor (animation, x, y) {
        this.defaultAnimation = animation;
        this.activeAnimation = animation;
        this.x = x;
        this.y = y;
    }

    isInside(billboard) {
        const billboardWidth = 1;
        return (billboard.x + billboardWidth / 2 < this.x &&
            billboard.x - billboardWidth / 2 > this.x &&
            billboard.y + billboardWidth / 2 < this.y &&
            billboard.y - billboardWidth / 2 > this.y);
    }

    drawSlice(ctx, x, y, width, height, sliceX) {
        this.activeAnimation.drawSlice(ctx, x, y, width, height, sliceX);
    }
}