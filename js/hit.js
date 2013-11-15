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
                    if(fallingdown.barrier[nn].type == 0) check_sheld();
                    else change_life();

                    //if (role.sheld == 0) add_sheld();



                //得到障碍物类型，判断是否必死型
                //是就 check_sheld()
                //不是就change_life()

                };
        
            };
        }
    }
    else   
    {
        var t_count=0;
        fallingdown.ctrl_speed = 5;
        role.harmless = 1;
        setTimeout(function()
                    {
                        fallingdown.ctrl_speed = 1;
                        role.harmless = 0;
                    },5000);
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

}

function add_sheld()
{
    role.sheld = 1;
}

function dead()
{
    // pauseGame();
    // hit_div.style.display="inline-block";
    //user choose to live or not
    gameOver();
}