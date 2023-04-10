const end = new Date('12/31/2023 23:59');

const _second = 1000;
const _minute = _second * 60;
const _hour = _minute * 60;
const _day = _hour * 24;
let timer;

function showRemaining() {
    const now = new Date();
    const distance = end - now;
    if (distance < 0) {

        clearInterval(timer);
        document.getElementById('countdown').innerHTML = 'EXPIRED!';

        return;
    }
    const days = Math.floor(distance / _day);
    const hours = Math.floor((distance % _day) / _hour);
    const minutes = Math.floor((distance % _hour) / _minute);
    const seconds = Math.floor((distance % _minute) / _second);

    document.getElementById('countdown-day').innerHTML = days + 'д';
    document.getElementById('countdown-hour').innerHTML = hours + 'ч';
    document.getElementById('countdown-minute').innerHTML = minutes + 'м';
    document.getElementById('countdown-second').innerHTML = seconds + 'с';
}

showRemaining();
timer = setInterval(showRemaining, 1000);