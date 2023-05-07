function setAlarm(employed, vacationing) {
    if (employed === true && vacationing === false) {
      return true;
    } else if (employed === true && vacationing === true) {
      return false;
    } else if (employed === false && vacationing === false) {
      return false;
    } else employed === false && vacationing === true;
    return false;
  }
  console.log(setAlarm(true, true));
  console.log(setAlarm(false, false));
  console.log(setAlarm(false, true));
  console.log(setAlarm(true, false));