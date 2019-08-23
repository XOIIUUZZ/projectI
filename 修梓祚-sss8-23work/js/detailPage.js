	var upbtn=$('.uploadcomments')

	upbtn.click(function(){
	var dis=$('.uploadurcomment').css('display')
	
	if(dis=='none'){

	$('.uploadurcomment').css(
		{
		display:'block'
	})
	}
	else{
		$('.uploadurcomment').css(
		{
		display:'none'
	})
	}
	}
	)
	var submitS=$('.submitbtn')
	submitS.click(function(){
		var value = $('.textare').val()
		if(value){
			if(confirm('是否提交评论')){
        var html=`<div class="Commentstext  clearfix">
								<div class="Headportrait fl-l">
									<div class="Headportraitborder">
										<img src="img/haopingtouxiang.png" class="haopingtouxiang">
									</div>
									<p class="textalign margin-b-20">i***t</p>
								</div>
								<div>
									<p><span class="font-12">好评&nbsp;|&nbsp;</span><span class="font-12">2019-11-29 16:10:45</span></p>
									<p class="font-12 line-height-middle-20 margin-t-12">${value}</p>
								</div>
							</div>`				
			$('.goods-Commentary-con').prepend(html)
			}
		}
	})
	
