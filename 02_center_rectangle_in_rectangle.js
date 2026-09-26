const r = require("raylib");
const Screenwidth = 1000;
const Screenheight = 1000;

const LRwidth = 200;
const LRheight = 400;
const LRpoinX = 430;
const LRpoinY = 200;

const SRheight = 150;
const SRwidth = 200;

r.SetTargetFPS(60);
r.InitWindow(Screenwidth, Screenheight, "Raylib");
function largerRectangle(LRwidth, LRheight) {

    return r.DrawRectangle(LRpoinX, LRpoinY, LRwidth, LRheight, r.WHITE);
}
function smallerRectangle(SRheight, SRwidth) {
    r.DrawRectangle(
        LRpoinX + LRwidth / 2 - SRwidth / 2,
        LRpoinY + LRheight / 2 - SRheight / 2,
        SRwidth,
        SRheight,
        r.RED,
    );
}
while (!r.WindowShouldClose()) {
    r.BeginDrawing();
    r.ClearBackground(r.BLUE);

    largerRectangle(LRwidth, LRheight);

    smallerRectangle(SRheight, SRwidth);
    r.EndDrawing();
}
r.CloseWindow();
