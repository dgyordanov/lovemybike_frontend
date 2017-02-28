import { connect } from 'react-redux'
import Top from '../components/Top'

const mapStateToProps = (state) => ({
  //location: state.visibilityFilter.location
})

const mapDispatchToProps =  (dispatch) => ({
    locationChanged: (e) => {
        console.log(e);
    },
    locationSubmit: (e) => {
        e.preventDefault();
        console.log(e);
    }
})

const TopContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Top)

export default TopContainer
