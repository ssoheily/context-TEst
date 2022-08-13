import React from "react";
import "./Navbar.css"
import {BsBag} from "react-icons/bs"
export default function Navbar() { 
  return (
    <nav className="navbar navbar-expand-sm  py-3 d-flex">
      <div className="container">
        <a href="#" id="navbar-brand" >
          samsoheiShop
        </a>
        <ul className="navbar-nav me-auto me-3">
          <li className="nav-item">
            <a href="#" className="nav-link">
                Home
            </a>
          </li>
        </ul>
        <div className="bag-box">
            <a href="#" className="bag">
                <BsBag  className="text-white" />
                <span className="bag-products-counter">0</span>
            </a>
        </div>
      </div>
    </nav>
  );
}
