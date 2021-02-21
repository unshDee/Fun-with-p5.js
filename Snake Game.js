let snake;
let scl = 20;
let food;

function setup() {
    createCanvas(600, 600);
    frameRate(10);
    snake = new Snake();
    pickLocation();
}

function draw() {
    background(0);
    snake.update();
    snake.show();

    if (snake.eat(food)) {
        pickLocation();
    }

    snake.death();

    fill(255, 0, 100);
    rect(food.x, food.y, scl, scl);
}

function pickLocation() {
    let col = floor(width / scl);
    let row = floor(height / scl);
    food = createVector(floor(random(col)), floor(random(row)));
    food.mult(scl);
}

function keyPressed() {
    if (keyCode === UP_ARROW) {
        snake.dir(0, -1);
    } else if (keyCode === DOWN_ARROW) {
        snake.dir(0, 1);
    } else if (keyCode === LEFT_ARROW) {
        snake.dir(-1, 0);
    } else if (keyCode === RIGHT_ARROW) {
        snake.dir(1, 0);
    }
}

function Snake() {
    this.x = 0;
    this.y = 0;
    this.dx = 1;
    this.dy = 0;
    this.total = 0;
    this.tail = [];

    this.death = function() {
        for(let i = 0; i < this.tail.length; ++i) {
            if (dist(this.x, this.y, this.tail[i].x, this.tail[i].y) < 1) {
                this.total = 0;
                this.tail = [];
            }
        }
    }

    this.update = function() {
        for (let i = 0; i < this.tail.length- 1; ++i) {
            this.tail[i] = this.tail[i + 1];
        }
        this.tail[this.total - 1] = createVector(this.x, this.y);

        this.x += this.dx * scl;
        this.y += this.dy * scl;

        this.x = constrain(this.x, 0, width - scl);
        this.y = constrain(this.y, 0, height - scl);
    }

    this.show = function() {
        fill(255);
        for (let i = 0; i < this.total; ++i) {
            rect(this.tail[i].x, this.tail[i].y, scl, scl);
        }
        rect(this.x, this.y, scl, scl);
    }

    this.dir = function(dx, dy) {
        this.dx = dx;
        this.dy = dy;
    }

    this.eat = function(pos) {
        if (dist(this.x, this.y, pos.x, pos.y) < 1) {
            this.total++;
            return true;
        } else
            return false;
    }
}