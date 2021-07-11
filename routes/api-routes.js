const db = require("../models");
require("dotenv").config();
const Sequelize = require("sequelize");
const chefs = require ("../models/chef");
const locals = require ("../models/local");

module.exports = function (app) {
    // Routes
  const chefs = require("../controllers/controller");
  const router = require("express").Router();  

    // GET route for getting all of the todos
    if (source === "/transformative") {
      const id = chefs.map((chefs) => chefs.id);
    db.chefs.findAll({ where: {
      id: {
        [Sequelize.Op.in]: id,
      },
    },
  }).then((chefs_db) => {
      res.json(chefs_db);
    });
  };

        
    if (source === "/local") {
      const local_ids = locals.map((locals) => locals.locals_id);
    db.chefs.findAll({ where: {
      locals_id: {
        [Sequelize.Op.in]: local_ids,
      },
    },
  }).then((chefs_db) => {
      res.json(chefs_db);
    });
  }
};

