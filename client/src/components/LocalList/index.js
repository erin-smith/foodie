import React from "react";

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
        <table className="table table-striped mt-5 text-center">
          <thead>
            <tr>
              <th scope="col" className="text-center">
                Chef
              </th>
              <th scope="col" className="text-center">
                Awards
              </th>
              <th scope="col" className="text-center">
                Restaurants
              </th>
              <th scope="col" className="text-center">
                Location
              </th>
            </tr>
          </thead>
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
        </table>
      </div>
    );
  }
}
export default LocalList;
