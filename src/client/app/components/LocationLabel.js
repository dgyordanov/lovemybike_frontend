import React, { PropTypes } from 'react'

const Top = ({submittedLocation, locationDelete})  => (
    <form method="get" action="#">
        <div className="row">
            <div className="col-sm-8 col-lg-offset-2 text-center">
                <h1 onClick={locationDelete}><a className="underline label label-default">{submittedLocation}</a></h1>
            </div>
        </div>
    </form>
)

export default Top