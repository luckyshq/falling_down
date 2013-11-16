var canvas;  
var ctx;
var img=new Image(); 
var barrierImg=new Image();
var bgImage=new Image();
var item_sheld_Img = new Image();
var leftRoleImg = new Image();
var rightRoleImg = new Image();
var hAnimation;

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
    item:[],
    g_count: 0,  //global counter ,instead of using clock
    b_count: 0,   //use which barrier
    ctrl_speed: 1,  //control the speed of every barrier
    point  : 0 ,
    finalPoint:0
};

var unit = 20;

function draw_text () {
    ctx.font = "26px Arial";
    ctx.textAlign = "left";
    ctx.fillStyle = "#FF0000";
    ctx.fillText("Point:"+fallingdown.point,20,30);
}

function gameOver(){
    var hit_div = document.getElementById("hit");
    hit_div.style.display="none";
    fallingdown.finalPoint = fallingdown.point;
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
    bgy = 0;
    $.mobile.changePage($("#gameover"));
    $("#finalPoint").html(fallingdown.finalPoint);
    //window.cancelAnimationFrame(hAnimation);
}

function gameloop(time){
    fallingdown.g_count++;
    fallingdown.g_count %= 100;
     var hh = fallingdown.barrier.length;
    // for(var nn = 0; nn<hh; nn++){
    // if ((fallingdown.barrier[nn].y <= role.y + role.height && fallingdown.barrier[nn].y+fallingdown.barrier[nn].height>role.y)) {
    //     if (fallingdown.barrier[nn].x <= role.x+role.width&&fallingdown.barrier[nn].x+fallingdown.barrier[nn].width>role.x) {
    //          gameOver();
    //         break;
    //     };
    // };
    // }
    fallingdown.point = fallingdown.point+12;
    draw_bg();
    draw_role();
    
    if(fallingdown.g_count == 1){
        createBarrier();
    }
    draw_barrier();
    draw_item();
    check_role();
    check_item();
    draw_text();
    if(role.dead==1)
        return;
    hAnimation=window.requestAnimationFrame(gameloop);

}

function initGame () {
    role.dead=0;
    gameloop(Date.now);
}
    


$(function init() {
    canvas=document.getElementById("man");  
    ctx=canvas.getContext('2d');
    canvasBg=document.getElementById("bg");  
    ctxBg=canvas.getContext('2d');

    //createBarrier();
  

    img.src="images/role.png";
    leftRoleImg = "images/role_left.png";
    rightRoleImg = "images/role_right.png";
    barrierImg.src="images/barrier1.png";
    bgImage.src="images/sky.png";
    item_sheld_Img.src="images/sheld.png";

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