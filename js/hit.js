//after the role hit a barrier
var hit_div;
var sensitivity = 20;
var r_role = 40;
var r_barrier = 30;


function check_role()
{
    var hh=fallingdown.barrier.length;
    hit_div = document.getElementById("hit");
    if (role.harmless == 0)
    {
        for(var nn = 0; nn<hh; nn++)
        {
            if (getDistance(role.x + 44,role.y + 54,fallingdown.barrier[nn].x+35,fallingdown.barrier[nn].y+35,fallingdown.barrier[nn].type)
                 < getTwice(r_role + r_barrier))
            {
                if(fallingdown.barrier[nn].kind == 1||fallingdown.barrier[nn].kind == 2||fallingdown.barrier[nn].kind == 3) 
                {
                    fallingdown.barrier.splice(nn,1);
                    hh--;
                    check_sheld();
                }
                else if(fallingdown.barrier[nn].kind == 10)
                {
                    fallingdown.barrier.splice(nn,1);
                    hh--;
                    innergame();
                }
                //得到障碍物类型，判断是否必死型
                //是就 check_sheld()
                //不是就change_life()
        
            }
        }
    }
    //else   add_harmless();
}

function getDistance(x1,y1,x2,y2,type)
{
    if(type == 2)
    {

    }
    if(type == 3)
    {

    }
    var res =  getTwice(x1-x2)+ getTwice(y1-y2);
    return res;

}

function getTwice(x)
{
    return (x*x);
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
                if(fallingdown.item[nn].type == 7) add_money();
                if(fallingdown.item[nn].type == 8) add_harmless();
                if(fallingdown.item[nn].type == 9) add_sheld();
                fallingdown.item.splice(nn,1);
                hh--;
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

function add_money()
{
    //首先要获取本地存储的total_money
    fallingdown.total_money += 30;
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