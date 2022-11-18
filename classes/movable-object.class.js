class MovableObject{
    x = 10;
    y = 40;
    img;
    height = 100;
    width = 150;
    imageCache = {};
    currentImage = 0;
    speed = 0.15;
    otherDirection = false;

    constructor(){
        
    }

    loadImage(path){
        this.img = new Image();
        this.img.src = path;

    }

    loadImages(arr){
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }

    moveUp(){
        setInterval(() => {
            this.y -= this.speed
        }, 10);
      }
      moveDown(){
        setInterval(() => {
            this.y += this.speed
        }, 20);
      }


}