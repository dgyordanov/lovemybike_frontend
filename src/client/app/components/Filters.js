import React, { PropTypes } from 'react'

const Filters = ({ filter, onFilterClick, onChangeFilterClick }) => (
    <div>
        <h2>Filters</h2>

        <div><button type="button" onClick={() => onFilterClick(filter.gender)} className="btn btn-primary btn-space">Apply Filter</button></div>

        <div className="panel panel-default">
            <div className="panel-heading" data-toggle="collapse" data-target="#panel-body-1">
                <h3 className="panel-title">Gender</h3>
            </div>
            <div className="panel-body collapse" id="panel-body-1">
                <div className="checkbox">
                    <label><input type="checkbox" checked={filter.gender.w} value="w" onClick={() => onChangeFilterClick("w")} />Women</label>
                </div>
                <div className="checkbox">
                    <label><input type="checkbox" checked={filter.gender.m} value="m" onClick={() => onChangeFilterClick("m")} />Men</label>
                </div>
                <div className="checkbox">
                    <label><input type="checkbox" checked={filter.gender.c} value="c" onClick={() => onChangeFilterClick("c")}/>Children</label>
                </div>
            </div>
        </div>
    </div>
)

Filters.propTypes = {
    onChangeFilterClick: PropTypes.func.isRequired,
    onFilterClick: PropTypes.func.isRequired,
    filter: PropTypes.shape({
        gender: React.PropTypes.object.isRequired
    }).isRequired
}

export default Filters
