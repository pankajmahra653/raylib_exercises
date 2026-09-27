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
const PFwidth1 = 20;
const PFheight2 = 1000;
const PFposnX3 = 200;
const PFposnY4 = 0;
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
        ScannerPX = ScannerPX + 0.5;
    }
    if (ScannerPX === Idistance) {
        Idistance = 0;
    }
    if (ScannerPX === 0) {
        Idistance = screenWidth - ScannerWidth;
    }
    if (Idistance < ScannerPX) {
        ScannerPX = ScannerPX - 0.5;
    } colour = r.WHITE;
    let a = g.colourrangeselector(ScannerWidth, PFposnX3, PFwidth1, ScannerPX,)
    let b = g.colourrangeselector(ScannerWidth, PFposnX, PFwidth, ScannerPX,)

    if (a || b) {
        colour = r.RED;
    }
}
function draw() {
    r.BeginDrawing()
    r.ClearBackground(r.BLACK);

    r.DrawRectangle(PFposnX, PFposnY, PFwidth, PFheight, r.BLUE)
    r.DrawRectangle(PFposnX3, PFposnY4, PFwidth1, PFheight2, r.BLUE)
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

