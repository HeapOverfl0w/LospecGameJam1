class Powerup extends Billboard {
    constructor(powerupType, animation, x, y) {
        super(animation, x, y);
        this.powerupType = powerupType;
        this.collected = false;
    }

    update(data, camera) {
        if (!this.collected && camera.isInside(this.x, this.y)) {
            if ((this.powerupType == "health" && camera.playerHealth == 10) ||
                (this.powerupType == "ammo" && !camera.activeWeapon.isRanged)) 
                return;

            switch(this.powerupType) {
                case "ammo":
                    camera.activeWeapon.ammo += 10;
                    break;
                case "health":
                    camera.playerHealth = camera.playerHealth + 3 > 10 ? 10 : camera.playerHealth + 3;
                    break;
                default:
                    let weaponDoesNotExist = true;
                    for (let w = 0; w < camera.weapons.length; w++) {
                        if (camera.weapons[w].name == data.powerups[this.powerupType].name) {
                            weaponDoesNotExist = false;
                            camera.weapons[w].ammo += 10;
                        }
                    }
                    if (weaponDoesNotExist) {
                        let newWeapon = data.weapons[this.powerupType].copy(10);
                        newWeapon.reload();
                        camera.weapons.push(newWeapon);
                    }
                break;
            }
            this.activeAnimation.stop();
            this.collected = true;
        }
    }

    copy(x, y) {
        return new Powerup(this.powerupType, this.defaultAnimation, x, y);
    }
}