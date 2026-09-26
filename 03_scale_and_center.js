const r = require("raylib");

const ScreenHeight = 1000;
const ScreenWidth = 600;

const LPosX = 200;
const LPoY = 100;
const LRwidth = 80
const LRheight = 200;

const SRwidth = 1;
const SRheight = 1;

r.InitWindow(ScreenWidth, ScreenHeight, "Raylib");
r.SetTargetFPS(60);

function largerRectangle(LPosX, LPoY, LRheight, LRwidth) {
    return r.DrawRectangle(LPosX, LPoY, LRwidth, LRheight, r.WHITE);
}
function smallerRectangle(LPoX, LPoY, LRwidth, LRheight) {
    r.DrawRectangle(
        LPoX + LRwidth / 2 - SRwidth * LRwidth / 2,
        LPoY + LRheight / 2 - SRheight * LRheight / 2,
        LRwidth * SRwidth,
        SRheight * LRheight,
        r.RED,
    );
}
while (!r.WindowShouldClose()) {
    r.BeginDrawing();
    r.ClearBackground(r.BLUE);
    largerRectangle(LPosX, LPoY, LRheight, LRwidth);
    smallerRectangle(LPosX, LPoY, LRwidth, LRheight);
    r.EndDrawing();
}
r.CloseWindow();
