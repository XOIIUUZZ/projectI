let api = 'http://192.168.97.246:3000';

(function($,w){
	
$.tooltip = function(options){
	if(w.timer) {
			clearTimeout(w.timer)
		}
	
	$('.alter').remove()
	
	// let html = $(`<div class='alter alter-${options.type}'>${options.content}</div>`)
	let html = $(`<div class="modal fade bs-example-modal-sm" id="modal" data-show="true">
	<div class="modal-dialog modal-sm">
		<div class="modal-content">
			<div class="modal-header">
				<span class="close">
					<i class="glyphicon glyphicon-remove"></i>
				</span>
				<div class="modal-title h4">标题</div>
			</div>
			<span style="color: dodgerblue; font-size: 15px; margin: 20px; display: inline-block; text-align: center; width: 250px;">${options.content}</span>
			<div class="modal-footer">
				<a class="btn btn-default">取消</a>
				<a class="btn btn-primary">确定</a>
			</div>
			
		</div>
	</div>
</div>

<script>
		$(".close").click(function(){
			
							$("#modal").modal('toggle')
							
						})
	</script>`)
	
	
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
    	
   	 return hex_md5(psd);
        
       }
        
})(jQuery, window)
