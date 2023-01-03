let canvas;
let world;
let keyboard = new Keyboard();
let instructionOpen = false

function init(){
  canvas = document.getElementById("canvas");
  canvas.getContext("2d");
  btnEvents();
}

function startGame(){
  initLevel();
  world = new World(canvas, keyboard);
  document.getElementById('btn-start').classList.add('d-none');
}

function checkInstructionWindow(){
  if(!instructionOpen){
    instructionOpen = true;
    document.getElementById('instructions').classList.add('d-none');
  }else{
    instructionOpen = false;
    document.getElementById('instructions').classList.remove('d-none');
  }
}

function unmute(){
  world.character.slap_sound.volume = 1;
  world.character.blow_sound.volume = 1;
  world.character.breath_sound.volume = 1;
  world.character.sleep_sound.volume = 1;
  world.character.hurt_sound.volume = 1;
  world.character.electric_sound.volume = 1;
  world.win_sound.volume = 1;
  world.collectables.coin_sound.volume = 1;
  world.collectables.poisen_sound.volume = 1;
  world.lose_sound.volume = 1;
  document.getElementById('btn-mute').setAttribute('onclick','mute();');
  document.getElementById('muteImg').src="img/6.Botones/mute-2-64.png";
}

function mute(){
  world.character.slap_sound.volume = 0;
  world.character.blow_sound.volume = 0;
  world.character.breath_sound.volume = 0;
  world.character.sleep_sound.volume = 0;
  world.character.hurt_sound.volume = 0;
  world.character.electric_sound.volume = 0;
  world.win_sound.volume = 0;
  world.collectables.coin_sound.volume = 0;
  world.collectables.poisen_sound.volume = 0;
  world.lose_sound.volume = 0;
  document.getElementById('btn-mute').setAttribute('onclick','unmute();');
  document.getElementById('muteImg').src="img/6.Botones/volume-up-4-64.png";
}

function restartGame(){
  clearAllIntervals();
  startGame();
}

function clearAllIntervals(){
  for (let i = 1; i < 9999; i++) window.clearInterval(i);
}

function btnEvents() {
  document.getElementById("btn-instructions").addEventListener("touchstart", (e) => {
    e.preventDefault();
    checkInstructionWindow();
  });

  document.getElementById("btn-restart").addEventListener("touchstart", (e) => {
    e.preventDefault();
    restartGame();
  });

  document.getElementById("btn-right").addEventListener("touchstart", (e) => {
    e.preventDefault();
    keyboard.RIGHT = true;
  });

  document.getElementById("btn-right").addEventListener("touchend", (e) => {
    e.preventDefault();
    keyboard.RIGHT = false;
  });

  document.getElementById("btn-left").addEventListener("touchstart", (e) => {
    e.preventDefault();
    keyboard.LEFT = true;
  });

  document.getElementById("btn-left").addEventListener("touchend", (e) => {
    e.preventDefault();
    keyboard.LEFT = false;
  });

  document.getElementById("btn-up").addEventListener("touchstart", (e) => {
    e.preventDefault();
    keyboard.UP = true;
  });

  document.getElementById("btn-up").addEventListener("touchend", (e) => {
    e.preventDefault();
    keyboard.UP = false;
  });

  document.getElementById("btn-down").addEventListener("touchstart", (e) => {
    e.preventDefault();
    keyboard.DOWN = true;
  });

  document.getElementById("btn-down").addEventListener("touchend", (e) => {
    e.preventDefault();
    keyboard.DOWN = false;
  });

  document.getElementById("btn-bubble").addEventListener("touchstart", (e) => {
    e.preventDefault();
    keyboard.E = true;
  });

  document.getElementById("btn-bubble").addEventListener("touchend", (e) => {
    e.preventDefault();
    setTimeout(() => {
      keyboard.E = false;
    }, 500);
  });

  document.getElementById("btn-poisen").addEventListener("touchstart", (e) => {
    e.preventDefault();
    keyboard.R = true;
  });

  document.getElementById("btn-poisen").addEventListener("touchend", (e) => {
    e.preventDefault();
    setTimeout(() => {
      keyboard.R = false;
    }, 500);
  });

  document.getElementById("btn-slap").addEventListener("touchstart", (e) => {
    e.preventDefault();
    keyboard.SPACE = true;
  });

  document.getElementById("btn-slap").addEventListener("touchend", (e) => {
    e.preventDefault();
    setTimeout(() => {
      keyboard.SPACE = false;
    }, 500);
  });
}

window.addEventListener(`keydown`, (e) => {
  if (e.keyCode == 39 || e.keyCode == 68) {
    keyboard.RIGHT = true;
  }
  if (e.keyCode == 37 || e.keyCode == 65) {
    keyboard.LEFT = true;
  }
  if (e.keyCode == 38 || e.keyCode == 87) {
    keyboard.UP = true;
  }
  if (e.keyCode == 40 || e.keyCode == 83) {
    keyboard.DOWN = true;
  }

  if (e.keyCode == 32) {
    keyboard.SPACE = true;
  }
  if (e.keyCode == 69) {
    keyboard.E = true;
  }
  if (e.keyCode == 82) {
    keyboard.R = true;
  }
});

window.addEventListener(`keyup`, (e) => {
  if (e.keyCode == 39 || e.keyCode == 68) {
    keyboard.RIGHT = false;
  }
  if (e.keyCode == 37 || e.keyCode == 65) {
    keyboard.LEFT = false;
  }
  if (e.keyCode == 38 || e.keyCode == 87) {
    keyboard.UP = false;
  }
  if (e.keyCode == 40 || e.keyCode == 83) {
    keyboard.DOWN = false;
  }

  if (e.keyCode == 40 || e.keyCode == 32) {
    setTimeout(() => {
      keyboard.SPACE = false;
    }, 500);
  }

  if (e.keyCode == 69) {
    setTimeout(() => {
      keyboard.E = false;
    }, 500);
  }

  if (e.keyCode == 82) {
    setTimeout(() => {
      keyboard.R = false;
    }, 500);
  }
});
