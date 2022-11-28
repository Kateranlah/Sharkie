class StatusBar extends DrawableObject {
  width = 150;
  height = 45;
  coinBarFull = false;


  constructor() {
    super();
   console.log(this);
    this.tryout()
  }

tryout(){
    if(this instanceof HealthBar){


  

    setTimeout(() => {
          this.healthBar = this
          console.log(this.healthBar);

    }, 200);
    

           
   

    }


}


  resolveImageIndex(type) {
    if (type == "coin") {
      this.percentage *= 5;
    }
    if (type == "poisen") {
      this.percentage *= 25;
    }

    if (this.percentage == 100) { 
        
    
      return 5;
    } else if (this.percentage > 80) {
      return 4;
    } else if (this.percentage > 60) {
      return 3;
    } else if (this.percentage > 40) {
      return 2;
    } else if (this.percentage > 20) {
 
      return 1;
    } else {
      return 0;
    }
  }

  setPercentage(percentage, type) {

    if(this.coinBarFull && type == undefined){
        console.log('drom');
        this.percentage = percentage;
        let path = this.IMAGES[this.resolveImageIndex(type)];
        this.img = this.imageCache[path];
    }else{
    console.log(this.coinBarFull);
    this.percentage = percentage;
    let path = this.IMAGES[this.resolveImageIndex(type)];
    this.img = this.imageCache[path]; 
    }
   
  }

  
}
