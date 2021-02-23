let values = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
    for (let i = 0; i < width / 2; ++i) {
        values[i] = random(height);
    }
}

function draw() {
    background(255);
    stroke(0);
    strokeWeight(2);
    let x = 0;
    for (let value of values) {
        line(x, 0, x, value);
        x += 2;
    }
    for (let i = 1; i < values.length; ++i) {
        if (values[i - 1] < values[i]) {
            let temp = values[i - 1];
            values[i - 1] = values[i];
            values[i] = temp;
        }
    }
    noStroke();
    fill(255);
    textSize(18);
    text('Bubble Sort', 10, 30);
    fill(0);
    text('by Ansh Dawda', width - 140, height - 10);
}