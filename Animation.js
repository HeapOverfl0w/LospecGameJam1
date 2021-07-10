/* Basic Animation class - only uses a single image for the whole animation where the 
animation starts at 0,0. */

class Animation {
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
        if (this.frameCount == 1)
            return;
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

    getFrameBuffer() {
        if (this.frameCount == 1)
            return this.image;

        const startIndex = 4 * (this.currentFrame * this.frameWidth * this.frameHeight);
        const endIndex = 4 * (this.currentFrame * this.frameWidth * this.frameHeight + this.frameWidth * this.frameHeight);
        const returnData = { width: this.frameWidth, height: this.frameHeight };
        returnData.data = this.image.data.slice(startIndex, endIndex);
    }
}