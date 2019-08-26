function ajaxpackage(options){

var request=new XMLHttpRequest();

request.open(options.type||'get',options.url,options.async||true)

request.send(options.data||null)

request.onreadystatechange=function(){
	
	if(request.readyState==4&&request.status==200){
		 
//		 console.log(request.responseText)
		var result=request.responseText
		if(options.dataType=='json'){
		 result=JSON.parse(result)
//		 console.log(result)
	}
		options.success(result)
		
//		if(result.success==true){
//		
//			var lists=result.list
//			
//			var slide=document.querySelector('.banner-img')
//			
//			var html=`<li><img src="${requestURL+lists[lists.length-1].img}"></li>`
//			
//			for(i=0;i<lists.length;i++){
//				
//				html+=`<li><img src="${requestURL+lists[i].img}"></li>`
//			}
//			
//			html+=`<li><img src="${requestURL+lists[0].img}"></li>`
//			
//			slide.innerHTML=html
//
//			replace()
//			
//		}
		
	}
	
}
}