const r = require("raylib");
const g = require("./geometry")

const screenWidth = 300;
const screenHeight = 150;
const FPS = 60;

let ScannerPX = 0;
const ScannerPY = 0;
const ScannerWidth = 20;
const Scannerheight = 150;

let ScannerPX1 = 150;
const ScannerPY1 = 0;
const Scannerwidth1 = 20;
const Scannerheight1 = 150;

const PFposnX = 120;
const PFwidth = 30;
const PFheight = 150;
const PFposnY = 0;
const PFwidth1 = 20;
const PFheight1 = 150;
const PFposnX1 = 190;
const PFposnY1 = 0;

let colour = r.WHITE;
let colour1 = r.WHITE;
let I_distance = screenWidth / 2 - ScannerWidth;
let Idistance_1 = screenWidth - Scannerwidth1;

function running() {
    return !r.WindowShouldClose();
}

function setup() {
    r.InitWindow(screenWidth, screenHeight, "Partical Detctor");
    r.SetTargetFPS(FPS);
}

function update() {

    if (ScannerPX < I_distance) {
        ScannerPX = ScannerPX + 1;
    }
    if (ScannerPX === I_distance) {
        I_distance = 0;
    }
    if (ScannerPX === 0) {
        I_distance = screenWidth / 2 - ScannerWidth;
    }
    if (I_distance < ScannerPX) {
        ScannerPX = ScannerPX - 1;
    }

    colour = r.WHITE;

    let a = g.colourrangeselector(ScannerWidth, PFposnX, PFwidth, ScannerPX)
    if (a) { colour = r.RED }



    if (ScannerPX1 < Idistance_1) {
        ScannerPX1 = ScannerPX1 + 1;
    }
    if (ScannerPX1 === Idistance_1) {
        Idistance_1 = 150;
    }
    if (ScannerPX1 === 150) {
        Idistance_1 = screenWidth - Scannerwidth1;
    }
    if (Idistance_1 < ScannerPX1) {
        ScannerPX1 = ScannerPX1 - 1;
    }

    colour1 = r.WHITE;
    let b = g.colourrangeselector(Scannerwidth1, PFposnX1, PFwidth1, ScannerPX1)
    if (b) { colour1 = r.RED }
}

function draw() {
    r.BeginDrawing()
    r.ClearBackground(r.BLACK);
    r.DrawRectangle(PFposnX1, PFposnY1, PFwidth1, PFheight1, r.BLUE)
    r.DrawRectangle(PFposnX, PFposnY, PFwidth, PFheight, r.BLUE)
    r.DrawRectangle(ScannerPX1, ScannerPY1, Scannerwidth1, Scannerheight1, colour1)
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
