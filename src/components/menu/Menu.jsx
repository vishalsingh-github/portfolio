import { Mail, Person } from "@material-ui/icons";
import React from "react";
import "./menu.scss";
function Menu({ setMenuOpen, menuOpen }) {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul onClick={() => setMenuOpen(!menuOpen)}>
        <li>
          <a href="#intro">Home</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#works">Works</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="itemContainer">
        <Person className="icon" />
        <span>+91 9999999999</span>
      </div>
      <div className="itemContainer">
        <Mail className="icon_2" />
        <span>raysin@gmail.com</span>
      </div>
    </div>
  );
}

export default Menu;
