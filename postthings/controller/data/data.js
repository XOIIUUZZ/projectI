	let query = require('../mysql')
	module.exports = {
	 isRegister: async function(email){
		let data = await query("select * from users where email = ?",email)
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
	
		 let sql = 'insert into users(email,passwords,status) values(?)'
		 let result = await query(sql,[data]).catch(function(res){
			 console.log(res)
		 })
		 if(result){
			 return true;
		 }
		 else{
			 return false;
		 }
		
	 },
	 login:async function(data) {
		 let sql = 'select * from users where email = ? and passwords = ?'
		 let result = await query(sql,data)

		 if(result.length>0){
			 return result[0];
		 }else{
			return false
		 }
	 }



	 
}