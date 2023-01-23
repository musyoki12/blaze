// import Container from 'react-bootstrap/Container';
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Main.css";
import { navItems } from "./NavItems";
import Button from "./Button";
import Dropdown from "./Dropdown";
import logo from "../Images/logo.jpg";

function Navbar() {
  const [dropdown, setDropdown] = useState(false);

  return (
    <div className="container">
      <nav className="navbar1">
        <Link to="/" className="navbar-logo1">
          Blazzers
          <img src={logo} className="log" alt="logo" />
        </Link>
        <ul className="nav-items1">
          {navItems.map((item) => {
            if (item.title === "Gallery") {
              return (
                <li
                  key={item.id}
                  className={item.cName}
                  onMouseEnter={() => setDropdown(true)}
                  onMouseLeave={() => setDropdown(false)}
                >
                  else ()
                  <Link to={item.path}>{item.title}</Link>
                  {dropdown && <Dropdown />}
                </li>
              );
            }
            return (
              <>
                <li key={item.id} className={item.cName}>
                  <Link to={item.path}>{item.title}</Link>
                </li>
              </>
            );
          })}
        </ul>
        <Button />
      </nav>
    </div>
  );
}

export default Navbar;
