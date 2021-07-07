import {React, useState} from "react";
import Card from "../../components/Card";
import search from "../../assets/fonts/style.css";
import "../../pages/custom.css";
import {loadPlaces} from "../../utils/fourSquare";
import { Row, Col } from "../../components/Grid";


function Explore(){
  const [placeSearch, setPlaceSearch] = useState("");

  const handleInputChange = event => {
    const { value } = event.target;
    setPlaceSearch(value);
  };

  function handleFormSubmit(e) {
    const places = document.getElementById("place").value.trim();
    e.preventDefault();
    console.log("Button was clicked and the query is", places);
    if (places.length === 0){
      alert ("Please enter a City, State or Restaurant Name");
      return;
    }
    if (places === null){
      alert ("Location not found, try again");
      return;
    }
   loadPlaces(places);
  };

  return (
    <>
    <div className="jumbotron" id="explore">
    <div className="container-fluid">
    <div className="row">
        <div className="col-md-4 promo-item item-6"></div>
        <div className="col-md-8">
        <h1><span className="glyphicon glyphicon-search" src={search}/> &nbsp; Find Your New Favorite Places & Chefs!</h1>
        <p>“But once in a while you might see me at In and Out Burger; they make the best fast food hamburgers around. --Thomas Keller”</p>
        </div>
    </div>
    </div>
    </div>
    <form className="search">
      <div className="form-group">
        <label htmlFor="Query">
          <strong>Restaurant or City, State</strong>
        </label>
        <input
          className="form-control"
          type="text"
          value={placeSearch}
          onChange={handleInputChange}
          placeholder="San Diego, CA"
          name="RestaurantSearch"
          required
          id= "place"
        />
      </div>
      <div className="pull-right">
        <button
          onClick={handleFormSubmit}
          type="submit"
          className="btn btn-lg btn-info float-right"
          id="orgBtn"
        >
          Search
        </button>
      </div>
    </form>
    <Row>
    <Col size="xs-12">
    <Card title="Results">
      {/* {places.map(place => {
        <li key={place.venue.id}
            name={place.venue.name}
            location={place.venue.location}
            photos={place.venue.photos}
                    />
      })}  */}
    </Card>
    </Col>
    </Row>
    </>
  )
}

export default Explore;

