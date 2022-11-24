

const level1 = new Level(
  [new Jellyfish(), new Jellyfish(), new Jellyfish(),
    new Endboss],
  [
    new Poisen(), new Poisen(), new Poisen(), new Poisen(),
    new Hearts(),
    new Coin(), new Coin(),new Coin(), new Coin(), new Coin(),
    new Coin(), new Coin(), new Coin(),new Coin(), new Coin()
  ],
  [new Light()],
  [
    new BackgroundObject("img/3. Background/Layers/5. Water/L2.png", -719),
    new BackgroundObject("img/3. Background/Layers/3.Fondo 1/L2.png", -719),
    new BackgroundObject("img/3. Background/Layers/4.Fondo 2/L2.png", -719),
    new BackgroundObject("img/3. Background/Layers/2. Floor/L2.png", -719),


    new BackgroundObject("img/3. Background/Layers/5. Water/L1.png", 0),
    new BackgroundObject("img/3. Background/Layers/3.Fondo 1/L1.png", 0),
    new BackgroundObject("img/3. Background/Layers/4.Fondo 2/L1.png", 0),
    new BackgroundObject("img/3. Background/Layers/2. Floor/L1.png", 0),

    new BackgroundObject("img/3. Background/Layers/5. Water/L1.png", 719),
    new BackgroundObject("img/3. Background/Layers/3.Fondo 1/L2.png", 719),
    new BackgroundObject("img/3. Background/Layers/4.Fondo 2/L2.png", 719),
    new BackgroundObject("img/3. Background/Layers/2. Floor/L2.png", 719),

    new BackgroundObject("img/3. Background/Layers/5. Water/L1.png", 719 * 2),
    new BackgroundObject("img/3. Background/Layers/3.Fondo 1/L1.png", 719 * 2),
    new BackgroundObject("img/3. Background/Layers/4.Fondo 2/L1.png", 719 * 2),
    new BackgroundObject("img/3. Background/Layers/2. Floor/L1.png", 719 * 2),

    new BackgroundObject("img/3. Background/Layers/5. Water/L1.png", 719 * 3),
    new BackgroundObject("img/3. Background/Layers/3.Fondo 1/L2.png", 719 * 3),
    new BackgroundObject("img/3. Background/Layers/4.Fondo 2/L2.png", 719 * 3),
    new BackgroundObject("img/3. Background/Layers/2. Floor/L2.png", 719 * 3),

    new BackgroundObject("img/3. Background/Layers/5. Water/D1.png", 719 * 4),
    new BackgroundObject("img/3. Background/Layers/3.Fondo 1/D1.png", 719 * 4),
    new BackgroundObject("img/3. Background/Layers/4.Fondo 2/D1.png", 719 * 4),
    new BackgroundObject("img/3. Background/Layers/2. Floor/D1.png", 719 * 4),

    new BackgroundObject("img/3. Background/Layers/5. Water/D2.png", 719 * 5),
    new BackgroundObject("img/3. Background/Layers/3.Fondo 1/D2.png", 719 * 5),
    new BackgroundObject("img/3. Background/Layers/4.Fondo 2/D2.png", 719 * 5),
    new BackgroundObject("img/3. Background/Layers/2. Floor/D2.png", 719 * 5),
  ],
  [
    new WallBarrier(60, 480), new WallBarrier(480, 230), new CaveBarrier(2500)
  ]
  
);
