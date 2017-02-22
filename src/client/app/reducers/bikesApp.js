import { combineReducers } from 'redux'
import offers from './offers'
import myoffers from './myoffers'
import visibilityFilter from './visibilityFilter'
import auth from './auth'
import { routerReducer } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'

const bikesApp = combineReducers({
	offers,
	myoffers,
	visibilityFilter,
	auth,
	routing: routerReducer,
	form: formReducer,
})

export default bikesApp
