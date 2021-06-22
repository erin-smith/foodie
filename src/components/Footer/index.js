import React from "react";
import { Link, useLocation } from "react-router-dom";

function Footer() {
  const location = useLocation();

  return (
    <footer>
      <div class="footer-info">
        <div class="container">
          <div class="row">
            <div class="col-sm-4 footer-info-item">
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
            <div class="col-sm-4 footer-info-item">
              <Link
                to="/privacy"
                className={
                  location.pathname === "/privacy"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                <h3>Privacy</h3>
              </Link>
            </div>
            <div class="col-sm-4 footer-info-item">
              <Link
                to="/contact"
                className={
                  location.pathname === "/contact"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                <h3>
                  <span class="glyphicon glyphicon-list-alt"></span>
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
