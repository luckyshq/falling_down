function barrier(x,y,width,height,way,speed){

    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.way = way;
    this.speed = speed;
}


function createBarrier(){
    var x = parseInt(Math.random()*3);
    var y = parseInt(Math.random()*3);
    while(y == x){
        y = parseInt(Math.random()*3);
    }
    fallingdown.barrier.push(new barrier(120*x,640,120,50,x,2));
    fallingdown.barrier.push(new barrier(120*y,640,120,50,y,4));
}


function draw_barrier () {
    ctx.fillStyle = "#007FFF";
    var hh = fallingdown.barrier.length;
    for(var nn = 0; nn<hh; nn++){
       ctx.fillRect(fallingdown.barrier[nn].x,fallingdown.barrier[nn].y,fallingdown.barrier[nn].width,fallingdown.barrier[nn].height);
        fallingdown.barrier[nn].y = fallingdown.barrier[nn].y - fallingdown.barrier[nn].speed;
        if (fallingdown.barrier[nn].y < 0) {
            fallingdown.barrier.splice(nn,1);
            hh--;
    };
    }
}