class World{
    character = new Character();
    enemies = [
        new Jellyfish(),
        new Jellyfish(),
        new Jellyfish()
     ];
    canvas;
    ctx;
    lights = [new Light()]
    backgroundObjects = [ 
        new BackgroundObject('img/3. Background/Layers/5. Water/L1.png', 0),
        new BackgroundObject('img/3. Background/Layers/3.Fondo 1/L1.png', 0),
        
        new BackgroundObject('img/3. Background/Layers/4.Fondo 2/L1.png', 0),
       new BackgroundObject('img/3. Background/Layers/2. Floor/L1.png', 0)
    ]
    keyboard;
    



    constructor(canvas, keyboard){
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
    

    }

    setWorld(){
       
        this.character.world = this;
       
    }

    draw(){
        this.ctx.clearRect(0 , 0, this.canvas.width, this.canvas.height)
    
        this.addObjectsToMap(this.backgroundObjects)        
        this.addObjectsToMap(this.lights)
        this.addToMap(this.character);
     
    
    
        this.addObjectsToMap(this.enemies)
   

        self = this;
        requestAnimationFrame(function() {self.draw();});
    }

    addObjectsToMap(objects){
        objects.forEach(o => {
            this.addToMap(o)
        });

    }

    addToMap(mo){
        this.ctx.drawImage(
                mo.img,
                mo.x, 
                mo.y, 
                mo.width,
                mo.height)
    }
}