var canvas;  
var ctx;

var img=new Image(); 
var barrierImg=new Image();

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
    var nn = 0; 
    while(nn<fallingdown.barrier.length)
    {
    if ((fallingdown.barrier[nn].y <= role.y + role.height && fallingdown.barrier[nn].y+fallingdown.barrier[nn].height>role.y)) {
        if (fallingdown.barrier[nn].x <= role.x+role.width&&fallingdown.barrier[nn].x+fallingdown.barrier[nn].width>role.x) {
            fallingdown.barrier.splice(nn,1);
            point = 0;
<<<<<<< HEAD
        }else{
          nn++;
        }
    }else{
          nn++;
        }
  }
=======
        };
    };
}
>>>>>>> several changes
    point = point+12;

    draw_role();

    draw_barrier();
    draw_text();
    _canvasContext.drawImage(_canvasBuffer, 0, 0);
    var h=window.requestAnimationFrame(gameloop);
}

<<<<<<< HEAD
$(function init() {
	_canvas = document.getElementById('man');
      _canvasContext = _canvas.getContext('2d');
      _canvasBuffer = document.createElement('canvas');
      _canvasBuffer.width = _canvas.width;
      _canvasBuffer.height = _canvas.height;
      ctx = _canvasBuffer.getContext('2d');

     createBarrier();
    setInterval(createBarrier,2000) ; 
=======

function initGame () {
>>>>>>> several changes
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