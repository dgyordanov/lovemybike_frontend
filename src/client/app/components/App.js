import React from 'react'
import Top from './Top'
import NavbarContainer from '../containers/NavbarContainer'
import OffersFilter from '../containers/OffersFilter'
import VisibleOfferList from '../containers/VisibleOfferList'

const App = ({ children }) => (
  <div>
    <NavbarContainer />
    { children }
  </div>
)

export default App
