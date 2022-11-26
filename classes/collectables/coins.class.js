class Coin extends Collectables{

    IMAGES = ["img/4. Marcadores/1. Coins/1.png",
    "img/4. Marcadores/1. Coins/2.png",
    "img/4. Marcadores/1. Coins/3.png",
    "img/4. Marcadores/1. Coins/4.png"]


    constructor(x,y){
        super();
        this.loadImages(this.IMAGES)
        this.x =  x;
        this.y =  y;
        this.animate(this.IMAGES);
    }


}