class Collectables extends MovableObject {
  width = 30;
  height = 30;

  offset = {
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  };

  constructor() {
    super();
  }

  animate(img) {
    setInterval(() => {
      this.playAnimation(img);
    }, 200);
  }

  collect(coin) {
    let i = 0;
    world.level.coins.forEach((element) => {
      if (element == coin) {
        world.level.coins.splice(i, 1);
        world.character.coinsCollected++;
        i++;
      } else {
        i++;
      }
    });
  }

  heal() {
    world.character.energy += 40;
    if (world.character.energy > 100) {
      world.character.energy = 100;
    }
    world.level.hearts.splice(0, 1);
  }
}
