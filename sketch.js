var moonImg;
var earthImg;
var sunImg;
var stars = [];

function preload() {
  moonImg = loadImage('assets/moon.jpg');
  earthImg = loadImage('assets/earth.jpg');
  sunImg = loadImage('assets/sun.jpg');
}


function setup() {
  createCanvas(1800, 800, WEBGL);
  angleMode(DEGREES);
  for (var i = 0; i < 400; i++)
    stars.push({
      x: random(-1800, 1800),
      y: random(-800, 800)
    });

}

function draw() {
  //camera(0, -200, 700, 0, 0, 0, 0, 1, 0);    
  background(0);


  push();
  noStroke();
  rotateY(frameCount / 2);
  translate(0, 0, 0);

  // draw sun
  texture(sunImg);
  sphere(100);

  pointLight(255, 255, 255, 0, 0, 0);
  pointLight(255, 255, 255, 0, 0, 0);

  // draw earth
  translate(300, 0, 0);
  push();
  rotateY(frameCount * 2);
  ambientMaterial('white');
  texture(earthImg);
  sphere(30);
  translate(50, 0, 0);
  ambientMaterial('white');
  texture(moonImg);
  sphere(10);
  pop();
  pop();

  drawStars();
}


function drawStars() {
  fill(0);
  //add stars to sky based on the array that is built in the setup function
  //rotates the stars as well
  stroke(255);
  for (i = 0; i < 300; i++) {
    point(stars[i].x, stars[i].y);
  }
}