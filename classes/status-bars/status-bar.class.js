class StatusBar extends DrawableObject {
  width = 150;
  height = 45;
  coinBarFull = false;

  constructor() {
    super();
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
            this.coinBarFull = true;}
          
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
