function barrier(x,y,width,height,way,speed,status){

    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.way = way;
    this.speed = speed;
    this.status = status;
}


function createBarrier(){
    var x = parseInt(Math.random()*3);
    var y = parseInt(Math.random()*3);
    while(y == x){
        y = parseInt(Math.random()*3);
    }
    fallingdown.barrier.push(new barrier(120*x,640,100,100,x,2,0));
    fallingdown.barrier.push(new barrier(120*y,640,100,100,y,2,0));
}


function draw_barrier () {
    ctx.fillStyle = "#007FFF";
    var nn = 0; 
    while(nn<fallingdown.barrier.length)
    {

       //ctx.fillRect(fallingdown.barrier[nn].x,fallingdown.barrier[nn].y,fallingdown.barrier[nn].width,fallingdown.barrier[nn].height);
       
       ctx.drawImage(barrierImg,
        fallingdown.barrier[nn].status*180,
        0,
        // fallingdown.barrier[nn].width,
        // fallingdown.barrier[nn].height,
        180,
        180,
        fallingdown.barrier[nn].x,
        fallingdown.barrier[nn].y,
        fallingdown.barrier[nn].width,
        fallingdown.barrier[nn].height);
       fallingdown.barrier[nn].status=(fallingdown.barrier[nn].status+1)%9;

       fallingdown.barrier[nn].y = fallingdown.barrier[nn].y - fallingdown.barrier[nn].speed;
        if (fallingdown.barrier[nn].y < 0) {
            fallingdown.barrier.splice(nn,1);
        }else{
            nn++;
        }
    }
}