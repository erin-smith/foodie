const router = require("express").Router();
const controller = require("../../controllers/controller");

router.route("/")
  .get(controller.findAllLocals);

module.exports = router;