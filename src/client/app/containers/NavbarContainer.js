import { connect } from 'react-redux'
import Navbar from '../components/Navbar'
import { logout, myOffers } from '../actions/actions'

const mapStateToProps = (state) => ({
	loginIdentifier: state.auth.identifier,
})

const mapDispatchToProps = (dispatch) => {
	return {
		logout: () => {
	    	dispatch(logout());
	    },
	    myOffers: (e) => {
	        e.preventDefault();
	        dispatch(myOffers());
	    }
	};
}

const NavbarContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(Navbar)

export default NavbarContainer