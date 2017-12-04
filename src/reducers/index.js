import user from './user'
import data from './data'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
  data,
  user,
})

export default rootReducer