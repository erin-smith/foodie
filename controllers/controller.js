//import express and the Chefs models to use database functions
const express = require("express");
const chefs = require("../models/chef.js");
const chefs = require("../models/index.js");
const locals = require("../models/local.js");
const locals = require("../models/index.js");
const router = express.Router();


// route for selecting all entries (this still needs loads of work to be done)
router.get("/", (req, res) => {
    chefs.selectAll((data) => {
        let chefs = data.map(({ name, awards, restaurants, city }) => ({
            name: name,
            awards: awards,
            restaurants: restaurants,
            city:city
        }));

        let chefObject = { chefs: chefs};
        res.render("index", chefObject);
    });
});

router.get("/", (req, res) => {
    locals.selectAll((data) => {
        let locals = data.map(({ name, awards, restaurants, city }) => ({
            name: name,
            awards: awards,
            restaurants: restaurants,
            city:city
        }));

        let localObject = { locals: locals};
        res.render("index", localObject);
    });
});

  

// export routes for server.js to use.
module.exports = router;