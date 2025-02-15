const { addProduct, getProducts, getProductById } = require("../controller/productController");

const router= require("express").Router();

router.post("/addproduct", addProduct);
router.get("/getproduct", getProducts);
router.get("/product/:id", getProductById);

module.exports=router