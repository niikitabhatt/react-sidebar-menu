import React from "react";
import * as Icons from "@material-ui/icons";
import "../styles/Slidebar.css";
import { Link, NavLink } from "react-router-dom";

function SideBar({handleSlideBar}) {

  return (
    
      <ul className="sidebar-list">
        {/** Slidebar logo */}
        <li className="sidebar-logo">
          <Link to="#" className="sidebar-logo-link">
            <h3 className="sidebar-logo-text" onClick={handleSlideBar}>
              Nanital Tour <Icons.Close></Icons.Close>
            </h3>
          </Link>
        </li>

        {/** slidebar items - Trips */}
        <li className="sidebar-items">
          <NavLink
            exact
            to="/"
            className="item"
            activeClassName="activeNav"
            onClick={handleSlideBar}
          >
            <div className="item-icon">
              <Icons.EmojiTransportation />
            </div>
            <div className="item-title">Trips</div>
          </NavLink>
        </li>

        {/** slidebar item - todo */}
        <li className="sidebar-items">
          <NavLink
            to="/things-to-do"
            className="item"
            activeClassName="activeNav"
            onClick={handleSlideBar}
          >
            <div className="item-icon">
              <Icons.CameraAlt />
            </div>
            <div className="item-title">Things To Do</div>
          </NavLink>
        </li>

        {/** slidebar item - Flights*/}
        <li className="sidebar-items">
          <NavLink
            to="/flights"
            className="item"
            activeClassName="activeNav"
            onClick={handleSlideBar}
          >
            <div className="item-icon">
              <Icons.Flight />
            </div>
            <div className="item-title">Flights</div>
          </NavLink>
        </li>

        {/** Slidebar item-  Hotels  */}
        <li className="sidebar-items">
          <NavLink
            to="/hotels"
            className="item"
            activeClassName="activeNav"
            onClick={handleSlideBar}
          >
            <div className="item-icon">
              <Icons.Hotel />
            </div>
            <div className="item-title">Hotels</div>
          </NavLink>
        </li>

        {/** Slidebar item- Vacation Rentals */}
        <li className="sidebar-items">
          <NavLink
            to="/vacation-rentals"
            className="item"
            activeClassName="activeNav"
            onClick={handleSlideBar}
          >
            <div className="item-icon">
              <Icons.House />
            </div>
            <div className="item-title">Vacation Rentals</div>
          </NavLink>
        </li>
      </ul>
 
  );
}

export default SideBar;
