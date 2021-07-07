// Import the ORM to create functions that will interact with db.
const orm = require("../config/orm.js");

const chefs = {
  selectAll:(callback)=> {
    orm.selectAll("chefs", (res)=> {
      callback(res);
    });
  },
  // Erin- Don't forget:  variables columns and values are arrays!
  insertOne:(columns, values, callback)=>{
    orm.insertOne("chefs", columns, values,(res)=> {
      callback(res);
    });
  }
  };

// Export the db functions for burgers_controller.js
module.exports = chefs;
