class Pufffish extends MovableObject {
  height = 120;
  width = 70;
  speed = 5;

  offset = {
    x: 15,
    y: 30,
    width: -30,
    height: -70,
  };

  IMAGES_MOVING_GREEN = [
    "img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png",
    "img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim2.png",
    "img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim3.png",
    "img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim4.png",
    "img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim5.png",
  ];

  IMAGES_ANGRY_GREEN = [
    "img/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition1.png",
    "img/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition2.png",
    "img/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition3.png",
    "img/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition4.png",
    "img/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition5.png",
    "img/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition4.png",
    "img/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition3.png",
    "img/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition2.png",
  ];

  IMAGES_ANGRY_MOVING_GREEN = [
    "img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/1.bubbleswim1.png",
    "img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/1.bubbleswim2.png",
    "img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/1.bubbleswim3.png",
    "img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/1.bubbleswim4.png",
    "img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/1.bubbleswim5.png",
  ];

  IMAGES_CALM_GREEN = [
    "img/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition4.png",
    "img/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition3.png",
    "img/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition2.png",
  ];

  IMAGES_DEAD_GREEN = [
    "img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/1.Dead 1 (can animate by going up).png",
  ];

  constructor(x, y) {
    super().loadImage("img/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png");
    this.loadImages(this.IMAGES_MOVING_GREEN);
    this.loadImages(this.IMAGES_ANGRY_GREEN);
    this.loadImages(this.IMAGES_ANGRY_MOVING_GREEN);
    this.loadImages(this.IMAGES_CALM_GREEN);
    this.loadImages(this.IMAGES_DEAD_GREEN);

    this.x = x;
    this.y = y;
    this.animate();
  }

  animate() {
    setInterval(() => {
      this.moveHeight();
    }, 200);
    setInterval(() => {
      if (!this.dead) {
        this.isSwimming();
      } else {
        this.playDieAnimation();
      }
    }, 1000 / 25);
  }

  isSwimming() {
    if (this.x <= -300 && this.swimRightDone) {
      this.swimRightDone = false;
    } else if (this.x <= 1900 && this.swimRightDone) {
      this.moveLeft();
      this.otherDirection = false;
    } else if (!this.swimRightDone && this.x < 1900) {
      this.moveRight();
      this.otherDirection = true;
    } else {
      this.swimRightDone = true;
    }
    this.playAnimation(this.IMAGES_ANGRY_MOVING_GREEN);
  }

  moveHeight() {
    if (!this.dead) {
      if (this.y > 150 && !this.swimUpDone) {
        this.moveUp();
      } else if (this.y <= 160 && !this.swimUpDone) {
        this.swimUpDone = true;
      } else if (this.swimUpDone && this.y < 240) {
        this.moveDown();
      } else {
        this.swimUpDone = false;
      }
    }
  }

  playDieAnimation() {
    this.playAnimation(this.IMAGES_DEAD_GREEN);
    this.speed = 40;
    this.moveUp();
    this.moveRight();
  }
}
