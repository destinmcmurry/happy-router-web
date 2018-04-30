
const convertFromMilitary = time => {
  if (time >= 1300) {
    if (time >= 1200 && time < 1300) { return (Math.floor((time - 1200)/100) + 'am');}
    return (Math.floor((time - 1200)/100) + 'pm');
  }
  return time+'am';
}

export default convertFromMilitary;