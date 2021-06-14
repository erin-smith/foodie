//import express and the Chefs models to use database functions
const express = require("express");
const chef = require("../models/chef.js");
const chef = require("../models/index.js");
const local = require("../models/local.js");
const local = require("../models/index.js");
const router = express.Router();


// route for selecting all entries (this still needs loads of work to be done)
router.get("/", (req, res) => {
    chef.selectAll((data) => {
        let chef = data.map(({ name, awards, restaurants, city }) => ({
            name: name,
            awards: awards,
            restaurants: restaurants,
            city:city
        }));

        let chefObject = { chef: chef};
        res.render("index", chefObject);
    });
});

router.get("/", (req, res) => {
    local.selectAll((data) => {
        let local = data.map(({ name, awards, restaurants, city }) => ({
            name: name,
            awards: awards,
            restaurants: restaurants,
            city:city
        }));

        let localObject = { local: local};
        res.render("index", localObject);
    });
});

  

// export routes for server.js to use.
module.exports = router;