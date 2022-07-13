function setColoredClock(hours, minutes, seconds) {
    setInterval(() => {
        let time = new Date();
        hours.textContent = +time.getHours() >= 10 ? time.getHours() : '0' + time.getHours();
        minutes.textContent = time.getMinutes() >= 10 ? time.getMinutes() : '0' + time.getMinutes();
        seconds.textContent = time.getSeconds() >= 10 ? time.getSeconds() : '0' + time.getSeconds();
    }, 1000);
};