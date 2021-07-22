class AudioHandler {
    constructor() {
        const volume = 0.6;
        this.aggressormusic = document.getElementById("aggressormusic");
        this.aggressormusic.volume = volume;
        this.lawabidingcitizenmusic = document.getElementById("lawabidingcitizenmusic");
        this.lawabidingcitizenmusic.volume = volume;
        this.neuromancermusic = document.getElementById("neuromancermusic");
        this.neuromancermusic.volume = volume;
        this.rebelsmusic = document.getElementById("rebelsmusic");
        this.rebelsmusic.volume = volume;

        this.musicList = [this.aggressormusic, this.lawabidingcitizenmusic, this.neuromancermusic, this.rebelsmusic];
        this.currentSong = 0;

        this.darkmagic = document.getElementById("darkmagic");
        this.darkmagic.volume = volume;
        this.death = document.getElementById("death");
        this.death.volume = volume;
        this.developers = document.getElementById("developers");
        this.developers.volume = volume;
        this.growl = document.getElementById("growl");
        this.growl.volume = volume;
        this.heal = document.getElementById("heal");
        this.heal.volume = volume;
        this.reload = document.getElementById("reload");
        this.reload.volume = volume;
        this.shot = document.getElementById("shot");
        this.shot.volume = volume;
        this.shotgunfire = document.getElementById("shotgunfire");
        this.shotgunfire.volume = volume;
        this.spirit = document.getElementById("spirit");
        this.spirit.volume = volume;
        this.spell = document.getElementById("spell");
        this.spell.volume = volume;
        this.drill = document.getElementById("drill");
        this.drill.volume = volume;
        this.fire = document.getElementById("fire");
        this.fire.volume = volume;
        this.pain = document.getElementById("pain");
        this.pain.volume = volume;
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