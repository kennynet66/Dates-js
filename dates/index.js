const container = document.querySelector('.container')


const displayTime = () => {
    const d = new Date();
    // hours.textContent = '';
    // minutes.textContent = '';
    // seconds.textContent = '';

    const hours = document.createElement('h1');
    if(d.getHours() >= 10){
        hours.textContent = `${d.getHours()}`;
    } else if (d.getHours() <= 9) {
        hours.textContent = `0${d.getHours()}`;
    }
    // hours.textContent = d.getHours();

    const minutes = document.createElement('h1');
    if(d.getMinutes() >= 10){
        minutes.textContent = `: ${d.getMinutes()}`;
    } else if (d.getMinutes() <= 9) {
        minutes.textContent = `: 0${d.getMinutes()}`;
    }
    // minutes.textContent = `: ${d.getMinutes()}`;

    const seconds = document.createElement('h1');
    if(d.getSeconds() >= 10){
        seconds.textContent = `: ${d.getSeconds()}`;
    } else if (d.getSeconds() <= 9) {
        seconds.textContent = `: 0${d.getSeconds()}`;
    }

    container.innerHTML = '';

    container.appendChild(hours);
    container.appendChild(minutes);
    container.appendChild(seconds);

}

setInterval(displayTime, 1000)

displayTime();