const { addProduct, getProducts, getProductById, deleteProductById, getPopularProducts, getTopProducts } = require("../controller/productController");

const router= require("express").Router();

<<<<<<< HEAD
router.use((req, res, next) => {
    req.db = router.productsDB;
    next();
});

router.route('/')
    .post(addProduct)
    .get(getProducts);

router.put("/product/:id", getProductById);
=======
router.post("/addproduct", addProduct);
router.get("/allproduct", getProducts);
router.get("/popularproduct", getPopularProducts);
router.get("/topproduct", getTopProducts);
router.get("/product/:id", getProductById);
router.get("/deleteproduct/:id", deleteProductById);
>>>>>>> 587f598af6e267fc94d018fd4e87a2aae077143b

module.exports=router