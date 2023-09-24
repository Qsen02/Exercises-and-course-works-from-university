var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var radius = 100;
var xcenter = 300;
var ycenter = 200;
var x = 0;
var y = radius;
var sum = 3 - 2 * radius;
while(x<=y){
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