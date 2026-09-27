function colourrangeselector(ScannerWidth, PFposnX, PFwidth, ScannerPX) {

    let F_overlapPoint = PFposnX - ScannerWidth;
    let L_overlapPoint = PFposnX + PFwidth;

    if (F_overlapPoint <= ScannerPX && ScannerPX <= L_overlapPoint) {

        return 1
    }
    {
        return 0;

    }
}
module.exports = {
    colourrangeselector,
}