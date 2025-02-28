import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { GoFileDirectoryFill } from "react-icons/go";
import Image from "next/image";
import Blog1 from "../../public/images/what-we-do1.jpg";
import BlogBanner from "../../public/images/blog-banner.webp";

const blogs = [
  {
    id: 1,
    title: "Premium Wholesale Denim Jeans for Women",
    author: "Ravi",
    date: "Jan 15, 2025",
    image: Blog1,
    description:
      "If you’re looking to stock high-quality denim jeans for women, Denim Vistara is the ultimate wholesale partner. Here’s why:",
    points: [
      "Artificial Intelligence is revolutionizing industries.",
      "Quantum Computing is the next frontier.",
      "Green Technology is paving the way for sustainable living.",
    ],
    category: "Boy Jeans",
  },
  {
    id: 2,
    title: "Healthy Living Tips",
    author: "Jane Smith",
    date: "Jan 10, 2025",
    image: Blog1,
    description: "Simple strategies for a healthier, happier lifestyle.",
    points: [
      "Daily exercise improves mental and physical health.",
      "Balanced diets enhance energy and immunity.",
      "Stress management is key to long-term wellness.",
    ],
    category: "Buy Jeans",
  },
  {
    id: 3,
    title: "Mastering JavaScript",
    author: "Chris Lee",
    date: "Jan 5, 2025",
    image: Blog1,
    description: "Essential techniques to become a JavaScript pro.",
    points: [
      "Understand closures and asynchronous programming.",
      "Leverage ES6+ features for cleaner code.",
      "Explore popular frameworks like React and Vue.",
    ],
    category: "Clothing Exporter",
  },
];

const Blog = () => {
  return (
    <section className="w-full">
      {/* Banner */}
      <div className="w-full">
        <Image src={BlogBanner} alt="Blog Banner" width={1920} height={500} className="w-full h-[20em] lg:h-[32em] object-cover" />
      </div>

      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-6 lg:px-20">
          {/* Title */}
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold text-gray-900 capitalize">
              Our <span className="text-[#27497b] font-bold">Recent Blog</span>
            </h1>
            <div className="border-b-2 border-black w-24 mx-auto mt-4"></div>
          </div>

          {/* Blog Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Blog Posts */}
            <div className="col-span-8 p-8 border bg-white shadow-lg">
              {blogs.map((blog) => (
                <div key={blog.id} className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-800 hover:text-[#27497b] cursor-pointer mb-2">
                    {blog.title}
                  </h2>
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <p>{blog.date}</p>
                    <span className="mx-2">•</span>
                    <p>{blog.author}</p>
                  </div>
                  <Image src={blog.image} alt={blog.title} width={1000} height={500} className="w-full h-auto object-cover mb-4" />
                  <p className="text-gray-700 mb-4">{blog.description}</p>
                  <ul className="list-disc pl-5 text-gray-600">
                    {blog.points.map((point, index) => (
                      <li key={index} className="mb-2">{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Sidebar */}
            <div className="col-span-4 p-8 border bg-white shadow-lg h-fit">
              {/* Social Media */}
              <div className="mb-10">
                <h2 className="uppercase font-semibold text-gray-700 mb-4">We are Socialize</h2>
                <div className="flex space-x-4 text-blue-500">
                  <FaFacebook size={24} className="cursor-pointer" />
                  <FaTwitter size={24} className="cursor-pointer" />
                  <FaInstagram size={24} className="cursor-pointer" />
                  <FaLinkedin size={24} className="cursor-pointer" />
                </div>
              </div>

              {/* Categories */}
              <div>
                <h2 className="uppercase font-semibold text-gray-700 mb-4">Recent Posts</h2>
                <ul className="space-y-3">
                  {Array.from(new Set(blogs.map((blog) => blog.category))).map((category, index) => (
                    <li key={index} className="flex items-center text-gray-600 hover:text-[#27497b] cursor-pointer">
                      <GoFileDirectoryFill className="mr-2" /> {category}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
