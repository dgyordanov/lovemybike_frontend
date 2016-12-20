import { connect } from 'react-redux'
import Navbar from '../components/Navbar'

const mapStateToProps = (state) => ({
	loginIdentifier: state.auth.identifier,
})

const mapDispatchToProps = (dispatch) => {
	return {};
}

const NavbarContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(Navbar)

export default NavbarContainer