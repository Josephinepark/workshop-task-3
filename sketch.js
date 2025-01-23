let imgs = [];
let bear, duck, fan;
let buttonStop;
let currentImage;
let isShuffling = false;

function preload() {
  bear = loadImage('images/bear.png');
  duck = loadImage('images/duck.png');
  fan = loadImage('images/fan.png')
}

function setup() {
  createCanvas(400, 400);
  background(220);

  //add button
  buttonStop = createButton('add');
  buttonStop.position(450, 400);
  buttonStop.mousePressed(addImage);

  frameRate(10);
  imgs.push(bear);
  imgs.push(duck);
  imgs.push(fan);
  currentImage = bear;
}

function draw() {

  }

function startShuffling() {
  isShuffling = true;
}

function stopShuffling() {
  isShuffling = false;
}

function addImage(){
  let w = random (10,300);
  let x = random (0,400-w);
  let y = random (0,400-w);

  filter(BLUR);
  
  currentImage = random(imgs);
  image(currentImage,x,y,w,w);

}