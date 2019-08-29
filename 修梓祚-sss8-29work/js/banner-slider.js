function replace(){
	
	
var bannerimg=document.querySelectorAll('.banner-img li')
var bannerwidth=document.querySelector('.banner-img')
var indeS=1
var btnleftandright= document.querySelectorAll('.btn-leftorright')
var widthofimg=bannerimg[0].offsetWidth
var numofimg=bannerimg.length
var timerS=null;
var littbtn=document.querySelectorAll('.BTNS')
var circleofbtn=0
var speed=-30
bannerwidth.style.width=widthofimg*numofimg+'px'


autoAnimate()

//定时轮播执行函数
function autoAnimate(){
 timerS=setInterval(function(){
// 	speed=-Math.abs(speed)
slidetheimgs()
},2000)
}
//正常轮播功能函数 
function slidetheimgs(){
	 littlebtn()

	var timer=setInterval(function(){
		var left=bannerwidth.offsetLeft+speed
		bannerwidth.style.left=left+'px'
		if(speed<0)
		 {  
		 	var curindeS=0
			curindeS=indeS+1
		}
		else{
			curindeS=indeS-1
		}
		if((left<=-curindeS*widthofimg&&speed<0)||(left>=-curindeS*widthofimg&&speed>0))
		{
			clearInterval(timer)
			indeS=curindeS;
			if(indeS > numofimg-2){
				bannerwidth.style.left=-widthofimg+'px'
				indeS=1
			}
			else if(indeS <=0){
				bannerwidth.style.left=-(numofimg-2)* widthofimg+'px'
				indeS=5
			}
		}
		
	},10)
}
function littlebtn(){
	if(speed<0){
	circleofbtn++
	}
	else{
		circleofbtn--
	}
		if(circleofbtn > littbtn.length-1 ) {
		circleofbtn = 0
	}
		else if(circleofbtn  <0) {
		circleofbtn  = littbtn.length-1
	}
for(var i=0;i<littbtn.length;i++){

	littbtn[i].classList.remove('on')
}
	littbtn[circleofbtn].classList.add('on')
	
}

   for(var j=0;j<littbtn.length;j++){
	littbtn[j].dot=j
	littbtn[j].onclick=function(){

		if(this.dot<circleofbtn){
		 speed=Math.abs(speed)
         indeS=this.dot+2
         circleofbtn=this.dot+1
         slidetheimgs()
} 
		else if(this.dot>circleofbtn){
	speed=-Math.abs(speed)
	indeS=this.dot
	console.log(indeS)
	circleofbtn=this.dot-1
	slidetheimgs()
}

    	}
	}

//向右轮播
//function slidetheimgsR(){
//	var timer=setInterval(function(){
//		var left=bannerwidth.offsetLeft+20
//		bannerwidth.style.left=left+'px'
//		if(left>=-(indeS-1)*widthofimg){
//			clearInterval(timer)
//			indeS--
//			if(indeS <=0){
//				bannerwidth.style.left=-(numofimg-2)* widthofimg+'px'
//				indeS=5
//			}
//		}
//		
//	},10)
//}
//鼠标放入停止滑动
var btnenterstop = document.querySelector('.img-box')
btnenterstop.onmouseenter=function(){
	console.log(555555555)
   clearInterval(timerS)
}
btnenterstop.onmouseleave=function(){
	autoAnimate()
}

//滑动左右按钮
for(var i=0;i<btnleftandright.length;i++){
	btnleftandright[i].onclick=function(){
var className=this.className
if(className.indexOf('pre')>=0){
	speed=Math.abs(speed)
	slidetheimgs()
}
else{
	speed=-Math.abs(speed)
	slidetheimgs()
}
	}
}

//监听事件
document.addEventListener('webkitvisibilitychange',function(){

	var hiddenS=document.webkitVisibilityState;
		console.log(hiddenS)
	if(hiddenS=='hidden'){
		clearInterval(timerS)
		}
	else
	{
		autoAnimate()
	}
	}
	)
}


replace()