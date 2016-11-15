import 'babel-polyfill'
import axios from 'axios';
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';
import bikesApp from './reducers/bikesApp'
import App from './components/App'
import OffersRoot from './components/OffersRoot'
import OfferDetails from './components/OfferDetails'
import LoginPage from './components/LoginPage';

// Prevent the browser to open the basic auth popup
axios.defaults.headers.common['X-Requested-By'] = 'lovemybike_frontend';

let store = createStore(
	bikesApp,
	applyMiddleware(thunk, promise, createLogger())
);

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store)

render(
  <Provider store={store}>
   <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={OffersRoot}/>
        <Route path="/offer/:offerId" component={OfferDetails}/>
        <Route path="login" component={LoginPage} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
