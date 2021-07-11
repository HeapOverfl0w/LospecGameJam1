class Powerup extends Billboard {
    constructor(powerupType, animation, x, y) {
        super(animation, x, y);
        this.powerupType = powerupType;
        this.collected = false;
    }

    update(data, camera) {
        if (camera.isInside(this.x, this.y)) {
            if (this.powerupType == "health" && camera.playerHealth == 10) 
                return;

            switch(this.powerupType) {
                case "ammo":
                    camera.activeWeapon.ammo += 10;
                case "health":
                    camera.playerHealth = camera.playerHealth + 3 > 10 ? 10 : camera.playerHealth + 3;
                default:
                    camera.weapons.push(data.weapons[this.powerupType].copy(10));
            }
            this.collected = true;
        }
    }

    copy(x, y) {
        return new Powerup(this.powerupType, this.defaultAnimation, x, y);
    }
}