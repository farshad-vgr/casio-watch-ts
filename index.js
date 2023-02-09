"use strict";
const secondElement = document.querySelector(".second");
const minuteElement = document.querySelector(".minute");
const hourElement = document.querySelector(".hour");
const dateElement = document.querySelector(".date");
const dayElement = document.querySelector(".day");
const displayElement = document.querySelector(".display");
// This function updates time and date values
function updateClock() {
    const currentTime = new Date(); // Need a new time and date for each update
    // Extract time and date details
    let seconds = currentTime.getSeconds();
    let minutes = currentTime.getMinutes();
    let hours = currentTime.getHours();
    let weekDay = currentTime.getDay();
    let day = currentTime.getDate();
    let month = currentTime.getMonth();
    let year = currentTime.getFullYear();
    // Convert seconds value to a degree for the analog clock and set it as style for div element
    const secondsToDegree = (seconds / 60) * 360;
    secondElement.style.transform = `rotate(${secondsToDegree}deg)`;
    // Convert minutes value to a degree for the analog clock and set it as style for div element
    const minutesToDegree = (minutes / 60) * 360;
    minuteElement.style.transform = `rotate(${minutesToDegree}deg)`;
    // Convert hours value to a degree for the analog clock and set it as style for div element
    const hoursToDegree = (hours / 12) * 360 + minutes / 2;
    hourElement.style.transform = `rotate(${hoursToDegree}deg)`;
    // Convert the month value to the name of the month as a string
    const monthName = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Nov", "Dec"];
    dateElement.innerHTML = `${year} . ${monthName[month]} . ${day}`;
    // Convert the day value to the name of the day as a string
    const DayName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    dayElement.innerHTML = `${DayName[weekDay]}`;
    // Set a string to know the time is in the morning or evening
    let AM_PM = "A M";
    // This condition checks if time is one digit and then adds a 0 to the first and makes the time value from 0 to 12
    if (hours >= 22) {
        AM_PM = "P M";
        hours = hours - 12;
    }
    else if (hours > 12 && hours < 22) {
        AM_PM = "P M";
        hours = hours - 12;
        hours = "0" + hours;
    }
    else if (hours === 12) {
        AM_PM = "P M";
    }
    else if (hours > 0 && hours < 10) {
        AM_PM = "A M";
        hours = "0" + hours;
    }
    else if (hours === 0) {
        AM_PM = "A M";
        hours = 12;
    }
    // This condition checks if the time is one-digit and then adds a 0 to the first
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    // This condition checks if time is one digit and then adds a 0 to the first
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    // Set time values for the digital clock
    displayElement.innerHTML = `<span>${hours}</span> : <span>${minutes}</span> : <span>${seconds}</span>  <span><small><small>${AM_PM}</small></small></span>`;
}
// Set an interval function to call the update function each second
setInterval(updateClock, 1000);
