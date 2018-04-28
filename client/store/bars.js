import seedData from '../../seed';

/*
INITIAL STATE
*/

const initialState = {
  bars: seedData
}

/*
ACTION TYPES
*/

const GET_BARS = 'GET_BARS'

/*
ACTION CREATORS
*/

export const getBars = bars => ({ type: GET_BARS, bars })

/*
THUNKS
*/

// export const grabAllBars = () =>
//   dispatch =>
//     axios.get('/api/bars')
//       .then(res =>
//         dispatch(getBars(res.data)))
//       .catch(err => console.log(err))

/*
REDUCER
*/

export default (state = initialState, action) => {
  
  return state;

}