
function innergame(){
  
        var number = parseInt(4*Math.random());
    
    for(var ii = 0; ii < 4; ii++){
    if(number == 0){
    //ctx_innergame.drawImage(left_Img,20,20,50,50);
    gesture.push(37);
    }else if(number == 1){
    //ctx_innergame.drawImage(up_Img,110,20,50,50);
    gesture.push(38);
    }else if(number == 2 ){
    //ctx_innergame.drawImage(right_Img,200,20,50,50);
    gesture.push(39);
    }else{
    // ctx_innergame.drawImage(down_Img,290,20,50,50);
    gesture.push(40);
    }
    number = parseInt(4*Math.random());
    }
    g_status = 1;
    setTimeout(check_inner,2500);
    drawInner();
}

function drawInner(){
 
    var len = gesture.length;
    for(var i = 0; i<len; i++){
       if(gesture[i] == 37)
            ctx_innergame.drawImage(arrow_Img,65,0,65,68,20+i*90,58,50,50);
        else if(gesture[i] == 38)
            ctx_innergame.drawImage(arrow_Img,0,0,65,68,20+i*90,58,50,50);
        else if(gesture[i] == 39)
            ctx_innergame.drawImage(arrow_Img,195,0,65,68,20+i*90,58,50,50);
        else 
            ctx_innergame.drawImage(arrow_Img,130,0,65,68,20+i*90,58,50,50);
    }
}
function check_inner(){
      if(g_status == 1)
       if (role.diamond>0) {
        $("#diamond").html(role.diamond);
        hit_div.style.display="inline-block";
        g_status = 2;
        //g_status = 0;
        //gesture = [];
    }else{
        gameOver();
    }
}