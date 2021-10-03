const contentMonth = document.querySelector("#clock-monthDate__content-month");
const contentDate = document.querySelector("#clock-monthDate__content-date");
const clockDay = document.querySelector("#clock-day");
const contentHours = document.querySelector("#clock-time__content-hours");
const contentMinutes = document.querySelector("#clock-time__content-minutes");
const contentSeconds = document.querySelector("#clock-time__content-seconds");
const yoil = ["SUNDAY","MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY"];

function checkTime(){
    const date = new Date();
    const years = date.getFullYear();
    const month = String(date.getMonth()+1).padStart(2,"0");
    const todayDate = String(date.getDate()).padStart(2,"0");
    const day = date.getDay();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");

    contentMonth.innerText = month;
    contentDate.innerText = todayDate;
    clockDay.innerText = yoil[day];
    contentHours.innerText = hours;
    contentMinutes.innerText = minutes;
    contentSeconds.innerText = seconds;
}
checkTime();
setInterval(checkTime,1000);