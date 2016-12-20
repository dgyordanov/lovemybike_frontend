import { connect } from 'react-redux'
import Navbar from '../components/Navbar'
import { logout } from '../actions/actions'

const mapStateToProps = (state) => ({
	loginIdentifier: state.auth.identifier,
})

const mapDispatchToProps = (dispatch) => {
	return {
		logout: () => {
	    	dispatch(logout());
	    }
	};
}

const NavbarContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(Navbar)

export default NavbarContainer