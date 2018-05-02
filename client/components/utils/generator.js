import getToday from './day';
let dayOfWeek = getToday();

// filters through the bars, and select a random group of 3 that match the params
const generateRoute = (bars, loc, start, end) => {

  // use helper functions to filter bars 
  const filteredBars = bars.filter(bar => {
    return isNearby(loc, bar.location) &&
    isWithinWindow([start, end], [bar.happyHours[dayOfWeek].start, bar.happyHours[dayOfWeek].end])
  })

  // if there are no matches, will let the user know
  if (!filteredBars.length) return null;

  // if there are more than 3 matches, choose three at random
  // order by soonest ending and return 
  if (filteredBars.length > 3) {
    const indexes = [];
    while (indexes.length < 3) {
      let randomNum = Math.floor(Math.random() * (filteredBars.length));
      if (!indexes.includes(randomNum)) {
        indexes.push(randomNum);
      }
    }
    const newFiltered = indexes.map(i => filteredBars[i])
    return orderBars(newFiltered);
  }

  return orderBars(filteredBars);

}

// not the best but eh
const isNearby = (userCoords, barCoords) => {
  return (Math.abs(userCoords[0]-barCoords[0]) < .01) && (Math.abs(userCoords[1]-barCoords[1]) < .01)
}

// will need to get day of week
// and take out all of the hard coded M's
const isWithinWindow = (userWindow, barWindow) => {
  return (barWindow[0] <= userWindow[0] && barWindow[1] > userWindow[0]) || (barWindow[0] >= userWindow[0] && barWindow[0] < userWindow[1])
}

// right now orders by earliest end for happy hour window
// but should also take into account distance
const orderBars = bars => {
  const results = [bars[0]];
  for (let i = 1; i < bars.length; i++) {
    if (bars[i].happyHours[dayOfWeek].end <= results[0].happyHours[dayOfWeek].end) {
      if (bars[i].happyHours[dayOfWeek].end = results[0].happyHours[dayOfWeek].end)
      results.unshift(bars[i]);
    } else if (results[1] && bars[i].happyHours[dayOfWeek].end <= results[1].happyHours[dayOfWeek].end) {
      results.splice(1,0,bars[i]);
    } else {
      results.push(bars[i]);
    }
  }
  return results;
}

export default generateRoute;