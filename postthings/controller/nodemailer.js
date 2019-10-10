let nodemailer = require('nodemailer')

let smtptransport = require('nodemailer-smtp-transport')

let config = require('../config')
let obj = {
    service:config.email.service,

    auth:{
        user:config.email.user,
        pass:config.email.pass
    } ,
    domains:[
        "qq.com"
    ],
    host:"smtp.qq.com",
    port:465,
    secure:true


}
smtptransport = nodemailer.createTransport(smtptransport(obj))

let sendemail = function(receipt,subject,html,callback){

    smtptransport.sendMail({
        from:config.email.user,
        to:receipt,
        subject:subject,
        html:html

    },callback)
}

module.exports = sendemail  