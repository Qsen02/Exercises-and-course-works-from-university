var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var radius = 100;
var xcenter = 400;
var ycenter = 300;
var x = 0;
var y = radius;
var sum = 3 - 2 * radius;
while (x <= y) {
    ctx.beginPath();
    ctx.rect(x + xcenter, y + ycenter, 1, 1);
    ctx.fillStyle = "blue";
    ctx.fill();

    ctx.beginPath();
    ctx.rect(-x + xcenter, y + ycenter, 1, 1);
    ctx.fillStyle = "blue";
    ctx.fill();

    ctx.beginPath();
    ctx.rect(x + xcenter, -y + ycenter, 1, 1);
    ctx.fillStyle = "blue";
    ctx.fill();

    ctx.beginPath();
    ctx.rect(-x + xcenter, -y + ycenter, 1, 1);
    ctx.fillStyle = "blue";
    ctx.fill();

    ctx.beginPath();
    ctx.rect(y + xcenter, x + ycenter, 1, 1);
    ctx.fillStyle = "blue";
    ctx.fill();

    ctx.beginPath();
    ctx.rect(-y + xcenter, x + ycenter, 1, 1);
    ctx.fillStyle = "blue";
    ctx.fill();

    ctx.beginPath();
    ctx.rect(y + xcenter, -x + ycenter, 1, 1);
    ctx.fillStyle = "blue";
    ctx.fill();

    ctx.beginPath();
    ctx.rect(-y + xcenter, -x + ycenter, 1, 1);
    ctx.fillStyle = "blue";
    ctx.fill();

    if (sum <= 0) {
        sum = sum + 4 * x + 6;
    } else {
        sum = sum + 4 * (x - y) + 10;
        y = y - 1;
    }
    x = x + 1;
}
var n = 200;
var m = 100;
var radius1 = 100;
var xp = 0;
var yp = radius1;
var xpcenter = xcenter + m;
var ypcenter = ycenter + n;
var sum = 3 - 2 * radius1;
while (xp <= yp) {
    ctx.beginPath();
    ctx.rect(xp + xpcenter, yp + ypcenter, 1, 1);
    ctx.fillStyle = "blue";
    ctx.fill();

    ctx.beginPath();
    ctx.rect(-xp + xpcenter, yp + ypcenter, 1, 1);
    ctx.fillStyle = "blue";
    ctx.fill();

    ctx.beginPath();
    ctx.rect(xp + xpcenter, -yp + ypcenter, 1, 1);
    ctx.fillStyle = "blue";
    ctx.fill();

    ctx.beginPath();
    ctx.rect(-xp + xpcenter, -yp + ypcenter, 1, 1);
    ctx.fillStyle = "blue";
    ctx.fill();

    ctx.beginPath();
    ctx.rect(yp + xpcenter, xp + ypcenter, 1, 1);
    ctx.fillStyle = "blue";
    ctx.fill();

    ctx.beginPath();
    ctx.rect(-yp + xpcenter, xp + ypcenter, 1, 1);
    ctx.fillStyle = "blue";
    ctx.fill();

    ctx.beginPath();
    ctx.rect(yp + xpcenter, -xp + ypcenter, 1, 1);
    ctx.fillStyle = "blue";
    ctx.fill();

    ctx.beginPath();
    ctx.rect(-yp + xpcenter, -xp + ypcenter, 1, 1);
    ctx.fillStyle = "blue";
    ctx.fill();

    if (sum <= 0) {
        sum = sum + 4 * xp + 6;
    } else {
        sum = sum + 4 * (xp - yp) + 10;
        yp = yp - 1;
    }
    xp = xp + 1;
}