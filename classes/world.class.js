class World{
    character = new Character();
    enemies = [
        new Jellyfish(),
        new Jellyfish(),
        new Jellyfish()
     ];
    canvas;
    ctx;
    lights = new Light();
    backgroundObject = [ 
        new BackgroundObject('img/3. Background/Layers/5. Water/L1.png')
    ]





    constructor(canvas){
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas
        this.draw();

    }

    draw(){
        this.ctx.clearRect(0 , 0, this.canvas.width, this.canvas.height)
        this.ctx.drawImage(this.character.img, this.character.x, this.character.y, this.character.witdh, this.character.height)
        this.enemies.forEach(enemy => {
            this.ctx.drawImage(enemy.img, enemy.x, enemy.y, enemy.witdh, enemy.height)
            
        });
        this.ctx.drawImage(this.lights.img, this.lights.x, this.lights.y, this.lights.witdh, this.lights.height)
        self = this;
        requestAnimationFrame(function() {self.draw();});
    }

    addToMap(mo){
this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height)
    }
}