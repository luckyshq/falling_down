//role 
var role = {
	x:135,
	y:250,
	width:100,
	height:100,
	status:0,
	direction:0,
    way:1,

    diamond:100,          //num of diamond ,can relife
    shield:0,          //1 role has a shield
    shieldTime:5000,
    s_fade:0,
    harmless:0,       //0 role is not harmless
    harmlessTime:5000,
    h_fade:0,
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
	
    
    // ctx.lineWidth="5";  
    // ctx.strokeStyle="rgb(0,0,0)";  
    // ctx.beginPath();  
    // ctx.strokeRect(box.x,box.y,box.width,box.height);    

    if (role.direction!=0) {
    	move_role();  	
    }

    ctx.drawImage(img,role.status*role.width,role.direction*role.height,
            role.width,role.height,role.x,role.y,role.width,role.height);       
    
    role.status=(role.status+1)%6; 

     
    // if (role.direction!=0) {
    //     move_role();    
    // }

    // ctx.drawImage(img,role.status*role.width,0,
    //         role.width,role.height,role.x,role.y,role.width,role.height);       
    // role.status=(role.status+1)%6;

    if (role.shield==1) {
        ctx.drawImage(shieldAmtImg,shieldAmt.s*shieldAmt.width,
            shieldAmt.h*shieldAmt.height,shieldAmt.width,shieldAmt.height,
            role.x-25,role.y-25,role.width+80,role.height+70);
        shieldAmt.s=shieldAmt.s+1;
        if (shieldAmt.s==4) {
            shieldAmt.s=0;
            shieldAmt.h=(shieldAmt.h=shieldAmt.h+1)%3;
        };

        if (role.status==5&&role.s_fade==1) {

        } else{
            ctx.drawImage(shieldIcon,
            0,0,53,53,
            270,0,40,40
            );
        };
        
    }; 

    if (role.harmless==1) {
        if (role.status==5&&role.h_fade==1) {

        } else{
            ctx.drawImage(harmlessIcon,
            0,0,53,53,
            310,0,40,40
            );
        };
        
    };
}

 $(document).keydown(function(e){
        if(g_status == 1){
            var i = 4 - gesture.length;
            if(e.which == gesture[0]){
               
                       if(gesture[0] == 37)
                           ctx_innergame.drawImage(arrow_Img,65,68,65,68,20+i*90,60,50,50);
                       else if(gesture[0] == 38)
                           ctx_innergame.drawImage(arrow_Img,0,68,65,68,20+i*90,60,50,50);
                       else if(gesture[0] == 39)
                           ctx_innergame.drawImage(arrow_Img,195,68,65,68,20+i*90,60,50,50);
                       else 
                          ctx_innergame.drawImage(arrow_Img,130,68,65,68,20+i*90,60,50,50);
               
                gesture.splice(0,1);
            }
            if(gesture.length == 0){
                  g_status = 0;
            }
        }else if(g_status == 0){
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
