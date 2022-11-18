class Character extends MovableObject {
  height = 200;
  width = 200;
  world;
  speed = 4;
  speed = 30;
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

  constructor() {
    super().loadImage("img/1.Sharkie/1.IDLE/1.png");
    this.loadImages(this.IMAGES_SWIM);

   
    this.animate();
  }

  async animate() {
    setInterval(() => { 
   
       
        if (this.world.keyboard.UP && this.y > -80) {
            this.moveUp();
        }
        if (this.world.keyboard.DOWN && this.y < 300) {
            this.moveDown();
    
        }
        if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) 
        {this.moveRight();
        
        }
        if (this.world.keyboard.LEFT && this.x > 0) {
            this.moveLeft();
        }
      }, 1000 / 60);


    setInterval(() => {
     
        if (this.world.keyboard.UP || this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
          let i = this.currentImage % this.IMAGES_SWIM.length;
          let path = this.IMAGES_SWIM[i];
          this.img = this.imageCache[path];
          this.currentImage++;
        
        }
        
      }, 150);
  }
}
