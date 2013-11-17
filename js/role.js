//role 
var role = {
	x:135,
	y:250,
	width:87,
	height:107,
	status:0,
	direction:0,
    way:1,

    sheld:1,          //1 role has a sheld
    harmless:0,       //0 role is not harmless
    dead:0            //0 stands for not dead , 1 stands for dead ,2 stands for danger 
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
	
    
    ctx.lineWidth="5";  
    ctx.strokeStyle="rgb(0,0,0)";  
    ctx.beginPath();  
    ctx.strokeRect(box.x,box.y,box.width,box.height);    
    // var img=new Image();  
    // img.src="images/man.png"; 
    // if (role.direction!=0) {
    // 	move_role();  	
    // }

    // ctx.drawImage(img,role.status*role.width,role.direction*role.height,
    //         role.width,role.height,role.x,role.y,role.width,role.height);       
    
    // role.status=(role.status+1)%3; 

     
    if (role.direction!=0) {
        move_role();    
    }

    ctx.drawImage(img,role.status*role.width,0,
            role.width,role.height,role.x,role.y,role.width,role.height);       
    role.status=(role.status+1)%6;

    if (role.sheld==1) {
        ctx.drawImage(sheldAmtImg,sheldAmt.s*sheldAmt.width,
            sheldAmt.h*sheldAmt.height,sheldAmt.width,sheldAmt.height,
            role.x-35,role.y-20,role.width+60,role.height+50);
        sheldAmt.s=sheldAmt.s+1;
        if (sheldAmt.s==5) {
            sheldAmt.s=0;
            sheldAmt.h=(sheldAmt.h=sheldAmt.h+1)%4;
        };
    }; 
}

 $(document).keydown(function(e){
        if(g_status == 1){
            var i = 4 - gesture.length;
            if(e.which == gesture[0]){
               
                       if(gesture[i] == 37)
                           ctx_innergame.drawImage(left2_Img,20+i*90,20,50,50);
                       else if(gesture[i] == 38)
                           ctx_innergame.drawImage(up2_Img,20+i*90,20,50,50);
                       else if(gesture[i] == 39)
                           ctx_innergame.drawImage(right2_Img,20+i*90,20,50,50);
                       else 
                           ctx_innergame.drawImage(down2_Img,20+i*90,20,50,50);
               
                gesture.splice(0,1);
            }
            if(gesture.length == 0){
                $("#innergame").removeClass('cameout');
                $("#innergame").addClass('fadeout');
                g_status = 0;
            }
        }else{
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
    }
    });
