class GroundBarrier extends Barriers{
    y =  220
    offset = {
        x: 20,
        y: 60,
        width: 40,
        height: 0,
      };
    constructor(x, height, y, width){
        super().loadImage("img/3. Background/Barrier/2.png");
        this.x = x;
        this.height = height;
        this.y = y
        this.width = width
     
    }
    
    
    }