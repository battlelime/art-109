let canvas;
let xPos = 0;
let yPos = 0;
let easing = 0.01;

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0);
    canvas.style("z-index", 0);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function draw() {
    clear();

    xPos = xPos + ((mouseX - xPos) * easing);
    yPos = yPos + ((mouseY - yPos) * easing);

    cuteLime(xPos, yPos);
}

function drawThing(_x, _y) {
    //strokeWeight(0);
    //fill(random(200, 255), random(200, 255), random(200, 255));
    //ellipse(_x, _y, 30, 30);
}

function cuteLime(_x, _y) {
    let s = 0.5;

    push();
    translate(_x, _y);

    // Outer rind
    stroke(25, 75, 25);
    strokeWeight(6);
    fill(150, 255, 150);
    ellipse(0, 0, 150 * s);

    // Inner flesh
    noStroke();
    fill(180, 255, 180);
    ellipse(0, 0, 120 * s);

    // Segment lines
    stroke(50, 150, 50);
    strokeWeight(1);
    line(0, 0, 0, -60 * s);
    line(0, 0, 42 * s, -42 * s);
    line(0, 0, 60 * s, 0);
    line(0, 0, 42 * s, 42 * s);
    line(0, 0, 0, 60 * s);
    line(0, 0, -42 * s, 42 * s);
    line(0, 0, -60 * s, 0);
    line(0, 0, -42 * s, -42 * s);

    // Center circle
    noStroke();
    fill(200, 255, 200);
    ellipse(0, 0, 15 * s);

    pop();
}