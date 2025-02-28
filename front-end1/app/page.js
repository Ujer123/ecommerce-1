import { Carousel } from "flowbite-react";
import Home1 from "../public/images/home1.webp";
import Image from "next/image";
import HomeDenim from "@/components/HomeDenim";
import Testimonial from '@/components/Testimonial'

export default function Home() {
  const slides = [
    {
      id: 1,
      title: "Having all types of Jeans world of grocery",
      description: "Most Exclusive and demanding Jeans in the world...",
      discount: "-30% Off",
      offer: "Exclusive Offer",
      image: Home1,
      buttonText: "Shop Now →",
    },
    {
      id: 2,
      title: "Discover the Latest Trends in Grocery Fashion",
      description: "Get the best styles at the best prices...",
      discount: "-20% Off",
      offer: "Limited Offer",
      image: Home1,
      buttonText: "Explore Now →",
    },
  ];

  return (
    <>
     <Carousel slideInterval={3000} indicators={true} className="w-full my-5 h-[600px]">
  {slides.map((slide) => (
    <div key={slide.id} className="flex h-full justify-center items-center">
      <div className="grid grid-cols-1 lg:grid-cols-12 home-bg1 py-10 rounded-lg shadow-md items-center h-full w-full max-w-7xl mx-4">
        {/* Text Section */}
        <div className="lg:col-span-6 col-span-12 px-5 lg:pl-20">
          <div className="flex items-center space-x-2 mb-4">
            <span className="text-sm font-semibold text-gray-600">
              {slide.offer}
            </span>
            <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
              {slide.discount}
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight mb-4">
            {slide.title}
          </h1>
          <p className="text-gray-600 mb-6 text-sm md:text-base lg:text-lg">
            {slide.description}
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-transform transform hover:scale-105">
            {slide.buttonText}
          </button>
        </div>

        {/* Image Section */}
        <div className="lg:col-span-6 col-span-12 flex justify-center lg:justify-end p-4">
          <div className="relative w-full h-[400px] lg:h-[500px]">
            <Image
              src={slide.image}
              alt="Slider Image"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  ))}
</Carousel>
    <HomeDenim/>
    <Testimonial/>
    </>
  );
}
