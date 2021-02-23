let values = [];
let index = 1;

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

    let key = values[index];
    let j = index - 1;

    while (j >= 0 && key > values[j]) {
        values[j + 1] = values[j];
        --j;
    }
    values[j + 1] = key;

    if (index < values.length) {
        ++index;
    }

    noStroke();
    fill(255);
    textSize(18);
    text('Insertion Sort', 10, 30);
    fill(0);
    text('by Ansh Dawda', width - 140, height - 10);
}