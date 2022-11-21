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

     
        draw(ctx){
            ctx.drawImage(
                this.img,
                this.x, 
                this.y, 
                this.width,
                this.height)
        }

    drawHitbox(ctx){
        if(this instanceof Character || this instanceof Jellyfish || this instanceof Endboss){
        ctx.beginPath();
        ctx.lineWidth= '3';
        ctx.strokeStyle= 'blue';
        ctx.rect(
            this.x + 60, 
            this.y + 100, 
            this.width -100,
            this.height -150);
        ctx.stroke();}
    }

  

        isColliding (obj) {


                   return  ((this.x + 60 ) + (this.width - 100 )) >= (obj.x +60)
                    	&& (this.x + 60) <= ((obj.x+60) + (obj.width - 100))
                         && ((this.y + 100 ) + (this.height -150)) >= (obj.y +100) 
                         &&((this.y + 100 )) <= ((obj.y +100) + (obj.height - 150))
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