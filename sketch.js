var Base,Block1,Block2,Block3,Block4,Block5,Block6;

function setup() {
  createCanvas(800,400);
  Base = new Ground(390, 205, 30, 120);
}

function draw() {
  background(255,255,255);
  Base.display();
    
  drawSprites();
}