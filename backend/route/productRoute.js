const { addProduct, getProducts, getProductById, deleteProductById } = require("../controller/productController");

const router= require("express").Router();

router.post("/addproduct", addProduct);
router.get("/allproduct", getProducts);
router.get("/product/:id", getProductById);
router.get("/deleteproduct/:id", deleteProductById);

module.exports=router