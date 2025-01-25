import React, { useState } from 'react'
import MenuSlider from '../../Common/MenuSlider/menucategoryslider';
import LeftSideNavbar from '../../Common/SideNavbar/leftSideNavbar';
import RightSidebar from '../../Common/SideNavbar/rightSideNavbar';

// import img
// import Toggle from '../../Assets/Images/sidebarImg/Group-1171276770.svg';
import Food1 from "../../Assets/Images/menuCard-img/food-1.jpeg";
import Food2 from "../../Assets/Images/menuCard-img/food-2.jpeg";
import Food3 from "../../Assets/Images/menuCard-img/food-3.jpeg";
import OrderSideMenu from '../../Common/OrderSideMenu/ordersidemenu';
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
import MenuDetailsCardSlider from '../../Common/MenuSlider/menudetailscardslider';

const Menu = () => {
    const [isRightSidebarOpen, setIsRightSidebarOpen] = useState(false);
    const [MenuCardOpen, setMenuCardOpen] = useState(false)
    const toggleRightSidebar = () => {
        setIsRightSidebarOpen(!isRightSidebarOpen);
    };
    const openMenuCardSlider = () => {
        setMenuCardOpen(true);
    };

    const closeMenuCardSlider = () => {
        setMenuCardOpen(false);
    };
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
            colorStatus: "text-light-green bg-light-green"
        },
        {
            img: Food3,
            cardBorder: "menu-red-borderCard",
            name: "Sandwich",
            status: "N Available",
            price: 180,
            colorStatus: "text-color-red bg-color-red"
        },
        {
            img: Food1,
            name: "Cheese Balls",
            cardBorder: "menu-green-borderCard",
            status: "Available",
            price: 180,
            colorStatus: "text-light-green bg-light-green"

        },
        {
            img: Food1,
            cardBorder: "menu-green-borderCard",
            name: "Cheese Balls",
            status: "Available",
            price: 180,
            colorStatus: "text-light-green bg-light-green"

        },
    ];
    return (
        <>
            <div className="flex h-screen overflow-hidden">
                <LeftSideNavbar />
                {/* Main Content Area */}
                <div className={`flex-grow p-4 transition-all duration-300`}>
                    {/* <div className='grid grid-cols-1'> */}
                        {/* <MenuSlider /> */}
                    {/* </div> */}
                    <h1 className='font-bold text-xl'>Starters</h1>
                    <div className={`grid mt-4 ${isRightSidebarOpen == true ? "lg:grid-cols-4 md:grid-cols-2" : "lg:grid-cols-5 md:grid-cols-3"} gap-2`}>
                        {MenuCard.map((item, index) => (
                            <div key={index} className={`bg-white rounded-lg shadow-md px-2 py-2 w-56 ${item.cardBorder}`}>
                                <div className='grid grid-cols-2'>
                                    <div className='me-1'>
                                        <img src={item.img} alt="Loading" onClick={() => openMenuCardSlider(item)}
                                            className="cursor-pointer h-[70px] w-[86px] rounded-md" />
                                    </div>
                                    <div>
                                        <div className='flex justify-end'>
                                            <span className={`text-end shadow px-1 font-semibold ${item.colorStatus}`}>{item.status}</span>
                                        </div>
                                        <p className='font-semibold text-left'>{item.name}</p>
                                    </div>
                                </div>
                                <div className='flex justify-between items-center'>
                                    <button className="uppercase cashier-light-bg-color px-6 py-1 mt-2 rounded-md">Add</button>
                                    <p className='text-end text-lg font-semibold'>₹ {item.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                {/* <OrderSideMenu /> */}
               

                {/* Right Sidebar Start */}
                <div
                    className={`bg-gray-200 transition-all duration-300 ease-in-out relative rounded-l-3xl ${isRightSidebarOpen ? "w-80" : "w-7"}`}
                >
                    <span className="bg-blue-700 hover:bg-blue-700 font-bold p-1 rounded-full absolute top-1/2 -left-5" onClick={toggleRightSidebar}>
                        {/* <img src={Toggle} alt="Loading" /> */}
                        <MdOutlineKeyboardDoubleArrowLeft className='text-3xl text-white font-semibold' />

                    </span>

                    <RightSidebar />
                </div>
            </div>


              {/* Menu Details Card Slider */}
              {MenuCardOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg relative max-w-4xl w-full">
                        <button
                            onClick={closeMenuCardSlider}
                            className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
                        >
                            ✕
                        </button>
                        <MenuDetailsCardSlider />
                    </div>
                </div>
            )}
        </>
    );
};

export default Menu;
