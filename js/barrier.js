
var barrier = {
    x:120,
    y:640,
    width:120,
    height:50,
    way:1,
    speed:10
}


function draw_barrier () {
    ctx.fillStyle = "#007FFF";
    ctx.fillRect(barrier.x,barrier.y,barrier.width,barrier.height);
    barrier.y = barrier.y - barrier.speed;
    if (barrier.y < 0) {
        barrier.way = parseInt(Math.random()*3);
        barrier.x = 120*barrier.way;
        barrier.y = 640;
    };
}