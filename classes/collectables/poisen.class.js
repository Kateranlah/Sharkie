class Poisen extends Collectables {
  IMAGES = [
    "img/4. Marcadores/Posión/Animada/1.png",
    "img/4. Marcadores/Posión/Animada/2.png",
    "img/4. Marcadores/Posión/Animada/3.png",
    "img/4. Marcadores/Posión/Animada/4.png",
    "img/4. Marcadores/Posión/Animada/5.png",
    "img/4. Marcadores/Posión/Animada/6.png",
    "img/4. Marcadores/Posión/Animada/7.png",
    "img/4. Marcadores/Posión/Animada/8.png",
  ];

  constructor(x, y) {
    super();
    this.loadImage("img/4. Marcadores/1. Coins/1.png");
    this.loadImages(this.IMAGES);
    this.x = x;
    this.y = y;
    this.animate(this.IMAGES);
  }
}
