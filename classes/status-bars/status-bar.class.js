class StatusBar extends DrawableObject {
  width = 150;
  height = 45;

  constructor() {
    super();
    this.setHealthbar();
  }

  setHealthbar() {
    if (this instanceof HealthBar) {
      setTimeout(() => {
        this.healthBar = this;
      }, 200);
    }
  }

  resolveImageIndex(type) {
    if (type == "coin") {
      this.percentage *= 5;
    }
    if (type == "poisen") {
      this.percentage *= 25;
    }
    if (this.percentage == 100) {
      if (type == "coin") {
        setTimeout(() => {
          world.healthBar.setPercentage(world.character.energy);
        }, 500);
      }
      return 5;
    } else if (this.percentage > 80) {
      return 4;
    } else if (this.percentage > 60) {
      return 3;
    } else if (this.percentage > 40) {
      return 2;
    } else if (this.percentage > 20) {
      return 1;
    } else {
      return 0;
    }
  }

  setPercentage(percentage, type) {
    this.percentage = percentage;
    let path = this.IMAGES[this.resolveImageIndex(type)];
    this.img = this.imageCache[path];
  }
}
