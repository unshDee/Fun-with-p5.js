let l1;
let l2;
let m1;
let m2;
let a1;
let a2;
let a1_v = 0;
let a2_v = 0;
const g = 0.98;
let buffer;

let angle1 = 0;
let angle2 = 0;

let px2;
let py2;

function setup() {
    createCanvas(600, 600);
    sliderName('Length 1');
    l1 = createSlider(10, 200, 100, 1);
    sliderName('Length 2');
    l2 = createSlider(10, 200, 100, 1);
    sliderName('Mass 1');
    m1 = createSlider(10, 50, 20, 1);
    sliderName('Mass 2');
    m2 = createSlider(10, 50, 20, 1);
    sliderName('Angle 1');
    angle1 = createSlider(-PI, PI, PI/4, 0.01);
    sliderName('Angle 2');
    angle2 = createSlider(-PI, PI, PI/4, 0.01);
    let angles = reset();
    a1 = angles[0];
    a2 = angles[1];
    createDiv('');
    let button = createButton('RESET');
    button.mousePressed(reset);

}

function reset() {
    buffer = createGraphics(width, height);
    buffer.background(0);
    buffer.translate(width/2, height/3);
    a1 = angle1.value();
    a2 = angle2.value();
    a1_v = 0;
    a2_v = 0;
    px2 = -1000;
    return [angle1.value(), angle2.value()];
}

function draw() {
    background(0);
    imageMode(CORNER);
    image(buffer, 0, 0, width, height);

    textSize(14);
    stroke(0);
    fill(255);
    text(`Double Pendulum by Ansh Dawda`, 10, 15)
    text(`Length 1: ${l1.value()}`, 10, 30);
    text(`Length 2: ${l2.value()}`, 10, 45);
    text(`Mass 1: ${m1.value()}`, 10, 60);
    text(`Mass 2: ${m2.value()}`, 10, 75);
    text(`Angle 1: ${angle1.value()}`, 10, 90);
    text(`Angle 2: ${angle2.value()}`, 10, 105);
    text(`Reference: https://www.myphysicslab.com/pendulum/double-pendulum-en.html`, 10, 590);
    console.log();

    let num1 = -g * (2 * m1.value() + m2.value()) * sin(a1);
    let num2 = -m2.value() * g * sin(a1 - 2 * a2);
    let num3 = -2 * sin(a1 - a2) * m2.value();
    let num4 = a2_v * a2_v * l2.value() + a1_v * a1_v * l1.value() * cos(a1 - a2);
    let den = l1.value() * (2 * m1.value() + m2.value() - m2.value() * cos(2 * a1 - 2 * a2));
    let a1_a = (num1 + num2 + num3 * num4) / den;

    num1 = 2 * sin(a1 - a2);
    num2 = a1_v * a1_v * l1.value() * (m1.value() + m2.value());
    num3 = g * (m1.value() + m2.value()) * cos(a1);
    num4 = a2_v * a2_v * l2.value() * m2.value() * cos(a1 - a2);
    den = l2.value() * (2 * m1.value() + m2.value() - m2.value() * cos(2 * a1 - 2 * a2));
    let a2_a = (num1 * (num2 + num3 + num4)) / den;

    stroke(255);
    strokeWeight(3);
    translate(width/2, height/3);

    let x1 = sin(a1) * l1.value();
    let y1 = cos(a1) * l1.value();

    let x2 = x1 + sin(a2) * l2.value();
    let y2 = y1 + cos(a2) * l2.value();

    fill(255);
    line(0, 0, x1, y1);
    ellipse(x1, y1, m1.value(), m1.value());
    fill(255);
    line(x1, y1, x2, y2);
    ellipse(x2, y2, m2.value(), m2.value());

    a1_v += a1_a;
    a2_v += a2_a;
    a1 += a1_v;
    a2 += a2_v;

    // damping the pendulum motion
    a1_v *= 0.99;
    a2_v *= 0.99;

    buffer.stroke(240);
    buffer.strokeWeight(1);
    if (frameCount > 1 && px2 != -1000) {
        buffer.line(px2, py2, x2, y2);
    }
    px2 = x2;
    py2 = y2;
}

function sliderName(name) {
    let myDiv = createDiv(name);
    myDiv.style('font-family', 'Arial');
}