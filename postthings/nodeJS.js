let experss = require('express')

let app = experss()

let bodyparser = require('body-parser');

let jsonparser = bodyparser.json();

let lencodedparser = bodyparser.urlencoded({extended:false});

app.use(experss.static(__dirname+'/static'))

app.all('*',function(req,res,next){
	
	res.header('Access-Control-Allow-Origin','*');
	next();
	
})
 
let router = require('./router')

app.get('/news',router.getnews)

app.get('/getcodes',router.getcodes).post('/getcodes',router.getcodes)

app.post('/register', lencodedparser,router.register )

app.post('/login',lencodedparser, router.login)

app.listen(3000) 