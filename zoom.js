// JavaScript source code
var zoom = 1;
var zoomStep = 0.2;

document.getElementById("zoomIn").addEventListener("click", function () {
    zoom += zoomStep;
    document.getElementById("zoomtext").style.transform = "scale(" + zoom + ")";
});
document.getElementById("zoomOut").addEventListener("click", function () {
    if (zoom > zoomStep) {
        zoom -= zoomStep;
        document.getElementById("zoomtext").style.transform = "scale(" + zoom + ")";
    }
});