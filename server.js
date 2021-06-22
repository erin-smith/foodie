// npm packages
const express = require('express');
const compression = require('compression');

// Setting up port and requiring models
const PORT = process.env.PORT || 3001;
const db = require('./models');

// EXPRESS
const app = express();
app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));


if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// ROUTES
require('./routes/api-routes.js')(app);
require('./routes/html-routes.js')(app);

// Sync database with sequelize
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log('==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.', PORT, PORT);
  });
});