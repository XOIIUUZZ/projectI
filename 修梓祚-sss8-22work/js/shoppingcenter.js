//删除子集
var btnsdelete=document.querySelectorAll('.delete')
var listsparent=document.querySelector('.listsparent')
for(i=0;i<btnsdelete.length;i++){
	btnsdelete[i].onclick=function(){
		var lidelete=this.parentNode.parentNode.parentNode
		listsparent.removeChild(lidelete)
	}
}

//批量删除
var btndelete=document.querySelector('.deleteall')
var listsparent=document.querySelector('.listsparent')
var lidelete=document.querySelectorAll('.singlegoods')
	btndelete.onclick=function(){
		for(j=0;j<lidelete.length;j++){
 		var checkvalues = lidelete[j].querySelector('.checkvalue');
			if(checkvalues.checked==true){
		listsparent.removeChild(lidelete[j])
		}
		}
	}
    

//购买数量

function caculatenum(littletotal){
	var littletotalS=document.querySelector(littletotal)
	var signalofcommon=littletotalS.querySelectorAll('.signalcommon')
	var thenumofgoods=littletotalS.querySelector('.thenumber')
	var totalprice=littletotalS.querySelector('.totalprice-goods1')
   	var realpriceS=littletotalS.querySelector('.realprice')

	for(i=0;i<signalofcommon.length;i++){
   signalofcommon[i].onclick=function(){
	var thetotalprice=parseInt(totalprice.value)
	var thevalueofnum=parseInt(thenumofgoods.value);
	var className=this.className
	if(className.indexOf('cut')>=0){
		thenumofgoods.value=thevalueofnum-1
	 if(thenumofgoods.value<1){
	 	thenumofgoods.value=1
	 }
	 thetotalprice=thenumofgoods.value*189
	 totalprice.value=thetotalprice+'.00'
}
else{
	 thenumofgoods.value=thevalueofnum+1
	 thetotalprice=thenumofgoods.value*189
	 totalprice.value=thetotalprice+'.00'

}
realpriceS.innerHTML=totalprice.value
callofcaculate()

}
}
}

function callofcaculate(){
   	var finaltotal=document.querySelector('.totalpriceall')
	var Unitprice=document.querySelectorAll('.realprice')
	var totaleve=0;
	var checkvalueS=document.querySelectorAll('.checkvalueS')
	for(var p=0;p<Unitprice.length;p++){
	if(checkvalueS[p].checked==true){
    totaleve=totaleve+parseInt(Unitprice[p].innerText)
}
}
finaltotal.innerHTML=totaleve+'.00'
 							}

		caculatenum('.cacumachineI');
		caculatenum('.cacumachineII');
		caculatenum('.cacumachineIII');
		caculatenum('.littletotal1');
		caculatenum('.littletotal2');
		caculatenum('.littletotal3');
             


