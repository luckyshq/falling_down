// var item = {
// 	x:170,
// 	y:300,
// 	width:32,
// 	height:48,
// 	way:1,
//     status:0,
//     speed:10
// }

function item(type)
{
	this.x=0 + 25;
	this.y=640;
	this.width=70;
	this.height=70;
	this.way= 0;
	this.status=0;
	this.speed=10;
	this.type = type; //type defines what kind of item it is .0 stands for harmless,1 stands for sheld......
}

function draw_item() 
{
    ctx.fillStyle = "#007FFF";
    var nn = 0; 
    while(nn<fallingdown.item.length)
    {

        //ctx.fillRect(fallingdown.barrier[nn].x,fallingdown.barrier[nn].y,fallingdown.barrier[nn].width,fallingdown.barrier[nn].height);
       
        ctx.drawImage(item_sheld_Img,
        fallingdown.item[nn].status*180,
        0,
        // fallingdown.barrier[nn].width,
        // fallingdown.barrier[nn].height,
        180,
        180,
        fallingdown.item[nn].x,
        fallingdown.item[nn].y,
        fallingdown.item[nn].width,
        fallingdown.item[nn].height);
        fallingdown.item[nn].status=(fallingdown.item[nn].status+1)%9;

        fallingdown.item[nn].y = fallingdown.item[nn].y - fallingdown.item[nn].speed * fallingdown.ctrl_speed;
        if (fallingdown.item[nn].y < 0) {
            fallingdown.item.splice(nn,1);
        }else{
            nn++;
        }
    }
}
