/*
INITIAL STATE
*/

const initialState = {
  userLocation: null,
  userStart: null,
  userEnd: null,
  route: null
}

/*
ACTION TYPES
*/

const SET_NEW_LOCATION = 'SET_NEW_LOCATION'
const SET_WINDOW = 'SET_WINDOW'
const SET_NEW_ROUTE = 'SET_NEW_ROUTE'

/*
ACTION CREATORS
*/

export const setNewLocation = userLocation => ({ type: SET_NEW_LOCATION, userLocation })
export const setWindow = (userStart, userEnd) => ({ type: SET_WINDOW, userStart, userEnd })
export const setNewRoute = bars => ({ type: SET_NEW_ROUTE, bars })

/*
REDUCER
*/

export default (state = initialState, action) => {
  switch(action.type) {
    case SET_NEW_LOCATION:
      return Object.assign({}, state, { userLocation: action.userLocation });
    case SET_WINDOW:
      return Object.assign({}, state, { userStart: action.userStart, userEnd: action.userEnd });
    case SET_NEW_ROUTE:
      return Object.assign({}, state, { route: action.bars });
    default:
      return state;
  }
}