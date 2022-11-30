class MovableObject extends DrawableObject {
  speed = 0.15;
  otherDirection = false;
  energy = 100;
  lastHit = 0;
  doneWithAnimation = false;
  startWithAnimation = false;
  playOnes = true;
  swimUpDone = false;
  swimRightDone = false;
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

  playAnimation(images, ones) {
    if (ones && !this.doneWithAnimation) {
      if (!this.startWithAnimation) {
        this.currentImage = 0;
      }

      this.startWithAnimation = true;
      let i = this.currentImage % images.length;
      let path = images[i];
      this.img = this.imageCache[path];
      this.currentImage++;

      if (this.currentImage == images.length) {
        this.doneWithAnimation = true;
        this.startWithAnimation = false;
      }
    } else if (!ones) {
      let i = this.currentImage % images.length;
      let path = images[i];
      this.img = this.imageCache[path];
      this.currentImage++;
      this.doneWithAnimation = false;
    }
  }

  hit(enemy) {
    if (!this.isHurt() && this.slapping && enemy instanceof Endboss) {
      if (this.energy > 0 && !this.hitEndboss) {
        this.hitEndboss = true;
        enemy.energy -= 15;
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
    if (this.isJellyfishElectric(enemy, dead)) {
      this.getElectricDmg(dead);
    }
    if (this.isEndboss(enemy) && this.coinsCollected < 20) {
      this.energy -= 40;
    }
    if (this.isNoneElectricEnemy(enemy)) {
      this.getPoisenDmg(dead);
    }
  }

  isHurt() {
    let timepassed = new Date().getTime() - this.lastHit;
    timepassed = timepassed / 1000;
    return timepassed < 0.5;
  }

  isCloseToCharacter() {
    return world.character.x - this.x < 220 && world.character.x - this.x > -300
  }

  isJellyfishElectric(enemy) {
    return !enemy.dead && enemy instanceof JellyfishElectric;
  }

  getElectricDmg(dead) {
    this.electric = true;
    this.setLastMove();
    this.energy -= 20;
    if (!dead) {
      setTimeout(() => {
        this.electric = false;
      }, 800);
    }
  }

  isEndboss(enemy) {
    return (
      !enemy.dead && enemy instanceof Endboss && !world.character.hitEndboss
    );
  }

  isNoneElectricEnemy(enemy) {
    return (
      (!enemy.dead && enemy instanceof Jellyfish) ||
      enemy instanceof Endboss ||
      enemy instanceof Pufffish
    );
  }

  getPoisenDmg(dead) {
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
