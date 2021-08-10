import { Link } from "react-router-dom";
import React from "react";

function Buttons() {
  function localFaves() {
    return "/local";
  }

  function transform() {
    return "/transformative";
  }
  function explore() {
    return "/explore";
  }

  return (
    <div className="container-fluid">
      <div className="row promo">
        <div className="col-md-4 promo-item item-1">
          <Link to={transform()} className="active">
            <h3>Transformative</h3>
          </Link>
        </div>

        <div className="col-md-4 promo-item item-2">
          <Link to={localFaves()} className="active">
            <h3>Local Favorites</h3>
          </Link>
        </div>

        <div className="col-md-4 promo-item item-3">
          <Link to={explore()} className="active">
            <h3>Explore</h3>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Buttons;
