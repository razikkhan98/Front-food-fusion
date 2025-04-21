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
import phone from "../../Assets/icons/Phone.svg";
import mail from "../../Assets/icons/EnvelopeSimple.svg";
import home from "../../Assets/icons/prevordhouse.svg";
// import FoodCard from "../../Common/Test/menuItems.jsx";

// Import ICONS from react-icons
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { GoHome } from "react-icons/go";

const customerData = {
  name: "Rahul Vijay",
  initials: "RV",
  phone: "1234567890",
  email: "asxyz123@gmail.com",
  address: "123 Main Street, Apartment 4B, Indore, Madhya Pradesh, 326023",
  points: 120,
};

// Json
const PreviousIcons = [{ nav_img: magnify }, { nav_img: bell }];
const PreviousHeading = ["Generate Order", "Previous Orders"];
const PreviousButtons = [
  { btn_name: "All", btn_color: "bg-[--cashier-very-light-color]" },
  { btn_name: "Frequently Ordered", btn_color: "bg-transparent" },
];
const PreviousOrder = () => {
  // ===========
  // State
  // ==========
  const [CurrentTab, setCurrentTab] = useState();
  console.log("CurrentTab: ", CurrentTab);

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
          <Navbar
            icons={PreviousIcons}
            buttons={PreviousButtons}
            pageHeading={PreviousHeading}
            selectedTab={setCurrentTab}
          />
        </div>

        {/* User Detail header */}
        <div className="  flex items-center justify-center ">
          {window?.screen?.width <= 1025 ? (
            <div className="bg-white rounded-lg border w-full mt-6 mb-4">
              <div className="grid grid-cols-2 py-4">
                {/* Customer Name */}
                <div className="flex items-start my-2">
                  <div className="flex-shrink-0 w-10 h-10 border rounded-md flex items-center justify-center ml-4 mr-4">
                    <span className="font-medium text-light-gray-color">
                      {customerData?.initials}
                    </span>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-light-gray-color">
                      Customer's Name
                    </p>
                    <p className="text-sm font-medium">{customerData?.name}</p>
                  </div>
                  <hr className="h-16 border-light-gray-color ms-7" />
                </div>

                {/* Contact Number */}
                <div className="flex items-start my-2">
                  <div className="flex-shrink-0 mr-4">
                    <img className="w-5 h-5" src={phone} alt="" />
                    {/* <Phone className="w-5 h-5 text-light-gray-color" /> */}
                  </div>
                  <div>
                    <p className="text-xs font-medium text-light-gray-color">
                      Contact No
                    </p>
                    <p className="text-sm font-medium">{customerData?.phone}</p>
                  </div>
                  <hr className="h-16 border-light-gray-color ms-7" />
                </div>

                {/* Email Address */}
                <div className="flex items-start my-2">
                  <div className="flex-shrink-0 mr-4">
                    <img className="w-5 h-5" src={mail} alt="" />
                    {/* <Mail className="w-5 h-5 text-light-gray-color" /> */}
                  </div>
                  <div>
                    <p className="text-xs font-medium text-light-gray-color">
                      E-mail Address
                    </p>
                    <p className="text-sm font-medium">{customerData?.email}</p>
                  </div>
                  <hr className="h-16 border-light-gray-color ms-7" />
                </div>

                {/* Delivery Address */}
                <div className="flex items-start justify-between my-2 ">
                  <div className="flex items-start flex-grow w-3/5">
                    <div className="flex-shrink-0 mr-4">
                      <img className="w-5 h-5" src={home} alt="" />
                      {/* <Home className="w-5 h-5 text-light-gray-color" /> */}
                    </div>
                    <div className="">
                      <p className="text-xs font-medium text-light-gray-color">
                        Delivery Address
                      </p>
                      <p className="text-sm font-medium line-clamp-2">
                        {customerData?.address}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center px-2 py-1 bg-light-yellow rounded-sm ml-4">
                    {/* <Coins className="w-4 h-4 text-amber-500 mr-1" /> */}
                    <img className="w-5 h-5" src={Coin} alt="" />
                    <span className="text-xs font-medium ms-1">
                      {customerData?.points} Pt
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className=" bg-white rounded-lg border mt-6 mb-4 w-full">
              <div className="flex h-24 py-4">
                {/* Customer Name */}
                <div className="flex  border-r xl:w-1/5 md:w-1/2 w-1/2">
                  <div className="flex-shrink-0 w-10 h-10  border rounded-md flex items-center justify-center me-4 ms-4">
                    <span className="font-medium text-light-gray-color">
                      RV
                    </span>
                  </div>
                  <div className="me-7">
                    <p className="text-xs font-medium text-light-gray-color">
                      Customer's Name
                    </p>
                    <p className="text-sm font-medium">Rahul Vijay</p>
                  </div>
                </div>

                {/* Contact Number */}
                <div className="flex   border-r xl:w-1/5 md:w-1/2 w-1/2">
                  <div className="flex-shrink-0 flex justify-center me-4 ms-7">
                    <img className="w-5 h-5" src={phone} alt="" />
                  </div>
                  <div className="me-7">
                    <p className="text-xs font-medium text-light-gray-color">
                      Contact No
                    </p>
                    <p className="text-sm font-medium">1234567890</p>
                  </div>
                </div>

                {/* Email Address */}
                <div className="flex   border-r xl:w-1/4 md:w-1/2 w-1/2">
                  <div className="flex-shrink-0  flex  justify-center me-4 ms-7">
                    <img className="w-5 h-5" src={mail} alt="" />
                  </div>
                  <div className="me-7">
                    <p className="text-xs font-medium text-light-gray-color">
                      E- mail Address
                    </p>
                    <p className="text-sm font-medium">asxyz123@gmail.com</p>
                  </div>
                </div>

                {/* Delivery Address */}
                <div className="flex justify-between xl:w-[35%] md:w-1/2 w-1/2   ">
                  <div className="flex  w-9/12">
                    <div className="flex-shrink-0  flex  justify-center me-4 ms-7">
                      <img className="w-5 h-5" src={home} alt="" />
                    </div>
                    <div className="">
                      <p className="text-xs font-medium text-light-gray-color">
                        Delivery Address
                      </p>
                      <p className="text-sm font-medium line-clamp-2 ">
                        123 Main Street, Apartment 4B, Indore, Madhya Pradesh,
                        326023
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center py-1 h-5 rounded-sm bg-light-yellow me-2">
                    <img className="w-4 h-4 me-3 ms-1" src={Coin} alt="" />
                    <span className="text-xs font-normal me-1">120 Pt</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Previous Order Cards */}

        <div className="h-4/6 hidden-scroll overflow-auto pb-3">
          <div
            className={`grid grid-cols-[repeat(auto-fill,minmax(336px,336px))]`}
          >
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i, index) => (
              <PreviousOrderCards
                key={index}
                OrderStatus={
                  index === 0
                    ? "Dine In"
                    : index === 1
                    ? "Paid"
                    : index === 2
                    ? "Handed Over"
                    : index === 3
                    ? "Ready"
                    : index === 4
                    ? "In Progress"
                    : index === 5
                    ? "Delivered"
                    : index === 6
                    ? "Unsuccessful"
                    : "Dine In"
                }
              />
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
