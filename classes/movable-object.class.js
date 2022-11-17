class MovableObject{
    x = 10;
    y = 40;
    img;
    height = 100;
    witdh = 150;

    constructor(){
        
    }

    loadImage(path){
        this.img = new Image();
        this.img.src = path;

    }


}