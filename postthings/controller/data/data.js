let query = require('../query')
module.exports = {
	 isRegister: async function(email){
	let data = await query("select * from user where email = ?",email)
	if(data.length >0){
		return false;
	}else{
		 return true;
	}
	 },
	 isCode:async function (email,code) {
		 let data = await query("select * from verify where email = ? order by createTime desc",email)
	 	if(data.length <=0) return false
		if(data[0].code==code){
			return true
		}
			return false;
	 },
	 register:async function(data){
		 let sql = 'insert into user(email,password,status) values(?)'
		 let result = await query(sql,[data]).catch(function(res){
			 
		 })
		 if(result){
			 return true;
		 }
		 else{
			 return false;
		 }
		return true;
	 }
	 
}