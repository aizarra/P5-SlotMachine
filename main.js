const game = new Game();

game.slot1;

let img;

function preload() {
  game.preload();
  img = loadImage('./BGImages/earth.png');
}

function setup() {
  createCanvas(600, 500);
  background(img);
}

function draw() {
  if (mouseIsPressed === true) {
    document.getElementById('result').innerText = 'spinning...';
    game.draw();
  } else if (
    game.slots[0].image !== undefined &&
    game.slots[1].image !== undefined &&
    game.slots[2].image !== undefined &&
    game.slots[0].image == game.slots[1].image &&
    game.slots[1].image == game.slots[2].image
  ) {
    document.getElementById('result').innerText = 'You win!';
  } else if (
    game.slots[0].image !== undefined &&
    game.slots[1].image !== undefined &&
    game.slots[2].image !== undefined
  ) {
    document.getElementById('result').innerText = 'You loose!';
  }
}
