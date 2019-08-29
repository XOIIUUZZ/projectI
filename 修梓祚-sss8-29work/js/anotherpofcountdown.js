       function givethetime(){
		
		var countdownmachine=countDown('2019-8-31 17:00:00')

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
   	
   	
   		function killthetime(){
		
		var countdownmachine=countDown('2019-8-31 17:00:00')

		countdownmachine=countdownmachine.split('')
		
			
		var htmlkill = 
		`
		<span class='font-24 font-white'>${countdownmachine[0]}</span>
		<span class='font-24 font-white'>${countdownmachine[1]}</span>
		<span class='font-24 font-white'>:</span>
		<span class='font-24 font-white'>${countdownmachine[2]}</span>
		<span class='font-24 font-white'>${countdownmachine[3]}</span>
		<span class='font-24 font-white'>:</span>
		<span class='font-24 font-white'>${countdownmachine[4]}</span>
		<span class='font-24 font-white'>${countdownmachine[5]}</span>`
		
		document.querySelector('.countdown-content').innerHTML = htmlkill
   		}