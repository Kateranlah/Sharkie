class MovableObject extends DrawableObject {
  speed = 0.15;
  otherDirection = false;
  energy = 100;
  lastHit = 0;
  doneWithAnimation = false;
  startWithAnimation = false;
  playOnes = true;
  


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

  // playAnimation(images) {

     
  //     this.doneWithAnimation = false
  //     let i = this.currentImage % images.length;
  //     let path = images[i];
  //     this.img = this.imageCache[path];
  //     this.currentImage++;
  //     this.doneWithAnimation = true   
    
 
  // }

  playAnimation(images, ones) {
    if (ones && !this.doneWithAnimation) {

        if (!this.startWithAnimation) { // Setting currentImage just once
            this.currentImage = 0; // If it's an one time animation, it should start with the  first img
        }

        this.startWithAnimation = true;
        let i = this.currentImage % images.length; // (0 % 3 = 0), (1 % 3 = 1), (2 % 3 = 2), (3 % 3 = 0), (4 % 3 = 1), (5 % 3 = 2), (6 % 3 = 0), (7 % 3 = 1), (8 % = 2)
        let path = images[i]; // Temporary store the path of each img
        this.img = this.imageCache[path]; // Change img from class
        this.currentImage++;

        if (this.currentImage == images.length) { // Stop animation if all images are animated once
            this.doneWithAnimation = true;
            this.startWithAnimation = false;
        }
    } else if (!ones) {
        let i = this.currentImage % images.length; // (0 % 3 = 0), (1 % 3 = 1), (2 % 3 = 2), (3 % 3 = 0), (4 % 3 = 1), (5 % 3 = 2), (6 % 3 = 0), (7 % 3 = 1), (8 % = 2)
        let path = images[i]; // Temporary store the path of each img
        this.img = this.imageCache[path]; // Change img from class
        this.currentImage++;
        this.doneWithAnimation = false;
    }
}


  hit() {
    if(!this.isHurt()){
    this.energy -= 5;
    if (this.energy < 0) {
      this.energy = 0;
    } else {
      this.lastHit = new Date().getTime();
    }
    }
    
  }

 

  isDead() {
    return this.energy == 0;
  }

  isHurt() {
    let timepassed = new Date().getTime() - this.lastHit;
    timepassed = timepassed / 1000; // from ms to s
    return timepassed < 0.5;
  }


}
