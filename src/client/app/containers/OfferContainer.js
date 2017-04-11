import { connect } from 'react-redux'
import Offer from '../components/Offer'
import { showOffer } from '../actions/actions'

const mapStateToProps = (state, ownProps) => ({
    offer: ownProps.offer
})

const mapDispatchToProps = (dispatch) => {
  return {
    showOffer: (offerId) => {
      dispatch(showOffer(offerId));
    }
  }
}

const OfferContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Offer)

export default OfferContainer