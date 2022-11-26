

const level1 = new Level(
  [new Jellyfish(100), new Jellyfish(400), new JellyfishElectric(900),
    new Endboss],
  [
    new Poisen(), new Poisen(), new Poisen(), new Poisen(),
    new Hearts(),
    new Coin(), new Coin(),new Coin(), new Coin(), new Coin(),
    new Coin(), new Coin(), new Coin(),new Coin(), new Coin()
  ],
  [//new Light(1600,480)
  ],
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

    new BackgroundObject("img/3. Background/Layers/5. Water/D1.png", 719 * 2),
    new BackgroundObject("img/3. Background/Layers/3.Fondo 1/D1.png", 719 * 2),
    new BackgroundObject("img/3. Background/Layers/4.Fondo 2/D1.png", 719 * 2),
    new BackgroundObject("img/3. Background/Layers/2. Floor/D1.png", 719 * 2),

    new BackgroundObject("img/3. Background/Layers/5. Water/D2.png", 719 * 3),
    new BackgroundObject("img/3. Background/Layers/3.Fondo 1/D2.png", 719 * 3),
    new BackgroundObject("img/3. Background/Layers/4.Fondo 2/D2.png", 719 * 3),
    new BackgroundObject("img/3. Background/Layers/2. Floor/D2.png", 719 * 3),
  ],
  [
    new WallBarrier(60, 480), 
    new GroundBarrier(2250, 180 , 340, 500), 
    new WallBarrier(2750, 480),
  ]
  
);
