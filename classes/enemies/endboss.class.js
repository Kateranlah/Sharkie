class Endboss extends MovableObject {
  height = 250;
  width = 600;
  speed = 12;
  firstAppearance = 0;
  dieing = 0;
  offset = {
    x: 60,
    y: 110,
    width: -100,
    height: -180,
  };
  lastMove;
  attack = false;
  IMAGES_INTRODUCE = [
    "img/2.Enemy/3 Final Enemy/1.Introduce/1.png",
    "img/2.Enemy/3 Final Enemy/1.Introduce/2.png",
    "img/2.Enemy/3 Final Enemy/1.Introduce/3.png",
    "img/2.Enemy/3 Final Enemy/1.Introduce/4.png",
    "img/2.Enemy/3 Final Enemy/1.Introduce/5.png",
    "img/2.Enemy/3 Final Enemy/1.Introduce/6.png",
    "img/2.Enemy/3 Final Enemy/1.Introduce/7.png",
    "img/2.Enemy/3 Final Enemy/1.Introduce/8.png",
    "img/2.Enemy/3 Final Enemy/1.Introduce/9.png",
    "img/2.Enemy/3 Final Enemy/1.Introduce/10.png",
  ];
  IMAGES_FLOATING = [
    "img/2.Enemy/3 Final Enemy/2.floating/1.png",
    "img/2.Enemy/3 Final Enemy/2.floating/2.png",
    "img/2.Enemy/3 Final Enemy/2.floating/3.png",
    "img/2.Enemy/3 Final Enemy/2.floating/4.png",
    "img/2.Enemy/3 Final Enemy/2.floating/5.png",
    "img/2.Enemy/3 Final Enemy/2.floating/6.png",
    "img/2.Enemy/3 Final Enemy/2.floating/7.png",
    "img/2.Enemy/3 Final Enemy/2.floating/8.png",
    "img/2.Enemy/3 Final Enemy/2.floating/9.png",
    "img/2.Enemy/3 Final Enemy/2.floating/10.png",
    "img/2.Enemy/3 Final Enemy/2.floating/11.png",
    "img/2.Enemy/3 Final Enemy/2.floating/12.png",
    "img/2.Enemy/3 Final Enemy/2.floating/13.png",
  ];
  IMAGES_ATTACK = [
    "img/2.Enemy/3 Final Enemy/Attack/1.png",
    "img/2.Enemy/3 Final Enemy/Attack/2.png",
    "img/2.Enemy/3 Final Enemy/Attack/3.png",
    "img/2.Enemy/3 Final Enemy/Attack/4.png",
    "img/2.Enemy/3 Final Enemy/Attack/5.png",
    "img/2.Enemy/3 Final Enemy/Attack/6.png",
  ];
  IMAGES_HURT = [
    "img/2.Enemy/3 Final Enemy/Hurt/1.png",
    "img/2.Enemy/3 Final Enemy/Hurt/2.png",
    "img/2.Enemy/3 Final Enemy/Hurt/3.png",
    "img/2.Enemy/3 Final Enemy/Hurt/4.png",
  ];
  IMAGES_DEAD = [
    "img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 6.png",
    "img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 7.png",
    "img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 8.png",
    "img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 9.png",
    "img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 10.png",
  ];

  constructor() {
    super().loadImage(this.IMAGES_INTRODUCE[0]);
    this.loadImages(this.IMAGES_INTRODUCE);
    this.loadImages(this.IMAGES_FLOATING);
    this.loadImages(this.IMAGES_ATTACK);
    this.loadImages(this.IMAGES_HURT);
    this.loadImages(this.IMAGES_DEAD);
    this.x = 2200;
    this.y = 0;
    this.energy = 100;
    this.otherDirection = true;

    setTimeout(() => {
       this.animate();
    }, 1000);
   
  }
  animate() {
    setInterval(() => {

      if (world.character.x > 1800) {
        if (this.firstAppearance <= this.IMAGES_INTRODUCE.length - 1) {
          this.playAnimation(this.IMAGES_INTRODUCE);
          this.firstAppearance++;
        } else {
          if (this.energy <= 0 && this.dieing <= this.IMAGES_DEAD.length - 1) {
            this.playAnimation(this.IMAGES_DEAD, this.playOnes);
            this.dieing++;
          } else if (world.character.hitEndboss && this.energy > 0) {
            this.playAnimation(this.IMAGES_HURT, this.playOnes);
            this.attack = false
            setInterval(() => {
              world.character.hitEndboss = false;
            }, 500);
          } else if (this.energy > 0) {
            if (this.attack && !world.character.hitEndboss) {
              this.playAnimation(this.IMAGES_ATTACK);
            }else{
            
            this.playAnimation(this.IMAGES_FLOATING);}
          }
        }
      }



     

    if (world.character.x > 1600 && this.attack && this.energy > 0) {
    
      if(this.y < 110){
        this.moveDown()
      }
      if (this.x > 1200) {
         this.moveLeft()  
      }
      
    } else
    if (!this.attack && this.energy > 0) {
    
      if(this.y > 0){
        this.moveUp()
      }
      if (this.x < 2200) {
         this.moveRight()  
      }
      if(this.x == 2200){
        this.otherDirection = false;
      }

    }

    }, 200);

    setInterval(() => {
    this.switchMode()
    }, 7000);
  }


  switchMode(){

    if(this.attack)
    {this. attack = false}else
    if(!this.attack){
      this. attack = true
    }
    

  }

  moveLeft() {
    this.otherDirection = false;
    this.x -= this.speed;
    
  }
  moveRight() {
    this.otherDirection = true;
    this.x += this.speed;
    
  }
}
