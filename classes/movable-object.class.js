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
      this.x + this.offset.x + (this.width + this.offset.width) >= obj.x + obj.offset.x &&
      this.x + this.offset.x <= obj.x + obj.offset.x + (obj.width + obj.offset.width) &&
      this.y + this.offset.y + (this.height + this.offset.height) >= obj.y + obj.offset.y &&
      this.y + this.offset.y <= obj.y + obj.offset.y + (obj.height + obj.offset.height)
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

 

  isDead() {
    return this.energy == 0;
  }

  isHurt() {
    let timepassed = new Date().getTime() - this.lastHit;
    timepassed = timepassed / 1000; // from ms to s
    return timepassed < 1;
  }
}
