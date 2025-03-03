import React, { useState } from 'react'

// Common componets
import LeftSideNavbar from '../../Common/SideNavbar/leftSideNavbar';
import ChatBot from '../../Common/ChatBot/chatbot';
import Navbar from '../../Common/Navbar/navbar';
import RightSidebar from '../../Common/SideNavbar/rightSideNavbar';


// Import Images
import bell from "../../Assets/Images/navbar-img/bell.svg";
import sort from "../../Assets/Images/navbar-img/SortAscending.svg";
import magnify from "../../Assets/Images/navbar-img/MagnifyingGlass.svg";
import zomato from "../../Assets/Images/navbar-img/zomato.png";
import swiggy from "../../Assets/Images/navbar-img/swiggy.png";
import Call from '../../Assets/Images/sidebarImg/call.svg';
import Whatsapp from "../../Assets/Images/schedule-img/whatsapp.svg";
import Gmail from "../../Assets/Images/schedule-img/gmail_symbol.svg";

// Json
const notifications = [
    {
        icon: zomato,
        title: "New Order Received from Swiggy",
        description: "Order confirmed and added to the queue for preparation.",
        time: "10:55 AM",
    },
    {
        icon: swiggy,
        title: "Order Accepted from Swiggy",
        description: "Order confirmed and added to the queue for preparation.",
        time: "10:55 AM",
    },
    {
        icon: zomato,
        title: "Order No #123 dispatched",
        description: "Your order #123 has been dispatched for delivery.",
        time: "10:45 AM",
    },
    {
        icon: swiggy,
        title: "Order No #123 dispatched",
        description: "Your order #123 has been dispatched for delivery.",
        time: "10:45 AM",
    },
    {
        icon: zomato,
        title: "Order No #123 dispatched",
        description: "Your order #123 has been dispatched for delivery.",
        time: "10:45 AM",
    },
    {
        icon: swiggy,
        title: "Order No #123 dispatched",
        description: "Your order #123 has been dispatched for delivery.",
        time: "10:45 AM",
    },
    {
        icon: zomato,
        title: "Order No #123 dispatched",
        description: "Your order #123 has been dispatched for delivery.",
        time: "10:45 AM",
    },
    {
        icon: swiggy,
        title: "Order No #123 dispatched",
        description: "Your order #123 has been dispatched for delivery.",
        time: "10:45 AM",
    },
    {
        icon: zomato,
        title: "Order No #123 dispatched",
        description: "Your order #123 has been dispatched for delivery.",
        time: "10:45 AM",
    },
    {
        icon: swiggy,
        title: "Order No #123 dispatched",
        description: "Your order #123 has been dispatched for delivery.",
        time: "10:45 AM",
    }
];

const contactOptions = [
    {
        name: "Call",
        img: Call,
        color: "bg-light-green text-color-green border-green-color"

    },
    {
        name: "Whatsapp",
        img: Whatsapp,
        color: "bg-whatsapp-light-green text-whatsapp-green-color border-whatsapp-green",
    },
    {
        name: "Gmail",
        img: Gmail,
        color: "bg-blue-light-color border-blue-color text-blue-color",

    }
];
// Json
const ScheduleButtons = [
    { btn_name: "General Notifications", btn_color: "bg-[--cashier-very-light-color]" },
    {
        btn_name: "Online Deliveries",
        btn_color: "bg-transparent",
    },
];
const ScheduleIcons = [{ nav_img: magnify }, { nav_img: sort }, { nav_img: bell }];
const ScheduleHeading = ["Book Table", "Notifications"];


const Notification = () => {
    // ===================
    // State
    // ====================
    const [CurrentTab, setCurrentTab] = useState();
    console.log("CurrentTab: ", CurrentTab);

    return (
        <>
            <div className='flex h-screen overflow-hidden'>
                {/* Left Sidebar */}
                <LeftSideNavbar />

                {/* Chatbot  */}
                <ChatBot />

                {/* Main Content Area */}
                <div className={`flex-grow py-4 px-9 transition-all duration-300 h-full overflow-auto hidden-scroll`} >

                    <div className="border-b">
                        <Navbar
                            buttons={ScheduleButtons}
                            icons={ScheduleIcons}
                            pageHeading={ScheduleHeading}
                            selectedTab={setCurrentTab}
                        />
                    </div>

                    {CurrentTab === "General Notifications" ? (
                        <>
                            <div className="overflow-scroll hidden-scroll notification-modal-content">
                                <p className='text-xl font-medium border-b py-4'>Kitchen Notifications</p>
                                {notifications?.map((i, index) => (
                                    <>
                                        <div className="p-4 border-b border-gray-200">
                                            {/* <div className="flex"> */}
                                            <div className="flex justify-between">
                                                <div className='flex'>
                                                    <div className="mr-3">
                                                        {/* <img
                                                            className="w-8 h-8 rounded p-1 border"
                                                            src={i?.icon}
                                                            alt="Icon"
                                                        /> */}
                                                        <div className='w-8 h-8 border rounded bg-white'></div>
                                                    </div>
                                                    <div>
                                                        <div className="text-base font-medium text-color-black">
                                                            {i?.title}
                                                        </div>
                                                        <p className="text-color-gray text-xs mt-1 font-normal">
                                                            {i?.description}
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className='flex'>
                                                    <div className={`flex justify-evenly ${index == 2 ? "" : 'hidden'}`}>
                                                        {contactOptions.map((option) => (
                                                            <button
                                                                key={option.name}
                                                                // onClick={() => handleOptionClick(option.name)}
                                                                className={`rounded-full px-6 mx-3 py-1 text-xs font-medium ${option.color} flex items-center justify-center`}
                                                            >
                                                                <img src={option.img} className='me-2 w-4 h-4' alt={option.name} />
                                                                {option.name}
                                                            </button>
                                                        ))}
                                                    </div>

                                                    <div className="text-color-gray text-exs font-normal ms-8">
                                                        {i?.time}
                                                    </div>
                                                </div>
                                            </div>


                                            {/* </div> */}
                                        </div>
                                    </>
                                ))}
                            </div>

                            {/* Pagination Buttons Start */}

                            <div className='flex items-center mt-7'>
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
                        </>
                    ) : CurrentTab === "Online Deliveries" ? (
                        <>
                            {/* Notification Content */}
                            <div className="overflow-scroll hidden-scroll notification-modal-content">
                                <p className='text-xl font-medium border-b py-4'>All Notifications</p>
                                {notifications?.map((i, index) => (
                                    <>
                                        <div className="p-4 border-b border-gray-200">
                                            {/* <div className="flex"> */}
                                            <div className="flex justify-between">
                                                <div className='flex'>
                                                    <div className="mr-3">
                                                        <img
                                                            className="w-8 h-8 rounded p-1 border"
                                                            src={i?.icon}
                                                            alt="Icon"
                                                        />
                                                    </div>
                                                    <div>
                                                        <div className="text-base font-medium text-color-black">
                                                            {i?.title}
                                                        </div>
                                                        <p className="text-color-gray text-xs mt-1 font-normal">
                                                            {i?.description}
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className='flex'>
                                                    <div className={`flex ${index == 0 ? "" : 'hidden'}`}>
                                                        <button
                                                            className={`px-10 py-1 me-6  border-cashier text-xs font-normal cashier-main-text-color rounded-full`}
                                                            type="submit"
                                                        >
                                                            Decline
                                                        </button>
                                                        <button
                                                            className={`px-10 py-1 text-xs font-normal cashier-main-bg-color text-white rounded-full`}
                                                            type="submit"
                                                        >
                                                            Accept
                                                        </button>
                                                    </div>

                                                    <div className="text-color-gray text-exs font-normal ms-8">
                                                        {i?.time}
                                                    </div>
                                                </div>
                                            </div>


                                            {/* </div> */}
                                        </div>
                                    </>
                                ))}
                            </div>
                        </>
                    ) : (
                        " "
                    )}


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

export default Notification;