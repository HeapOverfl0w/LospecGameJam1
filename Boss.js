class Boss extends Billboard {
    constructor(projectile, walkAnimation, attackAnimation, teleportAnimation, destroyAnimation, x, y) {
        super(walkAnimation, x, y);
        this.maxLife = 50;
        this.life = maxLife;
        
        this.projectile = projectile;
        this.attackAnimation = attackAnimation;
        this.teleportAnimation = teleportAnimation;
        this.isStationary = isStationary;
        this.speed = speed;
        this.destroyAnimation = destroyAnimation;

        this.maxViewRange = 20;
        this.maxAttackRange = 20;
    }


}