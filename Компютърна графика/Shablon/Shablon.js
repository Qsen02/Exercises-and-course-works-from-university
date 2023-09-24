var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var Pindex = 0;
var P1 = [];
var P2 = [];

function draw(x, y, color) {
    P1[Pindex] = x;
    P2[Pindex] = y;
    Pindex++

    ctx.beginPath();
    ctx.rect(y, x, 1, 1);
    ctx.fillStyle = color;
    ctx.fill();
}

function drawShablon(x0, x1, y0, y1, color) {
    var deltaX = Math.abs(x1 - x0);
    var deltaY = Math.abs(y1 - y0);
    var signX = x0 < x1 ? 1 : -1;
    var signY = y0 < y1 ? 1 : -1;
    var err = deltaX - deltaY;

    draw(y1, x1, color);

    while (x0 != x1 || y0 != y1) {
        draw(x0, y0, color);
        var err2 = err * 2;

        if (err2 > -deltaY) {
            err -= deltaY;
            x0 += signX;
        }

        if (err2 < deltaX) {
            err += deltaX;
            y0 += signY;
        }
    }
}

document.getElementById("myCanvas").innerHTML = drawShablon(150, 200, 175, 100, "blue");
document.getElementById("myCanvas").innerHTML = drawShablon(150, 150, 175, 250, "blue");
document.getElementById("myCanvas").innerHTML = drawShablon(300, 200, 150, 100, "blue");
document.getElementById("myCanvas").innerHTML = drawShablon(300, 300, 150, 250, "blue");
document.getElementById("myCanvas").innerHTML = drawShablon(300, 200, 250, 200, "blue");
document.getElementById("myCanvas").innerHTML = drawShablon(200, 150, 200, 250, "blue");