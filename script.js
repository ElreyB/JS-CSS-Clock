let timeType = undefined;
function timeSwitch(button) {
  timeType = button.id;
}
function timeToDegrees(timeUnit, hour = true) {
  return hour ? ((timeUnit / 12) * 360) + 90 : ((timeUnit / 60) * 360) + 90;
}

function addZero(timeNum) {
  return timeNum < 10 ? `0${timeNum}` : timeNum;
}

function setDate() {
  const now = new Date();
  const hourHand = document.querySelector('.hour-hand');
  const minHand = document.querySelector('.min-hand');
  const secondHand = document.querySelector('.second-hand');

  const seconds = now.getSeconds();
  const secondsDegrees = timeToDegrees(seconds, false);
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const mins = now.getMinutes();
  const minsDegrees = timeToDegrees(mins, false) + ((seconds / 60) * 6);
  minHand.style.transform = `rotate(${minsDegrees}deg)`;

  const hours = now.getHours();
  const hoursDegrees = timeToDegrees(hours) + ((mins / 60) * 30);
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

  const hoursDigital = document.querySelector('.hour-digital');
  if (timeType === 'military-time') {
    hoursDigital.innerHTML = `${addZero(hours)} : `;
  } else {
    hoursDigital.innerHTML = hours > 12 ? `${addZero(hours - 12)} : ` : `${addZero(hours)} : `;
  }

  const minsDigital = document.querySelector('.min-digital');
  minsDigital.innerHTML = `${addZero(mins)} : `;

  const secondsDigital = document.querySelector('.second-digital');
  secondsDigital.innerHTML = addZero(seconds);

  [seconds, mins, hours].forEach((unit) => {
    if (unit === 59 || unit === 12 || unit === 0) {
      secondHand.style.transitionDuration = '0s';
    } else if (unit === 1) {
      secondHand.style.transitionDuration = '0.05s';
    }
  });
}

setInterval(setDate, 1000);
