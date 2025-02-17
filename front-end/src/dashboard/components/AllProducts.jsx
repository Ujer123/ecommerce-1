// import React, { useState } from 'react';
// import { FaTrash } from 'react-icons/fa';
// import Img1 from "../../assets/products/p1.6.webp"

// const AllProducts = () => {
//   const [products, setProducts] = useState([
//     {
//       id: 1,
//       name: 'Funky Jeans',
//       category: 'Funky Jeans',
//       color: 'Blue',
//       gender: 'Male',
//       image: Img1,
//     },
//     {
//       id: 2,
//       name: 'Shorts Jeans',
//       category: 'Shorts Jeans',
//       color: 'Red',
//       gender: 'Female',
//       image: Img1,
//     },
//     {
//       id: 3,
//       name: 'Trousers & Chinos',
//       category: 'Trousers & Chinos',
//       color: 'Black',
//       gender: 'Male',
//       image: Img1,
//     },
//     {
//       id: 4,
//       name: 'Track Pants & Joggers',
//       category: 'Track Pants & Joggers',
//       color: 'Grey',
//       gender: 'Female',
//       image: Img1,
//     },
//   ]);

//   const handleDelete = (id) => {
//     setProducts(products.filter((product) => product.id !== id));
//   };

//   return (
    
//       <div className="bg-white shadow rounded-2xl">
//       <h1 className="text-4xl font-bold text-center mb-8 text-gray-800 pt-6">
//           All Product Details
//         </h1>
//        <div>
//          {/* Header Row */}
//          <div className="flex items-center p-2 border-b font-semibold text-lg text-gray-700">
//           <div className="w-20">Image</div>
//           <div className="flex-1">Product Name</div>
//           <div className="flex-1">Category</div>
//           <div className="flex-1">Color</div>
//           <div className="flex-1">Gender</div>
//           <div className="w-16 text-center">Action</div>
//         </div>

//         {/* Product Rows */}
//         {products.map((product) => (
//           <div
//             key={product.id}
//             className="flex items-center p-1 border-b text-base text-gray-600"
//           >
//             <div className="w-20">
//               <img
//                 src={product.image}
//                 alt={product.name}
//                 className="h-14 w-14 object-cover rounded"
//               />
//             </div>
//             <div className="flex-1">{product.name}</div>
//             <div className="flex-1">{product.category}</div>
//             <div className="flex-1">{product.color}</div>
//             <div className="flex-1">{product.gender}</div>
//             <div className="w-16 text-center">
//               <button
//                 onClick={() => handleDelete(product.id)}
//                 className="text-red-500 hover:text-red-700"
//                 title="Delete Product"
//               >
//                 <FaTrash size={16} />
//               </button>
//             </div>
//           </div>
//         ))}
//        </div>
//       </div>

//   );
// };

// export default AllProducts;


import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteProduct } from '../../redux/slices/productSlice';
import { FaTrash } from 'react-icons/fa';

const AllProducts = () => {
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();

  return (
    <div className="bg-white shadow rounded-2xl">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800 pt-6">
        All Product Details
      </h1>
      <div>
        <div className="flex items-center p-2 border-b font-semibold text-lg text-gray-700">
          <div className="w-20">Image</div>
          <div className="flex-1">Product Name</div>
          <div className="flex-1">Category</div>
          <div className="flex-1">Color</div>
          <div className="flex-1">Gender</div>
          <div className="w-16 text-center">Action</div>
        </div>

        {products.map((product) => (
          <div key={product.id} className="flex items-center p-1 border-b text-base text-gray-600">
            <div className="w-20">
              <img src={product.image} alt={product.name} className="h-14 w-14 object-cover rounded" />
            </div>
            <div className="flex-1">{product.name}</div>
            <div className="flex-1">{product.category}</div>
            <div className="flex-1">{product.colors}</div>
            <div className="flex-1">{product.gender}</div>
            <div className="w-16 text-center">
              <button onClick={() => dispatch(deleteProduct(product.id))} className="text-red-500 hover:text-red-700">
                <FaTrash size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;

