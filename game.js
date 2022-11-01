class Game{
    constructor(){
     this.slots = []
     this.image
     this.image1
     this.image2
     this.image3
     this.image4
     this.image5
     this.image6
     this.slots.push(new Slot(150, 100))
     this.slots.push(new Slot(300, 100))
     this.slots.push(new Slot(450, 100))
     this.button 
    }
    preload(){
        this.image = loadImage ("./BGImages/Merkel.png")
        this.image1 = loadImage ("./BGImages/Merkel.png")
        this.image2 = loadImage ("./BGImages/Trump.png")
        this.image3 = loadImage ("./BGImages/Biden.png")
        this.image4 = loadImage ("./BGImages/Khamenei.png")
        this.image5 = loadImage ("./BGImages/Zelensky.png")
        this.image6 = loadImage ("./BGImages/Putin.png")



}
 
    draw (){
        this.slots.forEach(function(slot){
        slot.draw()
    })
        
    }
       
    }

class Slot{
    constructor(x ,y){
        this.x =x
        this.y =y

    }
    preload (){

    }
    draw(){   
        if(spinning === false) {
            console.log("not spinning")
        } else {console.log("yes spinning")}
    image(game.image,this.x,this.y, 100 , 100)
if (frameCount % 5 == 0){
    game.image = game.image2
} else if (frameCount % 7 == 1) {
    game.image = game.image1;
} else if (frameCount % 7 == 2) {
    game.image = game.image2;
} else if (frameCount % 7 == 3) {
    game.image = game.image3;
} else if (frameCount % 7 == 4) {
    game.image = game.image4;
} else if (frameCount % 7 == 5) {
    game.image = game.image5;
} else {
    game.image = game.image6
}
       

    }


}