const r = require("raylib");
const rd =
    function running() {
        return !r.WindowShouldClose();
    }

function setup() { }

function update() { }

function draw() { }

function teardown() {
    r.CloseWindow();
}

module.exports = {
    running,
    setup,
    update,
    draw,
    teardown,
};