///*tab切换*/
// var tabtitlebtn=document.querySelectorAll('.tab-title')
//
//for(var i=0;i<tabtitlebtn.length;i++){
//	tabtitlebtn[i].order=i;
//	tabtitlebtn[i].onmouseenter=function(){
//		var parent=this.parentNode.nextElementSibling
//		var tabLists=parent.children
//		
//		for(var j=0;j<tabtitlebtn.length;j++){
//			tabtitlebtn[j].classList.remove('show')
//			tabLists[j].classList.remove('show')
//		}
//		this.classList.add('show')
//		tabLists[this.order].classList.add('show')
//		
//	}
//	
//}
//
///*tabS切换*/
// var tabtitlebtnS=document.querySelectorAll('.tab-titleS')
//
//for(var i=0;i<tabtitlebtnS.length;i++){
//	tabtitlebtnS[i].order=i;
//	tabtitlebtnS[i].onmouseenter=function(){
//		var parent=this.parentNode.parentNode.nextElementSibling
//		var tabLists=parent.children
//		console.log(tabLists)
//		for(var j=0;j<tabtitlebtnS.length;j++){
//			tabtitlebtnS[j].classList.remove('show')
//			tabLists[j].classList.remove('show')
//			
//		}
//		this.classList.add('show')
//		tabLists[this.order].classList.add('show')
//		
//	}
//	
//}
(function($){
	
	
	
})(jQuery)

	
	$.fn.changeTab(function(parentclass){
	
	var parent = document.querySelector(parentclass)
	
	var tabLists = parent.querySelectorAll('.tab-lists')

	var tabtitles = parent.querySelectorAll('.tab-titles')
		
		for(i=0;i<tabtitles.length;i++){
		tabtitles[i].order=i;
		tabtitles[i].onmouseenter=function(){
		
		for(j=0;j<tabLists.length;j++){
		tabLists[j].classList.remove('show')
		tabtitles[j].classList.remove('show')	
		}
		this.classList.add('show')
		tabLists[this.order].classList.add('show')
		}
	}
})

changeTab('.Tab-box1')
changeTab('.Tab-box2')
changeTab('.Tab-box3')
changeTab('.Tab-box4')



$('.Tab-box1').changeTab()
