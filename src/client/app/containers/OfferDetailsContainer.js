import { connect } from 'react-redux'
import OfferDetails from '../components/OfferDetails'

const mapStateToProps = (state) => ({
  offer: state.offer
});

const OfferDetailsContainer = connect(
  mapStateToProps,
  null
)(OfferDetails)

export default OfferDetailsContainer