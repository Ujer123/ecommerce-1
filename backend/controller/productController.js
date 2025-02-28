
const productModal = require("../model/productModel");

const addProduct = async(req, res)=>{
  try {
    const {
      category,
      name,
      moq,
      fabricType,
      material,
      application,
      colors,
      gender,
      season,
      feature,
      pattern,
      occasion,
      uploadCategory,
      images,
      hoverimage,
      size,
    } = req.body;

    // Create the product in the database
    const product = await productModal.create({
      category,
      name,
      moq,
      fabricType,
      material,
      application,
      colors,
      gender,
      season,
      feature,
      pattern,
      occasion,
      uploadCategory,
      images,
      hoverimage,
      size,
    });

    return res.status(201).json({
      message: "Product added successfully",
      success: true,
      product,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

  const getProducts = async(req, res) => {
    try {
      const products = await productModal.find();

      res.json({
          code: 200,
          remark: 'success',
          data: products,
      });
  }catch(error){
      console.log(error);
      res.status(500);
      res.json({
          code: 500,
          remark: 'failed',
      });
      
  }
}
const getPopularProducts = async (req, res) => {
  try {
      const popularCategory = "popularproduct";
      const popularProducts = await productModal.find({ uploadCategory: popularCategory });
      if (popularProducts.length === 0) {
          return res.status(404).json({ message: "No popular products found" });
      }

      return res.status(200).json({ 
          message: "Popular products fetched successfully", 
          products: popularProducts 
      });
  } catch (error) {
      return res.status(500).json({ message: error.message });
  }
};
const getTopProducts = async (req, res) => {
  try {
      const topCategory = "topproducts";
      const topProducts = await productModal.find({ uploadCategory: topCategory });
      if (topProducts.length === 0) {
          return res.status(404).json({ message: "No top products found" });
      }

      return res.status(200).json({ 
          message: "top products fetched successfully", 
          products: topProducts 
      });
  } catch (error) {
      return res.status(500).json({ message: error.message });
  }
};

const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const menu = await productModal.findById(id);
    return res
      .status(200)
      .json({ message: "product fetched successfully", menu });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const deleteProductById = async (req, res) => {
  try{
    const {id} = req.params;
    const menu = await productModal.findByIdAndDelete(id);
    return res.status(200).json({message: "Product deleted successfully", menu});
  }
  catch(error){
    return res.status(500).json({message: error.message});
  }
}

module.exports={addProduct, getProducts, getProductById, deleteProductById, getPopularProducts, getTopProducts}