

//全选按钮
var setAll=document.querySelector('.setall')
setAll.onclick=function(){
	  var checkvalues = document.querySelectorAll('.checkvalue');
	  if(setAll.checked==true){
             for (var i = 0; i < checkvalues.length; i++) {
                 checkvalues[i].checked = true;
             }
            }
	  else{
	  	for (var i = 0; i < checkvalues.length; i++) {
                 checkvalues[i].checked = false;
             }
	  }
}



    

