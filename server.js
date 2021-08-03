// npm packages
const express = require('express');
const app = express();
const routes = require("./routes/api-routes.js");
const chefs = require('./models/chefs');
const locals = require('./models/locals');


// Setting up port and requiring models
const PORT = process.env.PORT || 3000;
const db = require("./models");

// EXPRESS
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// app.use(routes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
};

app.get("/api/chefs", function(req, res) {
  console.log("retrieving chefs")
  db.chefs.findAll().then(function(results) {
    console.log(results);
    res.json(results);
  });

});

 app.get("/api/locals", function(req, res) {
  console.log("retrieving Locals!!")
  db.locals.findAll({}).then(function(results) {
    console.log(results);
    res.json(results);
  });

});

app.get("/honza", function(req, res) {
  //  .then(function(results) {
    console.log(res,"Hello");
    res.send('Honza!')
  });

const  {Sequelize} = require("sequelize");
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/config/config.json')[env];


let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}
try {
  sequelize.authenticate();
   console.log('Connection has been established successfully.');
 } catch (error) {
   console.error('Unable to connect to the database:', error);
 }

//ROUTES
require('./routes/html-routes.js')(app);
require('./routes/api-routes.js')(app);


db.sequelize.sync({force: true}).then(function() {
  app.listen(PORT, function() {
    console.log(`Server started on port ${PORT}`);
  });
});