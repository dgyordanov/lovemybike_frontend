import React from 'react'
import Navbar from './Navbar'
import Top from './Top'
import Filters from './Filters'

const App = () => (
  <div>
    <Navbar />
    <Top />
    <div className="container margin-top-15">
    	<div className="col-md-2">
    		<Filters />
    	</div>
    	<div className="col-md-10">
    		TODO
    	</div>
    </div>	
  </div>
)

export default App
