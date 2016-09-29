import React, { PropTypes } from 'react'

const Offer = ({ id, title, imageUrl, price, description }) => (
  <li>
    {title}
  </li>
)

Offer.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired
}

export default Offer

