let experss = require('express')

let app = experss()

console.log(__dirname)

app.use(experss.static(__dirname+'.'))

 
let router = require('./router')

app.get('/news',function(req,res){

})

// 获取
app.get('/getcodes',router.getcodes)

app.listen(3000) 