let hours = document.getElementById("hour");
let minutes = document.getElementById("minute");
let seconds = document.getElementById("seconds");
let format = document.getElementById("format");

function UpDate() {
    let now = new Date();
    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();
    if (h >= 12) {
        format.innerText = "PM";

    }
    else if (h <= 12) {
        format.innerText = "AM";

    }
    if (h > 12) {
        h = h - 12;

    }

    if (h < 10) {
        h = "0" + h;
    }
    if (m < 10) {
        m = "0" + m;
    }
    if (s < 10) {
        s = "0" + s;
    }
    hours.innerText = h;
    minutes.innerText = m;
    seconds.innerText = s;

    let days = ["Sunday,", "Monday,", "Tuesday,", "Wednesday,", "Thursday,", "Friday,", "Saturday,"];
    let today = new Date();
    let dayName = days[today.getDay()];
    day.innerText = dayName;
    let month = ["Janurary", "Februrary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    let Month = month[today.getMonth()]
    month.innerText = Month;
    let dt=today.getDate();
    date.innerText=dt;
    let yr=today.getFullYear();
    year.innerText=yr;
    



}
UpDate();


setInterval(UpDate, 1000);