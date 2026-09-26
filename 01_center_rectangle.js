const r = require("raylib");
const screenwidth = 800;
const screenheight = 300;

r.InitWindow(screenwidth, screenheight, "rectangle");
r.SetTargetFPS(60);
function eran(screenwidth, screenheight) {
    return r.DrawRectangle(
        screenheight / 4,
        screenheight / 4,
        screenwidth - screenheight / 2,
        screenheight / 2,
        r.WHITE,
    );
}

while (!r.WindowShouldClose()) {
    r.BeginDrawing();
    r.ClearBackground(r.BLUE);
    eran(screenwidth, screenheight);
    r.EndDrawing();
}
r.CloseWindow();
