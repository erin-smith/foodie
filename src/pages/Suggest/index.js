import React from "react";
import glass from "../../assets/fonts/style.css";
import "./style.css"

function Suggest(props){
// const suggest = document.getElementsByclassName("myForm");

//   function handleFormSubmit(e) {
//     e.preventDefault();
//     const info = suggest.current.value.trim();
//     console.log("Button was clicked and the query is", info);
//     if (suggest.length === 0){
//       alert ("Please enter a City, State or Restaurant Name");
//       return;
//     }
//     props.call(info.toLowerCase());
//   };

return(
  <>
  <div className="jumbotron" id="explore">
  <div className="container-fluid">
  <div className="row">
      <div className="col-md-4 promo-item item-7"></div>
      <div className="col-md-8">
      <h1><span className="glyphicon glyphicon-glass" src={glass}/> Suggest a new Restaurant or Update!</h1>
      <p>
"One cannot think well, love well, sleep well, if not has not dined well. --Virginia Woolf”</p>
      </div>
  </div>
  </div>
  </div>
  <div className="row">
    <div className= "col-md 4"/>
    <div className= "col-md 4">
<form className="myForm m-1">
  <label htmlFor="customer_name">Chef Name </label>
  <input type="text" name="chef_name" id="chef_name" required/>
  <label htmlFor="phone_number">Restaurant </label>
  <input type="text" name="venue_name" id="venue_number"/>
  <label htmlFor="location">City, State</label>
  <input type="text" name="city_state" id="city_state"/>
  <fieldset>
    <legend>Which category would you like to add to?</legend>
    <label> <input type="radio" name="transformative" id="transform" required value="transformative"/> &nbsp;Transformative &nbsp;</label>
    <label> <input type="radio" name="local" id="local" required value="local"/> &nbsp;Local &nbsp;</label>
    <label> <input type="radio" name="other" id="other" required value="other"/> &nbsp;Other Suggestion</label>
  </fieldset>

  <label htmlFor="pickup_time">Latest date that Restaurant was confirmed Open</label>
  <input type="datetime-local" name="access_time" id="access_time" required/>

  <label htmlFor="client_name">Your Name</label>
  <input type="text" name="client_name" id="chef_name" required/>
  <label htmlFor="client_contact">Your Email</label>
  <input type="text" name="email" id="client_email"/>

  <label htmlFor="comments">Suggestion Comments</label>
  <textarea name="comments" id="comments" maxLength="500"></textarea>

  <button  type="submit">Submit Suggestion</button>
</form>
</div>
<div className= "col-md 4"/>
</div>
</>
)
}

export default Suggest;