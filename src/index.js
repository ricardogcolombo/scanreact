import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {
    Provider
} from 'react-redux';

// containers
import App from './containers/App';
import ScannerContainer from './containers/ScannerContainer';
import DetailsContainer from './containers/DetailsContainer';

// store
import Store from './store';

// routing
import {
    Router,
    Route,
    IndexRoute,
    hashHistory
} from 'react-router'

ReactDOM.render(
    <Provider store={Store}>
        <Router history={hashHistory}>
          <Route path="/" component={App}>
            <IndexRoute component={ScannerContainer} />
            <Route path="details" component={DetailsContainer} />
          </Route>
        </Router>
 </Provider>,
    document.getElementById('root')
);
