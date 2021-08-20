const db = require('../models');

module.exports = function (app) {
    
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

})
};