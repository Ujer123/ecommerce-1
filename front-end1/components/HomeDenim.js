import Link from "next/link";
import MenImg1 from ".././public/products/p1.1.webp";
import KidsImg1 from ".././public/products/p2.1.webp";
import WomenImg1 from ".././public/products/p3.1.webp";
import woImg1 from ".././public/products/p4.1.webp";
import Img11 from ".././public/images/what-we-do1.jpg";
import Img12 from ".././public/images/what-we-do2.jpg";
import Img13 from ".././public/images/what-we-do3.jpg";
// import ClientReview from './ClientReview';
import Image from "next/image";

const HomeDenim = () => {

  const items = [
    {
      id: 1,
      title: "Jeans Manufacturing",
      description: "We are a reputed jeans manufacturer in India for quality jeans manufacturing.",
      image: Img11,
    },
    {
      id: 2,
      title: "Jeans Wholesale",
      description: "We are the largest wholesaler in India with maximum coverage across India and worldwide.",
      image: Img12,
    },
    {
      id: 3,
      title: "Jeans Exports",
      description: "We export our jeans worldwide with our quality-driven services and manufacturing.",
      image: Img13,
    },
  ];
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    {/* Top Products Section */}
    <section className="py-8 md:py-12">
      <div className="max-w-4xl mx-auto text-center mb-8 md:mb-12">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
          Our <span className="text-[#27497b]">Top Products</span>
        </h1>
        <div className="border-b-2 border-black w-32 mx-auto" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {[MenImg1, WomenImg1, KidsImg1, woImg1].map((img, idx) => (
          <div key={idx} className="group relative">
            <div className="aspect-square overflow-hidden rounded-lg bg-gray-200">
              <Image
                src={img}
                alt="Product"
                className="w-full h-full object-cover group-hover:opacity-75 transition-opacity"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
            </div>
            <div className="grid justify-center">
            <h3 className="mt-4 text-lg font-semibold text-gray-900">
              {['Track Pants & Joggers', 'Trousers & Chinos', 'Shorts Jeans', 'Funky Jeans'][idx]}
            </h3>
            <Link href="/" className="mt-2 inline-block bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors">
              Get More →
            </Link>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* About Section */}
    <section className="bg-gray-100 py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <div className="mb-6">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                About <span className="text-[#27497b]">D-Gold Denim Jeans India</span>
              </h2>
              <div className="border-b-2 border-black w-32 mt-4" />
            </div>
            <p className="text-gray-700 text-base leading-relaxed mb-6">
              <strong>D-Gold Clothing Company</strong>, with its establishment in the <strong>year 2005</strong>,
              is earning huge accolades in the market for dealing in Fashion Jeans. With diligent efforts
              of <strong>Founder, Mr. Rashid Malik </strong>, the company is excellently
              catered to the needs of Fashion Jeans Lovers. The array includes Designer jeans in various fits
              like Skinny Jeans, Bootcut Jeans, Slim Jeans, Stretch Jeans, Straight Jeans, High Waisted Jeans,
              Ripped Jeans, Low Rise Jeans, and many more.
            </p>
            <p className="text-gray-700 text-base leading-relaxed mb-6">
              <strong>Infrastructure:</strong> Our state-of-the-art infrastructure is one of the vital
              elements of our staggering success. The production unit in Delhi, Quality control unit,
              packaging unit, warehousing facility, strong network, etc., all comprise our robust
              infrastructure. This has helped in quality and quantity production of the Denim Jeans that
              are a perfect match to the international standards.
            </p>
            <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">
              More About Us →
            </button>
          </div>

          <div className="lg:col-span-5 relative">
            {/* White Border */}
            <div className="absolute rotate-[-10deg] top-0 left-0 right-0 bottom-0 border-[8px] border-white rounded-lg pointer-events-none z-0"></div>

            {/* Image */}
            <div className="relative w-full h-full z-10">
            <Image
                  src={MenImg1}
                  alt="About us"
                  className="w-full h-full object-cover relative z-0 transform rotate-1"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* What We Do Section */}
    <section className="py-12 md:py-16">
      <div className="max-w-4xl mx-auto text-center mb-8 md:mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
          What <span className="text-[#27497b]">We Do?</span>
        </h2>
        <div className="border-b-2 border-black w-32 mx-auto mt-4" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {items.map((item) => (
          <div key={item.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="aspect-video relative">
              <Image
                src={item.image}
                alt={item.title}
                className="object-cover"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* CTA Section */}
    <section className="bg-gray-800 py-16 explore-every-part bg-cover bg-center md:py-36 my-12 rounded-xl overflow-hidden">
      <div className="col-span-12 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid justify-end md:text-start text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-6 text-[#27497b]">
            Explore Every Part of This Product
          </h2>
          <p className="max-w-2xl mx-auto text-gray-700 mb-8">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci ratione incidunt at recusandae nostrum nisi error voluptate, sunt! Explicabo qui natus voluptate earum voluptatum amet nihil placeat dolorem est quibusdam.
          </p>
          <div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-colors">
            Get Started →
          </button>
          </div>
        </div>
      </div>
    </section>

    {/* Popular Products Section (same as Top Products) */}
    {/* Add ClientReview component here */}
  </div>
);
};

export default HomeDenim