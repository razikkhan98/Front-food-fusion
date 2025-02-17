import React, { useState } from "react";
import LeftSideNavbar from "../../Common/SideNavbar/leftSideNavbar";
import RightSidebar from "../../Common/SideNavbar/rightSideNavbar";

// import img
import Food1 from "../../Assets/Images/menuCard-img/food-1.jpeg";
import Food2 from "../../Assets/Images/menuCard-img/food-2.jpeg";
import Food3 from "../../Assets/Images/menuCard-img/food-3.jpeg";
import bell from "../../Assets/Images/navbar-img/bell.svg";
import magnify from "../../Assets/Images/navbar-img/MagnifyingGlass.svg";
import { MdOutlineKeyboardDoubleArrowLeft, MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import MenuDetailsCardSlider from "../../Common/MenuSlider/menudetailscardslider";
import MenuSlider from "../../Common/MenuSlider/menucategoryslider";
import OrderSideMenu from "../../Common/OrderSideMenu/ordersidemenu";
import Navbar from "../../Common/Navbar/navbar";

// JSON
const MenuCard = [
  {
    img: Food1,
    cardBorder: "menu-green-borderCard",
    name: "Cheese Balls",
    status: "Available",
    price: 180,
    colorStatus: "text-light-green bg-light-green",
  },
  {
    img: Food2,
    cardBorder: "menu-green-borderCard",
    name: "Veg Pizza",
    status: "Available",
    price: 180,
    colorStatus: "text-light-green bg-light-green",
  },
  {
    img: Food3,
    cardBorder: "menu-red-borderCard",
    name: "Sandwich",
    status: "N Available",
    price: 180,
    colorStatus: "text-color-red bg-color-red",
  },
  {
    img: Food1,
    name: "Cheese Balls",
    cardBorder: "menu-green-borderCard",
    status: "Available",
    price: 180,
    colorStatus: "text-light-green bg-light-green",
  },
  {
    img: Food1,
    cardBorder: "menu-green-borderCard",
    name: "Cheese Balls",
    status: "Available",
    price: 180,
    colorStatus: "text-light-green bg-light-green",
  },
];
const MenuButtons =[
  { btn_name: "All", btn_color: "bg-orange-100" },
  { btn_name: "Veg", btn_color: "bg-transparent" },
  { btn_name: "Non Veg", btn_color: "bg-transparent" },
  { btn_name: "Chef's Special", btn_color: "bg-transparent" },
];
 const MenuIcons =[
  { nav_img: magnify },
  { nav_img: bell },
 ];
 const MenuHeading =[
  "Generate Order" , "Add Item"
 ]
const Menu = () => {
  //  States
  const [isRightSidebarOpen, setIsRightSidebarOpen] = useState(false);
  const [OrderDetailSidebar, setOrderDetailSidebar] = useState(false);
  const [MenuCardOpen, setMenuCardOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState(null);

  // Functions
  const toggleRightSidebar = () => {
    setIsRightSidebarOpen(!isRightSidebarOpen);
  };
  const toggleOrderSidebar = () => {
    setOrderDetailSidebar(!OrderDetailSidebar);
  };
  const openMenuCardSlider = (item) => {
    setSelectedCard(item)
    setMenuCardOpen(true);
  };

  const closeMenuCardSlider = () => {
    setMenuCardOpen(false);
  };

    // // Function to close the Menu Detail Modal
    // const closeModal = () => {
    //   setOrderDetailSidebar(false);
    // };
  return (
    <>
      <div className="flex h-screen overflow-hidden">
        <LeftSideNavbar />
        {/* Main Content Area */}
        <div className={`flex-grow w-3/5 py-4 px-9 transition-all duration-300`}>
        <div className="border-b">
        <Navbar pageHeading={MenuHeading} buttons={MenuButtons} icons={MenuIcons} />

        </div>
          <MenuSlider />
          {/* <MenuDetailsCardSlider/> */}
          <h1 className="font-bold text-xl">Starters</h1>
          <div
            className={`grid mt-4 ${
              isRightSidebarOpen === true || OrderDetailSidebar === true
                ? "lg:grid-cols-3 md:grid-cols-2 w-11/12"
                : "lg:grid-cols-5 md:grid-cols-3"
            } gap-2`}
          >
            {MenuCard.map((item, index) => (
              <div
                key={index}
                className={`bg-white rounded-lg shadow-md px-2 py-2 w-56 h-32 ${item?.cardBorder}`}
              >
                <div className="grid grid-cols-2">
                  <div className="me-1">
                    <img
                      src={item?.img}
                      alt="Loading"
                      onClick={() => openMenuCardSlider(item)}
                      className={`${
                        item?.status !== "Available" ? "filter grayscale" : ""
                      } cursor-pointer h-[70px] w-[86px] rounded-md`}
                    />
                  </div>
                  <div>
                    <div className="flex justify-end">
                      <span
                        className={`text-end flex text-xs items-center px-1 font-semibold ${item?.colorStatus}`}
                      >
                        <span
                          className={` ${
                            item?.status == "Available"
                              ? "bg-green-500"
                              : "bg-red-500"
                          } inline-block h-1 me-1 p-0.5 rounded-full`}
                        ></span>
                        {item?.status}
                      </span>
                    </div>
                    <p
                      className={`${
                        item?.status !== "Available" ? "text-gray-400" : ""
                      } font-medium text-sm text-left`}
                    >
                      {item?.name}
                    </p>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <button
                    onClick={toggleOrderSidebar}
                    className={` text-sm ${
                      item?.status !== "Available"
                        ? "text-gray-400 border"
                        : "cashier-light-bg-color cursor-pointer"
                    } uppercase  px-6 py-1 mt-2 rounded-md`}
                  >
                    Add
                  </button>
                  <p
                    className={`${
                      item?.status !== "Available" ? "text-gray-400" : ""
                    } text-end text-base font-semibold`}
                  >
                    ₹ {item?.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Right Order Details Sidebar  */}
        <div
          className={`transition-all duration-300 ease-in-out relative right-4 rounded-l-3xl ${
            OrderDetailSidebar ? " w-80" : "hidden"
          } ${isRightSidebarOpen ? "hidden" : ""}`}
        >
          <OrderSideMenu />
        </div>

        {/* Right Sidebar */}
      <div
        className={`transition-all duration-300 ease-in-out relative rounded-l-3xl ${
          isRightSidebarOpen ? "w-[360px]" : "w-7"
        }`}
      >
        <span
          className="bg-[--purple-color] w-11 h-11 flex justify-center items-center hover:bg-[--purple-color] cursor-pointer font-bold p-1 rounded-full absolute top-1/2 -left-5"
          onClick={toggleRightSidebar}
        >
          {/* <img src={Toggle} alt="Loading" /> */}
          {isRightSidebarOpen ? (
            <MdOutlineKeyboardDoubleArrowRight className="text-3xl text-white font-semibold" />
          ) : (
            <MdOutlineKeyboardDoubleArrowLeft className="text-3xl text-white font-semibold" />
          )}
        </span>

        <RightSidebar />
      </div>
      </div>

      {/* Menu Details Card Slider */}
      {MenuCardOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center  z-50">
          <div className=" p-6 rounded-lg shadow-lg relative w-[100vw]">
            <button
              onClick={closeMenuCardSlider}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
            >
              ✕
            </button>
            <MenuDetailsCardSlider SliderDataJson={MenuCard} selectedCard={selectedCard} toggleMenuDetailModal={closeMenuCardSlider} />
          </div>
        </div>
      )}
    </>
  );
};

export default Menu;
