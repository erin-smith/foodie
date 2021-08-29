// npm packages
const express = require("express");
const cors = require("cors");
const compression = require("compression");
const routes = require("./routes");

// Setting up port and requiring models
const PORT = process.env.PORT || 3001;
const db = require("./db/models");

const corsOptions = {
  origin: "http://localhost:3001"
};

// EXPRESS
const app = express();


if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(cors(corsOptions));


if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(routes);


db.sequelize.sync().then(() => {
});
app.listen(PORT, () => {
  console.log(`API server started on port ${PORT}, YAY`);
});

