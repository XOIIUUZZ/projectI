let url = require('url');

let sendemail = require('../controller/nodemailer');

let query = require('../controller/mysql')

module.exports = {

    getcodes(req,res){

        let email = url.parse(req.url,true).query.email
 
        let reg = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
        
        if(reg.test(email)){
            let code =  Math.round(Math.random()*8999 + 1000)
            let html = `<h1 style='color:red;'>你的邮箱验证为${code}</h1>`
            sendemail(email,'发送验证码',html,function(error,response){
                
                if(error){
                  
                    res.json({
                        status:503,
                        message:'请求失败'
                    })
                }else{
                
                    let sql ='insert into verify(email,code) value(?)'
                    query(sql,[[email,code]]).then(function(result){
                        res.json({
                            data:'code',
                            status:200,
                            message:''
                         })             
                    }).catch(function(error){
                        res.json({
                            status:502,
                            message:'发送失败'
                        })
               
                    })
                } 
            })
        }else{
            console.log(111)
            res.json({
                status:501,
                message:'邮箱格式错误'
            })
        }
    
    }
}