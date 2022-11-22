class PoisenBar extends StatusBar{

    IMAGES = [
    "img/4. Marcadores/orange/0_ copia.png",
    "img/4. Marcadores/orange/20_ copia.png",
    "img/4. Marcadores/orange/40_ copia.png",
    "img/4. Marcadores/orange/60_ copia.png",
    "img/4. Marcadores/orange/80_ copia.png",
    "img/4. Marcadores/orange/100_ copia.png"]

percentage = 100;

    constructor(){
        super();
        this.x = 30;
        this.y = 30;
        this.loadImages(this.IMAGES);
        this.setPercentage(0);
    }


  

}