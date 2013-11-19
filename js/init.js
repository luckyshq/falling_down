var canvas;  
var ctx;
var canvas_inner;
var ctx_innergame;
var img=new Image(); 
var barrierImg=new Image();
var bgImage=new Image();
var item_sheld_Img = new Image();
var item_money_Img = new Image();
var item_harmless_Img = new Image();
var sheldAmtImg = new Image();
var barrierDraImg = new Image();
var leftRoleImg = new Image();
var rightRoleImg = new Image();
var up_Img = new Image();
var down_Img = new Image();
var left_Img = new Image();
var right_Img = new Image();
var up2_Img = new Image();
var down2_Img = new Image();
var left2_Img = new Image();
var right2_Img = new Image();
var fog_Img = new Image();
var hAnimation;

var Audio;
//var Animation;//The start animation;

var storage = window.localStorage;
var score=[0,0,0,0,0,0,0,0,0,0];


var gesture = [];
var g_status = 0;
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
    finalPoint:0,
    total_money:0
};

var unit = 10;

function draw_text () {
    ctx.font = "26px Arial";
    ctx.textAlign = "left";
    ctx.fillStyle = "#FF0000";
    ctx.fillText("Point:"+fallingdown.point,20,30);
}

function draw_money()
{
    ctx.font = "26px Arial";
    ctx.textAlign = "right";
    ctx.fillStyle = "#FF0000";
    ctx.fillText("Money:"+fallingdown.total_money,350,30);
}

function Storage_Point(point)
{
	 var data=storage.key1;
	 var rating=null;
    score=data.split('|'); 
    var i,j;
    for (i = 0; i < score.length; i++)
    {

        if (fallingdown.finalPoint > score[i])
       {
       		for(j=score.length-1;j>i;j--)
       		score[j]=score[j-1];
          score[i]=fallingdown.finalPoint;
          storage.setItem('key1',score[0]+'|'+score[1]+'|'+score[2]+'|'+score[3]+'|'+score[4]+'|'+score[5]+'|'+score[6]+'|'+score[7]+'|'+score[8]+'|'+score[9]);
          break;
        }
    }
     for (i = 1; i <= score.length; i++)
    {
    	rating=rating+i+' --------------------------------------------------------- '+score[i-1]+'<br>';
    }
    
      $("#rating").html(rating);
}

function gameOver(){
    var hit_div = document.getElementById("hit");
    hit_div.style.display="none";
    fallingdown.finalPoint = fallingdown.point;
    Storage_Point(fallingdown.finalPoint);
    fallingdown.point = 0;
    fallingdown.barrier.splice(0,fallingdown.barrier.length) ;
    fallingdown.point = 0;
    fallingdown.g_count = 0;
    fallingdown.b_count = 0;
    gesture = [];
    g_status = 0;
    role.x = 135;
    role.y = 250;
    role.status = 0;
    role.direction = 0;
    role.way = 1;
    bgy = 0;
    $("#innergame").removeClass('cameout');
    $("#innergame").addClass('fadeout');
    $.mobile.changePage($("#gameover"));
    $("#finalPoint").html(fallingdown.finalPoint);
    window.cancelAnimationFrame(hAnimation);
}

function gameloop(time){
    if(g_status == 0){
    fallingdown.g_count++;
    fallingdown.g_count %= 100 / fallingdown.ctrl_speed;
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
    draw_money();
    if(role.dead==1)
        return;
    }
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
    canvas_inner = document.getElementById("innergame");
    ctx_innergame = canvas_inner.getContext("2d");
    //createBarrier();
  
  	 Audio=document.getElementById("audio");
     Animation=document.getElementById("animation");
  
  	if(storage.key1==null)
  	storage.setItem('key1','0|0|0|0|0|0|0|0|0|0');

    img.src="images/role.png";
    leftRoleImg = "images/role_left.png";
    rightRoleImg = "images/role_right.png";
    barrierImg.src="images/barrier1.png";
    bgImage.src="images/sky.png";
    item_sheld_Img.src="images/shield.png";
    item_money_Img.src = "images/money.png";
    item_harmless_Img.src  = "images/harmless.png";
    sheldAmtImg.src="images/sheldAmt.png";
    barrierDraImg.src="images/barrier_dragon.png";
    fog_Img.src="images/fog.png";

    up_Img.src = "images/up.png";
    down_Img.src = "images/down.png";
    left_Img.src = "images/left.png";
    right_Img.src = "images/right.png";
    
    up2_Img.src = "images/up2.png";
    down2_Img.src = "images/down2.png";
    left2_Img.src = "images/left2.png";
    right2_Img.src = "images/right2.png";

    $$("#game").swipeLeft(function() {
        if (g_status==1) {
            var i = 4 - gesture.length;
            if(gesture[0] == 37){
                ctx_innergame.drawImage(left2_Img,20+i*90,20,50,50);
                gesture.splice(0,1);
            }
            if(gesture.length == 0){
                $("#innergame").removeClass('cameout');
                $("#innergame").addClass('fadeout');
                g_status = 0;
            }           
        }
        else{
            role.direction = 1;
            role.way = role.way-1;
            if (role.way<0) {
            role.way = 0;
            };
        }
    });

    $$("#game").swipeUp(function() {
        if (g_status==1) {
            var i = 4 - gesture.length;
            if (gesture[0]==38) {
                ctx_innergame.drawImage(up2_Img,20+i*90,20,50,50);
                gesture.splice(0,1);
            };
        
            if(gesture.length == 0){
                $("#innergame").removeClass('cameout');
                $("#innergame").addClass('fadeout');
                g_status = 0;
            }
        };
    });
    
    $$("#game").swipeRight(function() {
        if (g_status==1) {
            var i = 4 - gesture.length;
            if (gesture[0]==39) {
                ctx_innergame.drawImage(right2_Img,20+i*90,20,50,50);
                gesture.splice(0,1);
            }
            if(gesture.length == 0){
                $("#innergame").removeClass('cameout');
                $("#innergame").addClass('fadeout');
                g_status = 0;
            }
        } else{
            role.direction = 2;
            role.way = role.way + 1;
            if (role.way>2) {
                role.way = 2;
            };
        };
    });

    $$("#game").swipeDown(function() {
       if (g_status==1) {
            var i = 4 - gesture.length;
            if (gesture[0]==40) {
                ctx_innergame.drawImage(up2_Img,20+i*90,20,50,50);
                gesture.splice(0,1);
            };
        if(gesture.length == 0){
                $("#innergame").removeClass('cameout');
                $("#innergame").addClass('fadeout');
                g_status = 0;
            }
        };
    });

    $(".start").on("click",function() {
//    	Animation.pause();
//    	Audio.play();
        initGame();
    });
});