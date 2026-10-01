const r = require("raylib");
const g = require("./geometry");

const screenWidth = 1000;
const screenHeight = 1000;
const FPS = 60;

let vertLeftScannerX = 0;
const vertLeftScannerWidth = screenWidth / 10;

let vertRightScannerX = screenWidth / 2;
const vertRightScannerwidth = screenWidth / 20;

let horizonScannerY = 0;
const horizonScannerheight = screenHeight / 20;

const vertLeftPFieldX = screenWidth / 4;
const vertLeftPFieldWidth = screenWidth / 15;

const vertRightPFieldX = screenWidth / 2 + 30;
const vertRightPFieldwidth = screenWidth / 15;

const horizonPFieldY = screenWidth / 2;
const horizonPFieldHeight = screenHeight / 20

let LeftScannerColour = r.WHITE;
let RightScannerColour = r.WHITE;
let Horizon_ScannerColour = r.WHITE;

let velocityVS1 = 1;
let velocityVS2 = 2;
let velocityHS = 3;

const endPointLVS = screenWidth / 2 - vertLeftScannerWidth;
const endPointRVS = screenWidth - vertRightScannerwidth;
const endpointHS = screenHeight - horizonScannerheight;

function running() {
    return !r.WindowShouldClose();
}

function setup() {
    r.InitWindow(screenWidth, screenHeight, "Partical Detctor");
    r.SetTargetFPS(FPS);
}

function deriveVilocity(start, ScannerPosition, endpoint, velocity) {

    return g.boundryCheck(start, ScannerPosition, endpoint) ? -velocity : velocity;

}

function update() {

    velocityVS1 = deriveVilocity(0, vertLeftScannerX, endPointLVS, velocityVS1);
    vertLeftScannerX = vertLeftScannerX + velocityVS1

    velocityVS2 = deriveVilocity(screenWidth / 2, vertRightScannerX, endPointRVS, velocityVS2);
    vertRightScannerX = vertRightScannerX + velocityVS2;

    velocityHS = deriveVilocity(0, horizonScannerY, endpointHS, velocityHS)
    horizonScannerY = horizonScannerY + velocityHS;

    LeftScannerColour = g.colourrangeselector(vertLeftScannerWidth, vertLeftPFieldX, vertLeftPFieldWidth, vertLeftScannerX);
    RightScannerColour = g.colourrangeselector(vertRightScannerwidth, vertRightPFieldX, vertRightPFieldwidth, vertRightScannerX)
    Horizon_ScannerColour = g.colourrangeselector(horizonScannerheight, horizonPFieldY, horizonPFieldHeight, horizonScannerY);


}

function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);

    r.DrawRectangle(
        0, horizonPFieldY, screenWidth, horizonPFieldHeight, r.BLUE,);
    r.DrawRectangle(vertRightPFieldX, 0, vertRightPFieldwidth, screenHeight, r.BLUE,);
    r.DrawRectangle(vertLeftPFieldX, 0, vertLeftPFieldWidth, screenHeight, r.BLUE);

    r.DrawRectangle(vertRightScannerX, 0, vertRightScannerwidth, screenHeight, RightScannerColour,);
    r.DrawRectangle(vertLeftScannerX, 0, vertLeftScannerWidth, screenHeight, LeftScannerColour,);
    r.DrawRectangle(0, horizonScannerY, screenWidth, horizonScannerheight, Horizon_ScannerColour,);

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













// if (vertLeftScannerX < I_distance) {
//     vertLeftScannerX = vertLeftScannerX + 4;
// }
// if (vertLeftScannerX === I_distance) {
//     I_distance = 0;
// }
// if (vertLeftScannerX === 0) {
//     I_distance = screenWidth / 2 - vertLeftScannerWidth;
// }
// if (I_distance < vertLeftScannerX) {
//     vertLeftScannerX = vertLeftScannerWidth - 3;

//     if (vertRightScannerX < Idistance_1) {
//         vertRightScannerX = vertRightScannerX + 3;
//     }
//     if (vertRightScannerX === Idistance_1) {
//         Idistance_1 = 0;
//     }
//     if (vertRightScannerX === screenWidth / 2) {
//         Idistance_1 = screenWidth - vertRightScannerwidth;
//     }
//     if (Idistance_1 < vertRightScannerX) {
//         vertRightScannerX = vertRightScannerX - 3;
//     }
//     if (horizonScannerY < I_distance2) {
//         horizonScannerY = horizonScannerY + 3;
//     }
//     if (horizonScannerY === I_distance2) {
//         I_distance2 = 0;
//     }
//     if (horizonScannerY === 0) {
//         I_distance2 = screenHeight - horizonScannerheight;
//     }
//     if (I_distance2 < horizonScannerY) {
//         horizonScannerY = horizonScannerY - 3;
//     }