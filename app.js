//Setting The Time Variables
var secs = 0;
var mins = 0;
var hrs = 0;
var days = 0;
//Timer Controller
let timerOn = false;

//Connecting The Elements Using Tag ID
//Timer Variable
var second = document.getElementById("seconds");
var minute = document.getElementById("minutes");
var hour = document.getElementById("hour");
var day = document.getElementById("day");

//TimerVariable
var watch;

//StopWatch Controller
var startWatchBtn = document.getElementById("start");
var pauseWatchBtn = document.getElementById("pause");
var resetWatchBtn = document.getElementById("reset");
var pausePlayIcon = document.getElementById("pause_pay");
var pauseText = document.getElementById("pause_text");

const startWatch = () => {
  secs += 1;
  if (secs < 6) {
    second.innerHTML = minTwoDigits(secs);
  } else {
    secs = 0;
    mins += 1;
    if (mins < 6) {
      minute.innerHTML = minTwoDigits(mins);
      second.innerHTML = minTwoDigits(secs);
    } else {
      mins = 00;
      hrs += 1;
      if (hrs < 6) {
        hour.innerHTML = minTwoDigits(hrs);
        minute.innerHTML = minTwoDigits(0);
      } else {
        hrs = 0;
        days += 1;
        hour.innerHTML = minTwoDigits(0);
        day.innerHTML = minTwoDigits(days);
      }
    }
  }
};

const startTimer = () => {
  timerOn = true;
  watch = setInterval(startWatch, 1000);
  startWatchBtn.disabled = true;
  startWatchBtn.classList.add("d-none");
  pauseWatchBtn.classList.remove("d-none");
  resetWatchBtn.classList.remove("d-none");
  resetWatchBtn.disabled = false;
  pauseWatchBtn.disabled = false;
};

const pauseTimer = () => {
  if (timerOn) {
    timerOn = false;
    clearInterval(watch);
    startWatchBtn.disabled = false;
    pausePlayIcon.classList.remove("bi-pause");
    pausePlayIcon.classList.add("bi-play");
    pauseText.innerHTML = "Resume";
  } else {
    timerOn = true;
    watch = setInterval(startWatch, 1000);
    pausePlayIcon.classList.add("bi-pause");
    pausePlayIcon.classList.remove("bi-play");
    pauseText.innerHTML = "Pause";
  }
};

const resetTimer = () => {
  secs = 0;
  mins = 0;
  hrs = 0;
  minute.innerHTML = "00";
  second.innerHTML = "00";
  hour.innerHTML = "00";
  clearInterval(watch);
  pauseWatchBtn.disabled = true;
  resetWatchBtn.disabled = true;
  startWatchBtn.disabled = false;
  startWatchBtn.classList.remove("d-none");
  pauseWatchBtn.classList.add("d-none");
  resetWatchBtn.classList.add("d-none");
};

function minTwoDigits(n) {
  return (n < 10 ? "0" : "") + n;
}

startWatchBtn.addEventListener("click", startTimer);
pauseWatchBtn.disabled = true;
resetWatchBtn.disabled = true;
pauseWatchBtn.classList.add("d-none");
resetWatchBtn.classList.add("d-none");
pauseWatchBtn.addEventListener("click", pauseTimer);
resetWatchBtn.addEventListener("click", resetTimer);
