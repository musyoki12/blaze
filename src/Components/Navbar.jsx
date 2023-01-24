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
    <div className="containe">
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark"role="navigation" >
      <div className="container-fluid">
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
   {/* <div class="collapse navbar-collapse" id="navbarNav"></div> */}
      <div className="collapse navbar-collapse" id="navbarNav">
        <Link to="/" className="navbar-logo1">
          Blazzers
          <img src={logo} className="log" alt="logo" />
        </Link>
        <ul className="navbar-nav mr-auto">

          {navItems.map((item) => {
            if (item.title === "Gallery") {
              return (
                <li 
                  key={item.id}
                  className="nav-item"
                  onMouseEnter={() => setDropdown(true)}
                  onMouseLeave={() => setDropdown(false)}
                >
                  ()
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
        </div>
        </div>
      </nav>
     
    </div>
  );
}

export default Navbar;
