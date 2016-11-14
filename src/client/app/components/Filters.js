import React, { PropTypes } from 'react'

const Filters = ({ filter, onFilterClick, onChangeFilterClick }) => (
    <div>
        <h2>Filters</h2>

        <div><button type="button" onClick={() => onFilterClick(filter)} className="btn btn-primary btn-space">Apply Filter</button></div>

        <div className="panel panel-default">
            <div className="panel-heading" data-toggle="collapse" data-target="#panel-body-1">
                <h3 className="panel-title">Gender</h3>
            </div>
            <div className="panel-body collapse" id="panel-body-1">
                <div className="checkbox">
                    <label><input type="checkbox" checked={filter.w} value="w" onClick={() => onChangeFilterClick("w")} />Women</label>
                </div>
                <div className="checkbox">
                    <label><input type="checkbox" checked={filter.m} value="m" onClick={() => onChangeFilterClick("m")} />Men</label>
                </div>
                <div className="checkbox">
                    <label><input type="checkbox" checked={filter.c} value="c" onClick={() => onChangeFilterClick("c")}/>Children</label>
                </div>
            </div>
        </div>
    </div>
)

Filters.propTypes = {
    onChangeFilterClick: PropTypes.func.isRequired,
    onFilterClick: PropTypes.func.isRequired,
    filter: PropTypes.shape({
        w: PropTypes.bool.isRequired,
        m: PropTypes.bool.isRequired,
        c: PropTypes.bool.isRequired
    }).isRequired
}

export default Filters
