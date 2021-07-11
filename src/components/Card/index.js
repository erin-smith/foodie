import React from 'react';
import {Container, Row, Col} from "../Grid";


export function Card({ children }) {
  return (
    <div className="card-overflow-container">
      <ul className="list-group">{children}</ul>
    </div>
  );
}

export function CardItem({ 
  chef,
  awards,
  restaurants,
  city
 }) {
  return (
    <li className="list-group-item">
      <Container>
        <Row>
          <Col size="xs-8 sm-9">
            <h3>{chef}</h3>
            <p>{awards}</p>
            <p>{restaurants}</p>
            <p>{city}</p>
          </Col>
        </Row>
      </Container>
    </li>
  );
}