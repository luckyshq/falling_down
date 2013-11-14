var canvas;  
var ctx;
var img=new Image(); 
var barrierImg=new Image();
var bgImage=new Image();


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
    barrier: [], //barrier array
    g_count: 0,  //global counter ,instead of using clock
    b_count: 0,   //use which barrier
    point  : 0 
};

var unit = 20;

function draw_text () {
    ctx.font = "26px Arial";
    ctx.textAlign = "left";
    ctx.fillStyle = "#FF0000";
    ctx.fillText("Point:"+fallingdown.point,20,30);
}

function reStart(){
    fallingdown.point = 0;
    fallingdown.barrier.splice(0,fallingdown.barrier.length) ;
    fallingdown.point = 0;
    fallingdown.g_count = 0;
    fallingdown.b_count = 0;
    role.x = 135;
    role.y = 250;
    role.status = 0;
    role.direction = 0;
    role.way = 1;
}

function gameloop(time){
    fallingdown.g_count++;
    fallingdown.g_count %= 100;
     var hh = fallingdown.barrier.length;
    for(var nn = 0; nn<hh; nn++){
    if ((fallingdown.barrier[nn].y <= role.y + role.height && fallingdown.barrier[nn].y+fallingdown.barrier[nn].height>role.y)) {
        if (fallingdown.barrier[nn].x <= role.x+role.width&&fallingdown.barrier[nn].x+fallingdown.barrier[nn].width>role.x) {
             reStart();
            break;
        };
    };
}
    fallingdown.point = fallingdown.point+12;

    draw_role();
    if(fallingdown.g_count == 1){
        createBarrier();
    }
    draw_barrier();
    draw_text();
    var h=window.requestAnimationFrame(gameloop);

}

function initGame () {
    gameloop(Date.now);
}
    


$(function init() {
    canvas=document.getElementById("man");  
    ctx=canvas.getContext('2d');
    canvasBg=document.getElementById("bg");  
    ctxBg=canvas.getContext('2d');

    //createBarrier();
  

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