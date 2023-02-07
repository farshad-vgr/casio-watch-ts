const secondElement = document.querySelector(".second") as HTMLDivElement;
const minuteElement = document.querySelector(".minute") as HTMLDivElement;
const hourElement = document.querySelector(".hour") as HTMLDivElement;
const dateElement = document.querySelector(".date") as HTMLDivElement;
const dayElement = document.querySelector(".day") as HTMLDivElement;
const displayElement = document.querySelector(".display") as HTMLDivElement;

function updateClock(): void {
  const currentTime: Date = new Date();

  let seconds: number = currentTime.getSeconds();
  let minutes: number = currentTime.getMinutes();
  let hours: number = currentTime.getHours();
  let weekDay: number = currentTime.getDay();
  let day: number = currentTime.getDate();
  let month: number = currentTime.getMonth();
  let year: number = currentTime.getFullYear();

  const secondsToDegree: number = (seconds / 60) * 360;
  secondElement.style.transform = `rotate(${secondsToDegree}deg)`;

  const minutesToDegree: number = (minutes / 60) * 360;
  minuteElement.style.transform = `rotate(${minutesToDegree}deg)`;

  const hoursToDegree: number = (hours / 12) * 360 + minutes / 2;
  hourElement.style.transform = `rotate(${hoursToDegree}deg)`;

  const monthName: string[] = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Nov", "Dec"];
  dateElement.innerHTML = `${year} . ${monthName[ month ]} . ${day}`;

  const DayName: string[] = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  dayElement.innerHTML = `${DayName[ weekDay ]}`;

  let AM_PM: string = "A M";

  if (hours >= 22) {
    AM_PM = "P M";
    hours = hours - 12;
  } else if (hours > 12 && hours < 22) {
    AM_PM = "P M";
    hours = hours - 12;
    hours = 0 + hours;
  } else if (hours === 12) {
    AM_PM = "P M";
  } else if (hours > 0 && hours < 10) {
    AM_PM = "A M";
    hours = 0 + hours;
  } else if (hours === 0) {
    AM_PM = "A M";
    hours = 12;
  }

  if (minutes < 10) {
    minutes = 0 + minutes;
  }

  if (seconds < 10) {
    seconds = 0 + seconds;
  }

  displayElement.innerHTML = `<span>${hours}</span> : <span>${minutes}</span> : <span>${seconds}</span>  <span><small><small>${AM_PM}</small></small></span>`;
}

setInterval(updateClock, 1000);
