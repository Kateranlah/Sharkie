class Hearts extends Collectables{

    constructor(){
        super();
        this.loadImage("img/4. Marcadores/green/100_  copia 3.png")
        this.x = 200 + Math.random() * 500;
        this.y = 400;
    }
}