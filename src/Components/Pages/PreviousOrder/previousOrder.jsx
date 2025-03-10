import React, { useState } from "react";

// common components
import LeftSideNavbar from "../../Common/SideNavbar/leftSideNavbar.jsx";
import RightSidebar from "../../Common/SideNavbar/rightSideNavbar.jsx";
import Navbar from "../../Common/Navbar/navbar.jsx";

// import img
import PreviousOrderCards from "../../Common/PreviousOrderCards/previousOrderCards.jsx";
import Coin from "../../Assets/Images/previous/coin_16821589.svg";
import bell from "../../Assets/Images/navbar-img/bell.svg";
import magnify from "../../Assets/Images/navbar-img/MagnifyingGlass.svg";
// import FoodCard from "../../Common/Test/menuItems.jsx";

// Import ICONS from react-icons
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { GoHome } from "react-icons/go";

// Role JSON Data
const CustomerDetailsCard = [
  {
    icon: "RV",
    color: "rounded-md bg-white h-10 text-center border",
    border: "border-r",
    title: "Customer's Name",
    name: "Rahul Vijay",
    span: " ",
  },
  {
    icon: <IoCallOutline className="notify-call text-xl" />,
    color: "previous-order-bg-gray rounded-full flex items-center justify-center h-7 w-7",
    border: "border-r",
    title: "Contact Number",
    name: 1234737577,
    span: " ",
  },
  {
    icon: <MdOutlineMailOutline className="text-blue-color text-xl" />,
    color: "previous-order-bg-gray rounded-full flex items-center justify-center h-7 w-7",
    border: "border-r",
    title: "E-mail Address",
    name: "Avshd@gmail.com",
    span: " ",
  },
  {
    icon: <GoHome className="text-xl" />,
    color: "previous-order-bg-gray rounded-full flex items-center justify-center h-7 w-7",
    title: "Delivery Address",
    name: "132 main street Appartment 4B, Indore Madhya Pradesh, 85558",
    span: "col-span-2"
  },
];

// Json
const PreviousIcons = [
  { nav_img: magnify },
  { nav_img: bell },
];
const PreviousHeading = [
  "Generate Order", "Previous Orders"
];
const PreviousButtons = [
  { btn_name: "All", btn_color: "bg-[--cashier-very-light-color]" },
  { btn_name: "Frequently Ordered", btn_color: "bg-transparent" },
]
const PreviousOrder = () => {
  // ===========
  // State
  // ==========
  const [CurrentTab, setCurrentTab] = useState();
  console.log('CurrentTab: ', CurrentTab);

  // =========
  // Function
  // =========



  return (
    <div className="flex h-screen overflow-hidden">
      {/* Left Sidebar */}
      <LeftSideNavbar />

      {/* Main Content Area */}

      <div className={`flex-grow py-4 px-9 transition-all duration-300`}>
        {/* Navbar start */}
        <div className="border-b">
          <Navbar icons={PreviousIcons} buttons={PreviousButtons} pageHeading={PreviousHeading} selectedTab={setCurrentTab} />

        </div>


        <div className="bg-white border rounded-md py-4 px-3 my-4">
          {/* <div className="flex"> */}
          <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 w-full`}>
            {CustomerDetailsCard.map((items, index) => (
              <div className={items.span}>
                <div key={index} className={`grid grid-cols-5 gap-2 ps-2 ${items.border}`}>
                  <div>
                    <div className={`uppercase flex items-center justify-center  ${items.color}`}>
                      {items.icon}
                    </div>
                  </div>
                  <div className="col-span-4">
                    <div className="text-xs text-light-gray-color font-medium flex justify-between">{items.title}
                      {/* Check if it's the last item */}
                      {index === CustomerDetailsCard.length - 1 && (
                        <div className="flex items-center bg-light-yellow rounded-md px-1 mb-2 -mt-2 py-0.5">
                          <img src={Coin} className="h-4 w-4" alt="Loading" />
                          <div className="text-sm font-medium ms-2 text-color-black">120 Pt</div>
                        </div>
                      )}
                    </div>
                    <div className="font-medium text-sm">
                      {items.name}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* </div> */}

        </div>

        {/* Previous Order Cards */}

        <div className="h-3/4 hidden-scroll overflow-auto pb-3">
          <div className={`grid grid-cols-[repeat(auto-fill,minmax(336px,336px))]`}>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i, index) => (
              <PreviousOrderCards key={index} OrderStatus={index === 0 ? "Dine In" : index === 1 ? "Paid" :
                index === 2 ? "Handed Over" :
                  index === 3 ? "Ready" :
                    index === 4 ? "In Progress" :
                      index === 5 ? "Delivered" :
                        index === 6 ? "Unsuccessful" :
                          "Dine In"} />
            ))}
          </div>
        </div>
      </div>

      {/* Right Sidebar */}
      <div
        className={`transition-all duration-300 ease-in-out relative rounded-l-3xl`}
      >
        <RightSidebar />
      </div>
    </div>
  );
};
export default PreviousOrder;
