class Bubbles extends MovableObject {
  speedY = 0.1;
  acceleration = 0.1;
  driftedX = 0;
  fullCicle = false;
  firstApperance = true;
  width = 30;
  height = 30;

  constructor() {
    super();
  
  }

  makeBubble() {     
  

   
    if (!world.character.otherDirection) {
        this.x =world.character.x + 160
    }else{
        this.x =world.character.x
    }
 this.y =world.character.y + 100 
    this.speedY;
    this.driftUp();
    this.driftX();
    
  }

  checkCicle() {
    if (this.driftedX == 0) {
      this.fullCicle = false;
    }
    if (this.driftedX == 5) {
      this.fullCicle = true;
    }
  }

  driftX() {
    setInterval(() => {
        if(this.firstApperance){
            if (!world.character.otherDirection){
                this.x += 10;
            }else{
                this.x -= 10;
            }
            
            setTimeout(() => {
                this.firstApperance = false
            }, 500);
        
        
        }
      if (this.driftedX < 5 && !this.fullCicle) {
        this.x += 3;
        this.driftedX += 1;
        this.checkCicle();
      } else if (this.fullCicle) {
        this.x -= 2;
        this.driftedX -= 1;
        this.checkCicle();
      }
    }, 1000 / 25);
  }
  driftUp() {
    setInterval(() => {
      if (this.isUnderWater() || this.speedY > 0) {
        this.y -= this.speedY;
        this.speedY += this.acceleration;
      }
    }, 1000 / 25);
  }

  isUnderWater() {
    return this.y < 0;
  }
}
