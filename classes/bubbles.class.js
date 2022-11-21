class Bubbles extends MovableObject{

    speedY = 0.1;
    acceleration = 0.1;
    driftedX = 0
    fullCicle = false

    constructor(){
super();
this.x = 100
this.y = 100
this.width=30;
this.height=30;





    }

    makeBubble(x, y){
        this.x = x;
        this.y = y;
        this.speedY
        this.driftUp();
        this.driftX();

    }

    checkCicle(){
        if(this.driftedX == 0){
            this.fullCicle = false
        }
        if(this.driftedX == 5){
            this.fullCicle = true}
       
    
    }

    driftX(){
     
    setInterval(() => {

        if(this.driftedX < 5 && !this.fullCicle){
        this.x += 3
        this.driftedX += 1
        this.checkCicle();
        
      }else if (this.fullCicle){

        this.x -= 2
        this.driftedX -=1
        this.checkCicle();
        }   
    }, 1000 / 25);
}
   driftUp(){
    setInterval(() => {
        if(this.isUnderWater() || this.speedY > 0){
            this.y -= this.speedY;
            this.speedY += this.acceleration;
     
        }
        
    }, 1000/ 25);
   }

   isUnderWater(){
  return this.y < 0
   }
}