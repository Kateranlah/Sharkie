class MovableObject{
    x = 200;
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

    drawHitbox(ctx){
        if(this instanceof Character || this instanceof Jellyfish ){
        ctx.beginPath();
        ctx.lineWidth= '3';
        ctx.strokeStyle= 'blue';
        ctx.rect(
            this.x +65, 
            this.y +90, 
            this.width -100,
            this.height -140);
        ctx.stroke();}
    }

   
        draw(ctx){
            ctx.drawImage(
                this.img,
                this.x, 
                this.y, 
                this.width,
                this.height)
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
        this.y -= this.speed;
      }
      moveDown(){
        this.y += this.speed
      }
      moveLeft(){
        this.otherDirection = true;
        this.x -= this.speed;
        this.world.camera_x = -this.x + 200;
      }
      moveRight(){
        this.otherDirection = false;
        this.x += this.speed;
        this.world.camera_x = -this.x + 200;
      }

      playAnimation(images){
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
      }

}