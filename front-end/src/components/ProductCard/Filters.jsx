import React, { useState, useEffect, useMemo } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../redux/slices/productReduer";

<<<<<<< HEAD
const Filters = ({ setFilteredProducts, filteredProducts = [], products = [] }) => {
    // const [cloth, setCloth] = useState([])
    const [isCategoryOpen, setIsCategoryOpen] = useState(false);
    const [isSizeOpen, setIsSizeOpen] = useState(false);
    const [isColorOpen, setIsColorOpen] = useState(false);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedSizes, setSelectedSizes] = useState([]);
    const [selectedColors, setSelectedColors] = useState([]);
    // const [categories, setCategories] = useState('')
    // const [sizes, setSizes] = useState('')
    // const [colors, setColors] = useState('')
=======
const Filters = () => {
  const dispatch = useDispatch();
  const productState = useSelector((state) => state.product);
  const productsFromApi = Array.isArray(productState.products)
    ? productState.products
    : productState.products.menu || [];
>>>>>>> 587f598af6e267fc94d018fd4e87a2aae077143b

  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isCategoryOpen, setIsCategoryOpen] = useState(true);
  const [isColorOpen, setIsColorOpen] = useState(true);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);

<<<<<<< HEAD
    // const fetchCategories = async () => {
    //     axios.get('http://localhost:8000/product')
    //     .then(res=>{
    //         setCloth(res.data.data)
    //         console.log(res.data.data);
            
    //     })
    //     .catch(err=>{
    //         console.log('Error is fetch: ', err);
            
    //     })
    // }

    // useEffect(() => {
    //     fetchCategories()
    // }, [])

    const toggleSelection = (setSelected, value, selectedArray) => {
        setSelected(
            selectedArray.includes(value)
                ? selectedArray.filter((item) => item !== value)
                : [...selectedArray, value]
        );
    };
=======
  const categories = useMemo(() => {
    return Array.from(new Set(productsFromApi.map((product) => product.category)));
  }, [productsFromApi]);
>>>>>>> 587f598af6e267fc94d018fd4e87a2aae077143b

  const colors = useMemo(() => {
    return Array.from(new Set(productsFromApi.map((product) => product.colors)));
  }, [productsFromApi]);

<<<<<<< HEAD
        setFilteredProducts(filtered.length ? filtered : products);
    }, [selectedCategories, selectedSizes, selectedColors, products, setFilteredProducts]);

    return (
        <div className="grid grid-cols-12 w-full  max-w-[1500px] mx-auto mt-2">
            <div className="sm:col-span-12 md:col-span-6 lg:col-span-2 p-4 border-r">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Select Category</h2>

                {/* Category Filter */}
                <div className="border p-3 mb-2 cursor-pointer">
                    <div className="flex justify-between items-center" onClick={() => setIsCategoryOpen(!isCategoryOpen)}>
                        <span>Category</span>
                        {isCategoryOpen ? <FaMinus /> : <FaPlus />}
                    </div>
                    {isCategoryOpen && (
                        <div className="mt-2">
                            {categories.map((category) => (
                                <label key={category} className="flex items-center gap-2">
                                    <input
                                        type="checkbox"
                                        checked={selectedCategories.includes(category)}
                                        onChange={() => toggleSelection(setSelectedCategories, category, selectedCategories)}
                                    />
                                    {category}
                                </label>
                            ))}
                        </div>
                    )}
                </div>

                {/* Size Filter */}
                <div className="border p-3 mb-2 cursor-pointer">
                    <div className="flex justify-between items-center" onClick={() => setIsSizeOpen(!isSizeOpen)}>
                        <span>Size</span>
                        {isSizeOpen ? <FaMinus /> : <FaPlus />}
                    </div>
                    {isSizeOpen && (
                        <div className="mt-2">
                            {sizes.map((size) => (
                                <label key={size} className="flex items-center gap-2">
                                    <input
                                        type="checkbox"
                                        checked={selectedSizes.includes(size)}
                                        onChange={() => toggleSelection(setSelectedSizes, size, selectedSizes)}
                                    />
                                    {size}
                                </label>
                            ))}
                        </div>
                    )}
                </div>

                {/* Colors Filter */}
                <div className="border p-3 mb-2 cursor-pointer">
                    <div className="flex justify-between items-center" onClick={() => setIsColorOpen(!isColorOpen)}>
                        <span>Colors</span>
                        {isColorOpen ? <FaMinus /> : <FaPlus />}
                    </div>
                    {isColorOpen && (
                        <div className="mt-2 gap-2">
                            {colors.map((color) => (
                                <label key={color} className="flex items-center gap-2">
                                    <div className="w-5 h-5 rounded-full border" style={{ backgroundColor: color.toLowerCase() }}></div>
                                    <input
                                        type="checkbox"
                                        checked={selectedColors.includes(color)}
                                        onChange={() => toggleSelection(setSelectedColors, color, selectedColors)}
                                    />
                                    {color}
                                </label>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* Products Display */}
            <div className="sm:col-span-12 md:col-span-6 lg:col-span-10 p-4">
                <h2 className="text-2xl font-bold text-gray-800 mb-8">Products</h2>
                <div className="grid sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-4 gap-4 sm:px-0 md:px-4">
                    {filteredProducts.length > 0 ? (
                        filteredProducts.map((item) => (
                             <div key={item.id} className="border sm:rounded-none md:rounded-2xl shadow-sm text-center overflow-hidden">
                                <Link to={`/product-details/${item.id}`}>
                                    <div className="w-full overflow-hidden group">
                                        {/* Image Container */}
                                        <div className="relative w-full">
                                            {/* Default Image */}
                                            <img
                                            loading="lazy"
                                                src={item.images[0]}
                                                alt={item.name}
                                                className="w-full object-cover object-top aspect-[59/70] transition-opacity duration-500 ease-in-out opacity-100 group-hover:opacity-0"
                                            />
                                            {/* Hover Image */}
                                            <img
                                            loading="lazy"
                                                src={item.hoverImg}
                                                alt={item.name}
                                                className="absolute top-0 left-0 w-full object-cover object-top aspect-[59/70] transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100"
                                            />
                                        </div>
                                    </div>

                                    {/* Product Name & Button */}
                                    <div className=" sm:bg-white md:bg-[#efe7e2] py-2">
                                        <span className="text-gray-900 sm:text-sm md:text-base font-semibold">{item.title}</span><br />
                                        <button className="bg-blue-500 text-white px-4 w-[80%] mx-auto py-2 text-sm font-medium rounded-lg hover:bg-blue-600 transition-all duration-300">
                                            View Now
                                        </button>
                                    </div>
                                </Link>
                            </div>
                        ))
                    ) : (
                        <p className="text-center col-span-3 text-gray-500">No products found.</p>
                    )}
                </div>
            </div>
            
        </div>
=======
  const toggleSelection = (setSelected, value, selectedArray) => {
    setSelected(
      selectedArray.includes(value)
        ? selectedArray.filter((item) => item !== value)
        : [...selectedArray, value]
>>>>>>> 587f598af6e267fc94d018fd4e87a2aae077143b
    );
  };

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  useEffect(() => {
    let filtered = productsFromApi;

    if (selectedCategories.length) {
      filtered = filtered.filter((product) =>
        selectedCategories.includes(product.category)
      );
    }

    if (selectedColors.length) {
      filtered = filtered.filter((product) =>
        selectedColors.includes(product.colors)
      );
    }

    setFilteredProducts(filtered.length ? filtered : productsFromApi);
  }, [selectedCategories, selectedColors, productsFromApi]);

  return (
    <div className="grid grid-cols-12 w-full max-w-[1500px] mx-auto mt-2">
      {/* Filters Panel */}
      <div className="sm:col-span-12 md:col-span-6 lg:col-span-2 p-4 border-r">
        <div className="sticky top-0">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Select Category
          </h2>
          {/* Category Filter */}
          <div className="border p-3 mb-2 cursor-pointer">
            <div
              className="flex justify-between items-center"
              onClick={() => setIsCategoryOpen(!isCategoryOpen)}
            >
              <span>Category</span>
              {isCategoryOpen ? <FaMinus /> : <FaPlus />}
            </div>
            {isCategoryOpen && (
              <div className="mt-2">
                {categories.map((category) => (
                  <label key={category} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={selectedCategories.includes(category)}
                      onChange={() =>
                        toggleSelection(setSelectedCategories, category, selectedCategories)
                      }
                    />
                    {category}
                  </label>
                ))}
              </div>
            )}
          </div>
          {/* Colors Filter */}
          <div className="border p-3 mb-2 cursor-pointer">
            <div
              className="flex justify-between items-center"
              onClick={() => setIsColorOpen(!isColorOpen)}
            >
              <span>Colors</span>
              {isColorOpen ? <FaMinus /> : <FaPlus />}
            </div>
            {isColorOpen && (
              <div className="mt-2 gap-2">
                {colors.map((color) => (
                  <label key={color} className="flex items-center gap-2">
                    <div
                      className="w-5 h-5 rounded-full border"
                      style={{ backgroundColor: color.toLowerCase() }}
                    ></div>
                    <input
                      type="checkbox"
                      checked={selectedColors.includes(color)}
                      onChange={() =>
                        toggleSelection(setSelectedColors, color, selectedColors)
                      }
                    />
                    {color}
                  </label>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Products Display */}
      <div className="sm:col-span-12 md:col-span-6 lg:col-span-10 p-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-8">Products</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-4 gap-4 sm:px-0 md:px-4">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div
                key={product._id}
                className="border sm:rounded-none md:rounded shadow-sm text-center overflow-hidden"
              >
                {/* Navigates to product details page using product._id */}
                <Link to={`/product-details/${product._id}`}>
                  <div className="w-full overflow-hidden group">
                    {/* Image Container */}
                    <div className="relative w-full">
                      {/* Default Image */}
                      <img
                        loading="lazy"
                        src={product.images[2]}
                        alt={product.name}
                        className="w-full object-cover object-top aspect-[59/70] transition-opacity duration-500 ease-in-out opacity-100 group-hover:opacity-0"
                      />
                      {/* Hover Image */}
                      <img
                        loading="lazy"
                        src={product.hoverimage}
                        alt={product.name}
                        className="absolute top-0 left-0 w-full object-cover object-top aspect-[59/70] transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100"
                      />
                    </div>
                  </div>
                  {/* Product Name & Button */}
                  <div className="sm:bg-white md:bg-[#efe7e2] py-2">
                    <span className="text-gray-900 sm:text-sm md:text-base font-semibold">
                      {product.name}
                    </span>
                    <br />
                    <button className="bg-blue-500 text-white px-4 w-[80%] mx-auto py-2 text-sm font-medium rounded-lg hover:bg-blue-600 transition-all duration-300">
                      View Now
                    </button>
                  </div>
                </Link>
              </div>
            ))
          ) : (
            <p className="text-center col-span-3 text-gray-500">
              No products found.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Filters;
