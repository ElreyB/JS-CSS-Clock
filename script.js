// document.querySelector('button').addEventListener('click', timeSwitch);
let timeType = undefined;
function timeSwitch(button) {
  timeType = button.id;
}
function timeToDegrees(timeUnit) {
  return ((timeUnit / 60) * 360) + 90;
}

function addZero(timeNum) {
  return timeNum < 10 ? `0${timeNum}` : timeNum;
}

function setDate() {
  const now = new Date();
  const hourHand = document.querySelector('.hour-hand');
  const minuteHand = document.querySelector('.min-hand');
  const secondHand = document.querySelector('.second-hand');

  const hours = now.getHours();
  const hoursDegrees = timeToDegrees(hours);
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

  const minutes = now.getMinutes();
  const minutesDegrees = timeToDegrees(minutes);
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

  const seconds = now.getSeconds();
  const secondsDegrees = timeToDegrees(seconds);
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const hoursDigital = document.querySelector('.hour-digital');
  if (timeType === 'military-time') {
    hoursDigital.innerHTML = `${addZero(hours)} : `;
  } else {
    hoursDigital.innerHTML = hours > 12 ? `${addZero(hours - 12)} : ` : `${addZero(hours)} : `;
  }

  const minutesDigital = document.querySelector('.min-digital');
  minutesDigital.innerHTML = `${addZero(minutes)} : `;

  const secondsDigital = document.querySelector('.second-digital');
  secondsDigital.innerHTML = addZero(seconds);

  // const hands = document.styleSheets[0].rules[4].style;
  // console.log(document.styleSheets[0].rules[4].style);

  // if (seconds === 0) {
  //   hands.removeProperty('transition');
  // }

}

setInterval(setDate, 1000);
