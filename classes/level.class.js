class Level{
    enemies;
    coins;
    poisen;
    lights;
    backgroundObjects;
    level_end_x = 3700

    constructor(enemies, coin, poisen, lights, backgroundObjects){
this.enemies = enemies;
this.coins = coin;
this.poisen = poisen;
this.lights = lights;
this.backgroundObjects = backgroundObjects;
    }
}