/* Basic Animation class - only uses a single image for the whole animation where the 
animation starts at 0,0. */

export class Animation {
    constructor(image, frameWidth, frameHeight, frameCount, frameTimeMs, repeats) {
        this.image = image;
        this.frameWidth = frameWidth;
        this.frameHeight = frameHeight;
        this.frameCount = frameCount;
        this.currentFrame = 0;
        this.animating = false;
        this.frameTimeMs = frameTimeMs;
        this.repeats = repeats;
    }

    start() {
        this.animating = true;
        this.timer = setInterval((animation) => {
            animation.currentFrame++;
            if (animation.frameCount == animation.currentFrame && !this.repeats)
            {
                animation.stop();
            }
        }, 
            this.frameTimeMs,
            this);
    }

    stop() {
        clearInterval(this.timer);
        this.animating = false;
        this.currentFrame = 0;
    }

    isAnimating() {
        return this.animating;
    }

    draw(ctx, x, y, width, height) {
        ctx.drawImage(this.image, 
            this.frameWidth * this.currentFrame, 0, 
            this.frameWidth, this.frameHeight, x, y, width, height);
    }

    drawSlice(ctx, x, y, width, height, sliceX) {
        ctx.drawImage(this.image, 
            this.frameWidth * this.currentFrame + sliceX, 0, 
            1, this.frameHeight, x, y, width, height);
    }
}