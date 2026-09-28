function colourrangeselector(ScannerWidth, PFposnX, PFwidth, ScannerPX1) {
    const F_overlapPoint = PFposnX - ScannerWidth;
    const L_overlapPoint = PFposnX + PFwidth;

    return ScannerPX1 >= F_overlapPoint && ScannerPX1 <= L_overlapPoint;
}

module.exports = {
    colourrangeselector,

}

//     function colourselecto(startingpoint, endingpoint, bandwidth, bandwidth2, startingpoint2) {

//     firstkirange = endingpoint - startingpoint;

//     if (firstkirange === bandwidth) {
//         overlaprangestartingpoint = startingpoint - bandwidth2;
//         overlaprangeendingpoint = endingpoint;
//     }
//     else {
//         overlaprangestartingpoint = startingpoint2 - bandwidth;
//         overlaprangeendingpoint = startingpoint + bandwidth2;
//     }
// }   if (vertLeftScannerX < I_distance) {







