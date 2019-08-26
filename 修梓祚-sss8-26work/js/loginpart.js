//切换到注册
var btnre=$('.registerbtn')
btnre.click(function(){
	$('.register-part').addClass('showup')
	$('.login-part').removeClass('showup')
})
//切换到登陆
var btnlo=$('.logibtn')
btnlo.click(function(){
	$('.register-part').removeClass('showup')
	$('.login-part').addClass('showup')
	
})
