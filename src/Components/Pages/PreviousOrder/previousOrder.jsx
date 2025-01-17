import React, { useState } from "react";
import LeftSideNavbar from "../../Common/SideNavbar/leftSideNavbar.jsx";
import RightSidebar from "../../Common/SideNavbar/rightSideNavbar.jsx";

// import img
import Toggle from "../../Assets/Images/sidebarImg/toggle.png";
// import FoodCard from "../../Common/Test/menuItems.jsx";
const PreviousOrder = () => {
  const [isRightSidebarOpen, setIsRightSidebarOpen] = useState(false);

  const toggleRightSidebar = () => {
    setIsRightSidebarOpen(!isRightSidebarOpen);
  };

  return (
    <div className="flex h-screen">
      {/* Left Sidebar */}
      <LeftSideNavbar />

      {/* Main Content Area */}

      <div className={`flex-grow p-4 transition-all duration-300`}>
      <div>
        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 mb-4">
          <span className="mr-2">Book Table</span> &gt;{" "}
          <span className="ml-2">Generate Order</span>
        </div>
        <div className="text-sm text-gray-500 mb-4">
          <span className="mr-2">Book Table</span> &gt;{" "}
          <span className="ml-2">Generate Order</span>
        </div>
        

        {/* Order Header */}
        <div className="flex justify-between items-center mb-4">
          <span className="text-gray-800 font-medium text-lg">
            Order Number - #123
          </span>
          <button className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
            <span className="text-gray-500">🔔</span>
          </button>
        </div>
       
      </div>
        {/* Previous Order Cards */}
        <div className={`grid ${isRightSidebarOpen == true ? "grid-cols-2" : "grid-cols-3" } gap-1`}>
        {[1, 2, 3, 4, 5, 6].map((i) => (
        <div className="max-w-sm bg-white rounded-3xl shadow-xl  p-4 mb-4">
          {/* Date & Time */}
          <div className="flex justify-between text-gray-600 text-sm pb-2">
            <div className="font-medium"><div>Date : 12-12-24</div><div>Time:05:30 PM</div></div>
          {/* Dine In Tag */}

            <div className="text-green-600 h-full text-xs font-semibold bg-green-100 px-2 py-1 rounded-md inline-block ">
            Dine In
          </div>
          </div>

          {/* Items Table */}
          <div className="mt-0 border-t border-gray-200">
            <div className="grid grid-cols-3 text-gray-400 text-sm font-medium py-2">
              <span>Items</span>
              <span className="text-center">Qty</span>
              <span className="text-right">Price</span>
            </div>

            <div className="h-[100px] overflow-auto order-card-scroll">
            <div className="grid grid-cols-3 text-gray-700 py-2">
              <span>Veg Pizza</span>
              <span className="text-center">1</span>
              <span className="text-right">₹ 280</span>
            </div>
            <div className="grid grid-cols-3 text-gray-700 py-2">
              <span>Samosa</span>
              <span className="text-center">2</span>
              <span className="text-right">₹ 40</span>
            </div>
            <div className="grid grid-cols-3 text-gray-700 py-2">
              <span>Samosa</span>
              <span className="text-center">2</span>
              <span className="text-right">₹ 40</span>
            </div>
            </div>

            {/* Total */}
            <div className="grid grid-cols-3 text-gray-900 font-semibold border-t border-gray-200 mt-2 py-2">
              <span>Total</span>
              <span></span>
              <span className="text-right">₹ 280</span>
            </div>
          </div>

          {/* Notes Section */}
          <div className="mb-3 bg-gray-100 p-3 rounded-md text-gray-500 text-sm">
            Notes: Lorem ipsum dolor sit amet 
          </div>

          {/* Reorder Button */}
          <button className="w-full mt-0 bg-orange-500 text-white py-2 rounded-full font-semibold hover:bg-orange-600 transition duration-300">
            Re-Order
          </button>
        </div>
         ))}
         </div>
      </div>

      {/* Right Sidebar */}
      <div
        className={`bg-gray-200 transition-all duration-300 ease-in-out relative rounded-l-3xl ${
          isRightSidebarOpen ? "w-80" : "w-9"
        } overflow-hidden`}
      >
        <span
          className="bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded absolute top-1/2"
          onClick={toggleRightSidebar}
        >
          <img src={Toggle} alt="" />
        </span>

        <RightSidebar />
        {/* <FoodCard/> */}
      </div>
    </div>
  );
};
export default PreviousOrder;
