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
    ctx.rect(x, y, 1, 1);
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

function shtrihovka(Xmin, Xmax, Ymin, Ymax, step, color) {
    for (var y = Ymin; y < Ymax; y += step) {
        var foundX = []
        var currentIndex = 0
        for (var x = Xmin; x < Xmax; x++) {


            for (var i = 0; i < Pindex; i++) {
                if (P1[i] !== x && P2[i] === y) {
                    foundX[currentIndex] = P1[i];
                    currentIndex++;
                }
            }
        }
        var lamp = 1
        for (var i = 0; i < currentIndex; i++) {
            while (foundX[i] + 1 === foundX[i + 1]) {
                if (i + 1 >= currentIndex) break;
                i++;
            }
            if (currentIndex % 2 === 0) { if (lamp === 1) { lamp = 0 } else { lamp = 1 } }


            for (var x = foundX[i]; x < foundX[i + 1]; x++) {
                if (lamp !== 0)
                    draw(x, y, color)
            }

        }

    }

}
document.getElementById("myCanvas").innerHTML = drawShablon(100, 200, 200, 300, "blue");
document.getElementById("myCanvas").innerHTML = drawShablon(200, 100, 150, 200, "blue");
document.getElementById("myCanvas").innerHTML = drawShablon(200, 200, 150, 300, "blue");
document.getElementById("myCanvas").innerHTML = shtrihovka(100, 250, 100, 350, 7, "blue");