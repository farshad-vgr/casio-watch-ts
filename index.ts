const secondElement = document.querySelector(".second") as HTMLDivElement;
const minuteElement = document.querySelector(".minute") as HTMLDivElement;
const hourElement = document.querySelector(".hour") as HTMLDivElement;
const dateElement = document.querySelector(".date") as HTMLDivElement;
const dayElement = document.querySelector(".day") as HTMLDivElement;
const displayElement = document.querySelector(".display") as HTMLDivElement;
const lightButtonElement = document.querySelector(".light-btn") as HTMLButtonElement;
const randomButtonElement = document.querySelector(".random-btn") as HTMLButtonElement;

let randomRedValue: number;
let randomGreenValue: number;
let randomBlueValue: number;

// This button changes the brightness of Digital clock
lightButtonElement.addEventListener("click", function (): void {
  // This part makes the brightness of colors more
  dateElement.style.filter = "brightness(1.5)";
  dayElement.style.filter = "brightness(1.5)";
  displayElement.style.filter = "brightness(1.5)";

  // This part returns to default the brightness of colors
  setTimeout(() => {
    dateElement.style.filter = "brightness(0.7)";
    dayElement.style.filter = "brightness(0.7)";
    displayElement.style.filter = "brightness(0.7)";
  }, 2000);
});

// This button changes the color of Digital clock to a random color
randomButtonElement.addEventListener("click", function (): void {
  // Here makes 3 different random number for RGB color
  randomRedValue = Number(Math.floor(Math.random() * 256));
  randomGreenValue = Number(Math.floor(Math.random() * 256));
  randomBlueValue = Number(Math.floor(Math.random() * 256));

  dateElement.style.color = `rgb(${randomRedValue}, ${randomGreenValue}, ${randomBlueValue})`;
  dayElement.style.color = `rgb(${randomRedValue}, ${randomGreenValue}, ${randomBlueValue})`;
  displayElement.style.color = `rgb(${randomRedValue}, ${randomGreenValue}, ${randomBlueValue})`;
});

// This function updates time and date values
function updateClock(): void {
  const currentTime: Date = new Date(); // Need a new time and date for each update

  // Extract time and date details
  let seconds: number | string = currentTime.getSeconds();
  let minutes: number | string = currentTime.getMinutes();
  let hours: number | string = currentTime.getHours();
  let weekDay: number = currentTime.getDay();
  let day: number = currentTime.getDate();
  let month: number = currentTime.getMonth();
  let year: number = currentTime.getFullYear();

  // Convert seconds value to a degree for the analog clock and set it as style for div element
  const secondsToDegree: number = (seconds / 60) * 360;
  secondElement.style.transform = `rotate(${secondsToDegree}deg)`;

  // Convert minutes value to a degree for the analog clock and set it as style for div element
  const minutesToDegree: number = (minutes / 60) * 360;
  minuteElement.style.transform = `rotate(${minutesToDegree}deg)`;

  // Convert hours value to a degree for the analog clock and set it as style for div element
  const hoursToDegree: number = (hours / 12) * 360 + minutes / 2;
  hourElement.style.transform = `rotate(${hoursToDegree}deg)`;

  // Convert the month value to the name of the month as a string
  const monthName: string[] = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Nov", "Dec"];
  dateElement.innerHTML = `${year} . ${monthName[month]} . ${day}`;

  // Convert the day value to the name of the day as a string
  const DayName: string[] = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  dayElement.innerHTML = `${DayName[weekDay]}`;

  // Set a string to know the time is in the morning or evening
  let AM_PM: string = "A M";

  // This condition checks if time is one digit and then adds a 0 to the first and makes the time value from 0 to 12
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
