import React, { useState } from "react";
import LeftSideNavbar from '../../Common/SideNavbar/leftSideNavbar.jsx'
import RightSidebar from "../../Common/SideNavbar/rightSideNavbar.jsx";

// import img
import Toggle from '../../Assets/Images/sidebarImg/toggle.png'
// import FoodCard from "../../Common/Test/menuItems.jsx";
const Order =()=> {
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

     {/* Breadcrumb */}
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

        {/* Order Details */}
        <div className="bg-white rounded-lg shadow-md p-6 ">
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-3">
            {/* Name */}
            <div>
              <label className="text-gray-500 text-sm">Name</label>
              <input
                type="text"
                placeholder="Customer's name here"
                className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            {/* Contact No */}
            <div>
              <label className="text-gray-500 text-sm">Contact No</label>
              <input
                type="text"
                placeholder="Customer's contact no here"
                className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            {/* Order Type */}
            <div>
              <label className="text-gray-500 text-sm">Order Type</label>
              <select className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500">
                <option>Dine In</option>
                <option>Takeaway</option>
                <option>Delivery</option>
              </select>
            </div>
            {/* Email */}
            <div>
              <label className="text-gray-500 text-sm">E-mail (Optional)</label>
              <input
                type="email"
                placeholder="Customer's E-mail ID here"
                className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            {/* Table No */}
            <div>
              <label className="text-gray-500 text-sm">Table No</label>
              <select className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex mt-6 space-x-4">
            <button className="px-4 py-2 text-gray-400 bg-gray-100 rounded-lg border border-gray-300">
              View Previous Orders
            </button>
            <button className="px-4 py-2 bg-gray-300 text-gray-600 rounded-lg">
              Save
            </button>
          </div>
        </div>

        {/* Add Item Section */}
        <div className="mt-6 bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <button className="px-4 py-2 bg-purple-500 text-white rounded-lg">
              Add Item
            </button>
            <div className="w-1/3">
              <input
                type="text"
                placeholder="Search for items"
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
          </div>

          {/* Table */}
          <table className="w-full mt-6 border-collapse">
            <thead>
              <tr className="text-left text-sm text-gray-500">
                <th className="border-b pb-2">S.No.</th>
                <th className="border-b pb-2">Item's Name</th>
                <th className="border-b pb-2">Notes/Add Ons</th>
                <th className="border-b pb-2">Quantity</th>
                <th className="border-b pb-2">Price</th>
                <th className="border-b pb-2">Amount</th>
              </tr>
            </thead>
            <tbody>
              {/* Placeholder for dynamic items */}
              <tr>
                <td className="py-4 text-center text-gray-400" colSpan="6">
                  No items added.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Footer Buttons */}
        <div className="flex justify-between mt-6">
          <button className="px-6 py-2 bg-gray-100 text-gray-500 rounded-lg border border-gray-300">
            Generate Invoice
          </button>
          <button className="px-6 py-2 bg-gray-300 text-gray-600 rounded-lg">
            Send To Kitchen
          </button>
        </div>
      </div>

      {/* Right Sidebar */}
      <div
        className={`bg-gray-200 transition-all duration-300 ease-in-out relative rounded-l-3xl ${
          isRightSidebarOpen ? "w-80" : "w-9"
        } overflow-hidden`}
      >
     
          <span className="bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded absolute top-1/2"  onClick={toggleRightSidebar}>
            <img src={Toggle} alt="" />
          </span>
        
        {/* <RightSidebar/> */}
        {/* <FoodCard/> */}
      </div>
    </div>
  );
}
export default Order;