class AudioHandler {
    constructor() {
        this.aggressormusic = document.getElementById("aggressormusic");
        this.aggressormusic.volume = 0.8;
        this.lawabidingcitizenmusic = document.getElementById("lawabidingcitizenmusic");
        this.lawabidingcitizenmusic.volume = 0.8;
        this.neuromancermusic = document.getElementById("neuromancermusic");
        this.neuromancermusic.volume = 0.8;
        this.rebelsmusic = document.getElementById("rebelsmusic");
        this.rebelsmusic.volume = 0.8;

        this.musicList = [this.aggressormusic, this.lawabidingcitizenmusic, this.neuromancermusic, this.rebelsmusic];
        this.currentSong = 0;

        this.darkmagic = document.getElementById("darkmagic");
        this.darkmagic.volume = 0.8;
        this.death = document.getElementById("death");
        this.death.volume = 0.8;
        this.developers = document.getElementById("developers");
        this.developers.volume = 0.8;
        this.growl = document.getElementById("growl");
        this.growl.volume = 0.8;
        this.heal = document.getElementById("heal");
        this.heal.volume = 0.8;
        this.reload = document.getElementById("reload");
        this.reload.volume = 0.8;
        this.shot = document.getElementById("shot");
        this.shot.volume = 0.8;
        this.shotgunfire = document.getElementById("shotgunfire");
        this.shotgunfire.volume = 0.8;
        this.spirit = document.getElementById("spirit");
        this.spirit.volume = 0.8;
        this.spell = document.getElementById("spell");
        this.spell.volume = 0.8;
        this.drill = document.getElementById("drill");
        this.drill.volume = 0.8;
        this.fire = document.getElementById("fire");
        this.fire.volume = 0.8;
        this.pain = document.getElementById("pain");
        this.pain.volume = 0.8;
    }

    toggleMute() {
        document.querySelectorAll("audio").forEach( (elem) => 
        {
            elem.muted = !elem.muted; 
        });
    }

    update() {
        if (this.musicList[this.currentSong].ended) {
            this.playAndLoopMusic();
        }
    }

    playAndLoopMusic(){
        this.currentSong++;
        if (this.currentSong >= this.musicList.length)
            this.currentSong = 0;

        this.musicList[this.currentSong].currentTime = 0;
        this.musicList[this.currentSong].play();
    }

    playWeaponAttack(weaponName) {
        switch (weaponName) {
            case "shotgun":
                this.playShotgunFire();
                break;
            case "introtoc":
            case "fireaxe":
            case "os2floppy":
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

    playFire() {
        this.fire.currentTime = 0;
        this.fire.play();
    }

    playAudio(src) {
        let audioCopy = new Audio();
        audioCopy.src = src;
        audioCopy.play();
    }

    playPain() {
        this.pain.currentTime = 0;
        this.pain.play();
    }
    

    
}