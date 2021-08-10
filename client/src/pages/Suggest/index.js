import React, {useState} from "react";
import glass from "../../assets/fonts/style.css";
import "./style.css"

function Suggest(){

const [comment, setComment]= useState("")

const handleFormSubmit = async e => {
       e.preventDefault();
       try {
        const body = {comment};
        const response = await fetch("http://localhost:3000/suggest", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(body)
       });
       window.location = "/suggest";
       } catch (err) {
         console.error(err.message)
       }
      }

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
<form className="myForm m-1" onSubmit={handleFormSubmit}>
  <label htmlFor="customer_name">Chef Name </label>
  <input type="text" className="chef_name" id="chef_name" required/>
  <label htmlFor="phone_number">Restaurant </label>
  <input type="text" className="venue_name" id="venue_number" />
  <label htmlFor="location">City, State</label>
  <input type="text" className="city_state" id="city_state"/>
  <fieldset>
    <legend>Which category would you like to add to?</legend>
    <label> <input type="radio" className="transformative" id="transform" required value="transformative"/> &nbsp;Transformative &nbsp;</label>
    <label> <input type="radio" className="local" id="local" required value="local"/> &nbsp;Local &nbsp;</label>
    <label> <input type="radio" className="other" id="other" required value="other"/> &nbsp;Other Suggestion</label>
  </fieldset>

  <label htmlFor="pickup_time">Latest date that Restaurant was confirmed Open</label>
  <input type="datetime-local" className="access_time" id="access_time" required/>

  <label htmlFor="client_name">Your Name</label>
  <input type="text" className="client_name" id="chef_name" required/>
  <label htmlFor="client_contact">Your Email</label>
  <input type="text" className="email" id="client_email"/>

  <label htmlFor="comments">Suggestion Comments</label>
  <textarea type ="text" className="comments" id="comments" value= {comment} maxLength="500" onChange= {e => setComment(e.target.value)}></textarea>

  <button  type="submit">Submit Suggestion</button>
</form>
</div>
<div className= "col-md 4"/>
</div>
</>
)
}

export default Suggest;