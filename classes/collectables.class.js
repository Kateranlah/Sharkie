class Collectables extends MovableObject {

    width= 30;
    height= 30;
    
    offset = {
        x : 0,
        y : 0,
        width : 0,
        height :  0}



    constructor(){
        super();
    }

    animate(img) {
        setInterval(() => {
           this.playAnimation(img);
        }, 200);
      }

}