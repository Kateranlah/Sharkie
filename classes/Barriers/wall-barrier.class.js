class WallBarrier extends Barriers{

    offset = {
        x: 0,
        y: 0,
        width: 0,
        height: 0,
      };

    constructor(x, height){
        super().loadImage("img/3. Background/Barrier/3.png")
        this.x = x;
        this.height = height;
        this.offset.x = 20
        this.offset.width = -40
    }
    
    
    }