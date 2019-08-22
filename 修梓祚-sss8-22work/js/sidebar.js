//右侧导航栏互动效果
//个人中心二维码
var VIPTEXT= document.querySelectorAll('.SLIDEBAR')
      for(i=0;i<VIPTEXT.length;i++){
      VIPTEXT[i].onmouseenter=function(){
      	console.log(this.children[0])
        var VIPslide=this.children[0]
        var distancer=45;
	  var interval=setInterval(function () { 
	  	distancer-=1;
	  if(distancer<35)	{
	  	clearInterval(interval);
	  } 
	  else{
        VIPslide.style.right=distancer+'px';
	  }
	  },10)
}
      }
//    回到顶部
      var backtop=document.querySelector('.bottom-sign')
      backtop.onclick=function(){
      	var chromeecttop = document.body.scrollTop||document.documentElement.scrollTop
      	
       var timer=setInterval(function(){
       	chromeecttop-=100
 document.body.scrollTop=chromeecttop
 document.documentElement.scrollTop=chromeecttop
 if(chromeecttop<0){
 	clearInterval(timer)
 }
       },10)
      }
	  
	        //购物车 客服
	        var Shoppingcart=document.querySelectorAll('.slidecart')
	        var shoppingposition=document.querySelector('.shopping-cart-out')
	         var kefudisplay=document.querySelector('.kefuslider')
	         var shopdisplay=document.querySelector('.shoppingslider')
	  //    	shoppingright=parseInt(shoppingright)
	        	for(j=0;j<Shoppingcart.length;j++){
	         Shoppingcart[j].onclick=function(){
	        	var speed=0;
	        	var className=this.className
	        	if(className.indexOf('XO')>=0){
	        			this.classList.remove('XO')
	        			speed=-12
	        	}else{
	        		this.classList.add('XO')
	        		if(className.indexOf('shopping-cart')>=0){
	        		this.nextElementSibling.classList.remove('XO')
	        		shopdisplay.style.display='block'
	        		kefudisplay.style.display='none'
	        		}
	        		else{
	        		this.previousElementSibling.classList.remove('XO')
	        			shopdisplay.style.display='none'
	        		kefudisplay.style.display='block'
	        		}
	        	speed=12
	        	}
	        	var right=0;
	        	if(shoppingposition.currentStyle){
	        		right=shoppingposition.currentStyle.right
	        	}
	        	else{
	        		right=getComputedStyle(shoppingposition,false)['right']
	        		
	        	}
	        	
	        	right=parseInt(right)
	  //    	if(distancer>-264){
	  //    			speed=-12
	  //    		}
	  //    		else{
	  //    			speed=12
	  //    		}
	        	var interval=setInterval(function(){
	             right+=speed
	             shoppingposition.style.right=right+'px'
	             if(right>35||right<-264){
	             	clearInterval(interval)
	  			if(speed>0){
	        
	        shoppingposition.style.right=35+'px'}
	  			
	  			else{
	  			
	  			shoppingposition.style.right=-265+'px'
	  			
	  			}
	  			
	             }
	             
	  //    		distancer+=speed;
	  //    		shoppingposition.style.right=distancer+'px';
	  //    		if(distancer>=35&&speed>0||distancer<=-265&&speed<0){
	  //    			clearInterval(interval)
	  //    		}
	        	},10)
	        	}
	        }