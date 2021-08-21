import React from "react";

function Footer() {


  return (
    <footer>
      <div className="footer-info">
        <div className="container">
          <div className="row">
            <div className="col-sm-4 footer-info-item">
            <a href="https://github.com/erin-smith" target="_blank" rel="noopener noreferrer" alt="Github" height="100px"><h4>GitHub  &nbsp;<i
              className="fab fa-github"></i></h4></a>
            </div>
            <div className="col-sm-4 footer-info-item">
            <a href="mailto:erin.acumen@gmail.com" target="_blank" rel="noopener noreferrer" alt="Email" height="100px"><h4>Email &nbsp;<i
              className="fas fa-at"></i></h4></a>
            </div>
            <div className="col-sm-4 footer-info-item">
            <a href="https://www.linkedin.com/in/erin-c-smith/" target="_blank" rel="noopener noreferrer" alt="LinkedIn" height="100px"><h4>LinkedIn &nbsp;<i
              className="fab fa-linkedin"></i></h4></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
