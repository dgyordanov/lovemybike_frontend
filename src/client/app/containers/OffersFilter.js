import { connect } from 'react-redux'
import Filters from '../components/Filters'
import { setVisibilityFilter } from '../actions/actions'

const mapStateToProps = (state) => ({
  filter: state.visibilityFilter
})

const mapDispatchToProps = (dispatch) => {
  return {
    onFilterClick: (value) => {
      dispatch(setVisibilityFilter(value));
    }
  }
}

const OffersFilter = connect(
  mapStateToProps,
  mapDispatchToProps
)(Filters)

export default OffersFilter
