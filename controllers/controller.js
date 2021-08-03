const chefs = require('../models/chefs');
const locals = require('../models/locals');
const db = require('../models/index');


module.exports =  {
  
    // GET route for getting all of the chefs
    findAllChefs: function(req, res) {
      db.chefs.findAll({})
      .then(chefs => res.json(chefs))
      .catch(err => res.status(422).json(err));
        // results are available to us inside the .then
      },

      findAllLocals: function(req, res) {
      db.locals.findAll({})
      .then(locals => res.json(locals))
      .catch(err => res.status(422).json(err));
        // results are available to us inside the .then
      }
  
}    
