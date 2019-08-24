(function($){
	
		$.fn.qjzoom=function(options){
			//获取小图大图宽高
		var smallIMG = $(this).find('.small-img')	
		var smallWIDTH = smallIMG.width()
		var smallHEIGHT = smallIMG.height()
		var propwidth=0;
		var propheight=0;
		var bigWIDTH=0;
		var bigHEIGHT=0;
		var positionX=0;
		var positionY=0;
		
			//鼠标进入出现放大镜
		$(this).mouseenter(function(){
			var smallSrc=smallIMG.attr('src')
			var zoomdisplay=`<div style="width:${options.offwidth}px; height:${options.offheight}px" class="displayzoom">
							<img src="${smallSrc}" style="position:absolute" />
						</div>`
			$(this).append('<div class="Magnifier"></div>')
			$(this).append(zoomdisplay)
			var bigIMG = $(this).find('.displayzoom img')
			bigWIDTH = bigIMG.width()
			bigHEIGHT = bigIMG.height()
//计算比例得出赋值放大镜区域大小			
			var propX = smallWIDTH/bigWIDTH*options.offwidth
			var propY = smallHEIGHT/bigHEIGHT*options.offheight
			propwidth=propX;
			propheight=propY;
			$(this).find('.Magnifier').css({
				width:propX,
				height:propY
				
			})
		})
		//放大镜跟随鼠标动
		$(this).mousemove(function(event){
		var pageX=event.pageX
		var pageY=event.pageY
		
		var offsetX=$(this).offset().left
		var offsetY=$(this).offset().top
		
		
		
		
		 positionX = pageX-offsetX-propwidth/2
		 positionY = pageY-offsetY-propheight/2
		
		bigboxheight=$(this).outerHeight();
		bigboxwidth=$(this).outerWidth();
		
		positionX=positionX > 0 ? positionX: 0
		positionY=positionY > 0 ? positionY: 0

		positionX=positionX>(smallWIDTH-propwidth)?smallWIDTH-propwidth:positionX
		positionY=positionY>(smallHEIGHT-propheight)?smallHEIGHT-propheight:positionY

		$('.Magnifier').css({
			left:positionX,
			top:positionY
		})
		
		$(this).find('.displayzoom img').css({
			
			left:-positionX*bigWIDTH/smallWIDTH,
			top:-positionY*bigWIDTH/smallWIDTH
		})

	})
		//鼠标离开移除放大
		$(this).mouseleave(function(){
			$(this).find(".Magnifier").remove()
			$(this).find(".displayzoom").remove()
		})
		}
		
		
})(jQuery)
