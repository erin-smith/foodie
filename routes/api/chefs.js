const router = require("express").Router();
const controller = require("../../controllers/controller");

router.route("/")
  .get(controller.findAllChefs);

module.exports = router;