let gravity;
let particles = [];
let springs = [];
let spacing = 25;

function setup() {
  createCanvas(windowWidth, windowHeight);

  for (let i = 0; i < 10; ++i) {
    particles[i] = new Particle(width / 2, i * spacing);
    if (i != 0) {
      let a = particles[i];
      let b = particles[i - 1];
      let spring = new Spring(0.08, spacing, a, b);
      springs.push(spring);
    }
  }

  particles[0].locked = true;

  gravity = createVector(0, 0.1);
}

function draw() {
  background(112, 50, 126);

  for (let s of springs) {
    s.update();
    // s.show();
  }
  
  noFill();
  stroke(255);
  // strokeWeight(8);
  // particles[particles.length - 1].size = 70;
  beginShape();
  curveVertex(particles[0].position.x, particles[0].position.y);
  for (let p of particles) {
    p.applyForce(gravity);
    p.update();
    p.show();
    curveVertex(p.position.x, p.position.y);
  }
  curveVertex(particles[particles.length - 1].position.x, particles[particles.length - 1].position.y);
  endShape();
  
  fill(255);

  if (mouseIsPressed) {
    particles[particles.length - 1].position.set(mouseX, mouseY);
    particles[particles.length - 1].velocity.set(0, 0);
  }

}