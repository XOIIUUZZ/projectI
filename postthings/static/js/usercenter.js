 $(function(){
     let token = window.localStorage.getItem('token')
     if(!token){
         window.location.href='login.html'
         return false
        }
    $.ajax({
        url:api+'/verifyLogin',
        type:'post',
        data:{
            token
        },
        datatype:'json',
        success:function(res){
            if(res.status == 512){
                   window.localStorage.removeItem('token')
                   window.localStorage.removeItem('info')
                   window.location.href='login.html'
        }else if(res.status != 200){
             $.tooltip({
                 type:'error',
                 content:res.message
             })
             $("#modal").modal('toggle')
        }
        }
    })

    $('.loginOut').click(function(){
        let info = window.localStorage.getItem('info')
        info = JSON.parse(info)
        $.ajax({
            url:api+'/loginOut',
            type:'post',
            data:{
                email:info.email
            },
            datatype:'json',
            success:function(res){
                if(res.status == 200){
                    window.localStorage.removeItem('token')
                    window.localStorage.removeItem('info')
                    window.location.href='login.html'
                }else{
                    $.tooltip({
                        type:'error',
                        content:res.message
                    })
                    $("#modal").modal('toggle')
                }
            }
        })
    })


 })