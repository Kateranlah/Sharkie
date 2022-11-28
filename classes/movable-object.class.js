class MovableObject extends DrawableObject {
  speed = 0.15;
  otherDirection = false;
  energy = 100;
  lastHit = 0;
  doneWithAnimation = false;
  startWithAnimation = false;
  playOnes = true;
  swimUpDone = false;
  hitEndboss = false;


  constructor() {
    super();
  }

  isColliding(obj) {
    return (
      this.x + this.offset.x + (this.width + this.offset.width) >=
        obj.x + obj.offset.x &&
      this.x + this.offset.x <=
        obj.x + obj.offset.x + (obj.width + obj.offset.width) &&
      this.y + this.offset.y + (this.height + this.offset.height) >=
        obj.y + obj.offset.y &&
      this.y + this.offset.y <=
        obj.y + obj.offset.y + (obj.height + obj.offset.height)
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
    
  }
  moveRight() {
    this.otherDirection = false;
    this.x += this.speed;
    
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
      if (!this.startWithAnimation) {
        // Setting currentImage just once
        this.currentImage = 0; // If it's an one time animation, it should start with the  first img
      }

      this.startWithAnimation = true;
      let i = this.currentImage % images.length; // (0 % 3 = 0), (1 % 3 = 1), (2 % 3 = 2), (3 % 3 = 0), (4 % 3 = 1), (5 % 3 = 2), (6 % 3 = 0), (7 % 3 = 1), (8 % = 2)
      let path = images[i]; // Temporary store the path of each img
      this.img = this.imageCache[path]; // Change img from class
      this.currentImage++;

      if (this.currentImage == images.length) {
        // Stop animation if all images are animated once
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

  hit(enemy) {
    if(!this.isHurt() && this.slapping && enemy instanceof Endboss){
      
      if (this.energy > 0 && !this.hitEndboss) {
        this.hitEndboss = true
        enemy.energy -=15;
       }

       
      
    }



    if (!this.isHurt() && !this.slapping) {
      this.checkWhatHit(enemy);

      
      if (this.energy <= 0) {
        this.checkWhatHit(enemy, true);
        this.energy = 0;
       
      } else {
        this.lastHit = new Date().getTime();
      }
    }
  }

  isDead() {
    return this.energy == 0;
  }

  checkWhatHit(enemy, dead) {
    if (!enemy.dead && enemy instanceof JellyfishElectric) {
      this.electric = true;
      this.setLastMove();
      this.energy -= 10;
      if (!dead) {
        setTimeout(() => {
          this.electric = false;
        }, 500);
      }
    }

   


if (!enemy.dead &&enemy instanceof Endboss && !world.character.hitEndboss && this.coinsCollected < 20) {

    this.energy -= 40;

  }
 
    
  


    if (!enemy.dead && enemy instanceof Jellyfish  || enemy instanceof Endboss) {

      
      this.poisen = true;
      this.setLastMove();
      this.energy -= 5;
      if (!dead) {
        setTimeout(() => {
          this.poisen = false;
        }, 500);
      }
    }
  }


  isHurt() {
    let timepassed = new Date().getTime() - this.lastHit;
    timepassed = timepassed / 1000; // from ms to s
    return timepassed < 0.5;
  }
}
