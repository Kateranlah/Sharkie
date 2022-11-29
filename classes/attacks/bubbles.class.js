class Bubbles extends MovableObject {
  speedY = 0.1;
  acceleration = 0.1;
  driftedX = 0;
  fullCicle = false;
  firstApperance = true;
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

  makeBubble() {
    if (!world.character.otherDirection) {
      this.makesBubleOnRightSide();
    } else {
      this.makesBubleOnLeftSide();
    }
    this.y = world.character.y + 100;
    this.speedY;
    this.driftUp();
    this.driftX();
  }

  checkCicle() {
    if (this.driftedX == 0) {
      this.fullCicle = false;
    }
    if (this.driftedX == 5) {
      this.fullCicle = true;
    }
  }

  driftX() {
    setInterval(() => {
      if (this.firstApperance) {
        if (!world.character.otherDirection) {
          this.shootRightDirection();
        } else {
          this.shootLeftDirection();
        }

        setTimeout(() => {
          this.firstApperance = false;
        }, 500);
      }
      if (this.driftedRightDone()) {
        this.driftRight();
        this.checkCicle();
      } else if (this.fullCicle) {
        this.driftLeft();
        this.checkCicle();
      }
    }, 1000 / 25);
  }
  driftUp() {
    setInterval(() => {
      if (this.isUnderWater() || this.speedY > 0) {
        this.y -= this.speedY;
        this.speedY += this.acceleration;
      }
    }, 1000 / 25);
  }

  isUnderWater() {
    return this.y < 0;
  }

  makesBubleOnRightSide() {
    return (this.x = world.character.x + 160);
  }
  makesBubleOnLeftSide() {
    return (this.x = world.character.x);
  }

  shootRightDirection() {
    this.x += 10;
  }

  shootLeftDirection() {
    this.x -= 10;
  }

  driftedRightDone() {
    return this.driftedX < 5 && !this.fullCicle;
  }

  driftRight() {
    this.x += 3;
    this.driftedX += 1;
  }
  driftLeft() {
    this.x -= 2;
    this.driftedX -= 1;
  }
}
