import React, { Component } from "react";
import glass from "../../assets/fonts/style.css";
import "../../App.css";
import "../custom.css";
import "./style.css"
import mail from "../../utils/mail"
import { Container } from "../../components/Grid";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

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
      alert(`Hello ${this.state.fullName}, Thanks! We'll be in touch`);
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
    });

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
      <Header/>
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
        <Container>
        <div className="row">
          <div className="col-md 4" />
          <div className="col-md 4">
            <form className="myForm m-5">
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
        </Container>
        <Footer/>
      </>
    );
  }
}
export default Suggest;
