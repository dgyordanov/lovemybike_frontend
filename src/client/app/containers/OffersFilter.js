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
    onFilterClick: (filters) => {
      dispatch(applyFilters(filters));
    }
  }
}

const OffersFilter = connect(
  mapStateToProps,
  mapDispatchToProps
)(Filters)

export default OffersFilter
