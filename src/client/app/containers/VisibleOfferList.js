import { connect } from 'react-redux'
import OfferList from '../components/OfferList'

const mapStateToProps = (state) => ({
  offers: state.offers
})

const mapDispatchToProps =  ({})

const VisibleOfferList = connect(
  mapStateToProps,
  mapDispatchToProps
)(OfferList)

export default VisibleOfferList
