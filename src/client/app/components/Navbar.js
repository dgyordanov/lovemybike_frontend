import React, { PropTypes } from 'react'
import { Link } from 'react-router'

const Navbar = ({ loginIdentifier, logout }) => {
    return (
      <nav className="navbar navbar-inverse navbar-fixed-top">
          <div className="container-fluid">
              <div className="navbar-header">
                  <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                  </button>
                  <Link to="/" className="navbar-brand" >Love my Bike</Link>
              </div>
              <div className="collapse navbar-collapse">
                  <ul className="nav navbar-nav">
                      {loginIdentifier &&
                        <li className="dropdown">
                            <a className="dropdown-toggle" data-toggle="dropdown" href="#">My Offers<span className="caret"></span></a>
                            <ul className="dropdown-menu">
                                <li><a href="#">My Offers</a></li>
                                <li><Link to="/postoffer" data-toggle="collapse" data-target=".navbar-collapse.in" >Post an Offer</Link></li>
                            </ul>
                        </li>
                      }

                      <li className="dropdown">
                          <a className="dropdown-toggle" data-toggle="dropdown" href="#">Advices<span className="caret"></span></a>
                          <ul className="dropdown-menu">
                              <li><a href="#">How to choose an old bike</a></li>
                              <li><a href="#">Common mistakes with second hand bikes</a></li>
                          </ul>
                      </li>
                  </ul>

                  {loginIdentifier && <ul className="nav navbar-nav navbar-right">
                        <li className="navbar-text">{ loginIdentifier }</li>
                        <li><a onClick={logout} data-toggle="collapse" data-target=".navbar-collapse.in">Logout</a></li>
                  </ul>}
                  {!loginIdentifier && <ul className="nav navbar-nav navbar-right">
                      <li><Link to="/login" data-toggle="collapse" data-target=".navbar-collapse.in">Login</Link></li>
                      <li><Link to="/signup" data-toggle="collapse" data-target=".navbar-collapse.in">Sign Up</Link></li>
                  </ul>}
              </div>
          </div>
      </nav>
    )
}

export default Navbar