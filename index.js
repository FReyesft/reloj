let hoursClock = document.getElementById('date-hours')
let minutesClock = document.getElementById('date-minutes')
let secondsClock = document.getElementById('date-seconds')
let dateDay = document.getElementById('date')
const timesClock = document.querySelectorAll('.times-clock')



function UpdateTimeForSecond() {
	setInterval(() => {
		const date = new Date
		let hours = date.getHours() % 12;
		let minutes = date.getMinutes();
		let seconds = date.getSeconds();
		dateDay.textContent = date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear();
		console.log(seconds)
		if (seconds < 10) {
			secondsClock.innerText = '0' + seconds
		} else {
			secondsClock.innerText = seconds;
		}
		if (minutes < 10) {
			minutesClock.innerText = '0' + minutes
		} else {
			minutesClock.innerText = minutes
		}
		if (hours < 10) {
			hoursClock.innerText = '0' + hours
		} else {
			hoursClock.innerText = hours
		}
		timesClock.forEach((item) => {
			item.classList.toggle('active');
		});

	}, 1000);
}

UpdateTimeForSecond();
