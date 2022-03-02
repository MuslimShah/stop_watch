var count = document.getElementById('seconds');
var minutes = document.getElementById('minutes');
var hours = document.getElementById('hrs');
document.getElementById('status').textContent = 'stoped';
var counter = function() {
    timer = parseFloat(count.textContent);
    min = parseFloat(minutes.textContent);
    hr = parseFloat(hours.textContent);
    count.textContent = timer + 1;
    if (timer == 59) {
        min++;
        minutes.textContent = min;
        count.textContent = '0';

    }
    if (min == 60) {
        hr++;
        hours.textContent = hr;
        minutes.textContent = 0;
    }
}

function onstart() {
    stopwatch = setInterval(counter, 1000);
    btnStart.disabled = true;
    btnStop.disabled = false;
    btnStop.style.backgroundColor = 'red'
    document.getElementById('status').textContent = 'Running';
    btnStart.style.backgroundColor = 'green'

}

function onstop() {
    clearInterval(stopwatch);
    btnStop.disabled = true;
    btnStart.disabled = false;
    btnStart.style.backgroundColor = 'yellow';
    btnStart.style.color = 'black'
    btnStop.style.backgroundColor = 'green'
    document.getElementById('status').textContent = 'stoped';

}
var btnStart = document.getElementById('start');
var btnStop = document.getElementById('stop');
btnStart.addEventListener('click', onstart);
btnStop.addEventListener('click', onstop);