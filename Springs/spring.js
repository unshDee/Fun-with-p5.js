class Spring {
  constructor(k, restLength, a, b) {
    this.k = k;
    this.restLength = restLength;
    this.a = a;
    this.b = b;
  }

  update() {
    let force = p5.Vector.sub(this.b.position, this.a.position);
    
    let x = force.mag() - this.restLength; // displacement
    
    force.normalize(); // creating the unit vector just for the direction
    
    force.mult(this.k * x); // adding direction to the force
    
    this.a.applyForce(force);
    force.mult(-1);
    this.b.applyForce(force);
  }

  show() {
    strokeWeight(4);
    stroke(255);
    line(
      this.a.position.x,
      this.a.position.y,
      this.b.position.x,
      this.b.position.y
    );
  }
}