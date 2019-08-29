$.extend($.validator,{
				messages:{
					required: "该字段不能为空",
					remote: "Please fix this field.",
					email: "请输入正确邮箱地址",
					url: "Please enter a valid URL.",
					date: "Please enter a valid date.",
					dateISO: "Please enter a valid date (ISO).",
					number: "Please enter a valid number.",
					digits: "Please enter only digits.",
					equalTo: "Please enter the same value again.",
					maxlength: $.validator.format( "Please enter no more than {0} characters." ),
					minlength: $.validator.format( "Please enter at least {0} characters." ),
					rangelength: $.validator.format( "Please enter a value between {0} and {1} characters long." ),
					range: $.validator.format( "Please enter a value between {0} and {1}." ),
					max: $.validator.format( "Please enter a value less than or equal to {0}." ),
					min: $.validator.format( "Please enter a value greater than or equal to {0}." ),
					step: $.validator.format( "Please enter a multiple of {0}." )
				}
			});
			$('.validatorform').validate({
				rules:{
//					标签name:{
//					属性列表名:true	
//					}, 
                     required:{
                     	required:true,
                     },
					email:{
						required:true,
						email:true,
					},
					password:{
						required:true,
						rangelength:[6,18]
					},
					repassword:{
						equalTo: $('[name=password]')
					},
					mobile:{
						required:true,
						mobile:true
					}
				},
				messages:{
					email:{
						required:'邮箱不能为空'
					},
					password:{
						required:'密码不能为空',
						rangelength:'密码长度只能在6-18位',

					},
					repassword:{
						equalTo:'两次密码不一致'
						
					}
				}
				
			})
			//自定义验证
			$.validator.addMethod('mobile',function(value,element){
				 var reg=/^1[3456789]\d{9}$/;
				 if(reg.test(value)){
				 	return true;
				 }
				 else{
				 	return false; 
				 }
				
			},'请输入正确的电话号码，且为11位纯数字格式')
			
//获取验证码
var cookieman = $.cookie('cookieman')
if(cookieman){
	counDown(cookieman)
}


$('.getvertibtn').click(function(){
//	 $(this).addClass('disabled');
	 if($(this).hasClass('disabled'))
	 return;
//	 var thisy=$(this)
//	 var count=5;
//	 thisy.html(count+'S后重新获取')
//	 var intervalverti=setInterval(function(){
//	 	count--;
//	 	thisy.html(count+'S后重新获取')
//	 	if(count<1){
//	 	clearInterval(intervalverti)
//	 	thisy.removeClass('disabled').html('重新获取')
//	 	}
//	 },1000)
counDown(3)
})

function counDown(count){
	$('.getvertibtn').addClass('disabled');
	$('.getvertibtn').html(count+'S后重新获取')
	 var intervalverti=setInterval(function(){
	 	count--;
	 	$('.getvertibtn').html(count+'S后重新获取')
	 	$.cookie('cookieman',count)
	 	if(count<1){
	 	clearInterval(intervalverti)
	 	$('.getvertibtn').removeClass('disabled').html('重新获取')
	 	
	 	}
	 	$.removeCookie('cookieman')
	 },1000)
}
