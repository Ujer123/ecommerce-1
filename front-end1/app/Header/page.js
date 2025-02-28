"use client"; // Ensures the component runs in the client environment

import React, { useState, } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/images/logo1.png"; // Store images in the public folder
import { FaPhone, FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";
import { IoLogoYoutube, IoMenu, IoClose } from "react-icons/io5";
import Writing from "@/components/Writing";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav>
        {/* Top Menu */}
        <div className="bg-black text-white text-center">
          <Writing/>
        </div>

        {/* Main Header */}
        <div className="w-[90%] mx-auto py-2">
          <div className="hidden lg:block">
            <div className="flex flex-col lg:flex-row justify-between items-center text-center gap-4">
              {/* Logo */}
              <div className="w-[60%] lg:w-[15%] flex justify-center">
                <Link href="/">
                  <Image src={Logo} alt="logo" width={150} height={50} className="rounded-md" />
                </Link>
              </div>

              {/* Phone Number */}
              <div className="flex items-center gap-2 text-xl middle-menu-phone">
                <FaPhone className="text-2xl" />
                <p>+91 9266-116358</p>
              </div>

              {/* Social Icons */}
              <div className="middle-menu-icon">
                <ul className="flex justify-center gap-4">
                  <li><FaLinkedinIn className="text-xl" /></li>
                  <li><FaFacebookF className="text-xl" /></li>
                  <li><SiInstagram className="text-xl" /></li>
                  <li><IoLogoYoutube className="text-xl" /></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="last-menu-main bg-[#01132D]">
          <div className="lg:hidden flex justify-between p-4">
            <div className="sm:block md:block lg:hidden">
              <Image src={Logo} alt="logo" width={100} height={40} className="rounded-sm" />
            </div>
            <button className="text-white text-3xl border-2 border-white p-1 h-fit" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <IoClose /> : <IoMenu />}
            </button>
          </div>

          {/* Navigation Menu */}
          <div className={`down-menu ${isMenuOpen ? "block" : "hidden"} lg:block transition-all duration-500`}>
            <ul className="flex flex-col lg:flex-row justify-center items-center gap-4 lg:gap-10 text-center list-none">
              {["/", "About", "Catalogue", "Partners", "Blog", "Contact"].map((item, index) => (
                <li key={index} className="text-white uppercase text-lg py-2 relative cursor-pointer">
                  <Link href={`/${item}`} onClick={() => setIsMenuOpen(false)}>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
