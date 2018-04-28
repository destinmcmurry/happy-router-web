/*
INITIAL STATE
*/

const initialState = {
  userLocation: [-73.963, 40.688]
}

/*
ACTION TYPES
*/

const SET_NEW_LOCATION = 'SET_NEW_LOCATION'

/*
ACTION CREATORS
*/

export const setNewLocation = userLocation => ({ type: SET_NEW_LOCATION, userLocation })

/*
REDUCER
*/

export default (state = initialState, action) => {
  switch(action.type) {
    case SET_NEW_LOCATION:
      return action.userLocation;
    default:
      return state;
  }
}