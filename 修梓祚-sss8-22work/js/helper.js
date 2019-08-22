	$('.textitselfbtnS1').click(function(){
	var btn=$(this)
	if(btn.find(".RIGHT-ARROW").hasClass('showon')){
		
		btn.find(".RIGHT-ARROW").removeClass('showon')
		btn.find(".DOWN-ARROW").addClass('showon')
		
	}
	else{
		btn.find(".RIGHT-ARROW").addClass('showon')
		btn.find(".DOWN-ARROW").removeClass('showon')
		
	}
	
	btn.next().slideToggle(300)
	
})
