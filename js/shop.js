function upGradeSkill (kind) {
	if (kind==1) {
		if (localStorage.money >= 1000 && localStorage.shieldTime<40000) {
			localStorage.shieldTime = Number(localStorage.shieldTime)+5000;
			localStorage.money = localStorage.money-1000;
			role.shieldTime = localStorage.shieldTime;
			
			var sx=(role.shieldTime-10000)/5000*50;
        	ctx_shop[0].fillRect(0,0,sx,53);
        	ctx_shop[0].lineWidth="3";  
        	ctx_shop[0].beginPath();  
        	ctx_shop[0].strokeRect(0,0,300,53);
			
			$("#s_info").html("升级成功");
		}else if(localStorage.shieldTime==40000){
				$("#s_info").html("你已经满级了哦");
			}else{
				$("#s_info").html("您的金币不足哦");
			}
	};
	if (kind==2) {
		if (localStorage.money >= 1000 && localStorage.harmlessTime<17000) {
			localStorage.harmlessTime = Number(localStorage.harmlessTime)+2000;
			localStorage.money = localStorage.money-1000;
			role.harmlessTime = localStorage.harmlessTime;
			
			var sx=(role.harmlessTime-5000)/2000*50;
        	ctx_shop[1].fillRect(0,0,sx,53);
        	ctx_shop[1].lineWidth="3";  
        	ctx_shop[1].beginPath();  
        	ctx_shop[1].strokeRect(0,0,300,53);
			$("#s_info").html("升级成功");
		}if(localStorage.harmlessTime==17000){
				$("#s_info").html("你已经满级了哦");
			}else{
				$("#s_info").html("您的金币不足");
			}	
	};
	// $.mobile.changePage($("#shopInfo"));
}