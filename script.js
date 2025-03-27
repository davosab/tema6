let sunX = 100;
let sunY = 100;
let sunD = 80;
let sunR = sunD/2;
let sunGap = 8;

let triBase = 20;
let triHeight = 30;

function setup() {
  createCanvas(800, 400);
  angleMode(DEGREES);
}

function draw() {
  // sky
  background("#7edbed");
  // grass
  fill("#28c752");
  stroke("#168a35");
  rect(0, 280, 800, 120);
  // house
  stroke("black");
  fill("red");
  rect(300, 150, 200, 160);
  // chimney
  fill("gray");
  rect(460, 60, 30, 90);
  // roof
  fill("brown");
  beginShape();

  vertex(280, 150);
  vertex(350, 80);
  vertex(450, 80);
  vertex(520, 150);

  endShape();
  // door
  fill("white");
  rect(330, 210, 60, 100);
  // door window
  fill("#e3fafa");
  circle(360, 240, 24);
  // door window lines
  beginShape(LINES);

  vertex(348, 240);
  vertex(372, 240);
  vertex(360, 228);
  vertex(360, 252);

  endShape();
  // knob
  fill("#cfcfcf");
  circle(378, 268, 10);
  // window
  fill("#e3fafa");
  rect(420, 200, 60, 50);
  // window lines
  line(450, 200, 450, 250);

  // sun
  fill("yellow");
  stroke("#fcc705");
  circle(sunX, sunY, sunD);
  // rays
  translate(sunX, sunY);
  triangle(sunR + sunGap, -triBase/2, sunR + sunGap, triBase/2, sunR + sunGap + triHeight, 0);
  rotate(45);
  triangle(sunR + sunGap, -triBase/2, sunR + sunGap, triBase/2, sunR + sunGap + triHeight, 0);
  rotate(90);
  triangle(sunR + sunGap, -triBase/2, sunR + sunGap, triBase/2, sunR + sunGap + triHeight, 0);
  rotate(135);
  triangle(sunR + sunGap, -triBase/2, sunR + sunGap, triBase/2, sunR + sunGap + triHeight, 0);
  rotate(180);
  triangle(sunR + sunGap, -triBase/2, sunR + sunGap, triBase/2, sunR + sunGap + triHeight, 0);
  rotate(225);
  triangle(sunR + sunGap, -triBase/2, sunR + sunGap, triBase/2, sunR + sunGap + triHeight, 0);
  rotate(270);
  triangle(sunR + sunGap, -triBase/2, sunR + sunGap, triBase/2, sunR + sunGap + triHeight, 0);
  rotate(315);
  triangle(sunR + sunGap, -triBase/2, sunR + sunGap, triBase/2, sunR + sunGap + triHeight, 0);


}