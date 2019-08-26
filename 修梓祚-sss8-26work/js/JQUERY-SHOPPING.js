//全选按钮
var SetallS=$('.setall');
var checkValuesall=$('.checkvalueS')
var checkValues=$('.checkvalueSTO')
SetallS.change(function(){
	if(this.checked){
		checkValuesall.prop('checked',true)
		SetallS.prop('checked',true)
		checkValues.prop('checked',true)
		
	}
	else{
		checkValuesall.prop('checked',false)
		SetallS.prop('checked',false)
		checkValues.prop('checked',false)
	}
	callofcaculate()
}
)
//单项全选计数
function checkOne(){  
        var count = 0;  
		var checkValuesall=$('.checkvalueS')
        $(".checkvalueS").each(function(){  
            if(!this.checked){
                count+=1;  
            }  
        });  
        if(count == 0) { 
            $('.checkvalueSTO').prop('checked', true);  
            $('.setall').prop('checked', true);  
        }
        else{
        	 $('.checkvalueSTO').prop('checked', false);  
            $('.setall').prop('checked', false); 
        }
     } 
//店铺全选
var Setallstore=$('.checkvalueSTO');
var checkValuesall=$('.checkvalueS')
Setallstore.change(function(){
	if(this.checked){
		checkValuesall.prop('checked',true)
	}
	else{
		checkValuesall.prop('checked',false)
	}
	callofcaculate()
})
//单项取消全选或全选
var Setallstore=$('.checkvalueSTO');
var SetallS=$('.setall');
var checkValuesall=$('.checkvalueS')
	checkValuesall.change(function(){
	checkOne()
//	SetallS.prop('checked',false)
//	checkValues.prop('checked',false)
//	if(checkValuesall.checked==true){
//	SetallS.prop('checked',true)
//	checkValues.prop('checked',true)
//	}
	callofcaculate()
})
