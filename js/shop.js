function upGradeSkill (kind) {
	if (kind==1) {
		if (localStorage.money >= 1000 && localStorage.shieldTime<40000) {
			localStorage.shieldTime = Number(localStorage.shieldTime)+5000;
			localStorage.money = localStorage.money-1000;
			$("#s_info").html("升级成功");
		}else if(localStorage.shieldTime==40000){
				$("#s_info").html("你已经满级了哦");
			}else{
				$("#s_info").html("您的金币不足");
			}
	};
	if (kind==2) {
		if (localStorage.money >= 1000 && localStorage.harmlessTime<17000) {
			localStorage.harmlessTime = Number(localStorage.harmlessTime)+2000;
			localStorage.money = localStorage.money-1000;
			$("#s_info").html("升级成功");
		}if(localStorage.harmlessTime==17000){
				$("#s_info").html("你已经满级了哦");
			}else{
				$("#s_info").html("您的金币不足");
			}	
	};
	$.mobile.changePage($("#shopInfo"));
}