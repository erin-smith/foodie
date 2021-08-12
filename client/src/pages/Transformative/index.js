import React from "react";
import star from "../../assets/fonts/style.css";
// import Card from "../../components/Card";
import ChefList from "../../components/ChefList";

function Transformative() {
  return (
    <div>
      <div className="jumbotron" id="transform">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4 promo-item item-4"></div>
            <div className="col-md-8">
              <h1>
                <span className="glyphicon glyphicon-star-empty" src={star} />
                <span className="glyphicon glyphicon-star-empty" src={star} />
                <span className="glyphicon glyphicon-star-empty" src={star} />
                <span className="glyphicon glyphicon-star-empty" src={star} />
                <span
                  className="glyphicon glyphicon-star-empty"
                  src={star}
                />{" "}
                Critically Acclaimed Chefs
              </h1>
              <p>
                "Drama is very important in life: You have to come on with a
                bang. You never want to go out with a whimper. Everything can
                have drama if it's done right. Even a pancake. -- Julia Child"
              </p>
            </div>
          </div>
        </div>
      </div>
      <ChefList />
    </div>
  );
}

export default Transformative;
