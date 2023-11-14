let hoursClock = document.getElementById('date-hours')
let minutesClock = document.getElementById('date-minutes')
let secondsClock = document.getElementById('date-seconds')


function UpdateTimeForSecond() {
	setInterval(() => {
		const date = new Date
		let hours = date.getHours()
		let minutes = date.getMinutes();
		let seconds = date.getSeconds();
		console.log(seconds)
		if (seconds < 10) {
			secondsClock.textContent = '0' + seconds
		} else {
			secondsClock.textContent = seconds
		}
		if (minutes < 10) {
			minutesClock.textContent = '0' + minutes
		} else {
			minutesClock.textContent = minutes
		}
		if (hours < 10) {
			hoursClock.textContent = '0' + hours
		} else {
			hoursClock.textContent = hours
		}








	}, 1000)
}

UpdateTimeForSecond();