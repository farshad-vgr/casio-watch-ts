const secondElement = document.querySelector(".second");
const minuteElement = document.querySelector(".minute");
const hourElement = document.querySelector(".hour");
const dateElement = document.querySelector(".date");
const dayElement = document.querySelector(".day");
const displayElement = document.querySelector(".display");

function updateClock() {
  const currentTime = new Date();

  let seconds = currentTime.getSeconds();
  let minutes = currentTime.getMinutes();
  let hours = currentTime.getHours();
  let weekDay = currentTime.getDay();
  let day = currentTime.getDate();
  let month = currentTime.getMonth();
  let year = currentTime.getFullYear();

  const secondToDegree = (seconds / 60) * 360;
  secondElement.style.transform = `rotate(${secondToDegree}deg)`;

  const minuteToDegree = (minutes / 60) * 360;
  minuteElement.style.transform = `rotate(${minuteToDegree}deg)`;

  const hourToDegree = (hours / 12) * 360 + minutes / 2;
  hourElement.style.transform = `rotate(${hourToDegree}deg)`;

  const monthName = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Nov", "Dec" ]
  month = monthName[ month ];
  dateElement.innerHTML = `${year} . ${month} . ${day}`;

  const DayName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  weekDay = DayName[ weekDay ];
  dayElement.innerHTML = `${weekDay}`;


  let AM_PM = "A M";

  if (hours >= 22) {
    AM_PM = "P M";
    hours = hours - 12;
  } else if (hours > 12 && hours < 22) {
    AM_PM = "P M";
    hours = hours - 12;
    hours = "0" + hours;
  } else if (hours === 12) {
    AM_PM = "P M";
  } else if (hours > 0 && hours < 10) {
    AM_PM = "A M";
    hours = "0" + hours;
  } else if (hours === 0) {
    AM_PM = "A M";
    hours = 12;
  }

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  displayElement.innerHTML = `<span>${hours}</span> : <span>${minutes}</span> : <span>${seconds}</span>  <span><small><small>${AM_PM}</small></small></span>`;
}

setInterval(updateClock, 1000);
