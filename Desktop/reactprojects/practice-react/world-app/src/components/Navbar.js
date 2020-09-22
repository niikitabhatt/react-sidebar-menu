import React, { Fragment, useState } from "react";
import * as Icons from "@material-ui/icons";
import { Link } from "react-router-dom";
import SideBar from "./SideBar";
import "../styles/Navbar.css";

function Navbar() {
  let [slideBar, setSlideBar] = useState(false);

  const handleSlideBar = () => {
    setSlideBar(!slideBar);
  };
 
  return (
   
    <Fragment>
     {/** Navbar at the top of the screen */}
      <div className="navbar">
        <Link to="#" className="sidebar-link">
          <Icons.Dehaze onClick={handleSlideBar} className="icon-style" />
        </Link>
        <h3 className="nav-logo"> Nanital Tour</h3>
      </div>

    {/** Sidebar menu present in the navbar  which opens or close according to the button click */}
      <nav className={slideBar ? "sidebar-menu active" : "sidebar-menu"}>
         <SideBar handleSlideBar = {handleSlideBar} ></SideBar>     
      </nav>
    </Fragment>
  );
}

export default Navbar;
