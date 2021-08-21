import React from "react";
import { Link, useLocation } from "react-router-dom";

function Footer() {
  const location = useLocation();

  return (
    <footer>
      <div className="footer-info">
        <div className="container">
          <div className="row">
            <div className="col-sm-4 footer-info-item">
              <Link
                to="/about"
                className={
                  location.pathname === "/about"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                <h3>About</h3>
              </Link>
            </div>
            <div className="col-sm-4 footer-info-item">
              <Link
                to="/privacy"
                className={
                  location.pathname === "/privacy"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                <h3>Credits</h3>
              </Link>
            </div>
            <div className="col-sm-4 footer-info-item">
              <Link
                to="/contact"
                className={
                  location.pathname === "/contact"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                <h3>
                  <span className="glyphicon glyphicon-list-alt"></span>
                  Contact Us{" "}
                </h3>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
