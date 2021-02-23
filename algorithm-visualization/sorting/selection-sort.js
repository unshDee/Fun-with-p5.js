// Insertion Sort Visualization by Ansh Dawda
// To view output, go to:
// https://editor.p5js.org/InsaanTheHuman/present/FTZ5VHbA0

let values = [];
let index = 0;

function setup() {
    createCanvas(windowWidth, windowHeight);
    for (let i = 0; i < width / 2; ++i) {
        values[i] = random(height);
    }
}

function draw() {

    if (index === values.length)
        noLoop();

    background(255);
    stroke(0);
    strokeWeight(2);
    let x = 0;
    for (let value of values) {
        line(x, 0, x, value);
        x += 2;
    }

    let pos = index;
    let temp = values[index];
    for (let i = index + 1; i < values.length; ++i) {
        if (values[pos] < values[i]) {
            pos = i;
            temp = values[i];
        }
    }
    values[pos] = values[index];
    values[index] = temp;
    if (index < values.length) {
        index++;
    }
    noStroke();
    fill(255);
    textSize(18);
    text('Selection Sort', 10, 30);
    fill(0);
    text('by Ansh Dawda', width - 140, height - 10);

}