//role 

//To add shield attribute and harmless attribute......

var role = {
	x:170,
	y:300,
	width:32,
	height:48,
	status:0,
	direction:0,
    way:1
}
//test
function move_role () {
	if (role.direction == 1) {
		role.x=role.x-unit;  
        if(role.x<bound.left){  
            role.x=bound.left;
            role.direction = 0;
        }
        if (role.way==1&&role.x<box.mid) {
        	role.x=box.mid;
        	role.direction = 0;
        };
	}
	if (role.direction == 2) {
		role.x=role.x+unit;  
        if(role.x>bound.right){  
            role.x=bound.right;
            role.direction = 0;
        }
        if (role.way==1&&role.x>box.mid) {
        	role.x=box.mid;
        	role.direction = 0;
        };
	}
}

function draw_role(){
	ctx.clearRect(box.x,box.y,box.width,box.height);  

    var   grd=ctx.createLinearGradient(0,0,360,640);
      grd.addColorStop(0,'#ceefff');
      grd.addColorStop(1,'#52bcff');
	
      ctx.fillStyle=grd;
      ctx.fillRect(0,0,360,640);

    ctx.lineWidth="5";  
    ctx.strokeStyle="rgb(0,0,0)";  
    ctx.beginPath();  
    ctx.strokeRect(box.x,box.y,box.width,box.height); 
       
    var img=new Image();  
    img.src="images/man.png"; 
    if (role.direction!=0) {
    	move_role();  	
    }

    ctx.drawImage(img,role.status*role.width,role.direction*role.height,
            role.width,role.height,role.x,role.y,role.width,role.height);       
    
    role.status=(role.status+1)%3; 
}

 $(document).keydown(function(e){
    	switch(e.which){
		case 37:
       		role.direction = 1;
            role.way = role.way-1;
            if (role.way<0) {
                role.way = 0;
            };
			break;
		case 39:
			role.direction = 2;
            role.way = role.way + 1;
            if (role.way>2) {
                role.way = 2;
            };
			break;
		default:  
            break; 
		}
    });
