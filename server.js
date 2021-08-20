// npm packages
const express = require('express');
const app = express();
const path = require("path");
// const cors = require ('cors');

// const corsOptions = {
//   origin: "http://localhost:3001"
// };

// app.use(cors(corsOptions));

// EXPRESS
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// Setting up port and requiring models
const db = require("./models");

db.sequelize.sync({force: true}).then(function() {
  console.log("Drop and re-sync db");
});


if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname,  "build", "index.html"));
  });
}


//ROUTES
require('./routes/html-routes.js')(app);
require('./routes/api-routes.js')(app);


const PORT = process.env.PORT || 3001;
  app.listen(PORT, function() {
    console.log(`API server started on port ${PORT}, YAY`);
  });
