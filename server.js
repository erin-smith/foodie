// npm packages
const express = require("express");
const cors = require("cors");
const path = require('path');
const compression = require("compression");

const corsOptions = {
  origin: "http://localhost:5000"
};

// EXPRESS
const app = express();
app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(cors(corsOptions));

// Setting up port and requiring models
const db = require("./models");

db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db");
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`API server started on port ${PORT}, YAY`);
});
