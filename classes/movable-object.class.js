class MovableObject extends DrawableObject {
  speed = 0.15;
  otherDirection = false;
  energy = 100;
  lastHit = 0;

  constructor() {
    super();
  }

  isColliding(obj) {
    return (
      this.x + 60 + (this.width - 100) >= obj.x + 60 &&
      this.x + 60 <= obj.x + 60 + (obj.width - 100) &&
      this.y + 100 + (this.height - 150) >= obj.y + 100 &&
      this.y + 100 <= obj.y + 100 + (obj.height - 150)
    );
  }

  moveUp() {
    this.y -= this.speed;
  }
  moveDown() {
    this.y += this.speed;
  }
  moveLeft() {
    this.otherDirection = true;
    this.x -= this.speed;
    this.world.camera_x = -this.x + 200;
  }
  moveRight() {
    this.otherDirection = false;
    this.x += this.speed;
    this.world.camera_x = -this.x + 200;
  }

  playAnimation(images) {
    let i = this.currentImage % images.length;
    let path = images[i];
    this.img = this.imageCache[path];
    this.currentImage++;
  }

  hit() {
    this.energy -= 5;
    if (this.energy < 0) {
      this.energy = 0;
    } else {
      this.lastHit = new Date().getTime();
    }
  }

  collect(){
    
  }

  isDead() {
    return this.energy == 0;
  }

  isHurt() {
    let timepassed = new Date().getTime() - this.lastHit;
    timepassed = timepassed / 1000; // from ms to s
    return timepassed < 1;
  }
}
