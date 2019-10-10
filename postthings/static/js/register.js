$(function(){
	// 验证
	$('.form-validate').validate({
		rules:{
			email:{
				email:true,
				required:true
			},
			code:{
				required:true
			},
				password: {
				required: true,
				rangelength: [6,18]
			},
			repassword:{
				equalTo:$('[name=password]')
			}
		}
	})

	// 获取验证码
	$('#validateBTN').click(function(){
		let email = $('[name=email]').val()
	
		let reg = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
		if(email&&reg.test(email)){
			// console.log(email)  http   tcp
		
			$.ajax({
				type:"get",
				url: api +"/getcodes",
				data:{
					email
				},
				dataType:'json',

				success: function(res){
			
					if(res.status==200){
						$.tooltip({
							type:'success',
							content:'信息发送成功'
						})
						$("#modal").modal('toggle')
					
					
					}else{
						$.tooltip({
							type:'error',
							content:'111'
						})
					}
				
				}						
			})	
		}
		else{
			$.tooltip({
				type:'error',
				content:"请输入正确邮箱"
			})
		}
	})
	
	// 注册
	$('#registerBTN').click(function(){
		let vald = $('.form-validate').valid();
		if(vald){
			let psd = $('[name=password]').val();
			
			let email = $('[name=email]').val();
			
			let code = $('[name=code]').val();
			
			psd = $.md5(psd);
		
			$.ajax({
				url:'',
				type:'post',
				data:{
					email,
					code,
					psd
				},
				dataType:'jsonp',
				success:function(res){
					if(res.status==200){
						$.tooltip({
							type:"success",
							content:'注册成功'
						})
					}
					else{
						$.tooltip({
							type:'error',
							content:res.messages
						})
					}
					
				}
			})
		
		}
		
	})
	
	
	
})