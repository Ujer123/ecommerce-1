const productModel= require("../model/productModel")

const productFilter = async(req, res)=>{
    try {
    let { category, search } = req.query;
    let filter = {};
    
    if (category) filter.category = category;
 
    if (search) filter.name = { $regex: search, $options: "i" };

    const products = await productModel.find(filter);
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Error fetching products", error });
  }

}

const addProduct = async(req, res)=>{
  const { name, image, category, size, color } = req.body;

try {
  await productModel.create({
   name, image, category, size, color
  })
  res.json({
    message: "Product Added",
    success:true
  })
} catch (error) {
  res.status(500).json({ message: "Error fetching products", error });
}
}

module.exports={productFilter,addProduct}