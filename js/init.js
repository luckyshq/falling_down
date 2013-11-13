var canvas;  
var ctx;

var img=new Image(); 
var barrierImg=new Image();
var bgImage=new Image();

var point=0;
//box 
var box = {
	x:0,
	y:0,
	width:360,
	height:640,
	mid:135
}  

var bound = {
	left:0,
	right:box.x+box.width-role.width,
	top:0,
	bottom:box.y+box.height-role.height
}

var fallingdown = {
    barrier: []
};
var unit = 20;

function draw_text () {
    ctx.font = "26px Arial";
    ctx.textAlign = "left";
    ctx.fillStyle = "#FF0000";
    ctx.fillText("Point:"+point,20,30);
}


function gameloop(time){
     var hh = fallingdown.barrier.length;
    for(var nn = 0; nn<hh; nn++){
    if ((fallingdown.barrier[nn].y <= role.y + role.height && fallingdown.barrier[nn].y+fallingdown.barrier[nn].height>role.y)) {
        if (fallingdown.barrier[nn].x <= role.x+role.width&&fallingdown.barrier[nn].x+fallingdown.barrier[nn].width>role.x) {
            fallingdown.barrier.splice(nn,1);
            hh--;
            point = 0;
        };
    };
}
    point = point+12;

    draw_role();

    draw_barrier();
    draw_text();
    var h=window.requestAnimationFrame(gameloop);
}

function initGame () {
    gameloop(Date.now);
}
    

function temppp(){

    setInterval(createBarrier,2000) ; 
}

$(function init() {
    canvas=document.getElementById("man");  
    ctx=canvas.getContext('2d');
    canvasBg=document.getElementById("bg");  
    ctxBg=canvas.getContext('2d');

    createBarrier();
    setTimeout(temppp,10000);

    img.src="images/role.png";
    barrierImg.src="images/barrier1.png";
    bgImage.src="images/sky.png";

    $("#man").on("swipeleft",function() {
        role.direction = 1;
        role.way = role.way-1;
        if (role.way<0) {
            role.way = 0;
        };
    });
    $("#man").on("swiperight",function() {
        role.direction = 2;
        role.way = role.way + 1;
        if (role.way>2) {
            role.way = 2;
        };
    });
    $(".start").on("click",function() {
        initGame();
    });
});