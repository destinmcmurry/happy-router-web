
const getToday = () => {
  let d = new Date();
  let n = d.getDay();
  if (n === 0) {
    return 'SU';
  } else if (n === 1) {
    return 'M';
  } else if (n === 2) {
    return 'TU';
  } else if (n === 3) {
    return 'W';
  } else if (n === 4) {
    return 'TH';
  } else if (n === 5) {
    return 'F';
  } else if (n === 6) {
    return 'SA';
  }
}

export default getToday;