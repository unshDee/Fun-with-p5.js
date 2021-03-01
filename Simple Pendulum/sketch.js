let armLength;
let angle;
let angleV = 0;
let angleA;
let bob;
let origin;
let gravity = 1;

function setup() {
    createCanvas(700, 500);
    origin = createVector(350, 250);
    angle = 0.75 * PI;  // the starting angle of pendulum relative to mean position
    bob = createVector();
    armLength = 200;
}

function draw() {
    background(0);
    stroke(255);  // color of the lines
    fill(127);  // color fill of the pendulum's bob
    strokeWeight(2);  // width of the lines

    angleA = -gravity * sin(angle) / armLength;  // managing the force on the pendulum


    angleV += angleA;
    angle += angleV;

    angleV *= 0.99;

    bob.x = armLength * sin(angle) + origin.x;
    bob.y = armLength * cos(angle) + origin.y;

    line(origin.x, origin.y, bob.x, bob.y);  // x1, y1, x2, y2
    circle(bob.x, bob.y, 64);  // x, y, radius (coordinates are of the center)
}