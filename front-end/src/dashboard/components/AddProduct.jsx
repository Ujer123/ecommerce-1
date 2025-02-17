import { useState } from 'react';

export default function UploadProduct() {
  const [formData, setFormData] = useState({
    category: "",
    name: "",
    moq: "",
    fabricType: "",
    material: "",
    application: "",
    colors: "",
    gender: "",
    season: "",
    feature: "",
    pattern: "",
    occasion: "",
    uploadCategory: "",
    images: [],
    hoverimage: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setFormData((prev) => ({ ...prev, images: files }));
  };

  const handleHoverImageChange = (e) => {
    setFormData((prev) => ({ ...prev, hoverimage: e.target.files[0] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    
      <div className="max-w-full mx-auto p-8 rounded-2xl shadow-2xl bg-white">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
          Add Product Details
        </h1>
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-6">
          {/* Product Category */}
          <div className="flex flex-col">
            <label className="text-base font-medium text-gray-700">
              Select Category
            </label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-300"
            >
              <option value="">Select Category</option>
              <option value="funkyJeans">Funky Jeans</option>
              <option value="shortsJeans">Shorts Jeans</option>
              <option value="trousersChinos">Trousers & Chinos</option>
              <option value="trackPants">Track Pants & Joggers</option>
            </select>
          </div>

          {/* Product Name */}
          <div className="flex flex-col">
            <label className="text-base font-medium text-gray-700">
              Product Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter Product Name"
              className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-300"
            />
          </div>

          {/* Minimum Quantity Order */}
          <div className="flex flex-col">
            <label className="text-base font-medium text-gray-700">
              Minimum Quantity Order
            </label>
            <select
              name="moq"
              value={formData.moq}
              onChange={handleChange}
              className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-300"
            >
              <option value="">Select MOQ</option>
              <option value="50">50 Piece (MOQ)</option>
              <option value="100">100 Piece (MOQ)</option>
              <option value="150">150 Piece (MOQ)</option>
              <option value="200">200 Piece (MOQ)</option>
              <option value="250">250 Piece (MOQ)</option>
              <option value="300">300 Piece (MOQ)</option>
            </select>
          </div>

          {/* Fabric Type */}
          <div className="flex flex-col">
            <label className="text-base font-medium text-gray-700">
              Fabric Type
            </label>
            <select
              name="fabricType"
              value={formData.fabricType}
              onChange={handleChange}
              className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-300"
            >
              <option value="">Select Fabric Type</option>
              <option value="menCasual">Men Casual Jeans</option>
              <option value="kidsCasual">Kids Casual Jeans</option>
              <option value="menFashion">Men Fashion Jeans</option>
            </select>
          </div>

          {/* Material */}
          <div className="flex flex-col">
            <label className="text-base font-medium text-gray-700">
              Material
            </label>
            <select
              name="material"
              value={formData.material}
              onChange={handleChange}
              className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-300"
            >
              <option value="">Select Material</option>
              <option value="denimCotton">Denim Cotton</option>
              <option value="cottonBlend">Cotton Blend</option>
              <option value="cottonDenim">Cotton Denim</option>
              <option value="stretchableDenim">Stretchable Denim</option>
            </select>
          </div>

          {/* Application */}
          <div className="flex flex-col">
            <label className="text-base font-medium text-gray-700">
              Application
            </label>
            <select
              name="application"
              value={formData.application}
              onChange={handleChange}
              className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-300"
            >
              <option value="">Select Application</option>
              <option value="fashion">Casual, Fashion, Multi Use</option>
              <option value="party">Casual, Party, Multi Use</option>
              <option value="sports">Casual, Sports, Multi Use</option>
              <option value="clubwear">Casual, Clubwear, Multi Use</option>
            </select>
          </div>

          {/* Colors */}
          <div className="flex flex-col">
            <label className="text-base font-medium text-gray-700">
              Colors
            </label>
            <input
              type="text"
              name="colors"
              value={formData.colors}
              onChange={handleChange}
              placeholder="Enter Colors"
              className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-300"
            />
          </div>

          {/* Gender */}
          <div className="flex flex-col">
            <label className="text-base font-medium text-gray-700">
              Gender
            </label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-300"
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>

          {/* Season */}
          <div className="flex flex-col">
            <label className="text-base font-medium text-gray-700">
              Season
            </label>
            <select
              name="season"
              value={formData.season}
              onChange={handleChange}
              className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-300"
            >
              <option value="">Select Season</option>
              <option value="summer">Summer</option>
              <option value="fall">Fall</option>
              <option value="spring">Spring</option>
              <option value="winter">Winter</option>
            </select>
          </div>

          {/* Feature */}
          <div className="flex flex-col">
            <label className="text-base font-medium text-gray-700">
              Feature
            </label>
            <select
              name="feature"
              value={formData.feature}
              onChange={handleChange}
              className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-300"
            >
              <option value="">Select Feature</option>
              <option value="comfortableBreathable">
                Comfortable, Breathable, Stretchable
              </option>
              <option value="trendyComfortable">
                Trendy, Comfortable, Stylish
              </option>
              <option value="multiplePockets">
                Multiple Pockets, Durable, Comfortable
              </option>
              <option value="softWashable">
                Soft, Easily Washable, Breathable
              </option>
            </select>
          </div>

          {/* Pattern */}
          <div className="flex flex-col">
            <label className="text-base font-medium text-gray-700">
              Pattern
            </label>
            <input
              type="text"
              name="pattern"
              value={formData.pattern}
              onChange={handleChange}
              placeholder="Enter Pattern"
              className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-300"
            />
          </div>

          {/* Occasion */}
          <div className="flex flex-col">
            <label className="text-base font-medium text-gray-700">
              Occasion
            </label>
            <input
              type="text"
              name="occasion"
              value={formData.occasion}
              onChange={handleChange}
              placeholder="Enter Occasion"
              className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-300"
            />
          </div>

          {/* Upload Images */}
          <label className="col-span-2 font-semibold">
            Upload Images:
            <input
              type="file"
              multiple
              accept="image/*"
              onChange={handleImageChange}
              className="mt-2 p-3 border rounded-xl w-full"
            />
          </label>

          {/* Upload Hover Image */}
          <label className="col-span-2 font-semibold">
            Upload Hover Image:
            <input
              type="file"
              accept="image/*"
              onChange={handleHoverImageChange}
              className="mt-2 p-3 border rounded-xl w-full"
            />
          </label>

          {/* Category to Upload */}
          <div className="flex flex-col">
            <label className="text-base font-medium text-gray-700">
              Category to Upload
            </label>
            <select
              name="uploadCategory"
              value={formData.uploadCategory}
              onChange={handleChange}
              className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-300"
            >
              <option value="">Select Upload Category</option>
              <option value="recent">Recently Product</option>
              <option value="popular">Popular Product</option>
              <option value="top">Top Products</option>
            </select>
          </div>

          <button
            type="submit"
            className="col-span-2 py-3 mt-4 rounded-xl bg-blue-500 text-white font-semibold hover:bg-blue-600 transition-all"
          >
            Submit Product
          </button>
        </form>
      </div>
 
  );
}
