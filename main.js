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
    game.draw();
  } else if (
    game.slots[0].image == game.slots[1].image &&
    game.slots[1].image == game.slots[2].image
  ) {
    console.log('IMAGE:', game.slots[0].image);
    console.log('you win');
  } else {
    console.log('You Loose!');
  }
}
