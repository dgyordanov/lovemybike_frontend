import React, { PropTypes } from 'react'

class Top extends React.Component {
  render () {
    return (
        <div className="container-fluid bike-section-image">
            <div className="row">
                <div className="col-lg-6 col-lg-offset-3">
                    <div className="location-box">
                        <h2 className="heading, text-center">The bike you will love.</h2>
                        <form method="get" action="#">
                            <div className="row">
                                <div className="col-sm-6 col-lg-offset-2">
                                    <div className="form-group">
                                        <label for="location">Location</label>
                                        <input id="location" name="location" placeholder="Find a bike in your city" className="form-control" type="text" />
                                    </div>
                                </div>
                                <div className="col-sm-2">
                                    <button type="submit" name="submit" className="btn btn-primary location-form-button">
                                        <i className="fa fa-search"></i>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}

export default Top