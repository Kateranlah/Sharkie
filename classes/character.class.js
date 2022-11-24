class Character extends MovableObject {
  height = 200;
  width = 200;
  world;
  speed = 40;
  coinsCollected = 0
  poisenCollected = 0
  alive = 0
  idled = 0
  slapping = false
  lastMove = new Date().getTime();
  sleep = false
  barrierBlockRight = false;
  barrierBlockLeft = false;
  barrierBlockUp = false;
  barrierBlockDown = false;
  offset = {
    x : 60,
    y : 100,
    width: -100,
    height: -150,
    
}

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
  "img/1.Sharkie/2.Long_IDLE/i14.png"

];

IMAGES_SLEEP = [

  "img/1.Sharkie/2.Long_IDLE/i11.png",
  "img/1.Sharkie/2.Long_IDLE/i12.png",
  "img/1.Sharkie/2.Long_IDLE/i13.png",
  "img/1.Sharkie/2.Long_IDLE/i14.png"

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


  constructor() {
    super().loadImage("img/1.Sharkie/1.IDLE/1.png");
    this.loadImages(this.IMAGES_IDLE);
    this.loadImages(this.IMAGES_SWIM);
    this.loadImages(this.IMAGES_DIE_POISEN);
    this.loadImages(this.IMAGES_SLAP);
    this.loadImages(this.IMAGES_HURT_POISEN);
    this.loadImages(this.IMAGES_LONG_IDLE);

   
    this.animate();
  }

  animate() {
    setInterval(() => {
    
      if(!this.isDead()){
        if (this.world.keyboard.UP && this.y + this.offset.y > 0 && !this.barrierBlockUp) {
          this.sleep = false
          this.moveUp();
            this.barrierBlockDown = false;
            this.setLastMove()
        
            
        }

        if (this.world.keyboard.DOWN && this.y < 480 + this.offset.height && !this.barrierBlockDown) {
          this.barrierBlockUp = false;
          this.moveDown();
            this.setLastMove()
            
            
           
        
        }
        if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x && !this.barrierBlockRight) 
        {
             this.barrierBlockLeft = false;
          this.moveRight();
       
          this.setLastMove()
      
         
         
     
        }
        if (this.world.keyboard.LEFT && this.x > 0 && !this.barrierBlockLeft)  {
            
           this.barrierBlockRight = false;
          this.moveLeft();
            this.setLastMove()
           
         
        }
      
        if (this.world.keyboard.SPACE) {
          this.slap()
          this.setLastMove()

      }}
      }, 1000 / 60);


    setInterval(() => {
     
      if(this.isDead()){
        if (this.alive < this.IMAGES_DIE_POISEN.length-1) {
          
          this.playAnimation(this.IMAGES_DIE_POISEN); 
          this.alive++
        }
        

   
        
      } else if(this.isHurt()) {
        this.playAnimation(this.IMAGES_HURT_POISEN);
      }
      else
        if (this.world.keyboard.UP || this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
          this.playAnimation(this.IMAGES_SWIM);
        }else   
        if (this.world.keyboard.SPACE) {
          this.playAnimation(this.IMAGES_SLAP);
        }else   
        
        if(this.sleep && this.idled == this.IMAGES_LONG_IDLE.length ){
          this.playAnimation(this.IMAGES_SLEEP);
        }else
        
        
        
        if(this.isLongIdle() >= 10){
          this.playAnimation(this.IMAGES_LONG_IDLE);
          this.idled++
          this.sleep = true
        }else 
      
        {
        
          this.playAnimation(this.IMAGES_IDLE);
        }
        
      }, 150);
  }


 slap() {
     this.slapping = true;
     setTimeout(() => {
      this.slapping = false;
    }, 500)
 }



  isLongIdle() {
    let timePassed = new Date().getTime() - this.lastMove; 
    timePassed = timePassed / 1000; 
    return timePassed;
}

setLastMove(){
  this.lastMove = new Date().getTime();
  this.sleep = false
}


}
