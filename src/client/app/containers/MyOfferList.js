import { connect } from 'react-redux'
import OfferList from '../components/OfferList'
import { myOffersPageChanged } from '../actions/actions'

const mapStateToProps = (state) => ({
  offers: state.myoffers
});

const mapDispatchToProps =  (dispatch) => ({
    pageChanged: (pageIndex) => {
        dispatch(myOffersPageChanged(pageIndex));
    }
});

const MyOfferList = connect(
  mapStateToProps,
  mapDispatchToProps
)(OfferList)

export default MyOfferList
