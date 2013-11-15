var barrierArray = 
[[0,0],[1,4],[1,4],
[0,0],[1,4],[1,2],
[0,0],[1,2],[0,0],
[0,0],[1,2],[0,0],
[0,0],[1,2],[0,0],
[1,2],[1,2],[1,4],
[0,0],[0,0],[1,2],
[0,0],[1,4],[0,0],
[0,0],[0,0],[1,2],
[0,0],[1,4],[1,0],
[1,2],[0,0],[1,2],
[0,0],[1,2],[0,0],
[1,6],[1,6],[0,0],
[0,0],[1,6],[1,6],
[1,6],[1,6],[0,0],
[0,0],[1,6],[1,6],
[1,6],[1,6],[0,0],
[0,0],[1,6],[1,6],
[1,4],[0,0],[1,4],
[0,0],[1,2],[1,2],
[1,2],[0,0],[0,0],
[1,4],[0,0],[0,0],
[0,0],[1,4],[1,4],
[1,2],[0,0],[1,4]];

function barrier(x,y,width,height,way,speed,status){

    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.way = way;
    this.speed = speed;
    this.status = status;
    this.type = 0;           //0 stands for fatal barrier
}


function createBarrier(){
    if(fallingdown.b_count == 24){
        fallingdown.b_count = 0;
    }
    for(var i = 0; i<3; i++){
        if(barrierArray[fallingdown.b_count][0] == 0){
            fallingdown.b_count++;
           // continue;
        }else{
            fallingdown.barrier.push(new barrier(120*i+25,640,70,70,i,barrierArray[fallingdown.b_count][1],0));
            fallingdown.b_count++;
        }
    }
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