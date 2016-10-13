import React from 'react'
import Navbar from './Navbar'
import Top from './Top'
import OffersFilter from '../containers/OffersFilter'
import VisibleOfferList from '../containers/VisibleOfferList'

const App = ({ children }) => (
  <div>
    <Navbar />
    { children }
  </div>
)

export default App
