const db = require("../models");
require("dotenv").config();
const bathroom = require("../models/bathroom");
const Sequelize = require("sequelize");
const path = require("path");

module.exports = function (app) {
    // Routes

    // GET route for getting all of the todos
  app.get("/api/chefs", function(req, res) {
    if (source === "home") {
      const chef_ids = chefs.map((chefs) => chefs.chefs_id);
    db.chefs.findAll({ where: {
      chefs_id: {
        [Sequelize.Op.in]: chef_ids,
      },
    },
  }).then((chefs_db) => {
      res.json(chefs_db);
    });
  }
});

        
  app.get("/api/locals", function(req, res) {
    let query = {};
    if (req.query.locals_id) {
      query.localsId = req.query.locals_id;
    }
        db.locals.findAll({}).then(function(chefs_db) {
            res.json(chefs_db);
        });
     });
    
    };