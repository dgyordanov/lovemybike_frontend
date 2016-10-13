import { combineReducers } from 'redux'
import offers from './offers'
import visibilityFilter from './visibilityFilter'
import { routerReducer } from 'react-router-redux'

const bikesApp = combineReducers({
  offers,
  visibilityFilter,
  routing: routerReducer
})

export default bikesApp
