import React from "react";
import TableResults from "../../components/TableResults";
import search from "../../assets/fonts/style.css";
import "../../App.css";
import "../custom.css";
import { Container } from "../../components/Grid";
import Header from "../../components/Header";
import Footer from "../../components/Footer";


function Explore() {
  return (
    <>
    <Header/>
      <div className="jumbotron" id="explore">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4 promo-item item-6"></div>
            <div className="col-md-8">
              <h1>
                <span className="glyphicon glyphicon-search" src={search} />{" "}
                &nbsp; Find Your New Favorite Places & Chefs!
              </h1>
              <p>
                “But once in a while you might see me at In and Out Burger; they
                make the best fast food hamburgers around. --Thomas Keller”
              </p>
            </div>
          </div>
        </div>
      </div>
      <Container>
      <TableResults />
      </Container>
      <Footer/>
    </>
  );
}

export default Explore;
