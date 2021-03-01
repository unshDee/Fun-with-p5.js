let walls = [];
let particle;
let xoff = 0;
let yoff = 1000;

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 5; ++i) {
    walls[i] = new Boundary(random(width), random(height), random(width), random(height));
  }
  walls.push(new Boundary(0, 0, width, 0));
  walls.push(new Boundary(0, height, width, height));
  walls.push(new Boundary(0, 0, 0, height));
  walls.push(new Boundary(width, 0, width, height));
  particle = new Particle();
}

function draw() {
  background(0);
  for (let wall of walls) {
    wall.show();
  }
  // particle.update(noise(xoff) * width, noise(yoff) * height);
  particle.update(mouseX, mouseY);
  particle.show();
  particle.look(walls);
  xoff += 0.01;
  yoff += 0.01;
}