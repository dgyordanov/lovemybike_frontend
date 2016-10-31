import React, { PropTypes } from 'react'

const Filters = ({ filter, onFilterClick }) => (
    <div>
        <h2>Filters</h2>

        <div><button type="button" className="btn btn-primary btn-space">Apply Filter</button></div>

        <div className="panel panel-default">
            <div className="panel-heading" data-toggle="collapse" data-target="#panel-body-1">
                <h3 className="panel-title">Gender</h3>
            </div>
            <div className="panel-body collapse" id="panel-body-1">
                <div className="checkbox">
                    <label><input type="checkbox" checked={filter.w} value="w" onClick={() => onFilterClick("w")} />Women</label>
                </div>
                <div className="checkbox">
                    <label><input type="checkbox" checked={filter.m} value="m" onClick={() => onFilterClick("m")} />Men</label>
                </div>
                <div className="checkbox">
                    <label><input type="checkbox" checked={filter.c} value="c" onClick={() => onFilterClick("c")}/>Children</label>
                </div>
            </div>
        </div>
    </div>
)

Filters.propTypes = {
    onFilterClick: PropTypes.func.isRequired,
    
}

export default Filters
