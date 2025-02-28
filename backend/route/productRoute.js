const { addProduct, getProducts, getProductById } = require("../controller/productController");

const router= require("express").Router();

router.use((req, res, next) => {
    req.db = router.productsDB;
    next();
});

router.route('/')
    .post(addProduct)
    .get(getProducts);

router.put("/product/:id", getProductById);

module.exports=router