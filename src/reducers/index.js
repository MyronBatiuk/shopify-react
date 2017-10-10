import weather from './weather-reducer.js'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
  weather,
})

export default rootReducer