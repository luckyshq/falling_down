function shareClick() 
{
    // var ss = document.getElementById("renren");
    // ss.style.display="none";
    var resourceUrl="";
    var pic="";
    var title="";
    var description="";
    var message="";
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