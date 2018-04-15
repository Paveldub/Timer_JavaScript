let decCache = [];
let decCases = [2, 0, 1, 1, 1, 2];

function decOfNum(number, titles) {
    if (!decCache[number]) decCache[number] = number % 100 > 4 && number % 100 < 20 ? 2 : decCases[Math.min(number % 10, 5)];
    return titles[decCache[number]];
}

function timerLeft(year, month, day) {
    setInterval(function() {
        let daysLest = document.getElementById('timer-v-days');
        let daysText = document.getElementById('timer-v-days__text');
        let hoursLeft = document.getElementById('timer-v-hours');
        let hoursText = document.getElementById('timer-v-hours__text');
        let minutesLeft = document.getElementById('timer-v-minutes');
        let minutesText = document.getElementById('timer-v-minutes__text');
        let secLeft = document.getElementById('timer-v-seconds');
        let secText = document.getElementById('timer-v-seconds__text');
 
        let dateNow = new Date().getTime(); // текущая дата в момент срабатывания функции
        let dateFinish = new Date(year, month, day); // дата того дня до которого будет работать таймер 00:00:00  
        let sec = Math.floor((dateFinish - dateNow) / 1000); // количество секунд между двумя датами dateNow &  dateFinish и делим на 1000(по умолчанию милисекунды - нужны секунды и поэтому делим на 1000) чтобы привести все в секунды
        let secToMinutes = sec % 3600; // 3600 - количество секунд в часе (остаток секунды, которые остаются)
        let hoursNumber = Math.floor(sec / 3600); // получаем количество часов (делим общее количество секунд и Floor округляет число)
        let minutesNumber = Math.floor(secToMinutes / 60); // тоже самое для минут
        let secondsNumber = Math.floor(secToMinutes % 60); // тоже самое для секунд
 
        hoursText.innerHTML = decOfNum(hoursNumber, ['час', 'часа', 'часов']); // добавляем на страницу, которые получили
        minutesText.innerHTML = decOfNum(minutesNumber, ['минута', 'минуты', 'минут']); // добавляем на страницу, которые получили
        secText.innerHTML = decOfNum(secondsNumber, ['секунда', 'секунды', 'секунд']); // добавляем на страницу, которые получили

        hoursLeft.innerHTML = hoursNumber;
        minutesLeft.innerHTML = minutesNumber;
        secLeft.innerHTML = secondsNumber;
    }, 1000)
}

timerLeft(2018, 05, 31);