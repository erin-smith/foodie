// const chefs = require('../models/chefs');
// const locals = require('../models/locals');
const db = require('../models/index');
const chefs = db.chefs;
const locals = db.locals;
const Op = db.Sequelize.Op;


module.exports =  {
  
    // GET route for getting all of the chefs
    findAllChefs: function(req, res) {
      chefs.findAll({})
      .then(data => res.send(data))
      .catch(err => res.status(422).json(err));
        // results are available to us inside the .then
      },

      findAllLocals: function(req, res) {
      locals.findAll({})
      .then(data => res.json(data))
      .catch(err => res.status(422).json(err));
        // results are available to us inside the .then
      }
  
}    
