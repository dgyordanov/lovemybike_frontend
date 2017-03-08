"use strict";
import React, { PropTypes } from 'react';
import { Pagination } from 'react-bootstrap';

const PaginationRow = ({items, activePage, pageChanged }) => {
    return (
        <div className="row">
            <div className="col-md-6 col-md-offset-3 text-center">
                 <Pagination
                    prev={true}
                    next={true}
                    first={true}
                    last={true}
                    ellipsis
                    boundaryLinks
                    items={items}
                    maxButtons={5}
                    activePage={activePage}
                    onSelect={pageChanged} />
            </div>
        </div>
    );
}
export default PaginationRow;