class Jellyfish extends MovableObject{

height = 120;
width = 70;
speed = 0.15;
offset = {
  x : 15,
  y : 20,
  width : -30,
  height : -30}
// IMAGES_MOVING_YELLOW = ['img/2.Enemy/2 Jelly fish/Regular damage/Yellow 1.png',
// 'img/2.Enemy/2 Jelly fish/Regular damage/Yellow 2.png',
// 'img/2.Enemy/2 Jelly fish/Regular damage/Yellow 3.png',
// 'img/2.Enemy/2 Jelly fish/Regular damage/Yellow 4.png'
// ]
IMAGES_MOVING_PURPLE = ['img/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png',
'img/2.Enemy/2 Jelly fish/Regular damage/Lila 2.png',
'img/2.Enemy/2 Jelly fish/Regular damage/Lila 3.png',
'img/2.Enemy/2 Jelly fish/Regular damage/Lila 4.png']

    constructor(){
        super().loadImage('img/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png');
        this.loadImages(this.IMAGES_MOVING_PURPLE);
        this.x = 200 + Math.random() * 500;
        this.y = 50 + Math.random() * 300;
      this.animate()
     
    }

    animate() {
        setInterval(() => {
           this.playAnimation(this.IMAGES_MOVING_PURPLE);
           this.moveUp();
           this.moveDown();
        }, 200);

        
      
        

   
      }



}