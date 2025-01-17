import React, { useState } from 'react'
import MenuSlider from '../../Common/MenuCategorySlider/MenuSlider';
import LeftSideNavbar from '../../Common/SideNavbar/leftSideNavbar';
import RightSidebar from '../../Common/SideNavbar/rightSideNavbar';

// import img
import Toggle from '../../Assets/Images/sidebarImg/Group-1171276770.svg'
import Food1 from "../../Assets/Images/menuCard-img/food-1.png";
import Food2 from "../../Assets/Images/menuCard-img/food-2.png";
import Food3 from "../../Assets/Images/menuCard-img/food-3.png";
import OrderSideMenu from '../../Common/OrderSideMenu/ordersidemenu';
const Menu = () => {
    const [isRightSidebarOpen, setIsRightSidebarOpen] = useState(false);

    const toggleRightSidebar = () => {
        setIsRightSidebarOpen(!isRightSidebarOpen);
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
                    <div className='grid grid-cols-1 grid-rows-1 gap-0'>
                        <MenuSlider />
                    </div>
                    <h1 className='font-bold text-xl'>Starters</h1>
                    <div className={`grid mt-4 ${isRightSidebarOpen == true ? "grid-cols-3" : "grid-cols-5"} gap-4`}>
                        {MenuCard.map((item, index) => (
                            <div key={index} onClick={toggleRightSidebar} className={`bg-white rounded-lg shadow-md px-2 py-2 w-56 ${item.cardBorder}`}>
                                <div className='grid grid-cols-2'>
                                    <div className='me-1'>
                                        <img src={item.img} alt="Loading" />
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
                {/* Right Sidebar */}
                <div
                    className={`bg-gray-200 transition-all duration-300 ease-in-out relative rounded-l-3xl ${isRightSidebarOpen ? "w-80" : "w-9"}`}
                >
                    <span className="bg-blue-700 hover:bg-blue-700 font-bold p-3 rounded-full absolute top-1/2 -left-5" onClick={toggleRightSidebar}>
                        <img src={Toggle} alt="Loading" />
                    </span>

                    <RightSidebar />
                </div>
            </div>
        </>
    );
};

export default Menu;
