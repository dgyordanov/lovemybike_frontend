import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import bikesApp from './reducers/bikesApp'
import App from './components/App'

let store = createStore(bikesApp)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
