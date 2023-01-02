class Collectables extends MovableObject {
  width = 60;
  height = 45;

  offset = {
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  };

  coin_sound = new Audio('audio/coin.mp3');
  poisen_sound = new Audio('audio/poisen.mp3');

  constructor() {
    super();
  }

  animate(img) {
    setInterval(() => {
      this.playAnimation(img);
    }, 200);
  }

  collect(item) {
    let i = 0;
    world.level.collectables.forEach((element) => {
      if (element instanceof Coin && element == item) {
        this.remove(i);
        this.increaseOwnCoins();
        this.coin_sound.play();
        if (this.collectedAllCoins()) {
          this.changeHealthbarColor();
        }
        i++;
      } else if (element instanceof Hearts && element == item) {
        this.heal();
        this.remove(i);
        i++;
      } else if (element instanceof Poisen && element == item) {
        this.remove(i);
        this.increaseOwnPoisen();
        this.poisen_sound.play();
        i++;
      } else {
        i++;
      }
    });
  }

  remove(i) {
    world.level.collectables.splice(i, 1);
  }

  heal() {
    world.character.energy += 80;
    if (world.character.energy > 100) {
      world.character.energy = 100;
    }
    world.healthBar.setPercentage(world.character.energy, "heart");
  }

  increaseOwnCoins() {
    world.character.coinsCollected++;
    world.coinBar.setPercentage(world.character.coinsCollected, "coin");
  }

  increaseOwnPoisen() {
    world.character.poisenCollected++;
    world.poisenBar.setPercentage(world.character.poisenCollected, "poisen");
  }

  collectedAllCoins() {
    return world.character.coinsCollected == 20;
  }

  changeHealthbarColor() {
    world.healthBar.IMAGES = [
      "img/4. Marcadores/Purple/0_ .png",
      "img/4. Marcadores/Purple/20 heart.png",
      "img/4. Marcadores/Purple/40_ .png",
      "img/4. Marcadores/Purple/60_ .png",
      "img/4. Marcadores/Purple/80_ .png",
      "img/4. Marcadores/Purple/100_ .png",
    ];
  }
}
