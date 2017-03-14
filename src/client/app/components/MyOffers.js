import React from 'react'
import MyOfferList from '../containers/MyOfferList'

const MyOffers = () => (
  <div>
    <div className="container margin-top-15">
        <div className="col-md-10 col-md-offset-1 text-center">
            <div><h1>My Offers</h1></div>
        </div>
    	<div className="col-md-10 col-md-offset-1">
    		<MyOfferList />
    	</div>
    </div>
  </div>
)

export default MyOffers