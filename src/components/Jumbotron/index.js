import React from 'react';
import equalizer from "../../assets/fonts/style.css";
import "../../App.css"
import "../../pages/custom.css"

function Jumbotron(){
return(
<div className="jumbotron feature">
    <div className="container">
        <h1><span className="glyphicon glyphicon-equalizer" src={equalizer}/>Food Culture & Restaurant Finder!</h1>
        <p>An Ode to Chefs & Restaurants that both instill joy in your palate, and elevate or transform food culture in the U.S. </p>
    </div>
</div>
)
}

export default Jumbotron;