const myGamePiece = [];
const happySrc = "images/smiley.gif";
const sadSrc = "images/angry.gif";
const maxDist = 5;

const myGameArea = {
  timer: 0,
  running: true,
  canvas: document.createElement("canvas"),
  // these two stay regular methods because they need their own "this"
  start() {
    this.canvas.width = 800;
    this.canvas.height = 600;
    this.context = this.canvas.getContext("2d");
    this.context.font = "12px serif";
    document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    setInterval(updateGameArea, 20);
  },
  clear() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  },
};

// it is called with "new", so it can not be an arrow function. The methods
// inside can, because an arrow takes "this" from the flatlander being built
function flatlander(width, height, x, y, isHappy) {
  this.image = new Image();
  this.isHappy = isHappy;
  if (isHappy) {
    this.happyPoints = 1;
    this.image.src = happySrc;
  } else {
    this.happyPoints = -1;
    this.image.src = sadSrc;
  }
  this.width = width;
  this.height = height;
  this.speedX = (Math.random() * 100) % 6;
  this.speedY = (Math.random() * 100) % 6;
  this.x = x;
  this.y = y;
  this.update = () => {
    const ctx = myGameArea.context;
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    ctx.fillText(this.happyPoints, this.x, this.y + 5);
  };
  this.newPos = (canvasWidth, canvasHeight) => {
    this.x += this.speedX;
    this.y += this.speedY;
    // flipping the speed at the edges is what makes them bounce back
    if (this.x >= canvasWidth - this.width || this.x <= 0) {
      this.speedX = -this.speedX;
    }
    if (this.y >= canvasHeight - this.height || this.y <= 0) {
      this.speedY = -this.speedY;
    }
  };
  // a sad one needs to climb over 1 before turning happy, and a happy one needs
  // to fall under 0 before turning sad, so nobody flips on a single contact
  this.moreHappy = () => {
    this.happyPoints++;
    if (!this.isHappy && this.happyPoints > 1) {
      this.isHappy = true;
      this.image.src = happySrc;
    }
  };
  this.lessHappy = () => {
    this.happyPoints--;
    if (this.isHappy && this.happyPoints < 0) {
      this.isHappy = false;
      this.image.src = sadSrc;
    }
  };
  this.checkSurroundings = (other) => {
    const x = Math.pow(this.x - other.x, 2);
    const y = Math.pow(this.y - other.y, 2);
    return Math.sqrt(x + y);
  };
}

const startGame = () => {
  const n = parseInt(document.getElementById("num").value);
  const m = parseInt(document.getElementById("sad").value);
  // both fields are text, so anything can be typed in there
  if (isNaN(n) || isNaN(m) || n < 1 || m < 0) {
    window.alert("Write how many individuals and how many of them are sad.");
    return;
  }
  if (m > n) {
    window.alert("Can not have more sad than individuals.");
    return;
  }
  let sad = 0;
  for (let i = 0; i < n; i++) {
    //var rand = Math.random() * 100;
    // 30% of chance of getting an angry subject
    const nX = (Math.random() * 10000) % myGameArea.canvas.width;
    const nY = (Math.random() * 10000) % myGameArea.canvas.height;
    const gamePiece = new flatlander(30, 30, nX, nY, ++sad > m);
    myGamePiece.push(gamePiece);
  }
  myGameArea.start();
};

const updateGameArea = () => {
  // let is block scoped, so these two have to be declared out here to survive
  // past the if below, where the ending message reads them
  let happy = 0;
  let sad = 0;
  if (myGameArea.running) {
    myGameArea.clear();
    for (let i = 0; i < myGamePiece.length; i++) {
      myGamePiece[i].newPos(myGameArea.canvas.width, myGameArea.canvas.height);
      myGamePiece[i].update();
    }
    for (let i = 0; i < myGamePiece.length; i++) {
      const tmpFocus = myGamePiece[i];
      for (let j = i + 1; j < myGamePiece.length; j++) {
        const d = tmpFocus.checkSurroundings(myGamePiece[j]);
        if (d < maxDist) {
          if (myGamePiece[j].isHappy) {
            tmpFocus.moreHappy();
          } else {
            tmpFocus.lessHappy();
          }
        }
      }
      if (tmpFocus.isHappy) {
        happy++;
      } else {
        sad++;
      }
    }
    myGameArea.timer++;
    document.getElementById("happyIndividuals").textContent = "Happy: " + happy;
    document.getElementById("sadIndividuals").textContent = "Sad: " + sad;
  } else return;
  if (happy === 0 || sad === 0) {
    myGameArea.running = false;
    const msg =
      happy == 0
        ? "Absolute sadness.... SAD!"
        : "Absolute happiness reached.... Hurray!!";
    document.getElementById("timer").textContent =
      "Time: " + myGameArea.timer + "       " + msg;
  } else {
    document.getElementById("timer").textContent = "Time: " + myGameArea.timer;
  }
};
