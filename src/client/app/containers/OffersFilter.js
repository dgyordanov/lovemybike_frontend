import { connect } from 'react-redux'
import Filters from '../components/Filters'
import { setVisibilityFilter, applyFilters } from '../actions/actions'

const mapStateToProps = (state) => ({
  filter: state.visibilityFilter
})

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeFilterClick: (value) => {
      dispatch(setVisibilityFilter(value));
    },
    onFilterClick: () => {
      dispatch(applyFilters());
    }
  }
}

const OffersFilter = connect(
  mapStateToProps,
  mapDispatchToProps
)(Filters)

export default OffersFilter
