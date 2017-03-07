import React, { PropTypes } from 'react'
import { Link } from 'react-router'


const Offer = ({ id, title, image0, price, description }) => (
	<div className="col-sm-4 col-lg-4 col-md-4">
        <div className="thumbnail">
            <img src={image0} alt="" />
            <div className="caption">
                <h4 className="pull-right">{price} &euro;</h4>
                <h4><Link to={`/offer/${id}`}>{title}</Link></h4>
                <p>description</p>
            </div>
        </div>
    </div>
)

Offer.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    image0: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired
}

export default Offer

