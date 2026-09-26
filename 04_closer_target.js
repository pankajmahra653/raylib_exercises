const r = require("raylib");
const ScreenWidth = 1000;
const ScreenHeight = 1000;

const soursePosX = 600;
const sourcePosY = 600;

const target1PosX = 400;
const target1PosY = 400;

const target2PosX = 800;
const target2PosY = 800;
const radius = 20;

const distance1 = ((target1PosX - soursePosX) ** 2 + (target1PosY - sourcePosY) ** 2) ** 0.5;

const distance2 = ((target2PosX - soursePosX) ** 2 + (target2PosY - sourcePosY) ** 2) ** 0.5;

r.InitWindow(ScreenWidth, ScreenHeight, "find the closer target");
r.SetTargetFPS(60);

while (!r.WindowShouldClose()) {
    r.BeginDrawing();
    r.EndDrawing();

    r.DrawCircle(soursePosX, sourcePosY, radius, r.RED);
    r.DrawCircle(target1PosX, target1PosY, radius, r.BLUE);
    r.DrawCircle(target2PosX, target2PosY, radius, r.WHITE);
    if (distance1 < distance2) {
        r.DrawLine(soursePosX, sourcePosY, target1PosX, target1PosY, r.RED)

    } else {
        r.DrawLine(soursePosX, sourcePosY, target2PosX, target2PosY, r.RED)


    }

}

r.CloseWindow