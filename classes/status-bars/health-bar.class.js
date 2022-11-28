class HealthBar extends StatusBar{

    IMAGES = [
    "img/4. Marcadores/orange/0_  copia.png",
    "img/4. Marcadores/orange/20_ copia 2.png",
    "img/4. Marcadores/orange/40_  copia.png",
    "img/4. Marcadores/orange/60_  copia.png",
    "img/4. Marcadores/orange/80_  copia.png",
    "img/4. Marcadores/orange/100_  copia.png"]

    IMAGES_STRONG = [

        "img/4. Marcadores/Purple/0_ .png",
        "img/4. Marcadores/Purple/20_ .png",
        "img/4. Marcadores/Purple/40_ .png",
        "img/4. Marcadores/Purple/60_ .png",
        "img/4. Marcadores/Purple/80_ .png",
        "img/4. Marcadores/Purple/100_ .png",
    ]

percentage = 100;

    constructor(){
        super();
        this.x = 30;
        this.y = 0;
        this.loadImages(this.IMAGES);
        this.loadImages(this.IMAGES_STRONG);
        this.setPercentage(100);
      
       
    }

    checkPathChange() 
    
    // {
    //     world.healthBar.setPercentage(world.character.energy, 'heart')
    // }
        if (this.coinBarFull){
            this.IMAGES = [

                "img/4. Marcadores/Purple/0_ .png",
                "img/4. Marcadores/Purple/20_ .png",
                "img/4. Marcadores/Purple/40_ .png",
                "img/4. Marcadores/Purple/60_ .png",
                "img/4. Marcadores/Purple/80_ .png",
                "img/4. Marcadores/Purple/100_ .png",
            ]
        }
    
      }
   
}