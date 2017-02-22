import { connect } from 'react-redux'
import OfferList from '../components/OfferList'

const mapStateToProps = (state) => ({
  offers: state.myoffers
})

const mapDispatchToProps =  ({})

const VisibleOfferList = connect(
  mapStateToProps,
  mapDispatchToProps
)(OfferList)

export default VisibleOfferList
