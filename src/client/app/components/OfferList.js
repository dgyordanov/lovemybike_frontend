import React, { PropTypes } from 'react'
import Offer from './Offer'

const OfferList = ({ offers }) => (
  <ul>
    {offers.map(offer =>
      <Offer
        key={offer.id}
        {...offer}
      />
    )}
  </ul>
)

OfferList.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired
  }).isRequired).isRequired
}

export default OfferList
