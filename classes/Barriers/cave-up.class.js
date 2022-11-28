class CaveBarrierUp extends Barriers{
    offset = {
        x: 0,
        y: 0,
        width: 0,
        height: -50,
      };

    constructor(x){
        super().loadImage("img/3. Background/Barrier/up.png");
        this.x = x;
        this.y = 0
        this.height = 180
        this.width = 700
    }
    
    
    }