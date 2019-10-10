let url = require('url');

let sendemail = require('../controller/nodemailer');

let query = require('../controller/mysql')
let common = require('../controller/common')
let data = require('../controller/data')
module.exports = {
	
	async register(req,res){
		let param = req.body;
		if(!param.email||!common.isEmail(param.email)){
		res.json({
			status:501,
			message:'邮箱格式错误'
		})
		return false;
		}
		if(!param.code){
			res.json({
				status:503,
				message:'验证码错误'
			})	
			return false;
		}
		if(!param.psd){
			res.json({
				status:504,
				message:'请输入密码'
			})
				return false;
		}
		let isregiter = await data.isRegister(param.email)
		if(!isregiter){
			res.json){
				status:505,
				message:'用户已经注册'
			}
			return false;
		} 	
		let isCode = await data.isCode(param.email,param.code)
		if(!isCode){
			res.json({
				status:506,
				message:'验证码错误',
				})
			return false;
		}
		let isdata = await data.register([param.email,param.psd,1])
		if(isdata){
			res.json({
				status:200,
				message:''
			})
		}else{
			res.json({
				status:507,
				message:'注册失败'
			})
		}
	},

    getcodes(req,res){

        let email = url.parse(req.url,true).query.email
 
        // let reg = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
        
        if(common.isEmail(email)){
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