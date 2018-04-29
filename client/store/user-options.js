/*
INITIAL STATE
*/

const initialState = {
  userLocation: [-73.963, 40.688],
  userStart: null,
  userEnd: null
}

/*
ACTION TYPES
*/

const SET_NEW_LOCATION = 'SET_NEW_LOCATION'
const SET_WINDOW = 'SET_WINDOW'

/*
ACTION CREATORS
*/

export const setNewLocation = userLocation => ({ type: SET_NEW_LOCATION, userLocation })
export const setWindow = (userStart, userEnd) => ({ type: SET_WINDOW, userStart, userEnd })

/*
REDUCER
*/

export default (state = initialState, action) => {
  switch(action.type) {
    case SET_NEW_LOCATION:
      return Object.assign({}, state, { userLocation: action.userLocation });
    case SET_WINDOW:
      return Object.assign({}, state, { userStart: action.userStart, userEnd: action.userEnd });
    default:
      return state;
  }
}