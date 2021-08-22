import React from "react";

function Heading() {
  return (
    <div className="row">
      <div className="col-xs-12">
        <h1 className="text-center">Chef Wisdom</h1>
        <p className="lead text-center">
          "It's around the table and in the preparation of food that we learn
          about ourselves and about the world. --Alice Waters"
        </p>
        <p className="lead text-center">
        "Food is a necessary component to life. People can live without Renoir, Mozart, Gaudi, Beckett, but they cannot live without food. - Grant Achatz"
        </p>
        <p className="lead text-center">
          {" "}
          "The way you make an omelet reveals your character. - Anthony Bourdain"{" "}
        </p>
        <p className="lead text-center">
          {" "}"People who love to eat are always the best people. -- Julia Child"
          {" "}
        </p>

      </div>
    </div>
  );
}

export default Heading;
