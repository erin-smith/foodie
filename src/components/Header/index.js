/* eslint-disable react/prop-types */
import React from "react";
import { Link, useLocation } from "react-router-dom";
// import API from "../../utils/API";
import "./style.css";
import fire from "../../fonts/style.css";

function Header () {
  


  const location = useLocation();

  return (
    <div>
    <nav className="navbar navbar-default navbar-fixed-top" role="navigation">
        <div className="container">
            <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="#">
                	<span className="glyphicon glyphicon-fire" src={fire} id="fire"></span> 
                	FOODIE
                </a>
            </div>
            <div className="collapse navbar-collapse" id="navbar">
                <ul className="nav navbar-nav navbar-right">
                    <li className="active">
                    <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
              Home
            </Link>
                    </li>
                    <li>
                    <Link
              to="/portfolio"
              className={location.pathname === "/explore" ? "nav-link active" : "nav-link"}
            >
              Explore
            </Link>
                    </li>
					<li>
                    <Link
              to="/portfolio"
              className={location.pathname === "/suggest" ? "nav-link active" : "nav-link"}
            >
              Suggest
            </Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    </div>
  );
};

export default Header;