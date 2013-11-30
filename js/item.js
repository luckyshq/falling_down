// var item = {
//  x:170,
//  y:300,
//  width:32,
//  height:48,
//  way:1,
//     status:0,
//     speed:10
// }

function item(x_position,type)
{
    this.x=15 + 120 * x_position;
    this.y=640;
    this.width=53;
    this.height=53;
    this.way= 0;
    this.status=0;
    this.speed=4;
    this.type = type; //type defines what kind of item it is .0 stands for harmless,1 stands for shield......
    this.s=0;
    this.h=0;
}

function draw_item() 
{
    // ctx.fillStyle = "#007FFF";
    var nn = 0; 
    while(nn<fallingdown.item.length)
    {
        if(fallingdown.item[nn].type == 9)
        {
            ctx.drawImage(item_shield_Img,
                            fallingdown.item[nn].s*70,
                            fallingdown.item[nn].h*70,
                            70,
                            70,
                            fallingdown.item[nn].x,
                            fallingdown.item[nn].y,
                            fallingdown.item[nn].width+60,
                            fallingdown.item[nn].height+60);
            fallingdown.item[nn].s=fallingdown.item[nn].s+1;
            if (fallingdown.item[nn].s==4) {
                fallingdown.item[nn].s=0;
                fallingdown.item[nn].h=(fallingdown.item[nn].h+1)%3;
            };
        }
        if(fallingdown.item[nn].type ==8)
        {
            ctx.drawImage(item_harmless_Img,
                            fallingdown.item[nn].s*70,
                            fallingdown.item[nn].h*70,
                            70,
                            70,
                            fallingdown.item[nn].x,
                            fallingdown.item[nn].y,
                            fallingdown.item[nn].width+60,
                            fallingdown.item[nn].height+60
                           );
            fallingdown.item[nn].s=fallingdown.item[nn].s+1;
            if (fallingdown.item[nn].s==4) {
                fallingdown.item[nn].s=0;
                fallingdown.item[nn].h=(fallingdown.item[nn].h+1)%3;
            };
        }
        if(fallingdown.item[nn].type ==7)
        {
            ctx.drawImage(item_money_Img,
                            fallingdown.item[nn].x + 15,
                            fallingdown.item[nn].y,
                            fallingdown.item[nn].width,
                            fallingdown.item[nn].height
                           );
        }

        if(fallingdown.item[nn].type ==6)
        {
            ctx.drawImage(item_diamond_Img,
                            fallingdown.item[nn].x + 15,
                            fallingdown.item[nn].y,
                            fallingdown.item[nn].width,
                            fallingdown.item[nn].height
                           );
        }
        //fallingdown.item[nn].status=(fallingdown.item[nn].status+1)%9;

        fallingdown.item[nn].y = fallingdown.item[nn].y - fallingdown.item[nn].speed * fallingdown.ctrl_speed;
        if (fallingdown.item[nn].y < 0) {
            fallingdown.item.splice(nn,1);
        }else{
            nn++;
        }
    }
}
//the atribution of effect image
var shieldAmt={
    x:0,
    y:0,
    width:150,
    height:150,
    s:0,
    h:0
}