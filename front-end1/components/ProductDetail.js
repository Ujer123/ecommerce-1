'use client'
import React, {useState, useEffect} from "react";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const ProductDetail = ({product}) => {
    if(!product){
        return <div>Product not found</div>
    }

  return (
    <div className="bg-white">
    <div className="w-[100%] mx-auto px-4 py-8">
      <div className="flex flex-wrap -mx-4">
        {/* Product Images */}
        <div className="w-full md:w-[40%] px-4 mb-8 relative flex gap-4">
          {/* Thumbnails */}
          <div className="flex flex-col items-center">
            <button
              className="text-4xl disabled:opacity-80"
            >
              <FaAngleUp />
            </button>

            {/* <div className="flex flex-col gap-2 justify-center items-center">
              {thumbnails
                .slice(startIndex, startIndex + visibleThumbnails)
                .map((thumbnail, index) => (
                  <Image
                  width={100}
                  height={100}
                    key={index + startIndex}
                    src={thumbnail}
                    loading="lazy"
                    alt={`Thumbnail ${index + startIndex + 1}`}
                    className="w-14 h-16 sm:w-16 sm:h-20 object-cover rounded-md cursor-pointer opacity-100 hover:opacity-100 transition duration-300"
                    // onMouseEnter={() => setMainImage(thumbnail)}
                  />
                ))}
            </div> */}

            <button
            //   onClick={nextThumbnails}
            //   disabled={startIndex + visibleThumbnails >= thumbnails.length}
              className="text-4xl disabled:opacity-80"
            >
              <FaAngleDown />
            </button>
          </div>

          {/* Main Image */}
          <div
            className="relative w-full h-full overflow-hidden shadow-lg bg-gray-100 flex justify-center items-center"
            // onMouseEnter={() => setIsHovering(true)}
            // onMouseLeave={() => setIsHovering(false)}
            // onMouseMove={handleMouseMove}
          >
            <Image
            width={100}
            height={100}
              src={product.images[0]}
              loading="lazy"
              alt="Product"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Product Details */}
        <div className="w-full md:w-[60%] px-6">
          <div className="p-6 bg-white rounded-2xl shadow-lg border border-gray-200">
            {/* Title & Description */}
            <h2 className="text-3xl font-semibold text-gray-900 mb-3">{product.name}</h2>
            <p className="text-gray-700 text-lg">{product.description}</p>

            {/* Quantity & Price Section */}
            <div className="flex items-center my-5 gap-4">
              <input
                type="number"
                placeholder="Enter Quantity"
                className="w-44 px-3 py-2 border border-gray-300 rounded-lg text-gray-700 focus:ring-2 focus:ring-blue-500 outline-none"
              />
              <p className="px-3 py-2 bg-gray-100 text-gray-800 rounded-lg border border-gray-300">
                In Piece
              </p>
              <button className="bg-blue-600 text-white px-5 py-2 rounded-lg text-lg font-medium shadow-md hover:bg-blue-700 transition-all">
                Get Best Price
              </button>
            </div>

            {/* Product Details Table */}
            <table className="w-full text-lg text-left text-gray-700">
              <tbody>
                <tr className="border-b">
                  <td className="py-3 font-semibold text-lg text-gray-800">Business Type :</td>
                  <td>{product.businessType}</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 font-semibold text-lg text-gray-800">Size :</td>
                  <td>
                    {/* <div className="flex flex-wrap gap-3 my-2">
                      {details.availableSizes.map((size) => (
                        <button
                          key={size}
                          type="button"
                          className="w-12 h-10 border border-gray-300 rounded-lg hover:border-blue-600 hover:bg-blue-50 text-gray-800 font-medium flex items-center justify-center transition-all"
                        >
                          {size}
                        </button>
                      ))}
                    </div> */}
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 font-semibold text-lg text-gray-800">Type :</td>
                  <td>{product.type}</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 font-semibold text-lg text-gray-800">Material :</td>
                  <td>{product.material}</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 font-semibold text-lg text-gray-800">Preferred Buyer From :</td>
                  <td>{product.preferredBuyer}</td>
                </tr>
              </tbody>
            </table>

            {/* More Details Link */}
            <Link href={"/"}  className="text-blue-500 text-lg font-medium hover:text-blue-700 transition-all">
              Click to view more Details
            </Link>

            {/* Action Buttons */}
            <div className="my-6 flex gap-4">
              <button className="bg-gray-100 px-5 py-3 text-lg font-medium rounded-lg text-gray-900 border border-gray-300 hover:bg-gray-200 transition-all">
                Request to Call
              </button>
              <button className="bg-blue-600 text-white text-lg px-5 py-3 rounded-lg font-medium shadow-md hover:bg-blue-700 transition-all">
                Send Enquiry
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* Zoomed Image */}
      {/* {isHovering && (
        <div className="fixed top-12 right-[-19em] w-[80%] h-[100%] overflow-hidden lg:block sm:hidden bg-white border border-gray-300 shadow-lg rounded-lg">
          <img
            src={mainImage}
            loading="lazy"
            alt="Zoomed"
            className="absolute"
            style={{
              width: "500%",
              height: "200%",
              transform: `translate(-${zoomPosition.x}%, -${zoomPosition.y}%)`,
            }}
          />
        </div>
      )} */}
    </div>
  </div>
  )
}

export default ProductDetail
