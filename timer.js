let days = document.querySelector('.digit_bottom.days');
let daysTop = document.querySelector('.digit_top.days');

let hours = document.querySelector('.digit_bottom.hours');
let hoursTop = document.querySelector('.digit_top.hours');

let minutes = document.querySelector('.digit_bottom.minutes');
let minutesTop = document.querySelector('.digit_top.minutes');

let seconds = document.querySelector('.digit_bottom.seconds');
let secondsTop = document.querySelector('.digit_top.seconds');

const finishDate = new Date(2023, 12, 31);

let timer = setInterval(() => {
    let currentTimeToFinish = finishDate - new Date();
    let newDate = new Date(currentTimeToFinish).getDate();
    let newHour = new Date(currentTimeToFinish).getHours();
    let newMinute = new Date(currentTimeToFinish).getMinutes();
    let newSecond = new Date(currentTimeToFinish).getSeconds();

    if(+days.innerHTML !== newDate) {
        days.innerHTML = newDate;
        showAnimation(daysTop);
    }

    if(+hours.innerHTML !== newHour) {
        hours.innerHTML = newHour;
        showAnimation(hoursTop);
    }

    if(+minutes.innerHTML !== newMinute) {
        minutes.innerHTML = newMinute;
        showAnimation(minutesTop);
    }

    seconds.innerHTML = newSecond;
    showAnimation(secondsTop);
}, 1000);

function showAnimation(node) {
    node.classList.toggle('animated');
    setTimeout(() => node.classList.toggle('animated'), 500);
}