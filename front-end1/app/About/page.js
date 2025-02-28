import AboutBanner from "../../public/images/aboutbanner.jpg";
import Img11 from "../../public/images/what-we-do1.jpg";
import Img12 from "../../public/images/what-we-do2.jpg";
import Img13 from "../../public/images/what-we-do3.jpg";
import { SiWikimediafoundation } from "react-icons/si";
import { MdSupportAgent } from "react-icons/md";
import { GrUserExpert } from "react-icons/gr";
import { LiaCertificateSolid } from "react-icons/lia";
import Logo1 from "../../public/images/footerlogo.png";
import Link from "next/link";
import Image from "next/image";
import Testimonial from "@/components/Testimonial";

const FeatureCard = ({ icon, title, description, gradient }) => (
    <div className="relative group">
      {gradient && (
        <div className="absolute inset-0 bg-gradient-to-r opacity-30 blur-xl transition-opacity group-hover:opacity-40" />
      )}
      
      <div className="relative h-full p-8 bg-white rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
        <div className="flex items-center justify-center w-12 h-12 mb-6 text-white bg-blue-500 rounded-lg">
          {icon}
        </div>
        <h3 className="mb-4 text-2xl font-bold text-gray-900">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
  const ServiceCard = ({ title, description, borderColor, bgColor }) => (
      <div className="relative h-full">
        <span
          className={`absolute top-0 left-0 w-full h-full mt-1 ml-1 ${bgColor} rounded-lg`}
        ></span>
        <div
          className={`relative h-full p-5 bg-white border-2 ${borderColor} rounded-lg`}
        >
          <h3 className="my-2 text-lg font-bold text-gray-800">{title}</h3>
          <p className={`mt-3 mb-1 text-xs font-medium ${borderColor} uppercase`}>
            ------------
          </p>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    );

const AboutUs = () => {

    const services = [
        {
          title: "Branded Jeans",
          description:
            "Branded jeans are high-quality denim products crafted with premium materials, combining stylish designs and exceptional durability for a superior fit and comfort.",
          borderColor: "border-indigo-500",
          bgColor: "bg-indigo-500",
        },
        {
          title: "Branded Shirts",
          description:
            "Shirts are versatile garments designed for comfort and style, available in various fabrics, patterns, and fits to suit every occasion and preference.",
          borderColor: "border-purple-500",
          bgColor: "bg-purple-500",
        },
        {
          title: "Denim Jackets",
          description:
            "Denim jackets are timeless outerwear pieces made from durable denim fabric, offering a perfect blend of style, comfort, and practicality for all seasons.",
          borderColor: "border-blue-400",
          bgColor: "bg-blue-400",
        },
        {
          title: "Ladies Jeans",
          description:
            "Ladies jeans are stylish and comfortable denim wear, designed in various cuts and fits to flatter every body type and suit diverse fashion preferences.",
          borderColor: "border-yellow-400",
          bgColor: "bg-yellow-400",
        },
        {
          title: "Shorts & Skirts",
          description:
            "Shorts and skirts are trendy and comfortable wardrobe staples, available in various styles and fabrics to suit casual and chic looks.",
          borderColor: "border-green-500",
          bgColor: "bg-green-500",
        },
      ];

  return (
    <>
      <section className="relative h-96 w-full">
        <Image
          src={AboutBanner}
          alt="About Banner"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center">
            About D-Gold Denim
          </h1>
        </div>
      </section>

      {/* ABOUT Section */}
      <section className="w-full lg:h-screen h-full m-auto flex items-center justify-cetner py-20 bg-gray-50 dark:bg-gray-900">
        <div className="w-full h-full flex flex-col justify-center items-center sm:px-4 px-2">
          {/*  */}
          <div className="lg:w-[90%] w-full mx-auto flex flex-col lg:gap-6 lg:flex-row items-center justify-center ">
            <div className="relative">
              {/* Side Img 1 */}
              <Image
                width={100}
                height={100}
                className="absolute z-20 lg:left-[2rem] -top-4 left-[1rem] lg:w-[8rem] lg:h-[8rem] sm:w-[6rem] sm:h-[6rem] w-[3rem] h-[3rem] rounded-full"
                src={Img11}
                alt="Side Image"
              />
              {/* Side Img 2 */}
              <Image
                width={100}
                height={100}
                className="absolute z-20 lg:top-[12rem] sm:top-[11rem] top-[5rem] sm:-left-[3rem] -left-[2rem] lg:w-[8rem] lg:h-[8rem] sm:w-[6rem] sm:h-[6rem] w-[3rem] h-[3rem] rounded-full"
                src={Img12}
                alt="Side Image 2"
              />
              {/* Side Img 3 */}
              <Image
                width={100}
                height={100}
                className="absolute z-20 lg:top-[23rem] sm:top-[20.5rem] top-[10.5rem] left-[2rem] lg:w-[8rem] lg:h-[8rem] sm:w-[6rem] sm:h-[6rem] w-[3rem] h-[3rem] rounded-full"
                src={Img13}
                alt="Side Image 3"
              />
              {/* Main Img */}
              <Image
                width={100}
                height={100}
                className="rounded-full relative object-cover right-0 lg:w-[30rem] lg:h-[30rem] sm:w-[25rem] sm:h-[25rem] w-[12rem] h-[12rem] outline sm:outline-offset-[.77em] outline-offset-[.37em] outline-green-500"
                src={AboutBanner}
                alt="About us"
              />
            </div>
            {/*  */}
            <div className="lg:w-[60%] p-4 w-full h-full shadow-xl shadow-green-300/40 flex flex-col justify-center items-center sm:px-6 px-4 rounded-xl">
              <div className="w-fit mx-auto">
                <h2 className="text-3xl text-center text-gray-900 capitalize">
                  About<span className="text-[#27497b] font-bold"> us</span>
                </h2>
                <div className="border-b-2 border-black w-[80%] mx-auto mt-4"></div>
              </div>
              <p className="md:text-3xl text-2xl text-center text-gray-800 dark:text-gray-200 font-bold my-5">
                We are D-G Gold Denim Jeans
              </p>
               <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                D-G Gold Denim Jeans Pvt. Ltd. is a leading manufacturer of
                Jeans which has grown its business in Jeans Wholesale and Jeans
                Export to retail sale of Jeans. The Company was founded under
                the registered trademark D-G GOLD which produces its apparel
                collection for Men, Women & Kids. We entered into Jeans
                manufacturing and Jeans wholesale market in the year 2018, and
                during this span of time we have achieved lots of success in
                making a reputed brand image in the market. Our superior quality
                work process has rapidly made us authentic and in demand of all
                range of consumers. Within such hilarious past D-G Gold Denim
                Jeans has succeeded in bringing the new fashion in the market.
              </p>
              {/* button */}
              <button className="lg:mt-10 mt-6 lg:px-6 px-4 lg:py-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-md lg:text-xl text-lg text-white">
                Read More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Founder Section */}
      <section className="relative overflow-hidden bg-gray-900 space-y-24">
        <div className="relative lg:py-0 py-10">
          <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 ">
            <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 ">
              <div>
                <div>
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500">
                    <SiWikimediafoundation className="text-white text-2xl" />
                  </span>
                </div>
                <div className="w-fit mt-6">
                  <h1 className="text-3xl text-white capitalize">
                    Founder And CEO Of{" "}
                    <span className="text-[#3385ff] font-bold">
                      D-Gold Denim Jeans
                    </span>
                  </h1>
                  <div className="border-b-2 border-white w-[80%] mt-4"></div>
                  <p className="mt-4 text-lg text-gray-300 text-justify">
                    At the heart of &quot;D-G Gold Denim Jeans&quot; is RC
                    Creation, a visionary entrepreneur with a passion for
                    high-quality denim. With years of experience in the fashion
                    and wholesale industry, RC Creation has built a brand
                    synonymous with style, comfort, and durability. Driven by
                    innovation and customer satisfaction, RC Creation ensures
                    every piece of denim reflects exceptional craftsmanship.
                    Under their leadership, &quot;D-G Gold Denim Jeans&quot;
                    continues to set new standards in the wholesale jeans
                    market, offering trendsetting designs that cater to diverse
                    tastes. Join us on our journey as we redefine denim for the
                    modern world.
                  </p>
                  <div className="mt-6">
                    <Link
                      href={"/"}
                      className="inline-flex rounded-md bg-blue-600 px-4 py-2 text-base leading-7 text-white shadow-sm ring-1 ring-white hover:bg-blue-700 hover:ring-blue-700"
                      to={"https://bonehornmart.com/"}
                      target="_blank"
                    >
                      View RC Creation
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 sm:mt-16 lg:mt-0 flex items-center justify-center">
              <div className="pl-6 lg:pl-0 lg:relative lg:h-auto">
                <Image
                  width={100}
                  height={100}
                  loading="lazy"
                  className="w-full max-w-md rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 lg:max-h-[80vh] lg:w-auto lg:max-w-none sm:mb-4 bg-white"
                  src={Logo1}
                  alt="Rc Creation Logo"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="relative flex flex-col justify-between h-full max-w-6xl px-10 mx-auto xl:px-0 mt-5">
      <div className="w-fit mx-auto">
        <h2 className="text-3xl md:text-4xl text-center font-bold text-gray-900">
          Our <span className="text-[#27497b] font-bold">Services</span>
        </h2>
        <div className="border-b-2 border-black w-[80%] mx-auto my-4"></div>
      </div>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
        Here are a few of the awesome services we provide.
      </p>

      <div className="w-full grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        {services.slice(0, 2).map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>

      <div className="w-full grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-16">
        {services.slice(2).map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-900 text-gray-100 lg:py-24">
  <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
    {/* Section Header */}
    <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20">
      <h2 className="text-3xl font-bold text-white md:text-4xl">
        Why <span className="text-blue-400">Choose Us?</span>
      </h2>
      <div className="w-24 h-1 mx-auto mt-6 bg-blue-500 rounded-full" />
      <p className="mt-8 text-lg leading-relaxed text-gray-300 md:text-xl">
        Our jeans combine exclusive designs with unmatched comfort, making them perfect for 
        every occasion - from formal events to casual daily wear. Discover the difference 
        of quality craftsmanship.
      </p>
    </div>

    {/* Features Grid */}
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      <FeatureCard
        icon={<MdSupportAgent className="w-8 h-8" />}
        title="Dedicated Support Team"
        description="24/7 customer service and expert guidance for all your denim needs."
        gradient="from-yellow-400 via-pink-500 to-green-600"
      />
      
      <FeatureCard
        icon={<GrUserExpert className="w-8 h-8" />}
        title="Decades of Expertise"
        description="Over 20 years perfecting the art of premium denim manufacturing."
      />
      
      <FeatureCard
        icon={<LiaCertificateSolid className="w-8 h-8" />}
        title="Certified Quality"
        description="ISO 9001:2015 certified processes ensuring exceptional standards."
        gradient="from-yellow-400 via-pink-500 to-green-600"
      />
    </div>
  </div>
</section>

      {/* Testomonials Section */}
      <Testimonial />
    </>
  );
};

export default AboutUs;
