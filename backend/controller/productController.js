
const productModal = require("../model/productModel");

const addProduct = async(req, res)=>{
  try {
    const {
      name,
      title,
      size,
      price,
      discount,
      description,
      color,
      image,
      hoverimage,
      material,
      application,
      gender,
      season,
      pattern,
      occasion,
      type,
      businesstype,
    } = req.body;

    // Create the product in the database
    const product = await productModal.create({
      name,
      title,
      size,
      price,
      discount,
      description,
      color,
      image,
      hoverimage,
      material,
      application,
      gender,
      season,
      pattern,
      occasion,
      type,
      businesstype,
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
      const menu = await productModal.find().sort({ createdAt: -1 });
      return res
        .status(200)
        .json({ message: "Product fetched successfully", menu });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
}

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

module.exports={addProduct, getProducts, getProductById}