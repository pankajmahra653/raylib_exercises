const r = require("raylib");


function colourrangeselector(ScannerWidth, partFieldPosition, PartFieldWidth, ScannerPX) {
    const First_OverlapPoint = partFieldPosition - ScannerWidth;
    const Last_overlapPoint = partFieldPosition + PartFieldWidth;

    return ScannerPX >= First_OverlapPoint && ScannerPX <= Last_overlapPoint ? r.RED : r.WHITE;
}

function boundryCheck(start, ScannerPosition, endpoint) {

    return ScannerPosition < start || ScannerPosition > endpoint;
}


module.exports = {
    colourrangeselector,
    boundryCheck
}
