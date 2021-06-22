const axios = require("axios");
const db = require("../models");
require("dotenv").config();

const path = require("path");

module.exports = function (app) {

  app.get("/", function (req, res) {
        res.render("Home");
  });

  app.get("/Transformative", function (req, res) {
    res.render("Transformative");
  });

  app.get("/Local", function (req, res) {
    res.render("Local");
  });

  app.get("/Explore", function (req, res) {
    res.render("Explore");
  });

  app.get("/Suggest", function (req, res) {
    res.render("Suggest");
  });
};