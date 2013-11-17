//after the role hit a barrier
var hit_div;
var sensitivity = 20;

function check_role()
{
    var hh=fallingdown.barrier.length;
    hit_div = document.getElementById("hit");
    //man.addChild("div");
    //man.appendChild(div);
    if (role.harmless == 0)
    {
        for(var nn = 0; nn<hh; nn++)
        {
            if ((fallingdown.barrier[nn].y <= role.y + role.height - sensitivity && fallingdown.barrier[nn].y+fallingdown.barrier[nn].height>role.y + sensitivity)) 
            {
                if (fallingdown.barrier[nn].x <= role.x + role.width- sensitivity &&fallingdown.barrier[nn].x+fallingdown.barrier[nn].width>role.x + sensitivity) 
                {
                //hit_div.setAttribute("display","block");
                //hit_div.style.display="inline-block";
                //document.write("<p>hit</p>");
                    if(fallingdown.barrier[nn].type == 0) 
                    {
                            fallingdown.barrier.splice(nn,1);
                            hh--;
                            check_sheld();
                    }
                    else if(fallingdown.barrier[nn].type == 1){
                        fallingdown.barrier.splice(nn,1);
                         hh--;
                         innergame();
                    }
                    else
                        change_life();

                    //if (role.sheld == 0) add_sheld();



                //得到障碍物类型，判断是否必死型
                //是就 check_sheld()
                //不是就change_life()

                };
        
            };
        }
    }
    else   add_harmless();

}

function check_item () 
{
    var hh=fallingdown.item.length;

    for(var nn = 0; nn<hh; nn++)
    {
        if ((fallingdown.item[nn].y <= role.y + role.height && fallingdown.item[nn].y+fallingdown.item[nn].height>role.y )) 
        {
            if (fallingdown.item[nn].x <= role.x + role.width &&fallingdown.item[nn].x+fallingdown.item[nn].width>role.x ) 
            {


                if(fallingdown.item[nn].type == 8) add_harmless();
                if(fallingdown.item[nn].type == 9) add_sheld();
                fallingdown.item.splice(nn,1)
            }
        
        }
    }

}

function check_sheld()
{
    //hit_div = document.getElementById("hit");
    if (role.sheld == 0) 
    {
        dead();
    }
    else role.sheld=0; 
}

function change_life()
{
    if (role.dead == 0 && role.sheld == 0) role.dead =2;
    else if (role.dead == 2 && role.sheld == 0) role.dead =1;
}

function pauseGame()
{
    cancelAnimationFrame(hAnimation);
}

function continueGame () {
    gameloop();
}

function add_sheld()
{
    role.sheld = 1;
    setTimeout(function()
                {
                    role.sheld = 0;
                },10000);
}

function add_harmless()
{
    fallingdown.ctrl_speed = 5;
    role.harmless = 1;
    setTimeout(function()
                {
                    fallingdown.ctrl_speed = 1;
                    role.harmless = 0;
                },5000);

}

function dead()
{
    role.dead=1;
    pauseGame();
    hit_div.style.display="inline-block";
    //user choose to live or not
    //gameOver();
}

function reLife () {
    role.dead = 0;
    hit_div.style.display="none";
    continueGame();
}