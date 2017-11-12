var x

function setup() {
    createCanvas(displayWidth, displayHeight, WEBGL);
    print("setup function!");
}


function draw() {
    handleAcceleration();

    background(abs(x)*25.5, 0, 255 - abs(x)*25.5);
}


function handleAcceleration() {
    x = accelerationX;
}
