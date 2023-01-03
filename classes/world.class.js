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
  barriers = new Barriers();
  won = new Won();
  lost = new Lost();
  outcome;
  win_sound = new Audio('audio/win.mp3');
  lose_sound = new Audio('audio/lose.mp3');

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
      this.checkFreeWay();
      this.checkGameOver();
    }, 1000 / 60);
  }

  creatBubble(bubble) {
    this.bubbles.push(bubble);
    this.character.madeRecentBubble = true;
    setTimeout(() => {
      this.character.madeRecentBubble = false;
    }, 900);
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
        if (this.keyboard.UP && !this.character.barrierBlockDown) {
          this.character.barrierBlockUp = true;
        }
        if (this.keyboard.LEFT && !this.character.barrierBlockRight) {
          this.character.barrierBlockLeft = true;
        }
        if (this.keyboard.DOWN && !this.character.barrierBlockUp) {
          this.character.barrierBlockDown = true;
        }
        if (this.keyboard.RIGHT && !this.character.barrierBlockLeft) {
          this.character.barrierBlockRight = true;
        }
      }
    });
  }

  checkCollisions() {
    let e = 0;
    this.level.enemies.forEach((enemy) => {
      if (this.isPufferfish(enemy)) {
        this.level.enemies[e].dead = true;
      }
      if (this.character.isColliding(enemy)) {
        this.isReducingHp(enemy);
      }

      if (this.bubbles.length >= 1) {
        this.checkIfBubbleHits(enemy, e);
      }
      e++;
    });
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.ctx.translate(this.camera_x, 0);
    this.addObjectsToMap(this.level.backgroundObjects);

    this.addObjectsToMap(this.level.lights);

    this.addToMap(this.character);
    this.addObjectsToMap(this.level.barriers);
    this.addObjectsToMap(this.bubbles);

    this.addObjectsToMap(this.level.collectables);
    this.addObjectsToMap(this.level.enemies);
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

  drawEndscreen() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    if (this.outcome == "win") {
      this.addToMap(this.won);
    } else {
      this.addToMap(this.lost);
    }

    self = this;
    requestAnimationFrame(function () {
      self.drawEndscreen();
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
    // mo.drawHitbox(this.ctx);
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

  isPufferfish(enemy) {
    return (
      enemy instanceof Pufffish &&
      this.character.slapping &&
      this.character.isColliding(enemy)
    );
  }

  isReducingHp(enemy) {
    this.character.hit(enemy);
    this.healthBar.setPercentage(this.character.energy);
  }

  checkIfBubbleHits(enemy, e) {
    let i = 0;
    this.bubbles.forEach((b) => {
      if (this.bubbles[i].isColliding(enemy)) {
        this.removeBubble(i);
        if (enemy instanceof JellyfishElectric || enemy instanceof Jellyfish) {
          this.level.enemies[e].dead = true;
        } else if (enemy instanceof Endboss && b instanceof PoisenBubble) {
          this.reduceEndbossHp(enemy);
        }
      }
      i++;
    });
  }

  removeBubble(i) {
    this.bubbles.splice(i, 1);
  }

  reduceEndbossHp(enemy) {
    enemy.energy -= 40;
    enemy.attack = false;
    world.character.hitEndboss = true;
  }

  checkGameOver() {
    if (this.endbossDead()) {
      this.gameOver("win");
      this.win_sound.play();
    }
    if (this.playerDead()) {
      this.gameOver("lose");
      setTimeout(() => {
        this.lose_sound.play();
      }, 2000);
     
    }
  }

  gameOver(outcome) {
   
    this.outcome = outcome;
   
    setTimeout(() => {
      this.clearAllIntervals();
      this.drawEndscreen();
      this.clearAllIntervals();
    }, 2500);
  }

  endbossDead() {
    return this.level.enemies[this.level.enemies.length - 1]["energy"] <= 0;
  }

  playerDead() {
    return this.character.energy <= 0;
  }

  clearAllIntervals() {
    for (let i = 1; i < 9999; i++) window.clearInterval(i);
  }
}
