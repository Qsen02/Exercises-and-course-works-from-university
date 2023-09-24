var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var x1 = 100;
var y1 = 70;
var x0 = 50;
var y0 = 25;
var x = x0;
var y = y0;
var deltax = x1 - x0;
var deltay = y1 - y0;
var s1 = Math.abs(x1 - x0);
var s2 = Math.abs(y1 - y0);
var h = 1;
if (deltax > deltay) {
    deltax = deltay;
    var interchange = 1;
} else {
    var interchange = 0;
    var e = 2 * deltay * h - deltax * h;
}
for (var i = x; i <= x1; i++) {
    ctx.beginPath();
    ctx.rect(i, y, 1, 1);
    ctx.fillStyle = "blue";
    ctx.fill();

    while (e > 0) {
        if (interchange === 1) {
            x = x + s1 * h;
        } else {
            y = y + s2 * h;
            var e = e - 2 * deltax * h;
        }
        if (interchange === 0) {
            var y = y + s2 * h;
        } else {
            x = x + s1 * h;
            e = e + 2 * deltay * h;
        }
    }
}
var k1 = 2;
var k2 = 3;
var x0p = x0 * k1;
var y0p = y0 * k2;
var x1p = x1 * k1;
var y1p = y1 * k2;
var xp = x0p;
var yp = y0p;
var deltax = x1p - x0p;
var deltay = y1p - y0p;
var s1 = Math.abs(x1p - x0p);
var s2 = Math.abs(y1p - y0p);
var h = 1;
if (deltax > deltay) {
    deltax = deltay;
    var interchange = 1;
} else {
    var interchange = 0;
    var e = 2 * deltay * h - deltax * h;
}
for (var i = xp; i <= x1p; i++) {
    ctx.beginPath();
    ctx.rect(i, yp, 1, 1);
    ctx.fillStyle = "blue";
    ctx.fill();

    while (e > 0) {
        if (interchange === 1) {
            xp = xp + s1 * h;
        } else {
            yp = yp + s2 * h;
            var e = e - 2 * deltax * h;
        }
        if (interchange === 0) {
            var yp = yp + s2 * h;
        } else {
            xp = xp + s1 * h;
            e = e + 2 * deltay * h;
        }
    }
}