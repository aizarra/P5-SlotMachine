let array = [];

class Game {
  constructor() {
    this.slots = [];
    this.image;
    this.image1;
    this.image2;
    this.image3;
    this.image4;
    this.image5;
    this.image6;
    this.slots.push(new Slot1(25, 175));
    this.slots.push(new Slot2(225, 175));
    this.slots.push(new Slot3(425, 175));
  }
  preload() {
    this.image = loadImage('./BGImages/Merkel.png');
    this.image1 = loadImage('./BGImages/Merkel.png');
    this.image2 = loadImage('./BGImages/Trump.png');
    this.image3 = loadImage('./BGImages/Biden.png');
    this.image4 = loadImage('./BGImages/Khamenei.png');
    this.image5 = loadImage('./BGImages/Zelensky.png');
    this.image6 = loadImage('./BGImages/Putin.png');
  }

  draw() {
    if (frameRate(10)) {
      this.slots.forEach(function (slot) {
        slot.draw();
      });
    }
  }
}

class Slot1 {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.image;
  }
  preload() {}
  draw() {
    image(game.image, this.x, this.y, 150, 150);
    if (frameCount % 5 == 0) {
      game.image = game.image2;
      this.image = game.image2;
    } else if (frameCount % 7 == 1) {
      game.image = game.image1;
      this.image = game.image1;
    } else if (frameCount % 7 == 2) {
      game.image = game.image2;
      this.image = game.image2;
    } else if (frameCount % 7 == 3) {
      game.image = game.image3;
      this.image = game.image3;
    } else if (frameCount % 7 == 4) {
      game.image = game.image4;
      this.image = game.image4;
    } else if (frameCount % 7 == 5) {
      game.image = game.image5;
      this.image = game.image5;
    } else {
      game.image = game.image6;
      this.image = game.image6;
    }
  }
}

class Slot2 {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.image;
  }
  preload() {}
  draw() {
    image(game.image, this.x, this.y, 150, 150);
    if (frameCount % 5 == 0) {
      game.image = game.image2;
      this.image = game.image2;
    } else if (frameCount % 4 == 1) {
      game.image = game.image1;
      this.image = game.image1;
    } else if (frameCount % 4 == 2) {
      game.image = game.image2;
      this.image = game.image2;
    } else if (frameCount % 4 == 3) {
      game.image = game.image3;
      this.image = game.image3;
    } else if (frameCount % 4 == 4) {
      game.image = game.image4;
      this.image = game.image4;
    } else if (frameCount % 4 == 5) {
      game.image = game.image5;
      this.image = game.image5;
    } else {
      game.image = game.image6;
      this.image = game.image6;
    }
  }
}

class Slot3 {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.image;
  }
  preload() {}
  draw() {
    image(game.image, this.x, this.y, 150, 150);
    if (frameCount % 3 == 0) {
      game.image = game.image2;
      this.image = game.image2;
    } else if (frameCount % 5 == 1) {
      game.image = game.image1;
      this.image = game.image1;
    } else if (frameCount % 5 == 2) {
      game.image = game.image2;
      this.image = game.image2;
    } else if (frameCount % 5 == 3) {
      game.image = game.image3;
      this.image = game.image3;
    } else if (frameCount % 5 == 4) {
      game.image = game.image4;
      this.image = game.image4;
    } else if (frameCount % 5 == 5) {
      game.image = game.image5;
      this.image = game.image5;
    } else {
      game.image = game.image6;
      this.image = game.image6;
    }
  }
}
