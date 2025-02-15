import React from 'react'
import { IoStarSharp } from "react-icons/io5";

const ClientReview = () => {
  return (
    <>
      {/* Testomonials Section */}

      <section className="py-12 bg-gray-50 sm:py-16 lg:py-20">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex flex-col items-center">
            <div className="w-fit mx-auto">
              <h1 className="text-3xl text-center text-gray-900 capitalize">
                Our happy clients <span className="text-[#27497b] font-bold">say about us</span>
              </h1>
              <div className="border-b-2 border-black w-[80%] mx-auto mt-4"></div>
            </div>
            <div className="relative mt-10 md:mt-24 md:order-2">
              <div className="absolute -inset-x-1 inset-y-16 md:-inset-x-2 md:-inset-y-6">
                <div className="w-full h-full max-w-5xl mx-auto rounded-3xl opacity-30 blur-lg filter" style={{ background: 'linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)' }} />
              </div>
              <div className="relative grid max-w-lg grid-cols-1 gap-6 mx-auto md:max-w-none lg:gap-10 md:grid-cols-3">
                <div className="flex flex-col overflow-hidden shadow-xl">
                  <div className="flex flex-col justify-between flex-1 p-6 bg-white lg:py-8 lg:px-7">
                    <div className="flex-1">
                      <div className="flex items-center">
                        <IoStarSharp className='text-yellow-500 text-xl' />
                        <IoStarSharp className='text-yellow-500 text-xl ml-1' />
                        <IoStarSharp className='text-yellow-500 text-xl ml-1' />
                        <IoStarSharp className='text-yellow-500 text-xl ml-1' />
                        <IoStarSharp className='text-yellow-500 text-xl ml-1' />
                      </div>
                      <blockquote className="flex-1 mt-8">
                        <p className="text-lg leading-relaxed text-gray-900 font-pj">“You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change.”</p>
                      </blockquote>
                    </div>
                    <div className="flex items-center mt-8">
                      <img className="flex-shrink-0 object-cover rounded-full w-11 h-11" src="https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-1.png" alt />
                      <div className="ml-4">
                        <p className="text-base font-bold text-gray-900 font-pj">Leslie Alexander</p>
                        <p className="mt-0.5 text-sm font-pj text-gray-600">Freelance React Developer</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col overflow-hidden shadow-xl">
                  <div className="flex flex-col justify-between flex-1 p-6 bg-white lg:py-8 lg:px-7">
                    <div className="flex-1">
                      <div className="flex items-center">
                        <IoStarSharp className='text-yellow-500 text-xl' />
                        <IoStarSharp className='text-yellow-500 text-xl ml-1' />
                        <IoStarSharp className='text-yellow-500 text-xl ml-1' />
                        <IoStarSharp className='text-yellow-500 text-xl ml-1' />
                        <IoStarSharp className='text-yellow-500 text-xl ml-1' />
                      </div>
                      <blockquote className="flex-1 mt-8">
                        <p className="text-lg leading-relaxed text-gray-900 font-pj">“Simply the best. Better than all the rest. I’d recommend this product to beginners and advanced users.”</p>
                      </blockquote>
                    </div>
                    <div className="flex items-center mt-8">
                      <img className="flex-shrink-0 object-cover rounded-full w-11 h-11" src="https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-2.png" alt />
                      <div className="ml-4">
                        <p className="text-base font-bold text-gray-900 font-pj">Jacob Jones</p>
                        <p className="mt-0.5 text-sm font-pj text-gray-600">Digital Marketer</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col overflow-hidden shadow-xl">
                  <div className="flex flex-col justify-between flex-1 p-6 bg-white lg:py-8 lg:px-7">
                    <div className="flex-1">
                      <div className="flex items-center">
                        <IoStarSharp className='text-yellow-500 text-xl' />
                        <IoStarSharp className='text-yellow-500 text-xl ml-1' />
                        <IoStarSharp className='text-yellow-500 text-xl ml-1' />
                        <IoStarSharp className='text-yellow-500 text-xl ml-1' />
                        <IoStarSharp className='text-yellow-500 text-xl ml-1' />
                      </div>
                      <blockquote className="flex-1 mt-8">
                        <p className="text-lg leading-relaxed text-gray-900 font-pj">“I cannot believe that I have got a brand new landing page after getting Omega. It was super easy to edit and publish.”</p>
                      </blockquote>
                    </div>
                    <div className="flex items-center mt-8">
                      <img className="flex-shrink-0 object-cover rounded-full w-11 h-11" src="https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-female.png" alt />
                      <div className="ml-4">
                        <p className="text-base font-bold text-gray-900 font-pj">Jenny Wilson</p>
                        <p className="mt-0.5 text-sm font-pj text-gray-600">Graphic Designer</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </>
  )
}

export default ClientReview