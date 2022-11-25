class CoinBar extends StatusBar{

    IMAGES = [
    "img/4. Marcadores/orange/0_  copia 2.png",
    "img/4. Marcadores/orange/20_  copia.png",
    "img/4. Marcadores/orange/40_  copia 2.png",
    "img/4. Marcadores/orange/60_  copia 2.png",
    "img/4. Marcadores/orange/80_  copia 2.png",
    "img/4. Marcadores/orange/100_ copia 2.png"]

percentage = 0;

    constructor(){
        super();
        this.x = 30;
        this.y = 60;
        this.loadImages(this.IMAGES);
        this.setPercentage(0);
    }


  

}