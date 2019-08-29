(function($){
//点击添加红框
	$('.littlepic').click(function(){
	
	$(this).addClass('chosenimg')
	
	$(this).siblings().removeClass('chosenimg')
	
})
	$.fn.Bannermove=function(options){

	var numofimg = $(this).find('.littlepic').length
 
  	var _this = this
	
	var imgwidth = $(this).find('.littlepic').outerWidth(true)
	

	var bannerwidth=imgwidth*numofimg
//	console.log(numofimg)
//	console.log(imgwidth)
//	console.log(bannerwidth)
	
	$(this).find('.Manualbanner-box').css({
		
		width:bannerwidth

	})
	
	var displaywidth = $(this).find('.Manualbanner-box').parent().width()
	
	var leftS=0;

	$(_this).find($(options.name)).click(function(){
	console.log($(this))
	if($(this).hasClass('arrowrSRight')){
	leftS-=imgwidth
	
	$(_this).find('.Manualbanner-box').css({
		
		left:leftS
		
	})

	}
	if($(this).hasClass('arrowSleft')){
		leftS+=imgwidth
	
	$(_this).find('.Manualbanner-box').css({
		
		left:leftS
	})
		
	}
//不能往左继续点
if(leftS>=0){
     
	  $(_this).find('.Manualbanner-box').css({
		left:0
		
	})
	   leftS=0
	}
//不能往右继续店点
if(leftS<=-(bannerwidth-displaywidth)){
	$(_this).find('.Manualbanner-box').css({
		
		left:-bannerwidth+displaywidth
	})
	
	leftS=-bannerwidth+displaywidth
	
}
	
})
	}
})(jQuery)
