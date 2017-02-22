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
import MyOffers from './components/MyOffers'
import OfferDetails from './components/OfferDetails'
import PostOfferContainer from './containers/PostOfferContainer'
import LoginContainer from './containers/LoginContainer';
import SignupContainer from './containers/SignupContainer';
import { setAuthToken } from './util/auth'

// Prevent the browser to open the basic auth popup
axios.defaults.headers.common['X-Requested-By'] = 'lovemybike_frontend';

let store = createStore(
	bikesApp,
	applyMiddleware(thunk, promise, createLogger())
);

setAuthToken(localStorage.getItem('authToken'));

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store)

render(
  <Provider store={store}>
   <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={OffersRoot}/>
        <Route path="/offer/:offerId" component={OfferDetails}/>
        <Route path="/postoffer" component={PostOfferContainer} />
        <Route path="/myoffers" component={MyOffers} />
        <Route path="login" component={LoginContainer} />
        <Route path="signup" component={SignupContainer} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
