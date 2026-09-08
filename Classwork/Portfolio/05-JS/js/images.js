/**
 * This is a piece of code written in an older version of JS.
 * Modern versions of JS use other means to create functions.
 * This code is provided so you can get a glimpse of the old ways. Don't worry too much about all the code, and try just to focus on the TODO parts.
 */
// Global variable myGamePiece that will be of type component.
let myGamePiece;

// Canvas and game initialization
const startGame = () => {
  myGamePiece = new component(30, 30, "./images/smiley.gif", 10, 120, "image");
  myGameArea.start();
};

// Definition of the myGameArea object
const myGameArea = {
  // Declaration of a variable local to the myGameArea
  canvas: document.createElement("canvas"),
  // Definition of function start via a prototype
  // these two stay regular methods because they need their own "this"
  start() {
    this.canvas.width = 480;
    this.canvas.height = 270;
    this.context = this.canvas.getContext("2d");
    document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    setInterval(updateGameArea, 20);
  },
  // Definition of function clear via a prototype
  clear() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  },
};

// Definition of the component object
// it is called with "new", so it can not be an arrow function
function component(width, height, color, x, y, type) {
  // Declaration of several variables part of the component object.
  this.type = type;
  if (type == "image") {
    this.image = new Image();
    this.image.src = color;
  }
  this.width = width;
  this.height = height;
  this.speedX = 0;
  this.speedY = 0;
  this.x = x;
  this.y = y;
  // Declaration of function update
  // the arrows take "this" from the component being built, which is what we want
  this.update = () => {
    const ctx = myGameArea.context;
    // Option to draw the component as an image or as a square with a color
    if (type == "image") {
      ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    } else {
      ctx.fillStyle = color;
      ctx.fillRect(this.x, this.y, this.width, this.height);
    }
  };
  // Declaration of function newPos
  this.newPos = (canvasWidth, canvasHeight) => {
    // Sets the new position of the object with x,y coordinates
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.type == "image") {
      // the limit is the full width/height so the whole image stays inside, and
      // it goes back to the edge before flipping so it never ends up outside
      if (this.x >= canvasWidth - this.width || this.x <= 0) {
        this.x = Math.min(Math.max(this.x, 0), canvasWidth - this.width);
        this.speedX = -this.speedX;
      }
      if (this.y >= canvasHeight - this.height || this.y <= 0) {
        this.y = Math.min(Math.max(this.y, 0), canvasHeight - this.height);
        this.speedY = -this.speedY;
      }
    }
  };
}

// Global function. Independent from any object
const updateGameArea = () => {
  myGameArea.clear();
  myGamePiece.newPos(myGameArea.canvas.width, myGameArea.canvas.height);
  myGamePiece.update();
};

// Methods that control the movement of the object
const moveup = () => {
  myGamePiece.speedY -= 1;
};

const movedown = () => {
  myGamePiece.speedY += 1;
};

const moveleft = () => {
  myGamePiece.speedX -= 1;
};

const moveright = () => {
  myGamePiece.speedX += 1;
};
