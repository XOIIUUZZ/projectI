let express = require('express')
let Mysql = require('mysql')
let app = express();

//建立数据库连接 
let connect = Mysql.createConnection({

    host:'192.168.97.249',
    user:'root',
    password:'proot',
    database:'demo'
})  

// 连接数据库
connect.connect()


app.get('/lists',function(req,res){

    connect.query('select * from stu',function(err,data){
        if(!err){
            res.json({
                status:200,
                data:data
            })
        }
    } )


})

app.listen(3000)