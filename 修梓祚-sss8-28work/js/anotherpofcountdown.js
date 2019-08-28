		givethetime()
        var timer=setInterval(givethetime,1000)
   		function givethetime(){
		
		var countdownmachine=countDown('2019-8-9 17:00:00')

		countdownmachine=countdownmachine.split('')
		
		var html=
	 		
		 `	<span class="textI">特价秒杀</span>
					<span class="TEXTII">本场还剩</span> 
		 <span class="TEXTIII">${countdownmachine[0]}</span>
            <span class="TEXTIII">${countdownmachine[1]}</span>
			<span class="TEXTIV"> : </span>
			<span class="TEXTIII">${countdownmachine[2]}</span>
			<span class="TEXTIII">${countdownmachine[3]}</span>
			<span class="TEXTIV"> : </span>
			<span class="TEXTIII">${countdownmachine[4]}</span>
			<span class="TEXTIII">${countdownmachine[5]}</span>`
				
			document.querySelector('.main-top').innerHTML=html
		 
   		}