import React, { PropTypes } from 'react';
import LocationInput from './LocationInput';
import LocationLabel from './LocationLabel';

const Top = ({location, submittedLocation, locationChanged, locationSubmit, locationDelete})  => (
    <div className="container-fluid bike-section-image">
        <div className="row">
            <div className="col-lg-6 col-lg-offset-3">
                <div className="location-box">
                    <h2 className="heading, text-center">The bike you will love.</h2>
                    {!submittedLocation && <LocationInput location={location} locationChanged={locationChanged} locationSubmit={locationSubmit} />}
                    {submittedLocation && <LocationLabel submittedLocation={submittedLocation} locationDelete={locationDelete} />}
                </div>
            </div>
        </div>
    </div>
)


export default Top