class Character extends MovableObject {
  height = 200;
  width = 200;
  world;
  speed = 10;
  coinsCollected = 0;
  poisenCollected = 0;
  alive = 0;
  idled = 0;
  lastMove = new Date().getTime();
  sleep = false;
  barrierBlockRight = false;
  barrierBlockLeft = false;
  barrierBlockUp = false;
  barrierBlockDown = false;
  slapping = false;
  madeRecentBubble = false;
  electric = false;
  poisen = false;
  offset = {
    x: 60,
    y: 100,
    width: -100,
    height: -150,
  };

  IMAGES_LONG_IDLE = [
    "img/1.Sharkie/2.Long_IDLE/i1.png",
    "img/1.Sharkie/2.Long_IDLE/i2.png",
    "img/1.Sharkie/2.Long_IDLE/i3.png",
    "img/1.Sharkie/2.Long_IDLE/i4.png",
    "img/1.Sharkie/2.Long_IDLE/i5.png",
    "img/1.Sharkie/2.Long_IDLE/i6.png",
    "img/1.Sharkie/2.Long_IDLE/i7.png",
    "img/1.Sharkie/2.Long_IDLE/i8.png",
    "img/1.Sharkie/2.Long_IDLE/i9.png",
    "img/1.Sharkie/2.Long_IDLE/i10.png",
    "img/1.Sharkie/2.Long_IDLE/i11.png",
    "img/1.Sharkie/2.Long_IDLE/i12.png",
    "img/1.Sharkie/2.Long_IDLE/i13.png",
    "img/1.Sharkie/2.Long_IDLE/i14.png",
  ];

  IMAGES_BUBBLE = [
    "img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/1.png",
    "img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/2.png",
    "img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/3.png",
    "img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/4.png",
    "img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/5.png",
    "img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/6.png",
    "img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/7.png",
    "img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/8.png",
  ];

  IMAGES_BUBBLE_POISEN = [
    "img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/1.png",
    "img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/2.png",
    "img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/3.png",
    "img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/4.png",
    "img/1.Sharkie/4.Attack/Bubble trap/For Whale/5.png",
    "img/1.Sharkie/4.Attack/Bubble trap/For Whale/6.png",
    "img/1.Sharkie/4.Attack/Bubble trap/For Whale/7.png",
    "img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/8.png",
  ];

  IMAGES_BUBBLE_MISSING = [
    "img/1.Sharkie/4.Attack/Bubble trap/Op2 (Without Bubbles)/1.png",
    "img/1.Sharkie/4.Attack/Bubble trap/Op2 (Without Bubbles)/2.png",
    "img/1.Sharkie/4.Attack/Bubble trap/Op2 (Without Bubbles)/3.png",
    "img/1.Sharkie/4.Attack/Bubble trap/Op2 (Without Bubbles)/4.png",
    "img/1.Sharkie/4.Attack/Bubble trap/Op2 (Without Bubbles)/5.png",
    "img/1.Sharkie/4.Attack/Bubble trap/Op2 (Without Bubbles)/6.png",
    "img/1.Sharkie/4.Attack/Bubble trap/Op2 (Without Bubbles)/7.png",

  ];

  IMAGES_SLEEP = [
    "img/1.Sharkie/2.Long_IDLE/i11.png",
    "img/1.Sharkie/2.Long_IDLE/i12.png",
    "img/1.Sharkie/2.Long_IDLE/i13.png",
    "img/1.Sharkie/2.Long_IDLE/i14.png",
  ];

  IMAGES_SLAP = [
    "img/1.Sharkie/4.Attack/Fin slap/1.png",
    "img/1.Sharkie/4.Attack/Fin slap/4.png",
    "img/1.Sharkie/4.Attack/Fin slap/5.png",
    "img/1.Sharkie/4.Attack/Fin slap/6.png",
    "img/1.Sharkie/4.Attack/Fin slap/7.png",
    "img/1.Sharkie/4.Attack/Fin slap/8.png",
  ];

  IMAGES_IDLE = [
    "img/1.Sharkie/1.IDLE/1.png",
    "img/1.Sharkie/1.IDLE/2.png",
    "img/1.Sharkie/1.IDLE/3.png",
    "img/1.Sharkie/1.IDLE/4.png",
    "img/1.Sharkie/1.IDLE/5.png",
    "img/1.Sharkie/1.IDLE/6.png",
    "img/1.Sharkie/1.IDLE/7.png",
    "img/1.Sharkie/1.IDLE/8.png",
    "img/1.Sharkie/1.IDLE/9.png",
    "img/1.Sharkie/1.IDLE/10.png",
    "img/1.Sharkie/1.IDLE/11.png",
    "img/1.Sharkie/1.IDLE/12.png",
    "img/1.Sharkie/1.IDLE/13.png",
    "img/1.Sharkie/1.IDLE/14.png",
    "img/1.Sharkie/1.IDLE/15.png",
    "img/1.Sharkie/1.IDLE/16.png",
    "img/1.Sharkie/1.IDLE/17.png",
    "img/1.Sharkie/1.IDLE/18.png",
  ];

  IMAGES_SWIM = [
    "img/1.Sharkie/3.Swim/2.png",
    "img/1.Sharkie/3.Swim/3.png",
    "img/1.Sharkie/3.Swim/5.png",
    "img/1.Sharkie/3.Swim/6.png",
  ];

  IMAGES_HURT_POISEN = [
    "img/1.Sharkie/5.Hurt/1.Poisoned/1.png",
    "img/1.Sharkie/5.Hurt/1.Poisoned/2.png",
    "img/1.Sharkie/5.Hurt/1.Poisoned/3.png",
    "img/1.Sharkie/5.Hurt/1.Poisoned/4.png",
  ];

  IMAGES_HURT_SHOCK = [
    "img/1.Sharkie/5.Hurt/2.Electric shock/1.png",
    "img/1.Sharkie/5.Hurt/2.Electric shock/2.png",
    "img/1.Sharkie/5.Hurt/2.Electric shock/3.png",
  ];

  IMAGES_DIE_POISEN = [
    "img/1.Sharkie/6.dead/1.Poisoned/1.png",
    "img/1.Sharkie/6.dead/1.Poisoned/2.png",
    "img/1.Sharkie/6.dead/1.Poisoned/3.png",
    "img/1.Sharkie/6.dead/1.Poisoned/4.png",
    "img/1.Sharkie/6.dead/1.Poisoned/5.png",
    "img/1.Sharkie/6.dead/1.Poisoned/6.png",
    "img/1.Sharkie/6.dead/1.Poisoned/7.png",
    "img/1.Sharkie/6.dead/1.Poisoned/8.png",
    "img/1.Sharkie/6.dead/1.Poisoned/9.png",
    "img/1.Sharkie/6.dead/1.Poisoned/10.png",
    "img/1.Sharkie/6.dead/1.Poisoned/11.png",
    "img/1.Sharkie/6.dead/1.Poisoned/12.png",
  ];

  IMAGES_DIE_SHOCK = [
    "img/1.Sharkie/6.dead/2.Electro_shock/1.png",
    "img/1.Sharkie/6.dead/2.Electro_shock/2.png",
    "img/1.Sharkie/6.dead/2.Electro_shock/3.png",
    "img/1.Sharkie/6.dead/2.Electro_shock/4.png",
    "img/1.Sharkie/6.dead/2.Electro_shock/5.png",
    "img/1.Sharkie/6.dead/2.Electro_shock/6.png",
    "img/1.Sharkie/6.dead/2.Electro_shock/7.png",
    "img/1.Sharkie/6.dead/2.Electro_shock/8.png",
    "img/1.Sharkie/6.dead/2.Electro_shock/9.png",
    "img/1.Sharkie/6.dead/2.Electro_shock/10.png",
  ];

  constructor() {
    super().loadImage("img/1.Sharkie/1.IDLE/1.png");
    this.loadImages(this.IMAGES_IDLE);
    this.loadImages(this.IMAGES_SWIM);
    this.loadImages(this.IMAGES_DIE_POISEN);
    this.loadImages(this.IMAGES_SLAP);
    this.loadImages(this.IMAGES_HURT_POISEN);
    this.loadImages(this.IMAGES_LONG_IDLE);
    this.loadImages(this.IMAGES_SLEEP);
    this.loadImages(this.IMAGES_BUBBLE);
    this.loadImages(this.IMAGES_BUBBLE_POISEN);
    this.loadImages(this.IMAGES_BUBBLE_MISSING);
    this.loadImages(this.IMAGES_HURT_SHOCK);
    this.loadImages(this.IMAGES_DIE_SHOCK);

    this.animate();
  }

  animate() {
    setInterval(() => {
      if (!this.isDead()) {
        if (
          this.world.keyboard.UP &&
          this.y + this.offset.y > 0 &&
          !this.barrierBlockUp
        ) {
          this.sleep = false;
          this.moveUp();
          this.barrierBlockDown = false;
          this.setLastMove();
        }

        if (
          this.world.keyboard.DOWN &&
          this.y < 480 + this.offset.height &&
          !this.barrierBlockDown
        ) {
          this.barrierBlockUp = false;
          this.moveDown();
          this.setLastMove();
        }
        if (
          this.world.keyboard.RIGHT &&
          this.x < this.world.level.level_end_x &&
          !this.barrierBlockRight
        ) {
          this.barrierBlockLeft = false;
          this.moveRight();

          this.setLastMove();
        }
        if (this.world.keyboard.LEFT && this.x > -450 && !this.barrierBlockLeft) {
          this.barrierBlockRight = false;
          this.moveLeft();
          this.setLastMove();
        }

        if (this.world.keyboard.SPACE) {
          this.slap();
          this.setLastMove();
        }

        if (this.world.keyboard.E && !this.isHurt()) {
          setTimeout(() => {
            this.blowBubble();
          }, 900);
          this.setLastMove();
        }
        if (this.world.keyboard.R && !this.isHurt()) {
          setTimeout(() => {
            this.blowPoisenBubble();
          }, 900);
          this.setLastMove();
        }
      }
    }, 1000 / 60);

    setInterval(() => {
      if (this.isDead() && this.poisen) {
        this.playAnimation(this.IMAGES_DIE_POISEN, this.playOnes);
      } else if (this.isDead() && this.electric) {
        this.playAnimation(this.IMAGES_DIE_SHOCK, this.playOnes);
      } else if (
        this.isHurt() &&
        this.poisen &&
        !this.slapping &&
        !this.isDead()
      ) {
        this.playAnimation(this.IMAGES_HURT_POISEN);
      } else if (
        this.isHurt() &&
        this.electric &&
        !this.slapping &&
        !this.isDead()
      ) {
        this.playAnimation(this.IMAGES_HURT_SHOCK);
      } else if (this.slapping && !this.isDead()) {
        this.playAnimation(this.IMAGES_SLAP, this.playOnes);
      } else if (
        this.world.keyboard.E &&
        !this.madeRecentBubble &&
        !this.isDead() &&
        !this.isHurt()
      ) {
        this.playAnimation(this.IMAGES_BUBBLE, this.playOnes);
      } else if (
        this.world.keyboard.R &&
        !this.madeRecentBubble &&
        !this.isDead() &&
        !this.isHurt()
        
      ) {

        if(this.poisenCollected > 0){

            this.playAnimation(this.IMAGES_BUBBLE_POISEN, this.playOnes);
        }else{
             this.playAnimation(this.IMAGES_BUBBLE_MISSING , this.playOnes);
        }
      
     
        
     
      } else if (
        (!this.isDead() && this.world.keyboard.UP) ||
        this.world.keyboard.RIGHT ||
        this.world.keyboard.LEFT
      ) {
        this.playAnimation(this.IMAGES_SWIM);
      } else if (
        this.sleep &&
        this.idled == this.IMAGES_LONG_IDLE.length &&
        !this.isDead()
      ) {
        this.playAnimation(this.IMAGES_SLEEP);
      } else if (this.isLongIdle() >= 10 && !this.isDead()) {
        this.playAnimation(this.IMAGES_LONG_IDLE);
        this.idled++;
        this.sleep = true;
      } else if (!this.isDead()) {
        this.playAnimation(this.IMAGES_IDLE);
      }
    }, 150);
  }

  slap() {
    this.slapping = true;
    setTimeout(() => {
      this.slapping = false;
    }, 500);
  }

  
  blowBubble() {

    if (!this.madeRecentBubble && !this.isHurt()) {
       let bubble = new StandartBubble(
       
      );
      this.world.creatBubble(bubble);;
     
  }
  }

  
  blowPoisenBubble() {
    if(this.poisenCollected > 0){
      this.poisenCollected--
    if (!this.madeRecentBubble && !this.isHurt()) {
       let bubble = new PoisenBubble(
     
      );
      this.world.creatBubble(bubble); 
      world.poisenBar.setPercentage(world.character.poisenCollected, 'poisen');

     
    }
  }
}

  isLongIdle() {
    let timePassed = new Date().getTime() - this.lastMove;
    timePassed = timePassed / 1000;
    return timePassed;
  }

  setLastMove() {
    this.lastMove = new Date().getTime();
    this.sleep = false;
  }
}
