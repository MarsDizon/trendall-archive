import React from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as LatrobeLogo } from '../../assets/latrobelogo.svg';

function HomeHeader() {
  return (
    <div className="homeheader">
      <nav className="navbar fixed-top navbar-expand-lg py-lg-0">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            <LatrobeLogo height="75px"/>
          </NavLink>
          <ul className="navbar-nav ml-auto">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
            </ul>
          </div>
      </nav>
    </div>
  );
}

export default HomeHeader;
