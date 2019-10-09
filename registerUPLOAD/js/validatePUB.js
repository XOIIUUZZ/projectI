(function($,w){
	
$.tooltip = function(options){
	if(w.timer) {
			clearTimeout(w.timer)
		}
	
	$('.alter').remove()
	
	let html = $(`<div class='alter alter-${options.type}'>${options.content}</div>`)
	
	$('body').append(html)
	
	w.timer = setTimeout(function(){
	
	html.remove()
	if(options.success){
		
		options.success()
	}
	
	},3000)
	
    }

	    //md5加密封装 
    $.md5 = function(psd){
    	
   	 hex_md5(psd)
        
       }
        
})(jQuery, window)
