$(function(){
    $('.form-validate').validate({
        rules:{
            email:{
                require:true,
                email:true
            },
            password:{
                require:true,
                rangelength:[6,18]

            }
        }
    })
    let token = window.localStorage.getItem('token')

    console.log(token)

    if(token) window.location.href='usercenter.html'

    $('#btn-submit').click(function(){
     
        if( $('.form-validate').valid()){

            let email = $('[name=email]').val()

            let passwords = $('[name=password]').val()

            passwords = $.md5(passwords)

            $.ajax({
                url:api+'/login',
                type:'post',
                datatype:'json',
                data:{
                    email,
                    passwords
                },
                success:function(res){
                    if(res.status==200){

                    window.localStorage.setItem('token',res.data.token)
                    window.localStorage.setItem('info',JSON.stringify(res.data.info))  
                          
                             $.tooltip({
                                type:'success',
                                content:'登陆成功2s后跳转',
                                interval:2000,
                                success:function(){
                                    window.location.href='usercenter.html'  
                                }
                            })
                       
                    }else{
                        $.tooltip({
                            type:'error', 
                            content:res.message ,
                            interval:'3000'
                        })
                    }
                    
                }
            })

        }
    })
})