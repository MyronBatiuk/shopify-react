import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers/index'
import initialState from './initial-state'

const middleware = [
  thunk,
]
/* eslint-disable */
const composeEnhancers = process.env.NODE_ENV !== 'production' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/* eslint-enable */
const enhancer = composeEnhancers(
  applyMiddleware(...middleware),
)

const store = createStore(
  rootReducer,
  initialState,
  enhancer,
)
/* eslint-disable */
if (process.env.NODE_ENV !== 'production') {
  if (module.hot) {
    module.hot.accept('../reducers', () => {
      store.replaceReducer(rootReducer);
    });
  }
}
/* eslint-enable */

export default store