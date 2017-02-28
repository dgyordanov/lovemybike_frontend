import React from 'react'
import TopContainter from '../containers/TopContainer'
import OffersFilter from '../containers/OffersFilter'
import VisibleOfferList from '../containers/VisibleOfferList'

const OffersRoot = () => (
  <div>
    <TopContainter />
    <div className="container margin-top-15">
    	<div className="col-md-2">
    		<OffersFilter />
    	</div>
    	<div className="col-md-10">
    		<VisibleOfferList />
    	</div>
    </div>	
  </div>
)

export default OffersRoot