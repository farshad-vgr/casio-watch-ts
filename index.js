"use strict";
var secondElement = document.querySelector(".second");
var minuteElement = document.querySelector(".minute");
var hourElement = document.querySelector(".hour");
var dateElement = document.querySelector(".date");
var dayElement = document.querySelector(".day");
var displayElement = document.querySelector(".display");
// This function updates time and date values
function updateClock() {
    var currentTime = new Date();
    // Extract time and date details
    var seconds = currentTime.getSeconds();
    var minutes = currentTime.getMinutes();
    var hours = currentTime.getHours();
    var weekDay = currentTime.getDay();
    var day = currentTime.getDate();
    var month = currentTime.getMonth();
    var year = currentTime.getFullYear();
    // Convert seconds value to a degree for the analog clock and set it as style for div element
    var secondsToDegree = (seconds / 60) * 360;
    secondElement.style.transform = "rotate(".concat(secondsToDegree, "deg)");
    // Convert minutes value to a degree for the analog clock and set it as style for div element
    var minutesToDegree = (minutes / 60) * 360;
    minuteElement.style.transform = "rotate(".concat(minutesToDegree, "deg)");
    // Convert hours value to a degree for the analog clock and set it as style for div element
    var hoursToDegree = (hours / 12) * 360 + minutes / 2;
    hourElement.style.transform = "rotate(".concat(hoursToDegree, "deg)");
    // Convert the month value to the name of the month as a string
    var monthName = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Nov", "Dec"];
    dateElement.innerHTML = "".concat(year, " . ").concat(monthName[month], " . ").concat(day);
    // Convert the day value to the name of the day as a string
    var DayName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    dayElement.innerHTML = "".concat(DayName[weekDay]);
    // Set a string to know the time is in the morning or evening
    var AM_PM = "A M";
    // This condition checks if time is one digit and then adds a 0 to the first and makes the time value from 0 to 12
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
    // This condition checks if time is one digit and then adds a 0 to the first
    if (minutes < 10) {
        minutes = 0 + minutes;
    }
    // This condition checks if time is one digit and then adds a 0 to the first
    if (seconds < 10) {
        seconds = 0 + seconds;
    }
    // Set time values for the digital clock
    displayElement.innerHTML = "<span>".concat(hours, "</span> : <span>").concat(minutes, "</span> : <span>").concat(seconds, "</span>  <span><small><small>").concat(AM_PM, "</small></small></span>");
}
// Set an interval function to call the update function each second
setInterval(updateClock, 1000);
