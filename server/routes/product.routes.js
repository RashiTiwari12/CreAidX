const express = require("express");
const {
  getProducts,
  getProduct,
  postProduct,
  putProduct,
  deleteProduct,
} = require("../controllers/product.controller");

const router = express.Router();

// Define routes
router.get("/", getProducts); // GET /api/products
router.get("/:id", getProduct); // GET /api/products/:id
router.post("/", postProduct); // POST /api/products
router.put("/:id", putProduct); // PUT /api/products/:id
router.delete("/:id", deleteProduct); // DELETE /api/products/:id

module.exports = router;
