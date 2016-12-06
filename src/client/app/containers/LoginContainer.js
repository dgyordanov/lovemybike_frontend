import { connect } from 'react-redux'
import LoginPage from '../components/LoginPage'
import { login } from '../actions/actions'

const mapStateToProps = (state) => ({
  // TODO errors
})

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (values) => {
      console.log('submitted values: ');
      console.log(values);
      // SEND CREDENTIALS
    	//dispatch(login());
    }
  }
}

const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage)

export default LoginContainer