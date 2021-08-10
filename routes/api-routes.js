const db = require('../models');
// const chefs = require('../models/chefs');
// const locals = require('../models');
// const Op = db.Sequelize.Op;

module.exports = function (app) {
    // GET route for getting all of the chefs
  //   app.get("/api/chefs", (req, res) => {
  //     chefs.findAll({})
  //     .then(data => {
  //       // res.send(data);
  //       let chefs = data.map(({name, awards, restaurants, city}) => ({
  //         name: name,
  //         awards: awards,
  //         restaurants: restaurants,
  //         city: city
  //       }));

  //       let chefObject = {chefs : chefs };
  //       res.render("/transformative", chefObject)
  //     })
  //     .catch(err => {
  //       res.status(500).send({
  //       message:
  //       err.message || "Error occured while creating chefs."
  //     });
  //   });
  //       // results are available to us inside the .then
  //     }),

  //     app.get("/api/locals", (req, res) => {
  //     locals.findAll({})
  //     .then(data => {
  //       // res.send(data);
  //       let locals = data.map(({name, awards, restaurants, city}) => ({
  //         name: name,
  //         awards: awards,
  //         restaurants: restaurants,
  //         city: city
  //       }));

  //       let localObject = {locals: locals};
  //       res.render("/local", localObject)
  //     })
  //     .catch(err => {
  //       res.status(500).send({
  //       message:
  //       err.message || "Error occured while creating chefs."
  //     });
  //   });
  // });

 app.get("/api/chefs", function(req, res) {
   console.log("retrieving chefs")
  db.chefs.findAll({}).then(function(dbChefs) {
    console.log(dbChefs);
    res.json(dbChefs);
  });

});

 app.get("/api/locals", function(req, res) {
   console.log("retrienveing Locals")
  db.locals.findAll({}).then(function(results) {
    console.log(results);
    res.json(results);
  });

});


};