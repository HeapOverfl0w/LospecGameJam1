class AudioHandler {
    constructor() {
        this.aggressormusic = document.getElementById("aggressormusic");
        this.lawabidingcitizenmusic = document.getElementById("lawabidingcitizenmusic");
        this.neuromancermusic = document.getElementById("neuromancermusic");
        this.rebelsmusic = document.getElementById("rebelsmusic");

        this.musicList = [this.aggressormusic, this.lawabidingcitizenmusic, this.neuromancermusic, this.rebelsmusic];
        this.currentSong = 0;

        this.darkmagic = document.getElementById("darkmagic");
        this.death = document.getElementById("death");
        this.developers = document.getElementById("developers");
        this.growl = document.getElementById("growl");
        this.heal = document.getElementById("heal");
        this.reload = document.getElementById("reload");
        this.shot = document.getElementById("shot");
        this.shotgunfire = document.getElementById("shotgunfire");
        this.spirit = document.getElementById("spirit");
        this.spell = document.getElementById("spell");
        this.drill = document.getElementById("drill");
    }

    playAndLoopMusic(){
        this.currentSong++;
        if (this.currentSong > this.musicList.length)
            this.currentSong = 0;
        
        this.musicList[this.currentSong].onended = this.playAndLoopMusic;

        this.musicList[this.currentSong].play();
    }

    playWeaponAttack(weaponName) {
        switch (weaponName) {
            case "shotgun":
                this.playShotgunFire();
                break;
            case "introtoc":
            case "fireaxe":
                this.playSpell();
                break;
            case "screwdriver":
                this.playDrill();
                break;
            default:
                this.playShot();
        }
    }

    playDarkMagic() {
        this.darkmagic.currentTime = 0;
        this.darkmagic.play();
    }

    playDeath() {
        this.death.currentTime = 0;
        this.death.play();
    }

    playDevelopers() {
        this.developers.currentTime = 0;
        this.developers.play();
    }

    playGrowl() {
        this.growl.currentTime = 0;
        this.growl.play();
    }

    playHeal() {
        this.heal.currentTime = 0;
        this.heal.play();
    }

    playReload() {
        this.reload.currentTime = 0;
        this.reload.play();
    }

    playShot() {
        this.shot.currentTime = 0;
        this.shot.play();
    }

    playShotgunFire() {
        this.shotgunfire.currentTime = 0;
        this.shotgunfire.play();
    }

    playSpirit() {
        this.spirit.currentTime = 0;
        this.spirit.play();
    }

    playSpell() {
        this.spell.currentTime = 0;
        this.spell.play();
    }

    playDrill() {
        this.drill.currentTime = 0;
        this.drill.play();
    }

    playAudio(src) {
        let audioCopy = new Audio();
        audioCopy.src = src;
        audioCopy.play();
    }

    

    
}