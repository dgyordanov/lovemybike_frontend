import { connect } from 'react-redux'
import OfferList from '../components/OfferList'

// TODO: think how to habdle this case when the offers are read from the REST API
const getVisibleOffers = (offers, filters) => {
  if (!filters.w && !filters.m && !filters.c){
  	return offers;
  }

  // TODO improve it
  let result = offers;
  if (!filters.w) {
	result = result.filter(offer => offer.gender !== "w");
  }
  if (!filters.m) {
	result = result.filter(offer => offer.gender !== "m");
  }
  if (!filters.c) {
	result = result.filter(offer => offer.gender !== "c");
  }

  return result;
}

const mapStateToProps = (state) => ({
  offers: getVisibleOffers(state.offers, state.visibilityFilter)
})

const mapDispatchToProps =  ({})

const VisibleOfferList = connect(
  mapStateToProps,
  mapDispatchToProps
)(OfferList)

export default VisibleOfferList
