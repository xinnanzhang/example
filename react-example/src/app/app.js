require('./extend');
import React from 'react';
import ReactDOM from 'react-dom';
import ReactRouter ,{ Router, browserHistory } from 'react-router';

// import createHashHistory from 'history/lib/createHashHistory';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Provider } from 'react-redux';
import AppRoutes from './app-route.js';
import configureStore from './configureStore';


injectTapEventPlugin();

var store = configureStore();
var createComponent = (Component, props) => {
    return <Component {...props} />;
};

ReactDOM.render(
  <Provider store={store}>
      <Router history={browserHistory} createElement={createComponent}>
          {AppRoutes}
      </Router>
  </Provider>, document.getElementById('app')
);
