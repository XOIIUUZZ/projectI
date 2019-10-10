let experss = require('express')

let app = experss()


app.use(experss.static(__dirname+'/static'))
 
let router = require('./router')

app.get('/news',router.getnews)

app.get('/getcodes',router.getcodes).post('/getcodes',router.getcodes)

app.post('/register',router.register )

app.listen(3000) 