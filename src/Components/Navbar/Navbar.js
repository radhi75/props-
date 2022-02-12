import { Search, Notifications, ArrowDropDown } from "@material-ui/icons";
import { useState } from "react";
import React from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="cont">
        <div className="left">
          <img
            className="logo"
            src="https://preview.redd.it/qlev5tln9iq71.png?width=640&crop=smart&auto=webp&s=d38a2d4f2005eb2331b02f5b435cdd2050e3fd5f"
            alt="sitelogo"
          />
          <span href="Feature">
            <h5>home</h5>
          </span>
          <span href="List">
            <h5>Movies</h5>
          </span>
        </div>
        <div className="right">
          <Search />
          <Notifications />
          <div className="profile">
            <ArrowDropDown className="icon" />
            <div className="options">
              <span>Settings</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
