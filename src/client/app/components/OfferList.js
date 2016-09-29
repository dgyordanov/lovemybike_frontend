"use strict";
import React, { PropTypes } from 'react'
import Offer from './Offer'

const OfferList = ({offers}) => {
    var groupSize = 3;
    var rows = offers.map(offer =>
        <Offer key={offer.id} {...offer} />
    ).reduce(function(r, element, index) {
        // create element groups with size 3, result looks like:
        // [[elem1, elem2, elem3], [elem4, elem5, elem6], ...]
        index % groupSize === 0 && r.push([]);
        r[r.length - 1].push(element);
        return r;
    }, []).map(function(rowContent) {
        // surround every group with 'row'
        return <div className="row">{rowContent}</div>;
    });

    return <div className="container">{rows}</div>;
}

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
