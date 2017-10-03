import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import store from './store/store';
import registerServiceWorker from './registerServiceWorker';

import './css/global.css';

ReactDOM.render(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>,
    document.getElementById('root'),
);

if (module.hot) {
  module.hot.accept('./components/app', () => {

    ReactDOM.render(
        <Provider store={store}>
          <Router>
            <App />
          </Router>
        </Provider>,
        document.getElementById('root'));
  });
}
registerServiceWorker();
