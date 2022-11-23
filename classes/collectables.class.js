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
    console.log("item", item);
    let i = 0;
    world.level.collectables.forEach((element) => {
        
        console.log(item, element);
      if (element instanceof Coin && element == item ) {
        world.level.collectables.splice(i, 1);
        world.character.coinsCollected++;
        i++;
       }
        else
        if (element instanceof Hearts && element == item ){
            this.heal();
            world.level.collectables.splice(i, 1);
            i++;
        }
        else
        if (element instanceof Poisen && element == item ){
          
            world.level.collectables.splice(i, 1);
            i++;
        }else{
            i++;
        }
    });
  }

  heal() {
    world.character.energy += 40;
    if (world.character.energy > 100) {
      world.character.energy = 100;
    }
  
  }
}
