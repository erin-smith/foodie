import {React, useState, useEffect} from "react";
import { Container, Row, Col } from "../Grid";
import {loadPlaces} from "../../utils/fourSquare.js";
import "../../pages/custom.css";;

function TableResults() {

  const [error, setError]= useState(null);
  const [isLoaded, setIsLoaded]= useState(false);
  const [response, setResponse]= useState([]);

useEffect(() => {
   loadPlaces()
   .then(
     (result) => {
       setIsLoaded(true);
       setResponse(result);
       },

     (error)=> {
       setIsLoaded(true);
       setError(error);
       }
       )
     }, [])
   
  // const handleInputChange = event => {
  //   const { value } = event.target;
  //   setState(value);
  // };

 function handleFormSubmit(e) {
    const places = document.getElementById("place").value.trim();
    e.preventDefault();
    console.log("Button was clicked and the query is", places);
    if (places.length === 0){
      alert ("Please enter a City, State or Restaurant Name");
      return;
    }
    if (places === null){
      console.log("null");
      return;
    }
   loadPlaces(places);
  };

if(error) {
  return <div>Error: {error.message}</div>;
} else if (!isLoaded) {
  return <div>Loading...</div>;
} else{
  return (
    <>
    <form className="search">
      <div className="form-group">
        <label htmlFor="Query">
          <strong>Restaurant or City, State</strong>
        </label>
        <input
          className="form-control"
          type="text"
          // onChange={handleInputChange}
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
    <Container>
    <Row className="flex-wrap-reverse">
    <Col size="xs-12">
      <ul>
        {/* {response.groups[0].items.map(response => ( */}
          {/* <li key={response.id}>
          {response.venue.name}{response.venue.location.formattedAddress}{response.venue.photos.groups[0]}
          </li>
        ))} */}
      </ul>
    </Col>
    </Row>
    </Container>
    </>
  )
}
}

  export default TableResults;