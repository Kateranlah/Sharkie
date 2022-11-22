class Collectables extends MovableObject {

    width= 30;
    height= 30;



    constructor(){
        super();
    }

    animate(img) {
        setInterval(() => {
           this.playAnimation(img);
        }, 200);
      }

}