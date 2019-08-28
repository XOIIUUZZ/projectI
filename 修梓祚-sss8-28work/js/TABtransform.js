function table1(){ 
var request=new XMLHttpRequest();

var requestURL='http://192.168.97.249:3001/'

request.open('get',requestURL+'lists?id=1',true)

request.send(null)

request.onreadystatechange=function(){
	
	if(request.readyState==4){
		 
//		 console.log(request.responseText)
		var result=JSON.parse(request.responseText)
//		 console.log(result)
		
		if(result.success==true){
			
			var lists=result.list
			var tabswitch=document.querySelector('.PAGE1')
			var html='';
			for(i=0;i<lists.length;i++){
				
				html+=`<div class="goods-recommendation fl-l">
				<div class="recommendation-content"><img src="${requestURL+lists[i].img}" class="margin-b-5 INSIMG">
				<span class="font-14 stuff-text">${lists[i].title}</span>
				<span class="goods-price font-14">${lists[i].price}</span>
				</div>
			</div>`
			}
			
		tabswitch.innerHTML=html
			
		}
		
	}
	
}
}
function table2(){ 
	var request=new XMLHttpRequest();
var requestURL='http://192.168.97.249:3001/'

request.open('get',requestURL+'lists?id=2',true)

request.send(null)

request.onreadystatechange=function(){
	
	if(request.readyState==4){
		 
//		 console.log(request.responseText)
		var result=JSON.parse(request.responseText)
//		 console.log(result)
		
		if(result.success==true){
			
			var lists=result.list
			var tabswitch=document.querySelector('.PAGE2')
			var html='';
			for(i=0;i<lists.length;i++){
				
				html+=`<div class="goods-recommendation fl-l">
				<div class="recommendation-content"><img src="${requestURL+lists[i].img}" class="margin-b-5 INSIMG">
				<span class="font-14 stuff-text">${lists[i].title}</span>
				<span class="goods-price font-14">${lists[i].price}</span>
				</div>
			</div>`
			}
			
		tabswitch.innerHTML=html
			
		}
		
	}
	
}
}
function table3(){ 
	var request=new XMLHttpRequest();
var requestURL='http://192.168.97.249:3001/'

request.open('get',requestURL+'lists?id=3',true)

request.send(null)

request.onreadystatechange=function(){
	
	if(request.readyState==4){
		 
//		 console.log(request.responseText)
		var result=JSON.parse(request.responseText)
//		 console.log(result)
		
		if(result.success==true){
			
			var lists=result.list
			var tabswitch=document.querySelector('.PAGE3')
			var html='';
			for(i=0;i<lists.length;i++){
				
				html+=`<div class="goods-recommendation fl-l">
				<div class="recommendation-content"><img src="${requestURL+lists[i].img}" class="margin-b-5 INSIMG">
				<span class="font-14 stuff-text">${lists[i].title}</span>
				<span class="goods-price font-14">${lists[i].price}</span>
				</div>
			</div>`
			}
			
		tabswitch.innerHTML=html
			
		}
		
	}
	
}
}

//table1()
//table2()
//table3()