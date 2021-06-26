/* eslint-disable react/prop-types */
import React from "react";
import { Link, useLocation } from "react-router-dom";
// import API from "../../utils/API";
import fire from "../../assets/fonts/style.css";


function Header() {
  const location = useLocation();

  return (
    <nav className="navbar navbar-default navbar-fixed-top">
          <a className="navbar-brand">
            <span
              className="glyphicon glyphicon-fire"
              src={fire}
              id="fire"
            ></span>
            FOODIE
          </a>
        <div className="navbar-collapse" id="navbar">
          <ul className="nav justify-content-end">
            <li className="nav-item">
              <Link
                to="/"
                className={location.pathname === "/" ? "nav-link active" : "nav-link"}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/transformative"
                className={
                  location.pathname === "/transformative" ? "nav-link active" : "nav-link"
                }
              >
                Transformative
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/explore"
                className={
                  location.pathname === "/explore" ? "nav-link active" : "nav-link"
                }
              >
                Explore
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/suggest"
                className={
                  location.pathname === "/suggest" ? "nav-link active" : "nav-link"
                }
              >
                Suggest
              </Link>
            </li>
          </ul>
        </div>
    </nav>
  );
}

export default Header;
