;(function($,w){
	//模拟拉下拉框
	$.fn.select=function(){
		var btntitle = this;
		var selectedTitle = $(btntitle).find('.selected-title');
		var selectedLists = $(btntitle).find('.select-text');
		var List = $(btntitle).find('.list');
		selectedTitle.click(function(e){
		e.stopPropagation()
			$(this).closest('.selectbox').find('.select-text').toggleClass('on');
			$(this).closest('.selectbox').siblings().find('.select-text').removeClass('on')
			
		})
		List.click(function(){
		var selectval =	$(this).closest('.selectbox').find('.select-value');
		selectval.val($(this).html())
		selectedLists.removeClass('on')


		})
		
		$(document).click(function(){
		selectedLists.removeClass('on')
			
		})
	}
})($,window)
