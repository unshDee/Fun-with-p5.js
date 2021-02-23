let angle = 0;
let slider;

function setup() {
    createCanvas(1000, 700);
    slider = createSlider(0, TWO_PI, PI / 4, 0.01);
}

function draw() {
    background(50);
    stroke(255);
    translate(500, height);
    angle = slider.value();
    branch(200, 10);
}

function branch(len, weight) {
    strokeWeight(weight);
    line(0, 0, 0, -len);
    translate(0, -len);

    if (len > 3) {
        push();
        rotate(angle);
        branch(len * 0.667, weight*0.65);
        pop();
        push();
        rotate(-angle);
        branch(len * 0.667, weight*0.65);
        pop();
    }
}