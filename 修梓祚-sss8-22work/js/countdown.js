//		抢购倒计时
	function countDown(endtime,starttime){
		if(!starttime) {
		starttime = new Date().getTime()
	}else {
		starttime = new Date(starttime).getTime()
	}
		var theday=new Date(endtime).getTime()
		var Timeleft=theday - starttime;
		if(Timeleft<=0){
			return'000000'
		}
		var hours=Math.floor(Timeleft/(1000*60*60))
		var minutes=Math.floor((Timeleft-hours*60*60*1000)/(1000*60))
		var seconds=Math.floor((Timeleft-hours*60*60*1000-minutes*60*1000)/1000)
		hours=aa(hours)
		minutes=aa(minutes)
		seconds=aa(seconds)
		return hours + minutes + seconds;

		 }
  function aa(TIMIE){
  		TIMIE = String(TIMIE)
  	if(TIMIE.length<2){
			TIMIE='0'+ TIMIE
		}
  	return TIMIE;
  }
