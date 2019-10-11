 $(function(){
     let token = window.localStorage.getItem('token')
     if(!token){
         window.location.href='login.html'
         return false
        }
    $.ajax({
        url:api+'/usercenter',
        type:'get',
        data:{
            token
        },
        datatype:'json',
        success:function(res){
            if(res.status!==200){
                   window.localStorage.removeItem('token')
                   window.location.href='login.html'
        }
        }
    })


 })