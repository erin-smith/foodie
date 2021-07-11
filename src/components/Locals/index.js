import React from 'react';
import { Link } from 'react-router-dom';
 
const Locals = ({ id, name, awards, restaurants, city }) => (
    <div>
        <Link to={`/local/${id}`}>
            <h4>{name}{city}</h4>
        </Link>
        <p>Restaurants: {restaurants}</p>
        <p>Awards: {awards}</p>
    </div>
);
 
export default Locals;