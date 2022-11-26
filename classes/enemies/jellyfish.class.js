class Jellyfish extends MovableObject{

height = 120;
width = 70;
speed = 5;
offset = {
  x : 15,
  y : 20,
  width : -30,
  height : -30}
IMAGES_MOVING_YELLOW = ['img/2.Enemy/2 Jelly fish/Regular damage/Yellow 1.png',
'img/2.Enemy/2 Jelly fish/Regular damage/Yellow 2.png',
'img/2.Enemy/2 Jelly fish/Regular damage/Yellow 3.png',
'img/2.Enemy/2 Jelly fish/Regular damage/Yellow 4.png'
]
IMAGES_MOVING_PURPLE = ['img/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png',
'img/2.Enemy/2 Jelly fish/Regular damage/Lila 2.png',
'img/2.Enemy/2 Jelly fish/Regular damage/Lila 3.png',
'img/2.Enemy/2 Jelly fish/Regular damage/Lila 4.png']

IMAGES_DEAD_YELLOW = ['img/2.Enemy/2 Jelly fish/Dead/Yellow/y1.png',
'img/2.Enemy/2 Jelly fish/Dead/Yellow/y2.png',
'img/2.Enemy/2 Jelly fish/Dead/Yellow/y3.png',
'img/2.Enemy/2 Jelly fish/Dead/Yellow/y4.png']

IMAGES_DEAD_PURPLE = ['img/2.Enemy/2 Jelly fish/Dead/Lila/L1.png',
'img/2.Enemy/2 Jelly fish/Dead/Lila/L2.png',
'img/2.Enemy/2 Jelly fish/Dead/Lila/L3.png',
'img/2.Enemy/2 Jelly fish/Dead/Lila/L4.png']



    constructor(x){
        super().loadImage('img/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png');
        this.loadImages(this.IMAGES_MOVING_PURPLE);
        this.loadImages(this.IMAGES_MOVING_YELLOW);
        this.loadImages(this.IMAGES_DEAD_PURPLE);
        this.loadImages(this.IMAGES_DEAD_YELLOW);

        this.x = x
        this.y = 50 + Math.random() * 300;
      this.animate()
     
    }

    animate() {
        setInterval(() => {
          if (!this.dead) {
            this.playAnimation(this.IMAGES_MOVING_PURPLE);
            if (this.y > 100 && !this.swimUpDone) {
           
              this.moveUp();
         }else if(this.y <= 100 && !this.swimUpDone){
             this.swimUpDone = true;
         }else if(this.swimUpDone && this.y < 380){
             this.moveDown();
         }else{
             this.swimUpDone = false;
         }
        
          
        }else{
            this.playAnimation(this.IMAGES_DEAD_PURPLE);
            this.speed = 20
            this.moveUp();   
        }
        }, 200);

        
      
      
        

   
      }



}