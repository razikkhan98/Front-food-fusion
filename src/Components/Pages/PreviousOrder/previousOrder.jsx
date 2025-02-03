import React, { useState } from "react";

// common components
import LeftSideNavbar from "../../Common/SideNavbar/leftSideNavbar.jsx";
import RightSidebar from "../../Common/SideNavbar/rightSideNavbar.jsx";
import Navbar from "../../Common/Navbar/navbar.jsx";

// import img
import PreviousOrderCards from "../../Common/PreviousOrderCards/previousOrderCards.jsx";
import Coin from "../../Assets/Images/previous/coin_16821589.svg";
// import FoodCard from "../../Common/Test/menuItems.jsx";

// Import ICONS from react-icons
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineKeyboardDoubleArrowLeft, MdOutlineMailOutline } from "react-icons/md";
import { GoHome } from "react-icons/go";

// Role JSON Data
const CustomerDetailsCard = [
  {
    icon: "RV",
    color: "rounded-md bg-white p-2 text-center border",
    border: "border-r",
    title: "Customer's Name",
    name: "Rahul Vijay",
  },
  {
    icon: <IoCallOutline className="text-light-green text-xl" />,
    color: "bg-gray-50 rounded-full flex items-center justify-center py-3",
    border: "border-r",
    title: "Contact Number",
    name: 1234737577,
  },
  {
    icon: <MdOutlineMailOutline className="text-blue-500 text-xl" />,
    color: "bg-gray-50 rounded-full flex items-center justify-center py-3",
    border: "border-r",
    title: "E-mail Address",
    name: "Avshd@gmail.com",
  },
  {
    icon: <GoHome className="text-xl" />,
    color: "bg-gray-50 rounded-full flex items-center justify-center py-3",
    title: "Delivery Address",
    name: "132 main street Appartment 4B, Indore Madhya Pradesh, 85558",
  },
];
const PreviousOrder = () => {
  // ===========
  // State
  // ==========
  const [isRightSidebarOpen, setIsRightSidebarOpen] = useState(false);

  // =========
  // Function
  // =========
  
  const toggleRightSidebar = () => {
    setIsRightSidebarOpen(!isRightSidebarOpen);
  };

  return (
    <div className="flex h-screen overflow-hidden">
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

          {/* Navbar start */}
          <Navbar />

        </div>


        <div className="bg-white border rounded-md py-4 px-3 my-2">
          {/* <div className="flex"> */}
          <div className={`grid  ${isRightSidebarOpen ? "grid-cols-2" : "grid-cols-4"} gap-1`}>
            {CustomerDetailsCard.map((items, index) => (
              <div key={index} className={`grid grid-cols-5 gap-4 ps-2 ${items.border}`}>
                <div>
                  <div className={`uppercase  ${items.color}`}>
                    {items.icon}
                  </div>
                </div>
                <div className="col-span-4">
                  <div className="text-xs text-gray-400 font-semibold flex justify-between  ">{items.title}
                    {/* Check if it's the last item */}
                    {index === CustomerDetailsCard.length - 1 && (
                      <div className="flex bg-light-yellow rounded-md px-1">
                        <img src={Coin} alt="Loading" />
                        <div className="text-sm font-medium ms-2">120 Pt</div>
                      </div>
                    )}
                  </div>
                  <div className="font-semibold text-sm">
                    {items.name}

                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* </div> */}

        </div>

        {/* Previous Order Cards */}
        <div className={`grid h-full hidden-scroll overflow-auto ${isRightSidebarOpen === true ? "grid-cols-2" : "grid-cols-3"} gap-1`}>
          <PreviousOrderCards />
        </div>
      </div>

      {/* Right Sidebar */}
      <div className={`bg-gray-200 transition-all duration-300 ease-in-out relative rounded-l-3xl ${isRightSidebarOpen ? "w-80" : "w-7"}`}
      >
        <span className="bg-blue-700 hover:bg-blue-700 font-bold p-1 rounded-full cursor-pointer absolute top-1/2 -left-5" onClick={toggleRightSidebar}>
          {/* <img src={Toggle} alt="Loading" /> */}
          <MdOutlineKeyboardDoubleArrowLeft className='text-3xl text-white font-semibold' />
        </span>
        <RightSidebar />
        {/* <FoodCard/> */}
      </div>
    </div>
  );
};
export default PreviousOrder;
