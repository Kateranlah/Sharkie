class Coin extends Collectables{

    IMAGES = ["img/4. Marcadores/1. Coins/1.png",
    "img/4. Marcadores/1. Coins/2.png",
    "img/4. Marcadores/1. Coins/3.png",
    "img/4. Marcadores/1. Coins/4.png"]


    constructor(){
        super();
        this.loadImages(this.IMAGES)
        this.x = 200 + Math.random() * 500;
        this.y = 50 + Math.random() * 300;
        this.animate(this.IMAGES);
    }


}