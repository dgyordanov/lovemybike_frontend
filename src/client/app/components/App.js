import React from 'react'
import Navbar from './Navbar'
import Top from './Top'
import OffersFilter from '../containers/OffersFilter'
import VisibleOfferList from '../containers/VisibleOfferList'

const App = () => (
  <div>
    <Navbar />
    <Top />
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

export default App
