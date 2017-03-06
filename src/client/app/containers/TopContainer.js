import { connect } from 'react-redux'
import Top from '../components/Top'
import { locationChanged, locationSubmit, locationDelete } from '../actions/actions'

const mapStateToProps = (state) => ({
  location: state.visibilityFilter.location,
  submittedLocation: state.visibilityFilter.submittedLocation
});

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
    },
    locationDelete: () => {
        dispatch(locationDelete());
    }
})

const TopContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Top)

export default TopContainer
