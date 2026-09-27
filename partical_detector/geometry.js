function colourrangeselector(ScannerWidth, PFposnX, PFwidth, ScannerPX1) {
    let F_overlapPoint = PFposnX - ScannerWidth;
    let L_overlapPoint = PFposnX + PFwidth;

    return ScannerPX1 >= F_overlapPoint && ScannerPX1 <= L_overlapPoint;
}


module.exports = {
    colourrangeselector,

}