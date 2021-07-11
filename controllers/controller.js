//import express and the Chefs models to use database functions
const express = require("express");
const db = require("../models");
const chefs = db.chef; 
const locals = db.local;

const router = express.Router();

router.get("/transformative", (req, res) => {
    chefs.selectAll((data) => {
        let chefs = data.map(({ name, awards, restaurants, city }) => ({
            name: name,
            awards: awards,
            restaurants: restaurants,
            city:city
        }));

        let chefObject = { chefs: chefs};
        console.log(chefObject);
        res.render("index", chefObject);
    });
});

router.get("/local", (req, res) => {
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
})

  

// export routes for server.js to use.
module.exports = router;