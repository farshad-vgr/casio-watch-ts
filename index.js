"use strict";
var secondElement = document.querySelector(".second");
var minuteElement = document.querySelector(".minute");
var hourElement = document.querySelector(".hour");
var dateElement = document.querySelector(".date");
var dayElement = document.querySelector(".day");
var displayElement = document.querySelector(".display");
function updateClock() {
    var currentTime = new Date();
    var seconds = currentTime.getSeconds();
    var minutes = currentTime.getMinutes();
    var hours = currentTime.getHours();
    var weekDay = currentTime.getDay();
    var day = currentTime.getDate();
    var month = currentTime.getMonth();
    var year = currentTime.getFullYear();
    var secondsToDegree = (seconds / 60) * 360;
    secondElement.style.transform = "rotate(".concat(secondsToDegree, "deg)");
    var minutesToDegree = (minutes / 60) * 360;
    minuteElement.style.transform = "rotate(".concat(minutesToDegree, "deg)");
    var hoursToDegree = (hours / 12) * 360 + minutes / 2;
    hourElement.style.transform = "rotate(".concat(hoursToDegree, "deg)");
    var monthName = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Nov", "Dec"];
    dateElement.innerHTML = "".concat(year, " . ").concat(monthName[month], " . ").concat(day);
    var DayName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    dayElement.innerHTML = "".concat(DayName[weekDay]);
    var AM_PM = "A M";
    if (hours >= 22) {
        AM_PM = "P M";
        hours = hours - 12;
    }
    else if (hours > 12 && hours < 22) {
        AM_PM = "P M";
        hours = hours - 12;
        hours = 0 + hours;
    }
    else if (hours === 12) {
        AM_PM = "P M";
    }
    else if (hours > 0 && hours < 10) {
        AM_PM = "A M";
        hours = 0 + hours;
    }
    else if (hours === 0) {
        AM_PM = "A M";
        hours = 12;
    }
    if (minutes < 10) {
        minutes = 0 + minutes;
    }
    if (seconds < 10) {
        seconds = 0 + seconds;
    }
    displayElement.innerHTML = "<span>".concat(hours, "</span> : <span>").concat(minutes, "</span> : <span>").concat(seconds, "</span>  <span><small><small>").concat(AM_PM, "</small></small></span>");
}
setInterval(updateClock, 1000);
