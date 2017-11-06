import constants from '../constants'

export default {
  login: data => dispatch => {
    dispatch({
      type: constants.USER_LOGGING_IN,
    })

    // Wait 2 seconds before "logging in"
    setTimeout(() => {
      dispatch({
        type: constants.USER_LOGGED_IN,
        payload: data,
      })
    }, 2000)
  },
  logout: () => ({type: constants.USER_LOGGED_OUT}),
}