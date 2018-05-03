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
    return orderBars(newFiltered, loc);
  }
  return orderBars(filteredBars, loc);

}

// not the best but eh
const isNearby = (userCoords, barCoords) => {
  return (Math.abs(userCoords[0]-barCoords[0]) < .01) && (Math.abs(userCoords[1]-barCoords[1]) < .01)
}

const isWithinWindow = (userWindow, barWindow) => {
  return (barWindow[0] <= userWindow[0] && barWindow[1] > userWindow[0]) || (barWindow[0] >= userWindow[0] && barWindow[0] < userWindow[1])
}

// will need to be updated to be organized along a route.. 
const orderBars = (bars, userCoords) => {
  const results = [];
  let i = 0;
  while (results.length < 3) {
    if (!results.length || bars[i].happyHours[dayOfWeek].end > results[results.length-1].happyHours[dayOfWeek].end) {
      results.push(bars[i]);
      i++;
    } else if (bars[i].happyHours[dayOfWeek].end < results[0].happyHours[dayOfWeek].end) {
      results.unshift(bars[i]);
      i++;
    } else {
      results.splice(1,0,bars[i]);
      i++;
    }
  }
  return results;
}

export default generateRoute;