import Image from 'next/image';
import PartnerImg from '../../public/images/ourpartnerbanner.jpg';
import Img1 from '../../public/images/4.png';
import Img2 from '../../public/images/5.png';
import Img3 from '../../public/images/6.png';
import Img4 from '../../public/images/7.jpg';
import Img5 from '../../public/images/8.png';
import Img6 from '../../public/images/indiamart.jpg';
import Img7 from '../../public/images/logo2.png';

const partners = [
    { src: Img1, alt: "Partner 1" },
    { src: Img2, alt: "Partner 2" },
    { src: Img3, alt: "Partner 3" },
    { src: Img4, alt: "Partner 4" },
    { src: Img5, alt: "Partner 5" },
    { src: Img6, alt: "Partner 6" },
    { src: Img7, alt: "Partner 7" },
  ];
  
  const OurPartner = () => {
    return (
      <section className="w-full h-fit">
        {/* Banner Image */}
        <div className="w-full">
          <Image
            src={PartnerImg}
            alt="Our Partners"
            width={1920}
            height={400}
            className="w-full h-[25em] object-cover"
          />
        </div>
  
        {/* Title Section */}
        <div className="mt-10 text-center">
          <h1 className="text-3xl text-gray-900 font-bold">
            Our Online{" "}
            <span className="text-[#27497b] font-bold">Partners</span>
          </h1>
          <div className="border-b-2 border-black w-[15%] mx-auto mt-4"></div>
          <p className="max-w-3xl mx-auto mt-4 text-gray-600 text-lg">
            D-Gold Denim has its own brand image in the market which you can
            discover with our products loaded with varieties of designs to buy at
            popular online selling platforms. Here are some of our best-known
            online selling platforms.
          </p>
        </div>
  
        {/* Partner Logos */}
        <div className="container mx-auto my-10 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {partners.map((partner, index) => (
            <div key={index} className="flex justify-center">
              <Image
                src={partner.src}
                alt={partner.alt}
                width={120}
                height={120}
                className="w-24 h-24 object-contain"
              />
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default OurPartner;