import { connect } from 'react-redux'
import SignupPage from '../components/SignupPage'
import { signup } from '../actions/actions'

const mapStateToProps = (state) => ({
	signUpInProgress: state.auth.signUpInProgress,
	signUpError: state.auth.signUpError
})

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (values) => {
    	dispatch(signup(values));
    }
  }
}

const SignupContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupPage)

export default SignupContainer