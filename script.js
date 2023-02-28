let digitalElement = document.querySelector('.digital');
let sElement = document.querySelector('.p_s');
let mElement = document.querySelector('.p_m');
let hElement = document.querySelector('.p_h');

function updateClock() {
    let now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();

    function fix(time) {
        return time < 10 ? `0${time}` : time;
    }

    digitalElement.innerHTML = `${fix(hour)}:${fix(minute)}:${fix(second)}`;
    // Finalizei o digital
    // Começando o analógico

    let sDeg = ((360 / 60) * second) - 90;
    let mDegBySeconds = 0.1 * second;
    let mDeg = ((360 / 60) * minute) - 90 + mDegBySeconds;
    let hDegByMinute = 0.5 * minute;
    let hDeg = ((360 / 12) * hour) - 90 + hDegByMinute;

    sElement.style.transform = `rotate(${sDeg}deg)`;
    mElement.style.transform = `rotate(${mDeg}deg)`;
    hElement.style.transform = `rotate(${hDeg}deg)`;
}

setInterval(updateClock, 1000);

updateClock();