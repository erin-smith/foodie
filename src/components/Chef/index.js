import React from 'react';
import { Link } from 'react-router-dom';
 
const Chef = ({ id, name, awards, restaurants, city }) => (
    <div>
        <Link to={`/chefs/${id}`}>
            <h4>{name}{city}</h4>
        </Link>
        <p>Restaurants: {restaurants}</p>
        <p>Awards: {awards}</p>
    </div>
);
 
export default Chef;