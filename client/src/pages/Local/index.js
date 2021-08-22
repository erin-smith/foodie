import React from "react";
import LocalList from "../../components/LocalList";
import leaf from "../../assets/fonts/style.css";
import "../../App.css";
import "../custom.css";
import { Container } from "../../components/Grid";

function Local() {
  return (
    <>
      <div className="jumbotron" id="local">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4 promo-item item-5"></div>
            <div className="col-md-8">
              <h1>
                <span className="glyphicon glyphicon-leaf" src={leaf} /> San
                Diego Local Favorite Hot Spots{" "}
              </h1>
              <p>"To eat well, I always disagree with critics who say that all restaurants should be fine dining. You can get a Michelin star if you serve the best hamburger in the world. - David Chang"</p>
            </div>
          </div>
        </div>
      </div>
      <Container>
        <LocalList/>
      </Container>
      </>
  );
}

export default Local;
