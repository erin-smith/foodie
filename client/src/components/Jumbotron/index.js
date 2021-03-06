import React from "react";
import cutlery from "../../assets/fonts/style.css";

function Jumbotron() {
  return (
    <div className="jumbotron feature" id="feature">
      <div className="container">
        <h1>
          <span className="glyphicon glyphicon-cutlery" src={cutlery} /> &nbsp;
          Food Culture &amp; Restaurant Finder!
        </h1>
        <p><b>
          An Ode to Chefs &amp; Restaurants that instill joy in your palate &amp;
          elevate food culture in the U.S.{" "}
        </b></p>
      </div>
    </div>
  );
}

export default Jumbotron;
