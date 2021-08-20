import React, { Component } from "react";
import { Container, Row, Col } from "../Grid";
import { Venue } from "../Venue";
import { Search } from "../Search";
import "../../pages/custom.css";

class TableResults extends Component {
  constructor() {
    super();
    this.state = {
      error: null,
      isLoaded: false,
      venues: [],
    };
  }

  handleSubmit(query) {
    this.getVenues(query);
  }

  componentDidMount() {
    this.getVenues("San Diego, CA");
  }

  getVenues(query) {
    let setVenueState = this.setState.bind(this);
    const fourSquare_API =
      "https://api.foursquare.com/v2/venues/explore?&client_id=";
    const REACT_APP_CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
    function formatDate(date) {
      var d = new Date(date),
        month = "" + (d.getMonth() + 1),
        day = "" + d.getDate(),
        year = d.getFullYear();

      if (month.length < 2) month = "0" + month;
      if (day.length < 2) day = "0" + day;

      return [year, month, day].join("");
    }
    const v = formatDate(Date.now());
    fetch(
      fourSquare_API +
      `${process.env.REACT_APP_CLIENT_ID}` +
        "&v=" +
        v +
        "&categoryId=4bf58dd8d48988d1c4941735&radius=5000&near=" +
        query +
        "&section=food&limit=20"
    )
      .then((response) => response.json())
      .then(
        (response) => {
          console.log("4square response", response);
          if (response.meta.code === 400) {
            alert("Location not found, Please seach again");
            return;
          }
          setVenueState({
            venues: response.response.groups[0].items,
            isLoaded: true,
          });
        },
        (error) => {
          console.log(error);
        }
      );
  }

  render() {
    const { error, isLoaded } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      let venueList = this.state.venues.map(
        (item, i) => <Venue key={i} name={item.venue.name} />
        // let addressList = this.state.venues.map((item, i)=>
        // <Address key={i} Address={item.venue.location.formattedAddress}/>
      );

      return (
        <Container>
          <Row className="flex-wrap-reverse">
            <Col size="xs-12">
              <Search onSubmit={(value) => this.handleSubmit(value)} />
              <h4>
                {" "}
                <i>FourSquare</i> Recommended Restaurants
              </h4>
              <ul>{venueList}</ul>
            </Col>
          </Row>
        </Container>
      );
    }
  }
}
export default TableResults;
