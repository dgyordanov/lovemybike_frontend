import React, { PropTypes } from 'react'
import { Link } from 'react-router'


const Offer = ({ id, title, image0_s, price, description, showOffer }) => (
	<div className="col-sm-4 col-lg-4 col-md-4">
        <div className="thumbnail">
            <img src={image0_s} alt="" />
            <div className="caption">
                <h4 className="pull-right">{price} &euro;</h4>
                <h4><a onClick={() => showOffer(id)}>{title}</a></h4>
                <p>{description}</p>
            </div>
        </div>
    </div>
)

Offer.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    image0_s: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired
}

export default Offer

