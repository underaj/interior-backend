const express = require("express");
const controllers = require("../controllers");
const router = express.Router();

router.route("/product").get(controllers.getAllProducts).post(controllers.createProduct);
router.route("/product/:id").put(controllers.updateProduct).delete(controllers.deleteProduct);
module.exports = router;