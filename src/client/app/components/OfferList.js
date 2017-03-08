"use strict";
import React, { PropTypes } from 'react';
import Offer from './Offer';
import PaginationRow from './reusable/PaginationRow';

const OfferList = ({offers, pageChanged}) => {
    var groupSize = 3;
    var rows = offers.content.map(offer =>
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

    return (
        <div>
            {rows}
            {offers.content.length > 0 &&
                 <PaginationRow
                    items={offers.totalPages}
                    activePage={offers.pageIndex}
                    pageChanged={pageChanged} />
            }
        </div>
     );
}

export default OfferList
