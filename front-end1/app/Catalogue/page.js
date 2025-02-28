"use client";
import React, { useState, useEffect, useMemo, useCallback } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";

// Reusable Filter Section Component
const FilterSection = ({ title, isOpen, toggleOpen, items, selectedItems, toggleSelection }) => (
  <div className="border p-3 mb-2 cursor-pointer">
    <div className="flex justify-between items-center" onClick={toggleOpen}>
      <span>{title}</span>
      {isOpen ? <FaMinus /> : <FaPlus />}
    </div>
    {isOpen && (
      <div className="mt-2">
        {items.map((item) => (
          <label key={item} className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={selectedItems.includes(item)}
              onChange={() => toggleSelection(item)}
            />
            {title === "Colors" ? (
              <div className="w-5 h-5 rounded-full border" style={{ backgroundColor: item.toLowerCase() }}></div>
            ) : (
              item
            )}
          </label>
        ))}
      </div>
    )}
  </div>
);

const Filters = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const [isCategoryOpen, setIsCategoryOpen] = useState(true);
  const [isColorOpen, setIsColorOpen] = useState(true);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);

  // Fetch Products
  const fetchProducts = useCallback(async () => {
    try {
      const res = await axios.get("http://localhost:8000/product");
      setProducts(res.data.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  // Extract Unique Categories and Colors
  const categories = useMemo(() => [...new Set(products.map((p) => p.category))], [products]);
  const colors = useMemo(() => [...new Set(products.flatMap((p) => p.colors))], [products]);

  // Toggle Selection Function
  const toggleSelection = (setter, value, selectedArray) => {
    setter(selectedArray.includes(value) ? selectedArray.filter((item) => item !== value) : [...selectedArray, value]);
  };

  // Apply Filters
  useEffect(() => {
    let filtered = products;

    if (selectedCategories.length) {
      filtered = filtered.filter((p) => selectedCategories.includes(p.category));
    }

    if (selectedColors.length) {
      filtered = filtered.filter((p) => p.colors.some((color) => selectedColors.includes(color)));
    }

    setFilteredProducts(filtered);
  }, [selectedCategories, selectedColors, products]);

  return (
    <div className="grid grid-cols-12 w-full max-w-[1500px] mx-auto mt-2">
      {/* Sidebar Filters */}
      <div className="sm:col-span-12 md:col-span-6 lg:col-span-2 p-4 border-r">
        <div className="sticky top-0">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Filter</h2>

          <FilterSection
            title="Category"
            isOpen={isCategoryOpen}
            toggleOpen={() => setIsCategoryOpen(!isCategoryOpen)}
            items={categories}
            selectedItems={selectedCategories}
            toggleSelection={(item) => toggleSelection(setSelectedCategories, item, selectedCategories)}
          />

          <FilterSection
            title="Colors"
            isOpen={isColorOpen}
            toggleOpen={() => setIsColorOpen(!isColorOpen)}
            items={colors}
            selectedItems={selectedColors}
            toggleSelection={(item) => toggleSelection(setSelectedColors, item, selectedColors)}
          />
        </div>
      </div>

      {/* Products Display */}
      <div className="sm:col-span-12 md:col-span-6 lg:col-span-10 p-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-8">Products</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-4 gap-4 sm:px-0 md:px-4">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div key={product._id} className="border shadow-sm text-center overflow-hidden">
                <Link href={`/products/${product._id}`}>
                  <div className="w-full overflow-hidden group">
                    <div className="relative w-full">
                      {product.images?.[2] && (
                        <Image
                          width={100}
                          height={100}
                          loading="lazy"
                          src={product.images[2]}
                          alt={product.name}
                          className="w-full object-cover aspect-[59/70] transition-opacity duration-500 opacity-100 group-hover:opacity-0"
                        />
                      )}
                      {product.hoverimage && (
                        <Image
                          width={100}
                          height={100}
                          loading="lazy"
                          src={product.hoverimage}
                          alt={product.name}
                          className="absolute top-0 left-0 w-full object-cover aspect-[59/70] transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                        />
                      )}
                    </div>
                  </div>
                  <div className="bg-[#efe7e2] py-2">
                    <span className="text-gray-900 font-semibold">{product.name}</span>
                    <br />
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
  );
};

export default Filters;
