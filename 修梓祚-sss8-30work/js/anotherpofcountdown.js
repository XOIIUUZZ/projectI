       function givethetime(){
		
		var countdownmachine=countDown('2019-9 -31 17:00:00')

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
		
		var countdownmachine=countDown('2019-9-31 17:00:00')

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
   		

  		function detailpagethetime(){
		
		var countdownmachine=countDown('2019-9-31 17:00:00')

		countdownmachine=countdownmachine.split('')
		
			
		var html = 
		`
								<img src="img/alarm-clock.png" class="alarmclock">
								<span>${countdownmachine[6]}</span>
								<span>${countdownmachine[7]}</span>
								<span class="font-14 font-grey">天</span>
								<span>${countdownmachine[0]}</span>
								<span>${countdownmachine[1]}</span>
								<span class="font-14 font-grey">时</span>
								<span>${countdownmachine[2]}</span>
								<span>${countdownmachine[3]}</span>
								<span class="font-14 font-grey">分</span>
								<span>${countdownmachine[4]}</span>
								<span>${countdownmachine[5]}</span>
								<span class="font-14 font-grey">秒</span>`
		
		document.querySelector('.countdowndetail').innerHTML = html
   		}