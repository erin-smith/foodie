
require("dotenv").config();
const path = require("path");

module.exports = function (app) {

  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../../src/pages/Home"));
  });

  app.get("/transformative", function (req, res) {
    res.sendFile(path.join(__dirname, "../../src/pages/Transformative"));
  });

  app.get("/local", function (req, res) {
    res.sendFile(path.join(__dirname, "../../src/pages/Local"));
  });

  app.get("/explore", function (req, res) {
    res.sendFile(path.join(__dirname, "../../src/pages/Explore"));
  });

  app.get("/suggest", function (req, res) {
    res.sendFile(path.join(__dirname, "../../pages/Suggest"));
  });
};