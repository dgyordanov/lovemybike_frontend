import { connect } from 'react-redux'
import Top from '../components/Top'
import { locationChanged, locationSubmit } from '../actions/actions'

const mapStateToProps = (state) => ({
  //location: state.visibilityFilter.location
})

const mapDispatchToProps =  (dispatch) => ({
    locationChanged: (e) => {
        if (e.key === 'Enter') {
            dispatch(locationSubmit());
        } else {
            dispatch(locationChanged(e.target.value));
        }
    },
    locationSubmit: (e) => {
        e.preventDefault();
        dispatch(locationSubmit());
    }
})

const TopContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Top)

export default TopContainer
