class JellyfishElectric extends MovableObject {
  height = 120;
  width = 70;
  speed = 5;
  dead = false;
  offset = {
    x: 15,
    y: 20,
    width: -30,
    height: -30,
  };
  IMAGES_MOVING_GREEN = [
    "img/2.Enemy/2 Jelly fish/Súper dangerous/Green 1.png",
    "img/2.Enemy/2 Jelly fish/Súper dangerous/Green 2.png",
    "img/2.Enemy/2 Jelly fish/Súper dangerous/Green 3.png",
    "img/2.Enemy/2 Jelly fish/Súper dangerous/Green 4.png",
  ];

  IMAGES_DEAD_GREEN = [
    "img/2.Enemy/2 Jelly fish/Dead/green/g1.png",
    "img/2.Enemy/2 Jelly fish/Dead/green/g2.png",
    "img/2.Enemy/2 Jelly fish/Dead/green/g3.png",
    "img/2.Enemy/2 Jelly fish/Dead/green/g4.png",
  ];
  IMAGES_MOVING_PINK = [
    "img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 1.png",
    "img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 2.png",
    "img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 3.png",
    "img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 4.png",
  ];

  IMAGES_DEAD_PINK = [
    "img/2.Enemy/2 Jelly fish/Dead/Pink/P1.png",
    "img/2.Enemy/2 Jelly fish/Dead/Pink/P2.png",
    "img/2.Enemy/2 Jelly fish/Dead/Pink/P3.png",
    "img/2.Enemy/2 Jelly fish/Dead/Pink/P4.png",
  ];

  constructor(x) {
    super().loadImage("img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 1.png");
    this.loadImages(this.IMAGES_MOVING_PINK);
    this.loadImages(this.IMAGES_MOVING_GREEN);
    this.loadImages(this.IMAGES_DEAD_PINK);
    this.loadImages(this.IMAGES_DEAD_GREEN);
    this.x = x;
    this.y = 50 + Math.random() * 300;
    this.animate();
  }

  animate() {
    setInterval(() => {
      if (!this.dead) {
        this.playAnimation(this.IMAGES_MOVING_PINK);
        if (this.y > 100 && !this.swimUpDone) {
          this.moveUp();
        } else if (this.y <= 100 && !this.swimUpDone) {
          this.swimUpDone = true;
        } else if (this.swimUpDone && this.y < 380) {
          this.moveDown();
        } else {
          this.swimUpDone = false;
        }
      } else {
        this.playAnimation(this.IMAGES_DEAD_PINK);
        this.speed = 20;
        this.moveUp();
      }
    }, 200);
  }
}
