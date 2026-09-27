const r = require("raylib");

const screenWidth = 1000;
const screenHeight = 1000;
const FPS = 60;

const ScannerWidth = 40;
const Scannerheight = 1000;
let ScannerPX = 0;
const ScannerPY = 0;

let Idistance = screenWidth - ScannerWidth;
function running() {
    return !r.WindowShouldClose();
}
function setup() {
    r.InitWindow(screenWidth, screenHeight, "Partical Detctor");
    r.SetTargetFPS(FPS);
}
function update() {

    if (ScannerPX < Idistance) {
        ScannerPX = ScannerPX + 2.5;
    }
    if (ScannerPX === Idistance) {
        Idistance = 0;
    }
    if (ScannerPX === 0) {
        Idistance = screenWidth - ScannerWidth;
    }
    if (Idistance < ScannerPX) {
        ScannerPX = ScannerPX - 2.5;
    }

}
function draw() {
    r.BeginDrawing()
    r.ClearBackground(r.BLACK);

    r.DrawRectangle(ScannerPX, ScannerPY, ScannerWidth, Scannerheight, r.WHITE)
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
