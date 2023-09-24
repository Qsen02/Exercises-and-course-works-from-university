var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.moveTo(300, 300);
ctx.lineTo(500, 300);
ctx.lineTo(500, 500);
ctx.lineTo(300, 500);
ctx.lineTo(300, 300);
for (var i = 0; i <= 9; i++) {
    ctx.moveTo(300 + i * 20, 300);
    ctx.lineTo(500, 300 + (i + 1) * 20);
    ctx.moveTo(300 + i * 20, 500);
    ctx.lineTo(300, 300 + (i + 1) * 20);

    ctx.moveTo(300, 300 + (i + 1) * 20);
    ctx.lineTo(500 - i * 20, 300);
    ctx.moveTo(500, 300 + (i + 1) * 20);
    ctx.lineTo(500 - i * 20, 500);
    ctx.stroke();
}