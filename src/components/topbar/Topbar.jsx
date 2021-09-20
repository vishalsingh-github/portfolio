import { Mail, Person } from "@material-ui/icons";
import React from "react";
import "./topbar.scss";
function Topbar({ setMenuOpen, menuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")} id="topbar">
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            raysin
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <span>+91 9999999999</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon_2" />
            <span>raysin@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
