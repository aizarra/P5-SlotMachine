const game = new Game()
// let button;
// let spinning = false
let img;
// Load game assets
function preload() {  
	game.preload()
    img = loadImage("./BGImages/earth.png")
}

function setup() {
	createCanvas(600, 500)
     background(img)
    // background(loadImage("./BGImages/earth.gif"))
    // background(loadImage("./BGImages/Merkel.png"))
    // button = createButton('start');
    // button.position(350, 350);
    // button.mousePressed(tester());
    

    //button.keyPressed(game.draw)

}
    // function tester() {
    //     console.log("pressed", )
    // }
function draw() {
    // background(img)
    if (mouseIsPressed === true){
        game.draw()
    }
}



 