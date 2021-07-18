class Powerup extends Billboard {
    constructor(powerupType, animation, x, y) {
        super(animation, x, y);
        this.powerupType = powerupType;
        this.collected = false;
    }

    update(data, camera, audio) {
        if (!this.collected && camera.isInside(this.x, this.y)) {
            if ((this.powerupType == "health" && camera.playerHealth == 10) ||
                (this.powerupType == "ammo" && !camera.activeWeapon.isRanged)) 
                return;

            switch(this.powerupType) {
                case "ammo":
                    camera.activeWeapon.ammo += camera.activeWeapon.maxMagazineSize;
                    break;
                case "health":
                    camera.playerHealth = camera.playerHealth + 6 > camera.playerMaxHealth ? camera.playerMaxHealth : camera.playerHealth + 6;
                    break;
                default:
                    let weaponDoesNotExist = true;
                    for (let w = 0; w < camera.weapons.length; w++) {
                        if (camera.weapons[w].name == this.powerupType) {
                            weaponDoesNotExist = false;
                            camera.weapons[w].ammo += camera.weapons[w].maxMagazineSize;
                        }
                    }
                    if (weaponDoesNotExist) {
                        let newWeapon = data.weapons[this.powerupType].copy(data.weapons[this.powerupType].maxMagazineSize);
                        newWeapon.reload(audio);
                        camera.weapons.push(newWeapon);
                    }
                break;
            }
            this.activeAnimation.stop();
            this.collected = true;
        }
    }

    copy(x, y) {
        return new Powerup(this.powerupType, this.defaultAnimation.copy(), x, y);
    }
}