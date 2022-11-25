class World {
  character = new Character();
  level = level1;
  canvas;
  ctx;
  keyboard;
  camera_x = 0;
  collectables = new Collectables();
  healthBar = new HealthBar();
  poisenBar = new PoisenBar();
  coinBar = new CoinBar();
  bubbles = [];
  barriers = new Barriers


  constructor(canvas, keyboard) {
    this.ctx = canvas.getContext("2d");
    this.canvas = canvas;
    this.keyboard = keyboard;
    this.draw();
    this.setWorld();
    this.run();
  }

  setWorld() {
    this.character.world = this;
  }

  run() {
    setInterval(() => {
      this.checkCollisions();
      this.checkCollect();
      this.checkFreeWay()

    }, 1000/ 60);
  }


  makeBubble() {
   
    if (!this.character.madeRecentBubble) {
      
    
      let bubble = new StandartBubble(
        this.character.x + 160,
        this.character.y + 100
      );
      this.bubbles.push(bubble);
      this.character.madeRecentBubble = true;
      setTimeout(() => {
        this.character.madeRecentBubble = false;
      }, 900);
    }
  }

  checkCollect() {
    this.level.collectables.forEach((item) => {
      if (this.character.isColliding(item)) {
        this.collectables.collect(item);
      }
    });
  }

  checkFreeWay() {
   
    this.level.barriers.forEach((barrier) => {
     
     
     

      if (this.character.isColliding(barrier)) {
        if (this.keyboard.UP && !this.character.barrierBlockDown){
          this.character.barrierBlockUp = true;
         
        }
        if (this.keyboard.LEFT && !this.character.barrierBlockRight){
          this.character.barrierBlockLeft = true;
        }    if (this.keyboard.DOWN && !this.character.barrierBlockUp){
          this.character.barrierBlockDown = true;
        }
        if (this.keyboard.RIGHT && !this.character.barrierBlockLeft){
          this.character.barrierBlockRight = true;
        }
        
      }
    });
  }

  checkCollisions() {
    this.level.enemies.forEach((enemy) => {
      if (this.character.isColliding(enemy)) {
        this.character.hit(enemy);
        this.healthBar.setPercentage(this.character.energy);
      }
    });
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.ctx.translate(this.camera_x, 0);
    this.addObjectsToMap(this.level.backgroundObjects);
   
    this.addObjectsToMap(this.level.lights);
     this.addObjectsToMap(this.level.enemies);
    this.addToMap(this.character);
    this.addObjectsToMap(this.level.barriers);
    this.addObjectsToMap(this.bubbles);
  

   
    this.addObjectsToMap(this.level.collectables);

  

    this.ctx.translate(-this.camera_x, 0);




   
    // ------------- Space for fixed objects ------------- //
    this.addToMap(this.healthBar);
    this.addToMap(this.poisenBar);
    this.addToMap(this.coinBar);
    // ------------- Space for fixed objects ends ------------- //
  

    self = this;
    requestAnimationFrame(function () {
      self.draw();
    });
  }

  addObjectsToMap(objects) {
    objects.forEach((o) => {
      this.addToMap(o);
    });
  }

  addToMap(mo) {
    if (mo.otherDirection) {
      this.flipImage(mo);
    }
    mo.draw(this.ctx);
    mo.drawHitbox(this.ctx);
    if (mo.otherDirection) {
      this.flipImageBack(mo);
    }
  }

  flipImage(mo) {
    this.ctx.save();
    this.ctx.translate(mo.width, 0);
    this.ctx.scale(-1, 1);
    mo.x = mo.x * -1;
  }
  flipImageBack(mo) {
    mo.x = mo.x * -1;
    this.ctx.restore();
  }
}
