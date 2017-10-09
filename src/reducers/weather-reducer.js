import types from '../actions/action-types';

export default (state = {}, action) => {
  switch (action.type) {
  case types.FETCH_WEATHER:
    return action.payload;
  default:
    return state;
  }
};