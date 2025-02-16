import React, { useState, useEffect, useRef } from "react";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";

import Profile from "./components/Profile";

import DashboardImg from "../assets/images/4.png";
import { FaBars, FaTimes } from "react-icons/fa";
import UploadProduct from "./components/UploadProduct";

const Index = () => {
  const [activePage, setActivePage] = useState("dashboard");
  const [userRole, setUserRole] = useState("execution");
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);

  const userDetails = {
    name: "rj surya",
    email: "Manufacturer",
    image: DashboardImg,
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const renderPage = () => {
    switch (activePage) {
      case "dashboard":
        return <Dashboard />;
      case "uploadproduct":
        return <UploadProduct />;
      case "profile":
        return <Profile />;

      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex overflow-x-auto">
      {/* Sidebar */}
      <div ref={sidebarRef}>
        <Sidebar setActivePage={setActivePage} isOpen={isOpen} toggleSidebar={toggleSidebar} />
      </div>

      {/* Main Content */}
      <div className="flex-grow p-6 bg-gray-900">
        {/* Top Bar */}
        <div className="bg-gray-800 text-white p-4 rounded-md flex justify-between items-center mb-6">
          {/* Sidebar Toggle Button (Visible on Small Screens) */}
          <button
            className="text-white text-2xl p-2 bg-gray-700 rounded-full focus:outline-none lg:hidden"
            onClick={toggleSidebar}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>

          {/* User Details */}
          <div>
            <div className="flex">
              <h2 className="text-2xl font-bold mr-2 mt-2">{userDetails.name}</h2>
              <img src={userDetails.image} alt="" className="h-[50px] rounded-full" />
            </div>
            <p className="text-sm">{userDetails.email}</p>
          </div>
        </div>

        {/* Page Content */}
        {renderPage()}
      </div>
    </div>
  );
};

export default Index;
