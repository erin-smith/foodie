import React from "react";
import "./style.css"


class LocalList extends React.Component {
  state = { locals: [] };

  componentDidMount() {
    this.getLocals();
  }

  getLocals = () => {
    fetch("/api/locals")
      .then((response) => response.json())
      .then((locals) => this.setState({ locals }))
      .then((err) => {
        console.log(err, "here");
      });
  };
  render() {
    const { locals } = this.state;
    return (
      <div>
        <table class="table table-bordered table-striped table-responsive-stack mt-3 text-center" id="tableTwo">
          <thead>
            <tr>
              <th scope="col" className="text-center">
                <h3>Chef</h3>
              </th>
              <th scope="col" className="text-center">
                <h3>Awards</h3>
              </th>
              <th scope="col" className="text-center">
                <h3>Restaurants</h3>
              </th>
              <th scope="col" className="text-center">
                <h3>Location</h3>
              </th>
            </tr>
          </thead>
          {locals.length ? (
            <tbody>
              {this.state.locals.map((local) => (
                <tr>
                  <td>{local.name}</td>
                  <td>{local.awards}</td>
                  <td>{local.restaurants}</td>
                  <td>{local.city}</td>
                </tr>
              ))}
            </tbody>
          ) : (
            <h3>No Results to Display</h3>
          )}
        </table>
        </div>
    );
  }
}
export default LocalList;
