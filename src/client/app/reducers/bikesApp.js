import { combineReducers } from 'redux'
import offers from './offers'
import visibilityFilter from './visibilityFilter'
import { routerReducer } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'

const bikesApp = combineReducers({
	offers,
	visibilityFilter,
	routing: routerReducer,
	form: formReducer,
})

export default bikesApp
