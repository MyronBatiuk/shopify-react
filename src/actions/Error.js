import constants from '../constants'

export default {
  newError: (data) => {
    return {
      type: constants.ERRORS.ERROR,
      payload: data,
    }
  },
  resetError: () => {
    return {
      type: constants.ERRORS.RESET_ERROR,
    }
  },
}