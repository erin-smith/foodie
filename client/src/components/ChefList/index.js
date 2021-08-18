import React from "react";

class ChefList extends React.Component {
  state = { chefs: [] };

  componentDidMount() {
    this.getChefs();
  }

  getChefs = () => {
    fetch("/api/chefs")
      .then((response) => response.json())
      .then((chefs) => this.setState({ chefs }))
      .then((err) => {
        console.log(err, "here");
      });
  };
  render() {
    const { chefs } = this.state;
    return (
      <div>
        <table className="table table-striped mt-3 text-center">
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
          <tbody>
            {this.state.chefs.map((chef) => (
              <tr>
                <td>{chef.name}</td>
                <td>{chef.awards}</td>
                <td>{chef.restaurants}</td>
                <td>{chef.city}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
export default ChefList;
