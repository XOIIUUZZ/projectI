(function($){
	var numofimg = $('.littlepic').length
	
	var imgwidth = $('.littlepic').outerWidth(true)

	var bannerwidth=imgwidth*numofimg
	
	$('.Manualbanner-box').css({
		
		width:bannerwidth

	})

//点击添加红框
	$('.littlepic').click(function(){
	
	$(this).addClass('chosenimg')
	
	$(this).siblings().removeClass('chosenimg')
	
})

	$.fn.Bannermove=function(options){
	var leftS=0;
	
	$(options.name).click(function(){
	
	if($(this).hasClass('arrowrSRight')){
	leftS-=imgwidth
	
	$('.Manualbanner-box').css({
		
		left:leftS
	})
	}
	if($(this).hasClass('arrowSleft')){
		leftS+=imgwidth
	
	$('.Manualbanner-box').css({
		
		left:leftS
	})
		
	}
//不能往左继续点
if(leftS>=0){
     
	   $('.Manualbanner-box').css({
		left:0
		
	})
	   leftS=0
	}
//不能往右继续店点
if(leftS<=-(bannerwidth-imgwidth*5)){
	$('.Manualbanner-box').css({
		
		left:-bannerwidth+imgwidth*5
	})
	
	leftS=-bannerwidth+imgwidth*5
	
	console.log(leftS)
}
	
})
	}
})(jQuery)
