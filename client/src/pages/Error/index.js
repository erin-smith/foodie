import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import "../../App.css";
import "../custom.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function Error() {
  return (
  <>
    <Container fluid>
      <Row>
        <Col size="md-12">
        <Header/>
          <Jumbotron>
            <h1 className="text-center">404 Page Not Found</h1>
            <h1 className="text-center">
              <span role="img" aria-label="Face With Rolling Eyes Emoji">
                🙄
              </span>
            </h1>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
    <Footer/>
    </>
  );
}

export default Error;
  