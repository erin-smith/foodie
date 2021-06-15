<form className="myForm">
  <label htmlfor="customer_name">Chef Name </label>
  <input type="text" name="chef_name" id="chef_name" required/>
  <label for="phone_number">Restaurant </label>
  <input type="text" name="venue_name" id="venue_number"/>
  <label for="location">City, State Zip Code </label>
  <input type="text" name="city_state" id="city_state"/>
  <fieldset>
    <legend>Which category would you like to add to?</legend>
    <label> <input type="radio" name="transformative" id="transform" required value="transformative"/>Transformative</label>
    <label> <input type="radio" name="local" id="local" required value="local"/>Local</label>
    <label> <input type="radio" name="other" id="other" required value="other"/>Other Suggestion</label>
  </fieldset>

  <label for="pickup_time">Last Date Confirmed Restaurant Was Open</label>
  <input type="datetime-local" name="access_time" id="access_time" required/>

  <label for="client_name">Your Name</label>
  <input type="text" name="client_name" id="chef_name" required/>
  <label for="client_contact">Your Email</label>
  <input type="text" name="email" id="client_email"/>

  <label for="comments">Suggestion Comments</label>
  <textarea name="comments" id="comments" maxlength="500"></textarea>

  <button>Submit Suggestion</button>
</form>