const r = require("raylib");
const g = require("./geometry")

const screenWidth = 1000;
const screenHeight = 1000;
const FPS = 60;

const ScannerWidth = 40;
const Scannerheight = 1000;
let ScannerPX = 0;
const ScannerPY = 0;
const PFwidth = 100;
const PFheight = 1000;
const PFposnX = 400;
const PFposnY = 0;
let colour = r.WHITE;
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
        ScannerPX = ScannerPX + 1;
    }
    if (ScannerPX === Idistance) {
        Idistance = 0;
    }
    if (ScannerPX === 0) {
        Idistance = screenWidth - ScannerWidth;
    }
    if (Idistance < ScannerPX) {
        ScannerPX = ScannerPX - 1;
    }
    colour = r.WHITE;

    let b = g.colourrangeselector(ScannerWidth, PFposnX, PFwidth, ScannerPX,)

    if (b) {
        colour = r.RED;
    }
}
function draw() {
    r.BeginDrawing()
    r.ClearBackground(r.BLACK);

    r.DrawRectangle(PFposnX, PFposnY, PFwidth, PFheight, r.BLUE)
    r.DrawRectangle(ScannerPX, ScannerPY, ScannerWidth, Scannerheight, colour)
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
