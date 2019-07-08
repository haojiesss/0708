var i = 0;
var t;
function countDown(curEle,targetTime,btnEle){
	clearInterval(t);
	var newDate = new Date(),
		difTime = targetTime.getTime() - newDate.getTime();
	if(difTime <= 0){
		clearInterval(t);
		curEle.innerText = "结束";
		return;
	}
	var	day = Math.floor( difTime / (1000*60*60*24) ),
		hours = Math.floor((difTime - (day*1000*60*60*24))/(1000*60*60)),
		minutes = Math.floor((difTime-day*1000*60*60*24-hours*1000*60*60)/(1000*60));
		secondes = Math.floor((difTime-day*1000*60*60*24-hours*1000*60*60-minutes*1000*60)/1000),
		milli = Math.floor((difTime-day*1000*60*60*24-hours*1000*60*60-minutes*1000*60-secondes*1000)/100);
		// console.log(milli);
	if(day<=0){
		curEle.innerText = addZero(hours)+"时"+addZero(minutes)+"分"+addZero(secondes)+"秒"+milli;
	}else{
		curEle.innerText = addZero(day)+"天"+addZero(hours)+"时"+addZero(minutes)+"分"+addZero(secondes)+"秒"+milli;
	}
	t = setInterval(countDown,100,curEle,targetTime);
	if(i%2 == 0){	
		if(btnEle){
			btnEle.innerText = "STOP";
			btnEle.style.color = "red";
		}
	}
	i=1;
	console.log(i)

}
function addZero(val){
	return val < 10 ? val ="0"+ val : val;
}
// console.log(t);
function stop(btnEle){
	clearInterval(t);
	i =0;
	if(btnEle){
			btnEle.innerText = "START";
		}
}