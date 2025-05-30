import React, { useContext, useState } from "react";

// import img
import Food1 from "../../Assets/Images/menuCard-img/food-1.jpeg";
import Food2 from "../../Assets/Images/menuCard-img/food-2.jpeg";
import Food3 from "../../Assets/Images/menuCard-img/food-3.jpeg";
import bell from "../../Assets/Images/navbar-img/bell.svg";
import magnify from "../../Assets/Images/navbar-img/MagnifyingGlass.svg";

// import {
//   MdOutlineKeyboardDoubleArrowLeft,
//   MdOutlineKeyboardDoubleArrowRight,
// } from "react-icons/md";

// Common Components
import LeftSideNavbar from "../../Common/SideNavbar/leftSideNavbar";
import RightSidebar from "../../Common/SideNavbar/rightSideNavbar";
import MenuDetailsCardSlider from "../../Common/MenuSlider/menudetailscardslider";
import MenuSlider from "../../Common/MenuSlider/menucategoryslider";
import OrderSideMenu from "../../Common/OrderSideMenu/ordersidemenu";
import Navbar from "../../Common/Navbar/navbar";
import RecommendationsModal from "../../Common/Modal/AddOnsModal";
import AddOnsModal from "../../Common/Modal/AddOnsModal";
import ChatBot from "../../Common/ChatBot/chatbot";
import { FiChevronRight } from "react-icons/fi";
import { MenuItemsJson } from "../../Assets/Json/menuItem";
import { UseContext } from "../../Context/context";
import { AddMenuRedux } from "../../Redux/Slice/Menu/MenuSlice";
import { connect, useDispatch } from "react-redux";
import IncrementDecrementFunctionality from "../../Common/IncrementDecrementFunctionality/incrementDecrementFunctionality";

// JSON
const MenuCard = [
  {
    img: Food1,
    cardBorder: "menu-green-borderCard",
    name: "Cheese Balls",
    status: "Available",
    price: 180,
    colorStatus: "text-light-green bg-light-green",
    add_ons: [
      { option: "Extra paneer skewer", price: 50 },
      { option: "Mint chutney", price: 10 },
      { option: "Spicy marinade", price: 0 },
      { option: "Lemon garnish", price: 0 },
    ],
  },
  {
    img: Food2,
    cardBorder: "menu-green-borderCard",
    name: "Veg Pizza",
    status: "Available",
    price: 180,
    colorStatus: "text-light-green bg-light-green",
    add_ons: [
      { option: "Extra tamarind chutney", price: 10 },
      { option: "Mint chutney", price: 10 },
      { option: "Yogurt topping", price: 15 },
      { option: "Mini samosas", price: 0 },
      { option: "Spicy filling", price: 0 },
      { option: "Cheese filling", price: 20 },
    ],
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
const MenuButtons = [
  { btn_name: "All", btn_color: "bg-[--cashier-very-light-color]" },
  { btn_name: "Veg", btn_color: "bg-transparent" },
  { btn_name: "Non Veg", btn_color: "bg-transparent" },
  { btn_name: "Chef's Special", btn_color: "bg-transparent" },
];
const MenuIcons = [{ nav_img: magnify }, { nav_img: bell }];
const MenuHeading = ["Generate Order", "Add Item"];
const Menu = ({ MenuFromRedux }) => {
  // console.log('MenuFromRedux: ', MenuFromRedux);
  const { CustomerDetailsCnxt } = useContext(UseContext);

  //  States
  const [isRightSidebarOpen, setIsRightSidebarOpen] = useState(false);
  const [OrderDetailSidebar, setOrderDetailSidebar] = useState(false);
  const [MenuCardOpen, setMenuCardOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [CurrentAddon, setCurrentAddon] = useState();
  const [CurrentTab, setCurrentTab] = useState();

  const AllMenuItems = MenuItemsJson?.flatMap((item) => item.subcategories);
  const dispatch = useDispatch();

  // Functions
  const toggleRightSidebar = () => {
    setIsRightSidebarOpen(!isRightSidebarOpen);
  };
  const toggleOrderSidebar = () => {
    setOrderDetailSidebar(!OrderDetailSidebar);
  };
  const openMenuCardSlider = (item) => {
    setSelectedCard(item);
    setMenuCardOpen(true);
  };

  const closeMenuCardSlider = () => {
    setMenuCardOpen(false);
  };
  // Open Modal for Addon function
  const openModal = () => {
    setIsOpen(true);
  };

  // Close Modal for Addon function
  const closeModal = () => setIsOpen(false);

  // Open side order menu on  Addon submit
  const HandleAddonSumbit = (data) => {
    toggleOrderSidebar();

    const payload = {
      customerID: CustomerDetailsCnxt?._id,
      menuID: 0,
      floorName: CustomerDetailsCnxt?.floorName,
      tableNumber: CustomerDetailsCnxt?.tableNumber,
      orderID: data?.id,
      categoriesName: "",
      subcategoriesName: data?.name,
      subcategoriesAmount: data?.price,
      subcategoriesType: "",
      quantity: 1,
      totalAmount: 0,
      totalitemTax: 0,
      discount: "",
      extraAddon: data?.extraAddon,
    };
    dispatch(AddMenuRedux(payload));
  };

  // Filter Previous order with customerId
  const FilterPrevOrdCustmId = MenuFromRedux?.Menu?.filter(
    (i) => i?.customerID == CustomerDetailsCnxt?._id
  );

  // console.log('FilterPrevOrdCustmId: ', FilterPrevOrdCustmId?.find(i=>i?.subcategoriesName == ));

  // // Function to close the Menu Detail Modal
  // const closeModal = () => {
  //   setOrderDetailSidebar(false);
  // };
  return (
    <>
      <div className="flex h-screen overflow-hidden">
        <LeftSideNavbar />
        <ChatBot />
        {/* Main Content Area */}
        <div
          className={`flex-grow w-3/5 py-4 px-9 transition-all duration-300 overflow-scroll hidden-scroll`}
        >
          <div className="border-b">
            <Navbar
              pageHeading={MenuHeading}
              buttons={MenuButtons}
              icons={MenuIcons}
              selectedTab={setCurrentTab}
            />
          </div>

          <MenuSlider Noslide={isRightSidebarOpen ? 6 : 9} />
          {/* <MenuDetailsCardSlider/> */}
          <div className="flex items-center justify-between">
            <h1 className="font-medium text-xl ms-2 mb-2">Starters</h1>
            <h6 className="flex items-center text-sm font-normal text-color-gray cursor-pointer">
              View all detailed <FiChevronRight className="ms-1" />
            </h6>
          </div>
          <div className="grid grid-cols-[repeat(auto-fill,minmax(240px,240px))]">
            {AllMenuItems?.map((item, index) => (
              <div key={index} className="flex justify-center items-center m-2">
                <div
                //  className={`card-box-shadow bg-white rounded-lg p-2 h-32 w-56 ${item?.cardBorder}`}
                >
                  <div
                    className={`bg-white rounded-lg card-box-shadow p-2 w-56 h-32 menu-${
                      item?.status !== "Available" ? "red" : "green"
                    }-borderCard`}
                  >
                    <div className="grid grid-cols-2">
                      <div className="me-1">
                        <img
                          src={item?.img || Food1}
                          alt="Loading"
                          onClick={() => openMenuCardSlider(item)}
                          className={`${
                            item?.status !== "Available"
                              ? "filter grayscale"
                              : ""
                          } cursor-pointer menu-item-img rounded-md`}
                        />
                      </div>
                      <div>
                        <div className="flex justify-end">
                          <span
                            className={`text-end flex text-xs items-center px-1 font-semibold rounded-sm ${item?.status == "Available" ?"text-light-green bg-light-green":"text-color-red bg-color-red"}`}
                          >
                            {/* <span
                              className={` ${
                                item?.status == "Available"
                                  ? "bg-green-500"
                                  : "bg-red-500"
                              } inline-block h-1 me-1 p-0.5 rounded-full`}
                            ></span> */}
                            {item?.status}
                          </span>
                        </div>
                        <p
                          className={` mt-1 line-clamp-2  ${
                            item?.status !== "Available" ? "text-gray-400" : ""
                          } font-medium text-sm text-left`}
                        >
                          {item?.name}
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      {FilterPrevOrdCustmId?.find(
                        (i) => i?.subcategoriesName == item?.name
                      ) ? (
                        <span className="mt-2">
                          <IncrementDecrementFunctionality
                            ItemId={item?.id}
                            isOptionSelected={true}
                          />
                        </span>
                      ) : (
                        <button
                        onClick={() => {
                          if (item?.status == "Available") {
                            openModal();
                            setCurrentAddon(item);
                          }
                        }}
                          className={` text-sm ${
                            item?.status !== "Available"
                              ? "text-gray-400 border"
                              : "cashier-light-bg-color cursor-pointer"
                          } uppercase  px-6 py-1 mt-2 rounded-md`}
                        >
                          Add
                        </button>
                      )}
                      <p
                        className={`${
                          item?.status !== "Available" ? "text-gray-400" : ""
                        } text-end text-base font-semibold`}
                      >
                        ₹ {item?.price}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {/* Add on Modal popup */}
            <AddOnsModal
              isOpen={isOpen}
              addOns={CurrentAddon}
              onClose={closeModal}
              onSubmitFunc={HandleAddonSumbit}
            />
          </div>
        </div>
        {/* Right Order Details Sidebar  */}
        <div
          className={`transition-all duration-300 ease-in-out mb-2 relative right-6 mr-6 rounded-l-3xl ${
            FilterPrevOrdCustmId?.length > 0 || OrderDetailSidebar
              ? " w-80"
              : "hidden"
          } ${
            FilterPrevOrdCustmId?.length < 1 || isRightSidebarOpen
              ? "hidden"
              : ""
          }`}
        >
          <OrderSideMenu OrderData={FilterPrevOrdCustmId} />
        </div>

        {/* Right Sidebar */}
        <div
          className={`transition-all duration-300 ease-in-out relative rounded-l-3xl`}
        >
          <RightSidebar />
        </div>
      </div>

      {/* Menu Details Card Slider */}
      {MenuCardOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center  z-50">
          <div
            className=" p-6 rounded-lg shadow-lg relative width-100vw"
            // onClick={closeMenuCardSlider}
          >
            <button
              onClick={closeMenuCardSlider}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
            >
              ✕
            </button>
            <MenuDetailsCardSlider
              SliderDataJson={AllMenuItems}
              selectedCard={selectedCard}
              toggleMenuDetailModal={closeMenuCardSlider}
            />
          </div>
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  MenuFromRedux: state?.menu,
});
export default connect(mapStateToProps, {})(Menu);
