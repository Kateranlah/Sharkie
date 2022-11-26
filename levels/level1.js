const level1 = new Level(

  // Add Enemies //
  [
    new Jellyfish(650),
    new Jellyfish(1050),
    new JellyfishElectric(850),
    new Endboss(),
  ],
  // Add Collectables //
  [
    new Poisen(-350, 250),
    new Poisen(850 , 350),
    new Poisen(2200, 430),
    new Poisen(2700, 40),
    new Hearts(),

   // Middle of Map Ship shape

    new Coin(700, 300),
    new Coin(775, 400),
    new Coin(850, 100),
    new Coin(850, 200),
    new Coin(850, 300),
    new Coin(850, 400),
    new Coin(925, 400),
    new Coin(1000, 300),

    // In cave
   
    new Coin(1300, 240), 
    new Coin(1500, 240),
    new Coin(1700, 240),
    new Coin(1900, 240),

    // Behind start

    new Coin(-350, 100),
    new Coin(-350, 150),
    new Coin(-350, 200),
    new Coin(-350, 300),
    new Coin(-350, 350),
    new Coin(-350, 400),
   
    // Above Boss
    new Coin(2600, 40),
    new Coin(2500, 40),
  ],

    // Add Lights //
  [new Light(1200, 480), new Light(1120, 480)],

    // Add Background //
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

    new BackgroundObject("img/3. Background/Barrier/3.png", 1300),

    new BackgroundObject("img/3. Background/Layers/5. Water/D2.png", 719 * 3),
    new BackgroundObject("img/3. Background/Layers/3.Fondo 1/D2.png", 719 * 3),
    new BackgroundObject("img/3. Background/Layers/4.Fondo 2/D2.png", 719 * 3),
    new BackgroundObject("img/3. Background/Layers/2. Floor/D2.png", 719 * 3),

    new BackgroundObject("img/3. Background/Layers/5. Water/D2.png", 719 * 4),
    new BackgroundObject("img/3. Background/Layers/3.Fondo 1/D2.png", 719 * 4),
    new BackgroundObject("img/3. Background/Layers/4.Fondo 2/D2.png", 719 * 4),
    new BackgroundObject("img/3. Background/Layers/2. Floor/D2.png", 719 * 4),

  

    new BackgroundObject("img/3. Background/Barrier/3.png", 2400),
   
  ],

      // Add Barriers//
  [
    new WallBarrier(-500, 480),
    //new CaveBarrier(1200),
    new WallBarrier(2750, 480),
    new GroundBarrier(2650, 180, 340, 500),
    new GroundBarrier(2250, 180, 340, 500),
   
   
  ]
);
