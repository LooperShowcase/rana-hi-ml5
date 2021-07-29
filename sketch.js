let player;

let bgImage;
let playerImage;
let obstacleImage;
let obstacles = [];

let worldClassifier;

function preload() {
  bgImage = loadImage("background.jpg");
  playerImage = loadImage("player.png");
  obstacleImage = loadImage("obstacle.png");

  let options = {
    probabilityThreshold: 0.85,
  };
  worldClassifier = ml5.soundClassifier("SpeechCommands18w", options);
}
function setup() {
  createCanvas(800, 600);
  player = new Player();
  worldClassifier.classify(herdword);
}

function herdword(error, results) {
  if (results[0].label === "up") player.jump();
}

function keyPressed() {
  if (key === " ") {
    player.jump();
    console.log("up");
  }
}

function draw() {
  if (random(1) < 0.01) {
    obstacles.push(new Obstacle());
  }
  background(bgImage);
  player.show();
  player.move();

  for (let obs of obstacles) {
    obs.show();
    obs.move();
    if (player.collided(obs)) {
      textSize(70);
      fill(0, 102, 153);
      text(":(Game-Over):", 150, 150);
      noLoop();
    }
  }
}
