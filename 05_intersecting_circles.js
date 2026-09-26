const r = require("raylib");

const screenWidth = 1000;
const screenHeight = 1000;
const FPS = 60;

const C1RADIUS = 80;
const C1PosX = 350;
const C1PosY = 200;

const C2RADIUS = 172;
const C2PosX = 200;
const C2PosY = 400;

const Tdistance = C1RADIUS + C2RADIUS;
const distance = ((((C2PosX - C1PosX) ** 2) + ((C2PosY - C1PosY) ** 2)) ** 0.5);

function setup() {

    r.InitWindow(screenWidth, screenHeight, "Center rectangle");
    r.SetTargetFPS(FPS);
}

function draw() {

    r.ClearBackground(r.WHITE);

    if (distance > Tdistance) {
        r.DrawCircle(C1PosX, C1PosY, C1RADIUS, r.BLACK);
        r.DrawCircle(C2PosX, C2PosY, C2RADIUS, r.BLACK);
    }
    else {
        r.DrawCircle(C1PosX, C1PosY, C1RADIUS, r.RED);
        r.DrawCircle(C2PosX, C2PosY, C2RADIUS, r.RED);

    }
}


function loop() {
    while (!r.WindowShouldClose()) {

        r.BeginDrawing();
        draw();
        r.EndDrawing();
    }
}
function main() {

    setup();
    loop();
}

main();










