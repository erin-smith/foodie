import React, { Component } from 'react';

export class Search extends Component {

  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleFormSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(this.state.value);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return (
        <form className="search" onSubmit={this.handleSubmit}>
      <div className="form-group">
        <label htmlFor="Query">
          <strong>Restaurant or City, State</strong>
        </label>
        <input
          className="form-control"
          type="text"
          onChange={this.handleChange}
          placeholder="San Diego, CA"
          name="RestaurantSearch"
          required
          id="venueType"
          value={this.state.value}
        />
      </div>
      <div className="pull-right">
        <button
         onClick={(value)=>this.handleFormSubmit(value)}
          type="submit"
          value="Submit"
          className="btn btn-lg btn-info float-right"
          id="orgBtn"
        >
          Search
        </button>
      </div>
    </form>
    );
  }
}