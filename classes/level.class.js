class Level{
    enemies;
    collectables;
    lights;
    backgroundObjects;

    level_end_x = 3700

    constructor(enemies, collectables, lights, backgroundObjects){
this.enemies = enemies;
this.lights = lights;
this.collectables = collectables;
this.backgroundObjects = backgroundObjects;
    }
}