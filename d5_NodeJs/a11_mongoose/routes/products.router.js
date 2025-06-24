const express = require("express");
const ProductController = require("../controllers/Product.controller.js")

const router = express.Router();

router.get("/create", ProductController.createProduct);
router.post("/create", ProductController.createProductPost);
router.post("/remove/:id", ProductController.removeProduct);
router.post("/edit/", ProductController.editProductPost);
router.get("/edit/:id", ProductController.editProduct);
router.get("/:id", ProductController.getProduct);
router.get("/", ProductController.showProducts);

module.exports = router;