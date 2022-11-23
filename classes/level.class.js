class Level{
    enemies;
    coins;
    poisen;
    hearts;
    lights;
    backgroundObjects;

    level_end_x = 3700

    constructor(enemies, coins, poisen, hearts, lights, backgroundObjects){
this.enemies = enemies;
this.coins = coins;
this.poisen = poisen;
this.lights = lights;
this.hearts = hearts;
this.backgroundObjects = backgroundObjects;
    }
}