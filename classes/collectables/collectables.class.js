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

  collect(item) {
    let i = 0;
    world.level.collectables.forEach((element) => {
        
      if (element instanceof Coin && element == item ) {
        this.remove(i)
        world.character.coinsCollected++;
        world.coinBar.setPercentage(world.character.coinsCollected, 'coin');
        i++;
       }
        else
        if (element instanceof Hearts && element == item ){
            this.heal();
            this.remove(i)
            i++;
        }
        else
        if (element instanceof Poisen && element == item ){
            this.remove(i)
            world.character.poisenCollected++;
            world.poisenBar.setPercentage(world.character.poisenCollected, 'poisen');
            i++;
        }else{
            i++;
        }
    });
  }

  remove(i){
    world.level.collectables.splice(i, 1);
  }

  heal() {
    world.character.energy += 40;
    if (world.character.energy > 100) {
      world.character.energy = 100;
    }
    world.healthBar.setPercentage(world.character.energy)
  }
}
