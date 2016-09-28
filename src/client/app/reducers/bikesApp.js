import { combineReducers } from 'redux'
import offers from './offers'
import visibilityFilter from './visibilityFilter'

const bikesApp = combineReducers({
  offers,
  visibilityFilter
})

export default bikesApp
