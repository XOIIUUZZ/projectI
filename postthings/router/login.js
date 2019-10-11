let common = require('../controller/common')
let jwt = require('jsonwebtoken')
let data = require('../controller/data')
module.exports = {
     async login(req,res){ 
    let passwords  = req.body.passwords;
    let email = req.body.email

    if(!email||!common.isEmail(email)){
         res.json({
             status:501,
             message:'邮箱格式不正确'
         })
         return false;
    }
    if(!passwords){
        res.json({
            status:504,
            message:'请输入密码'
        })
        return false;
    }
    let isUser = await data.login([email,passwords])
    if(isUser){
      let token = jwt.sign({email:email},'jwt',{
            expiresIn:60*60*1
        })
        res.json({
            status:200,
            data:{
                token,
                info:{
                    email:isUser.email,
                    userid:isUser.id,
                    status:isUser.status 
                }      
            },
            message:'成功'

        })

    }else{
        res.json({
            status:511,
            message:'用户名或密码错误'
        })
        return false;
    }
}

}