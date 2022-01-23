const dayInfo = document.querySelector("#day-info")
const timeInfo = document.querySelector("#time-now");

const dayOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];

function getTime(){
    const date = new Date();
    const year = String(date.getFullYear());
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const week = dayOfWeek[date.getDay()];
    const hour = String(date.getHours()).padStart(2, "0");
    const minute = String(date.getMinutes()).padStart(2, "0");
    const second = String(date.getSeconds()).padStart(2, "0");

    dayInfo.innerHTML = `${year}/${month}/${day} ${week}`;
    timeInfo.innerHTML = `${hour}:${minute}:${second}`;
}

getTime();
setInterval(getTime, 1000);