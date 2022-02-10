const express = require("express");
const controllers = require("../controllers");
const router = express.Router();

router.route("/").get(controllers.getAllProducts).post(controllers.createProduct);
module.exports = router;