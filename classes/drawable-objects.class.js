class DrawableObject{
    x = 200;
    y = 40;
    img;
    imageCache = {};
    currentImage = 0;
    height = 100;
    width = 150;
   

    constructor(){

        
    }
    loadImage(path){
        this.img = new Image();
        this.img.src = path;

    }

    draw(ctx){
        ctx.drawImage(
            this.img,
            this.x, 
            this.y, 
            this.width,
            this.height)
    }

    loadImages(arr){
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }

    drawHitbox(ctx){
        if(this instanceof Character || this instanceof Jellyfish || this instanceof Endboss){
        ctx.beginPath();
        ctx.lineWidth= '3';
        ctx.strokeStyle= 'blue';
        ctx.rect(
            this.x + this.offset.x, 
            this.y + this.offset.y, 
            this.width + this.offset.width,
            this.height + this.offset.height);
        ctx.stroke();}
    }
}