//Setting The Time Variables
var secs = 0;
var mins = 0;
var hrs = 0;
//Timer Controller
let timerOn = false;

//Connecting The Elements Using Tag ID
//Timer Variable
var second = document.getElementById("seconds");
var minute = document.getElementById("minutes");
var hour = document.getElementById("hour");

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
  if (secs < 12) {
    if (secs < 10) {
      second.innerHTML = "0" + secs;
    } else {
      second.innerHTML = secs;
    }
  } else {
    secs = 0;
    mins += 1;
    if (mins < 12) {
      if (mins < 10) {
        minute.innerHTML = "0" + mins;
      } else {
        minute.innerHTML = mins;
      }
    } else {
      mins = 00;
      hrs += 1;
      hour.innerHTML = hrs;
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

startWatchBtn.addEventListener("click", startTimer);
pauseWatchBtn.disabled = true;
resetWatchBtn.disabled = true;
pauseWatchBtn.classList.add("d-none");
resetWatchBtn.classList.add("d-none");
pauseWatchBtn.addEventListener("click", pauseTimer);
resetWatchBtn.addEventListener("click", resetTimer);
