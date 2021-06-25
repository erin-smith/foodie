import React, {useRef} from "react";
import Header from "../../components/Header";
import search from "../../assets/fonts/style.css"
import "../../pages/custom.css"


function Explore (props) {

  const searchField = useRef(null);

  function handleFormSubmit(e) {
    e.preventDefault();
    const searchTerm = searchField.current.value.trim();
    console.log("Button was clicked and the query is", searchTerm);
    if (searchTerm.length === 0){
      alert ("Please enter a City, State or Restaurant Name");
      return;
    }
    props.call(searchTerm.toLowerCase());
  };

  return (
    <>
    <Header/>
    <div className="jumbotron" id="explore">
    <div className="container-fluid">
    <div class="row">
        <div class="col-md-4 promo-item item-4"></div>
        <div class="col-md-8">
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
          placeholder="San Diego, CA"
          name="topic"
          ref={searchField}
          required
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
    </>
  );
}

export default Explore;

