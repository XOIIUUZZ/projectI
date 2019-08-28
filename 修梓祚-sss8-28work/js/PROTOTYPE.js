(function(W){
	
	function changeBox(options){
		 _this=this
		_this.box = document.querySelector(options.box)
		this.ect()
	}
	
	changeBox.prototype.ect=function(){
		
		this.tabTitle = _this.box.querySelectorAll('.box-btn')
		this.tabList = _this.box.querySelectorAll('.box-list')
		for(i=0;i<this.tabTitle.length;i++){
			this.tabTitle[i].index = i;

			this.tabTitle[i].onclick=function(){
			
			_this.index=this.index

			_this.addon()

			}

		}
		
	}
	changeBox.prototype.addon=function(){
		
		for(j=0;j<this.tabTitle.length;j++){
			
			this.tabTitle[j].classList.remove('on')
			
			this.tabList[j].classList.remove('show')
		
		}
		
		_this.tabTitle[this.index].classList.add('on')
		
		_this.tabList[this.index].classList.add('show')
		
		
	}
	
	W.changeBox=changeBox
})(window)

