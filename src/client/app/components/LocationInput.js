import React, { PropTypes } from 'react'

const Top = ({location, locationChanged, locationSubmit})  => (
    <form method="get" action="#">
        <div className="row">
            <div className="col-sm-6 col-lg-offset-2">
                <div className="form-group">
                    <label htmlFor="location">Location</label>
                    <input id="location" name="location" defaultValue={location} placeholder="Find a bike by city/postcode" className="form-control" type="text" onKeyUp={locationChanged} />
                </div>
            </div>
            <div className="col-sm-2">
                <button type="submit" name="submit" className="btn btn-primary location-form-button" onClick={locationSubmit} >
                    <i className="fa fa-search"></i>
                </button>
            </div>
        </div>
    </form>
)

export default Top