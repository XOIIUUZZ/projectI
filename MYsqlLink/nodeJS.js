let experss = require('express')

let app = experss()

app.use(experss.static(__dirname+'/router'))
 
let router = require('./router')

console.log(router)

app.get('/news',function(req,res){

})

app.listen(3000)