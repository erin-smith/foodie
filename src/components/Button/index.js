import { Link } from "react-router-dom";
import React from 'react';

function Buttons(){

    function localFaves(){
        return "/local";
    }

    function transform(){
        return "/transformative"
    }
    function explore(){
        return "/transformative"
    }

    return(
            <div class="container-fluid">
        <div class="row promo">
        	<button to="/transformative" className= "link-active">
            <Link to={transform()} className="active"></Link>
            <div class="col-md-4 promo-item item-1">
            <h3>Transformative</h3>
				</div>
            </button>
            <button>
            <Link to={localFaves()} className="active"></Link>
				<div class="col-md-4 promo-item item-2">
            <h3>Local Favorites</h3>
				</div>
            </button>
			<button>
                <Link to={explore()} className= "active"/>
				<div class="col-md-4 promo-item item-3">
            <h3>Explore</h3>
				</div>
            </button>
        </div>
    </div>
    )
}

export default Buttons;