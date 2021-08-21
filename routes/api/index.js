const router = require("express").Router();
// const gameRoutes = require("./game");
const chefRoutes = require("./chefs");
const localsRoutes = require("./locals");

// API routes
// router.use("/game", gameRoutes);
router.use("/chefs", chefRoutes);
router.use("/locals", localsRoutes);

module.exports = router;