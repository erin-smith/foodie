import React, {useRef} from "react";


function Explore (props) {

  const searchField = useRef(null);

  function handleFormSubmit(e) {
    e.preventDefault();
    const searchTerm = searchField.current.value.trim();
    console.log("Button was clicked and the topic is", searchTerm);
    if (searchTerm.length === 0){
      alert ("Please enter a topic");
      return;
    }
    props.call(searchTerm.toLowerCase());
  };

  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="Query">
          <strong>Restaurant or City, State</strong>
        </label>
        <input
          className="form-control"
          type="text"
          placeholder="html"
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
        >
          Search
        </button>
      </div>
    </form>
  );
}

export default Explore;

