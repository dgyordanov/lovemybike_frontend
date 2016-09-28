import React, { PropTypes } from 'react'

class Filters extends React.Component {
    render () {
        return (
            <div>
                <h2>Filters</h2>

                <div className="panel panel-default">
                    <div className="panel-heading" data-toggle="collapse" data-target="#panel-body-1">
                        <h3 className="panel-title">Gender</h3>
                    </div>
                    <div className="panel-body collapse" id="panel-body-1">
                        <div className="checkbox">
                            <label><input type="checkbox" value="women" />Women</label>
                        </div>
                        <div className="checkbox">
                            <label><input type="checkbox" value="" />Men</label>
                        </div>
                        <div className="checkbox">
                            <label><input type="checkbox" value="" />Children</label>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Filters