const game = new Game()
let button;
let spinning = false

// Load game assets
function preload() {
	game.preload()
}

function setup() {
	createCanvas(600, 500)
    background("green")
    button = createButton('start');
    button.position(350, 350);
    // button.mousePressed(tester());
    

    //button.keyPressed(game.draw)

}
    // function tester() {
    //     console.log("pressed", )
    // }
function draw() {
	game.draw()
    if 
}

function keyPressed() {
    if (keyCode === 15) {
		game.draw()
	}
	}
// function updateButton (){
//     if (button = )
// }
 