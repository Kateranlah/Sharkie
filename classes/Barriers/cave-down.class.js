class CaveBarrierDown extends Barriers{
    offset = {
        x: 0,
        y: 50,
        width: 0,
        height: -50,
      };

    constructor(x){
        super().loadImage("img/3. Background/Barrier/down.png");
        this.x = x;
        this.y = 300
        this.height = 180
        this.width = 700
    }
    
    
    }