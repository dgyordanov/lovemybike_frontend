"use strict";
import React, { PropTypes } from 'react'
import Offer from './Offer'
import { Pagination } from 'react-bootstrap';

const OfferList = ({offers}) => {
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
            {offers.content.length > 0 &&
                <div className="row">
                    <div className="col-md-6 col-md-offset-3">
                         <Pagination
                            prev
                            next
                            first
                            last
                            ellipsis
                            boundaryLinks
                            items={20}
                            maxButtons={5}
                            activePage={1}
                            onSelect={(e) => console.log(e)} />
                            </div>
                </div>
            }
            {rows}
            {offers.content.length > 0 &&
                <div className="row">
                    <div className="col-md-6 col-md-offset-3">
                         <Pagination
                            prev
                            next
                            first
                            last
                            ellipsis
                            boundaryLinks
                            items={20}
                            maxButtons={5}
                            activePage={1}
                            onSelect={(e) => console.log(e)} />
                            </div>
                </div>
            }
        </div>
     );
}

export default OfferList
