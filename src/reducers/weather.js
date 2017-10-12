import constants from '../constants'

export default (state = {}, action) => {
  switch (action.type) {
    case constants.FETCH_WEATHER:
      return action.payload
    default:
      return state
  }
}