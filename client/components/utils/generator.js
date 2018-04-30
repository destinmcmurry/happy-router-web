// will have a function to filter through the bars, and select a random group of 3 that match the params

const generateRoute = (bars, loc, start, end) => {

  // use helper functions to filter bars (rn just returning all)
  const filteredBars = bars.filter(bar => {
    return isWithinOneMile(loc, bar.location) &&
    isWithinWindow([start, end], [bar.happyHours.M.start, bar.happyHours.M.end])
  })

  // if there are no matches, will let the user know
  if (!filteredBars.length) return null;
  // if there are less than 3 matches, just return them
  if (filteredBars.length <= 3) return filteredBars;
  // otherwise,
  // choose 3 at random
  const indexes = [];
  while (indexes.length < 3) {
    let randomNum = Math.floor(Math.random() * (filteredBars.length));
    if (!indexes.includes(randomNum)) {
      indexes.push(randomNum);
    }
  }
  return indexes.map(i => filteredBars[i])
}


const isWithinOneMile = (userCoords, barCoords) => {
  return true;
}

const isWithinWindow = (userWindow, barWindow) => {
  return true;
}

export default generateRoute;
