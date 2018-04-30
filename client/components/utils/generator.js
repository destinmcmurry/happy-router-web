// will have a function to filter through the bars, and select a random group of 3 that match the params

const generateRoute = (bars, loc, start, end) => {

  // use helper functions to filter bars (rn just returning all)
  const filteredBars = bars.filter(bar => {
    return isNearby(loc, bar.location) &&
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

// not the best but eh
const isNearby = (userCoords, barCoords) => {
  return (Math.abs(userCoords[0]-barCoords[0]) < .01) && (Math.abs(userCoords[1]-barCoords[1]) < .01)
}

// not actually doing anything right now
const isWithinWindow = (userWindow, barWindow) => {
  return true;
}

export default generateRoute;
