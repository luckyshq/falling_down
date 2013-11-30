function shareClick() 
{
    // var ss = document.getElementById("renren");
    // ss.style.display="none";
    var resourceUrl="";
    var pic="";
    var title="我在玩#坠梦空间#，好激动呀~";
    var description="最奇幻的旅程，就在坠梦空间~";
    var message="太好玩了，小伙伴们，我玩坠梦空间得了"+fallingdown.finalPoint+"分，你也来试试吧~";
    var rrShareParam = {
            resourceUrl : resourceUrl,  /*分享的资源Url*/
            pic : pic,      /*分享的主题图片Url*/
            title : title,      /*分享的标题*/
            description : description,  /*分享的详细描述*/
            message : message       /*分享的标题*/
        };
    rrShareOnclick(rrShareParam);
}

// function showShare()
// {
//     var ss = document.getElementById("renren");
//     ss.style.display="block";
// }