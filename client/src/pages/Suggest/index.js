import React, { Component } from "react";
import glass from "../../assets/fonts/style.css";
import "./style.css";
import mail from "../../utils/mail"
class Suggest extends Component {
  state = {
    fullName: "",
    email: "",
    message: "",
  };

  handleInputChange = (event) => {
    let value = event.target.value;
    const name = event.target.name;

    if (name === "name") {
      value = value.substring(0, 25);
    }

    this.setState({
      [name]: value,
    });
  };
  validateEmail = (email) => {
    var emailReg = /^([\w-.]+@([\w-]+.)+[\w-]{2,4})?$/;
    return emailReg.test(email);
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    if (!this.state.fullName) {
      alert(" Please fill out your full name!");
    } else if (!this.validateEmail(this.state.email)) {
      alert(`Please enter your email address ${this.state.email}`);
    } else if (!this.state.message) {
      alert(`Please enter your message`);
    } else {
      alert(`Hello ${this.state.fullName}`);
    }

    const msg = {
      fullName: this.state.fullName,
      email: this.state.email,
      message: this.state.message,
    };
    // API reqest goes here:

    var settings = {
    	"async": true,
    	"crossDomain": true,
    	"url": "https://morning-citadel-34446.herokuapp.com/api/mail",
    	"method": "POST",
    	"data": msg
    }
    console.log(settings);
    mail.sendMail(settings).then(function (response) {
    	console.log(response);
    })
    alert("Thanks! We'll be in touch");

    //---------

    this.setState({
      fullName: "",
      email: "",
      message: "",
    });
  };

  render() {
    return (
      <>
        <div className="jumbotron" id="explore">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-4 promo-item item-7"></div>
              <div className="col-md-8">
                <h1>
                  <span className="glyphicon glyphicon-glass" src={glass} />{" "}
                  Suggest a new Restaurant or Update!
                </h1>
                <p>
                  "One cannot think well, love well, sleep well, if not has not
                  dined well. --Virginia Woolf”
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md 4" />
          <div className="col-md 4">
            <form className="myForm m-1">
              <label htmlFor="chef_name">Chef Name </label>
              <input
                type="text"
                className="chef_name"
                id="chef_name"
                required
              />
              <label htmlFor="place">Restaurant </label>
              <input type="text" className="venue_name" id="venue_number" />
              <label htmlFor="location">City, State</label>
              <input type="text" className="city_state" id="city_state" />
              <fieldset>
                <legend>Which category would you like to add to?</legend>
                <label>
                  {" "}
                  <input
                    type="radio"
                    className="transformative"
                    id="transform"
                    required
                    value="transformative"
                  />{" "}
                  &nbsp;Transformative &nbsp;
                </label>
                <label>
                  {" "}
                  <input
                    type="radio"
                    className="local"
                    id="local"
                    required
                    value="local"
                  />{" "}
                  &nbsp;Local &nbsp;
                </label>
                <label>
                  {" "}
                  <input
                    type="radio"
                    className="other"
                    id="other"
                    required
                    value="other"
                  />{" "}
                  &nbsp;Other Suggestion
                </label>
              </fieldset>

              <label htmlFor="pickup_time">
                Latest date that Restaurant was confirmed Open
              </label>
              <input
                type="datetime-local"
                className="access_time"
                id="access_time"
                required
              />

              <label htmlFor="client_name">Your Full Name</label>
              <input
                value={this.state.fullName}
                id="name"
                name="fullName"
                onChange={this.handleInputChange}
                type="text"
                placeholder="Your Name"
                required
              />
              <label htmlFor="client_contact">Your Email</label>
              <input
                value={this.state.email}
                id="email"
                name="email"
                onChange={this.handleInputChange}
                type="text"
                placeholder="yourEmail@mail.com"
              />

              <label htmlFor="comments">Suggestion Comments</label>
              <textarea
                id="message"
                value={this.state.message}
                name="message"
                onChange={this.handleInputChange}
                type="message"
                rows="3"
                maxLength="1000"
                placeholder="Your Message Here:"
              ></textarea>

              <button
                id="mail"
                type="submit"
                name="submit"
                onClick={this.handleFormSubmit}
              >
                Submit Suggestion
              </button>
            </form>
          </div>
          <div className="col-md 4" />
        </div>
      </>
    );
  }
}
export default Suggest;
