class Game{
    constructor(){
        this.slot1 = new Slot1 (50, 100, -5)
        this.slot2 = new Slot2(200, 100, -3)
        this.slot3 = new Slot1(400, 200, -1)
        this.slotReel
    }
    preload(){
    this.slot1.preload()
    this.slot2.preload()
    this.slot3.preload()
  }
    draw (){
    this.slot1.draw()
    this.slot2.draw()
    this.slot3.draw()
        
    }
}

class Slot1{
    constructor(x ,y , speed){
        this.x =x
        this.y = y
        this.speed =speed
        this.image
    }
    preload (){
        this.image = loadImage ("./BGImages/slotReel.png")

    }
    draw(){
        clear()
        this.y -= this.speed
        image(this.image, this.x, this.y-500, 60, 500)
        image(this.image, this.x, this.y, 60, 500)
        if (this.y >= height) this.y = 0

       

    }
}
class Slot2{
    constructor(x ,y , speed){
        this.x =x
        this.y = y
        this.speed =speed
        this.image
    }
    preload (){
        this.image = loadImage ("./BGImages/slotReel.png")

    }
    draw(){
        clear()
        this.y -= this.speed
        image(this.image, this.x, this.y-500, 60, 500)
        image(this.image, this.x, this.y, 60, 500)
        if (this.y >= height) this.y = 0

       

    }
}