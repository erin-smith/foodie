const db = require('../models');



module.exports = function (app) {
//     // Routes
 app.get("/api/chefs", function(req, res) {
   console.log("retrieving chefs")
  db.chefs.findAll().then(function(results) {
    console.log(results);
    res.json(results);
  });

});

 app.get("/api/locals", function(req, res) {
   console.lof("retrienveing Locals")
  db.locals.findAll().then(function(results) {
    console.log(results);
    res.json(results);
  });

});

app.get("/honza", function(req, res) {
  //  .then(function(results) {
    console.log(results,"Hello");
    res.send('Honza!')
  });

};