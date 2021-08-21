// npm packages
const express = require("express");
const cors = require("cors");
const compression = require("compression");

// Setting up port and requiring models
const PORT = process.env.PORT || 8081;
const db = require("./models");

const corsOptions = {
  origin: "http://localhost:8081"
};

// EXPRESS
const app = express();
app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(cors(corsOptions));


if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);

db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db");
});
app.listen(PORT, () => {
  console.log(`API server started on port ${PORT}, YAY`);
});
