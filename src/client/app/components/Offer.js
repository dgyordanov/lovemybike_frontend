import React, { PropTypes } from 'react'

const Offer = ({ id, title, imageUrl, price, description }) => (
	<div className="col-sm-4 col-lg-4 col-md-4">
        <div className="thumbnail">
            <img src={imageUrl} alt="" />
            <div className="caption">
                <h4 className="pull-right">{price} &euro;</h4>
                <h4><a href="#">{title}</a></h4>
                <p>description</p>
            </div>
        </div>
    </div>
)

Offer.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired
}

export default Offer

