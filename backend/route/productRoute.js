const { addProduct, getProducts, getProductById } = require("../controller/productController");

const router= require("express").Router();

router.post("/addproduct", addProduct);
router.get("/allproduct", getProducts);
router.get("/product/:id", getProductById);

module.exports=router