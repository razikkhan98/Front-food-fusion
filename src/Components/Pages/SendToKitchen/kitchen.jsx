
import React, { useState } from 'react'


// Common Components
import Navbar from '../../Common/Navbar/navbar';
import ChatBot from '../../Common/ChatBot/chatbot';
import LeftSideNavbar from '../../Common/SideNavbar/leftSideNavbar';
import GenerateOrderCards from '../../Common/GenerateOrderCards/ordercards';
import RightSidebar from '../../Common/SideNavbar/rightSideNavbar';


// Import Images
import bell from "../../Assets/Images/navbar-img/bell.svg";
import magnify from "../../Assets/Images/navbar-img/MagnifyingGlass.svg";
import Sort from "../../Assets/Images/navbar-img/SortAscending.svg";


// Json
const KitchenButtons = [
    { btn_name: "All", btn_color: "bg-[--cashier-very-light-color]" },
    { btn_name: "Dine In", btn_color: "bg-transparent" },
    { btn_name: "Take Away", btn_color: "bg-transparent" },
    { btn_name: "Online Orders", btn_color: "bg-transparent" },
];
const KitchenIcons = [
    { nav_img: magnify },
    { nav_img: Sort },
    { nav_img: bell },
];
const kitchenHeading = ["Orders"];

const SendToKitchen = () => {
    // ========
    // State
    // ========
    const [CurrentTab, setCurrentTab] = useState();
    console.log('CurrentTab: ', CurrentTab);


    // ========
    // Functions
    // ========
   
    return (
        <>
            <div className="flex h-screen overflow-hidden">
                {/* Left Sidebar */}
                <LeftSideNavbar />
                <ChatBot />


                {/* Main Content here */}
                <div className={`flex-grow py-4 px-9 transition-all duration-300 flex flex-col justify-center`}>
                    <div className='border-b'>
                        <Navbar buttons={KitchenButtons} icons={KitchenIcons} pageHeading={kitchenHeading} btn_purple={"See All Invoices"} selectedTab={setCurrentTab} />
                    </div>
                    <div className="overflow-auto h-full hidden-scroll">
                        <h2 className="text-base font-medium mt-2">In Progress</h2>
                        <div
                            className={`grid grid-cols-[repeat(auto-fill,minmax(330px,330px))]`}
                        >
                            {[1, 2, 3, 4, 5, 6, 7, 8].map((i, index) => (
                                <>
                                    <GenerateOrderCards key={index} OrderStatus={index === 0 ? "Dine In" : index === 1 ? "Unsuccessful" :
                                        index === 2 ? "Handed Over" :
                                            index === 3 ? "Paid" :
                                                index === 4 ? "In Progress" :
                                                    index === 5 ? "Delivered" :
                                                        index === 6 ? "Unsuccessful" :
                                                            "Dine In"} />
                                </>
                            ))}
                        </div>


                        <h2 className="text-base font-medium mt-2">Completed</h2>
                        <div
                            className={`grid grid-cols-[repeat(auto-fill,minmax(333px,333px))]`}
                        >
                            {[1, 2, 3, 4, 5,].map((i, index) => (
                                <>
                                    <GenerateOrderCards key={index} OrderStatus={"In Progress"} />
                                </>
                            ))}
                        </div>

                    </div>

                    {/* Pagination Buttons Start */}

                    <div className='flex items-center mt-3'>
                        <div className='flex items-center justify-between mr-7'>
                            <p className='me-3'>Rows per page</p>
                            <div>
                                <select className="custom-select px-2 py-1 border-gray-color rounded-lg text-base font-medium focus-visible:bg-white">
                                    {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                                        <option key={num} value={num}>
                                            {num}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className='flex items-center'>
                            <button className='px-3 py-1.5 bg-white border text-sm font-medium rounded-lg mr-3 text-light-gray-color'>Previous</button>
                            <button className='px-3 py-1.5 bg-white border text-sm font-medium text-color-black rounded-lg shadow-lg'>Next</button>

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


        </>
    )
}


export default SendToKitchen;
