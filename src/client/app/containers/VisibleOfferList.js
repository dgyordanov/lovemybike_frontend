import { connect } from 'react-redux'
import OfferList from '../components/OfferList'
import { pageChanged } from '../actions/actions'

const mapStateToProps = (state) => ({
  offers: state.offers
});

const mapDispatchToProps =  (dispatch) => ({
    pageChanged: (pageIndex) => {
        dispatch(pageChanged(pageIndex));
    }
});

const VisibleOfferList = connect(
  mapStateToProps,
  mapDispatchToProps
)(OfferList)

export default VisibleOfferList
