const db = require('../db/models/index');



module.exports =  {
  
    // GET route for getting all of the chefs
    findAllChefs: ("/api/chefs/", function(req, res) {
      db.chefs.findAll({})
      .then(data => res.json(data))
      .catch(err => res.status(422).json(err));
        // results are available to us inside the .then
      }),

      findAllLocals: ("/api/locals/", function(req, res) {
      db.locals.findAll({})
      .then(data => res.json(data))
      .catch(err => res.status(422).json(err));
        // results are available to us inside the .then
      })
  
};    
