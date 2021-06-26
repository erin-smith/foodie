const axios = require("axios");
const db = require("../models");
const chefs = require("../models/chef");
const locals = require("../models/chef");
const Sequelize = require("sequelize");
const path = require("path");
const { get } = require("https");

module.exports = function (app) {
    // Routes
app.get("/", function(req, res) {

    // GET route for getting all of the todos
  app.get("/api/Home", function(req, res) {
    // findAll returns all entries for a table when used with no options
    db.chefs.findAll({}).then(function(dbChefs) {
      // We have access to the todos as an argument inside of the callback function
      res.json(dbChefs);
    });
  });

        
  app.get("/api/Local", function(req, res) {
        db.locals.findAll({}).then(function(dbLocals) {
            res.json(dbLocals);
        });
     });
    
    });

};