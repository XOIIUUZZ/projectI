(function($,w){
//	$.extend({
//		tiptools:function(options){
//			var className=''
//			var html = `<div class="TIP ${className}">${options.content}</div>`
//			if(options.type=='error'){
//				className='tips-error'
//			}
//			else if(options.type=='correct'){
//				className='tips-correct'
//				
//			}
//			else{
//				className='tips-warnning'
//			}
//		
//		$('body').append(html)
//		
//		setTimeout(function(){
//			$('.TIP').remove()
//		},options.time||3000)
//		
//		}
//	})
	$.tiptools=function(options){
			var html = $(`<div class="TIP tips-${options.type}">${options.content}</div>`)
		
			$('body').append(html)
		
		setTimeout(function(){
			html.remove()
			if(options.success){
				options.success()
			}
		},options.time||3000)
		
		}
})($,window)
