import weather from './weather'
import user from './user'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  weather,
  user
})

export default rootReducer