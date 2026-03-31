const timeElement = document.getElementById("time");
const ampmElement = document.getElementById("ampm");
const dateElement = document.getElementById("date");

function updateClock() {
  const now = new Date();

  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  const ampm = hours >= 12 ? "PM" : "AM";

  hours = hours % 12 || 12;

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  const colon = seconds % 2 === 0 ? ":" : " ";

  timeElement.textContent = `${hours}${colon}${minutes}${colon}${seconds}`;
  ampmElement.textContent = ampm;

  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  dateElement.textContent = now.toLocaleDateString(undefined, options);
}

setInterval(updateClock, 1000);
updateClock();
