function setup() {
  createCanvas(800, 400);
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
  fill("#e3fafa");
  circle(360, 240, 24);
}