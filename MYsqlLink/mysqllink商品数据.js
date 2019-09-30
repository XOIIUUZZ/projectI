let express = require('express')
let Mysql = require('mysql')
let app = express();
let formidable = require('formidable')
let path = require('path')

app.use(express.static('./img') ) 

app.all('*',function(req,res,next){

    res.header('Access-control-Allow-Origin','*')
    next()
})

//建立数据库连接 
let connect = Mysql.createConnection({

    host:'192.168.97.246',
    user:'root',
    password:'proot',
    database:'goods'
})  

// 连接数据库
connect.connect()


app.get('/lists',function(req,res){

    connect.query('SELECT * FROM stu',function(err,data){
        if(!err){
            res.json({  
                status:200,
                data:data
            })
        }
    } )
})

app.get('/class',function(req,res){

    connect.query('SELECT * FROM class',function(err,data){
        if(!err){
            res.json({ 
                status:200,
                data:data
            })
        }
    } )
})

app.get('/goods',function(req,res){

    connect.query('SELECT * FROM goodlists',function(err,data){
        if(!err){
            res.json({  
                status:200,
                data:data
            })
        }
    } )
})

app.get('/user',function(req,res){

    connect.query('SELECT * FROM userlists',function(err,data){
        if(!err){
            res.json({

                status:200,
                data:data
            })
        }
    } )
})
app.post('/goodscontent',function(req,res){

  let form = new formidable.IncomingForm();
  
  form.uploadDir='./img'
  
  form.keepExtensions = true;

  form.parse(req,function(err,fileds,files){

    let filebase=path.parse(files.img.path).base

    let datas = [fileds.name,fileds.class,fileds.price,filebase]

    connect.query('insert into goodlists(goodsNAME,classITEM,goodsPRICE,img) value(?)',[datas],function(err,data){
        console.log(err)
        if(!err){
            res.json({
                status:200,
                data:''
            })
        }
    })

  })
})

app.listen(3000)
