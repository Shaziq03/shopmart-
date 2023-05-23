import React from "react";
import "../css/style.css";
import { Link, NavLink } from "react-router-dom";
function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Shop<span className="clr-primary">MART</span>
            <h2></h2>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav txt-primary mx-auto">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="feature">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="products">
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="about">
                  About Us
                </NavLink>
              </li>
              <li className="nav-item hidden nav-rg-hidden ">
                <NavLink className="nav-link" to="register">
                  Register
                </NavLink>
              </li>
              <li className="nav-item hidden nav-rg-hidden">
                <NavLink className="nav-link " to="login">
                  Login
                </NavLink>
              </li>
            </ul>
          </div>
        </div>

        {/* ................. */}

        <div>
          <ul className="navbar-nav nav-left">
            <li className="nav-item">
              <NavLink
                className="nav-link active"
                aria-current="page"
                to="login"
              >
                <i class="fa-solid fa-user"></i>
              </NavLink>
            </li>
            <li className="nav-item ">
              <NavLink
                className="nav-link active"
                aria-current="page"
                to="register"
              >
                Register
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
