const r = require("raylib");
const g = require("./geometry")

const screenWidth = 300;
const screenHeight = 150;
const FPS = 60;

let vertLeftScannerX = 0;
const vertLeftScannerY = 0;
const vertLeftScannerWidth = screenWidth / 10;
const vertLeftScannerHeight = screenHeight;

let vertRightScannerX = screenWidth / 2;
const vertRightScannerY = 0;
const vertRightScannerwidth = screenWidth / 10;
const vertRightScannerheight = screenHeight;

const horizonScannerX = 0;
let horizonScannerY = 0;
const horizonScannerwidth = screenWidth;
const horizonScannerheight = screenHeight / 10;

const vertLeftPFieldX = (screenWidth / 2 - 30);
const vertLeftPFieldY = 0;
const vertLeftPFieldWidth = screenWidth / 15;
const vertLeftPFieldHeight = screenHeight;

const vertRightPFieldX = screenWidth / 2 + 30;
const vertRightPFieldY = 0;
const vertRightPFieldwidth = screenWidth / 15;
const vertRightPFieldHeight = screenHeight;

const horizonPFieldX = 0;
const horizonPFieldY = screenWidth / 6;
const horizonPFieldWidth = screenWidth;
const horizonPFieldHeight = screenHeight / 5;

let LeftScannerColour = r.WHITE;
let RightScannerColour = r.WHITE;
let Horizon_ScannerColour = r.WHITE;

let I_distance = screenWidth / 2 - vertLeftScannerWidth;
let Idistance_1 = screenWidth - vertRightScannerwidth;
let I_distance2 = screenHeight - horizonScannerheight;


function running() {
    return !r.WindowShouldClose();
}

function setup() {
    r.InitWindow(screenWidth, screenHeight, "Partical Detctor");
    r.SetTargetFPS(FPS);
}

function update() {

    if (vertLeftScannerX < I_distance) {
        vertLeftScannerX = vertLeftScannerX + 1;
    }
    if (vertLeftScannerX === I_distance) {
        I_distance = 0;
    }
    if (vertLeftScannerX === 0) {
        I_distance = screenWidth / 2 - vertLeftScannerWidth;
    }
    if (I_distance < vertLeftScannerX) {
        vertLeftScannerX = vertLeftScannerX - 1;
    }


    //vertLeftScannerX = g.l(vertLeftScannerX, I_distance);


    if (vertRightScannerX < Idistance_1) {
        vertRightScannerX = vertRightScannerX + 1;
    }

    if (vertRightScannerX === Idistance_1) {
        Idistance_1 = 0;
    }

    if (vertRightScannerX === screenWidth / 2) {
        Idistance_1 = screenWidth - vertRightScannerwidth;
    }

    if (Idistance_1 < vertRightScannerX) {
        vertRightScannerX = vertRightScannerX - 1;
    }



    if (horizonScannerY < I_distance2) {
        horizonScannerY = horizonScannerY + 1;
    }
    if (horizonScannerY === I_distance2) {
        I_distance2 = 0;
    }
    if (horizonScannerY === 0) {
        I_distance2 = screenHeight - horizonScannerheight;
    }
    if (I_distance2 < horizonScannerY) {
        horizonScannerY = horizonScannerY - 1;
    }

    LeftScannerColour = RightScannerColour = Horizon_ScannerColour = r.WHITE;
    let a = g.colourrangeselector(vertLeftScannerWidth, vertLeftPFieldX, vertLeftPFieldWidth, vertLeftScannerX)
    if (a) { LeftScannerColour = r.RED }

    let b = g.colourrangeselector(vertRightScannerwidth, vertRightPFieldX, vertRightPFieldwidth, vertRightScannerX)
    if (b) { RightScannerColour = r.RED }

    let c = g.colourrangeselector(horizonScannerheight, horizonPFieldY, horizonPFieldHeight, horizonScannerY)
    if (c) { Horizon_ScannerColour = r.RED }
}

function draw() {
    r.BeginDrawing()
    r.ClearBackground(r.BLACK);

    r.DrawRectangle(horizonPFieldX, horizonPFieldY, horizonPFieldWidth, horizonPFieldHeight, r.BLUE)
    r.DrawRectangle(vertRightPFieldX, vertRightPFieldY, vertRightPFieldwidth, vertRightPFieldHeight, r.BLUE)
    r.DrawRectangle(vertLeftPFieldX, vertLeftPFieldY, vertLeftPFieldWidth, vertLeftPFieldHeight, r.BLUE)

    r.DrawRectangle(vertRightScannerX, vertRightScannerY, vertRightScannerwidth, vertRightScannerheight, RightScannerColour)
    r.DrawRectangle(vertLeftScannerX, vertLeftScannerY, vertLeftScannerWidth, vertLeftScannerHeight, LeftScannerColour)
    r.DrawRectangle(horizonScannerX, horizonScannerY, horizonScannerwidth, horizonScannerheight, Horizon_ScannerColour)

    r.EndDrawing();

}
function teardown() {
    r.CloseWindow();
}

module.exports = {
    running,
    setup,
    update,
    draw,
    teardown,
}


