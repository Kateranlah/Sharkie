class Level{
    enemies;
    collectables;
    lights;
    backgroundObjects;
    barriers;

    level_end_x = 3700

    constructor(enemies, collectables, lights, backgroundObjects, barrier){
this.enemies = enemies;
this.lights = lights;
this.collectables = collectables;
this.backgroundObjects = backgroundObjects;
this.barriers = barrier;
    }
}