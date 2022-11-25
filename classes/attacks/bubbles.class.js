class Bubbles extends MovableObject {
  speedY = 0.1;
  acceleration = 0.1;
  driftedX = 0;
  fullCicle = false;
  width = 30;
  height = 30;

  constructor() {
    super();
  
  }

  makeBubble(x, y) {
    this.x = x;
    this.y = y;
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
        // if first made blow it far
      if (this.driftedX < 5 && !this.fullCicle) {
        this.x += 3;
        this.driftedX += 1;
        this.checkCicle();
      } else if (this.fullCicle) {
        this.x -= 2;
        this.driftedX -= 1;
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
}
