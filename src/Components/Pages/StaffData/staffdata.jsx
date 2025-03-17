import React, { useState } from "react";


// Common Components
import LeftSideNavbar from "../../Common/SideNavbar/leftSideNavbar.jsx";
import RightSidebar from "../../Common/SideNavbar/rightSideNavbar.jsx";
import Navbar from "../../Common/Navbar/navbar.jsx";
import ChatBot from "../../Common/ChatBot/chatbot.jsx";
import StaffDataModal from "../../Common/Modal/staffDataModal.jsx";


// Images
// import Toggle from "../../Assets/Images/sidebarImg/toggle.png";
import bell from "../../Assets/Images/navbar-img/bell.svg";
import magnify from "../../Assets/Images/navbar-img/MagnifyingGlass.svg";
import Sort from "../../Assets/Images/navbar-img/SortAscending.svg";

// Import Icons
import { PiChatsBold } from "react-icons/pi";
import { HiOutlineBellAlert } from "react-icons/hi2";
import { BsTelephone } from "react-icons/bs";
// import { MdOutlineKeyboardDoubleArrowLeft, MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";


// Role JSON Data
const employees = [

    {

        initials: "DJ",

        name: "Dollar Jain",

        phone: "+91-9715555555",

        role: "Admin",

        shift: "Morning",

        status: "Present",

        statuscolor: "text-light-green bg-light-green",

        task: "-",

        color: "bg-dark-green-color",

        dotcolor: "bg-green-color",
    },
    {

        initials: "DJ",

        name: "Dollar Jain",

        phone: "+91-9715555555",

        role: "Admin",

        shift: "Afternoon",

        status: "Present",

        statuscolor: "text-light-green bg-light-green",

        task: "Serving Table 2",

        color: "bg-dark-green-color",

        dotcolor: "bg-green-color",
    },
    {

        initials: "DJ",

        name: "Dollar Jain",

        phone: "+91-9715555555",

        role: "Chef Supervisor",

        shift: "Morning",

        status: "Present",

        statuscolor: "text-light-green bg-light-green",

        task: "-",

        color: "bg-dark-green-color",

        dotcolor: "bg-green-color",
    },
    {

        initials: "DJ",

        name: "Dollar Jain",

        phone: "+91-9715555555",

        role: "Admin",

        shift: "Afternoon",

        status: "Present",

        statuscolor: "text-light-green bg-light-green",

        task: "-",

        color: "bg-dark-green-color",

        dotcolor: "bg-green-color",
    },
    {

        initials: "DJ",

        name: "Dollar Jain",

        phone: "+91-9715555555",

        role: "Admin",

        shift: "Afternoon",

        status: "Present",

        statuscolor: "text-light-green bg-light-green",

        task: "-",

        color: "bg-dark-green-color",

        dotcolor: "bg-green-color",
    },

    {

        initials: "RK",

        name: "Razik Khan",

        phone: "+91-9715555555",

        role: "Cashier",

        shift: "Afternoon",

        status: "On Leave",

        statuscolor: "text-color-red bg-color-red",

        task: "Serving Table 2",

        color: "bg-dark-blue-color",

        dotcolor: "bg-red-color",
    },
    {

        initials: "SK",

        name: "Shumaila Khan",

        phone: "+91-9715555555",

        role: "Cashier",

        shift: "Morning",

        status: "Present",

        statuscolor: "text-light-green bg-light-green",

        task: "Orders & Payments",

        color: "bg-light-purple-color",

        dotcolor: "bg-green-color",

    },
    {

        initials: "RK",

        name: "Razik Khan",

        phone: "+91-9715555555",

        role: "Cashier",

        shift: "Morning",

        status: "On Leave",

        statuscolor: "text-color-red bg-color-red",

        task: "Orders & Payments",

        color: "bg-dark-blue-color",

        dotcolor: "bg-red-color",
    },
    {

        initials: "DJ",

        name: "Dollar Jain",

        phone: "+91-9715555555",

        role: "Admin",

        shift: "Morning",

        status: "Present",

        statuscolor: "text-light-green bg-light-green",

        task: "-",

        color: "bg-light-purple-color",

        dotcolor: "bg-green-color",
    },
    {

        initials: "RK",

        name: "Razik Khan",

        phone: "+91-9715555555",

        role: "Cashier",

        shift: "Morning",

        status: "On Leave",

        statuscolor: "text-color-red bg-color-red",

        task: "Orders & Payments",

        color: "bg-dark-green-color",

        dotcolor: "bg-red-color",
    },
];


const StaffIcons = [
    { nav_img: magnify },
    { nav_img: Sort },
    { nav_img: bell },
];
const StaffHeading = [
    "Staff Data"
];
const StaffData = () => {
    // ==========  
    // State 
    // ============ 
    const [visibleRow, setVisibleRow] = useState(null);
    const [ModalOpen, setModalOpen] = useState(false);
    const [CurrentTab, setCurrentTab] = useState();



    // ==========  
    // Function 
    // ============
    const handleNotifyClick = (index) => {
        setVisibleRow(visibleRow === index ? null : index);
    };
    console.log('CurrentTab: ', CurrentTab);

    // Function Open Modal
    const openModal = () => {
        setModalOpen(true);
    };

    // Close Modal
    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <>
            <div className="flex h-screen overflow-hidden">
                {/* Left Sidebar */}
                <LeftSideNavbar />
                <ChatBot />


                {/* Main Content Area */}
                <div className={`flex-grow py-4 px-9 transition-all duration-300 me-6`}>

                    {/* <Navbar /> */}
                    <div className="border-b">
                        <Navbar icons={StaffIcons} pageHeading={StaffHeading} selectedTab={setCurrentTab} />
                    </div>

                    {/* Table Start */}
                    <div className="mt-4 border-t rounded-xl overflow-auto h-5/6 hidden-scroll">
                        <table className="w-full border border-t-0 rounded-xl">
                            <thead className="sticky top-0 bg-white mt-0 z-20">
                                <tr className="cashier-bg-table-color text-center">
                                    <th className="px-6 py-3 font-normal text-sm text-left">Employee Name</th>
                                    <th className="px-4 py-3 font-normal text-sm">Role</th>
                                    <th className="px-4 py-3 font-normal text-sm">Shift</th>
                                    <th className="px-4 py-3 font-normal text-sm">Status</th>
                                    <th className="px-4 py-3 font-normal text-sm">Notify</th>
                                    <th className="px-4 py-3 font-normal text-sm">Assigned Task</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white">
                                {employees.map((employee, index) => (
                                    <tr key={index} className="border-t text-center">
                                        <td className="px-6 py-3 flex items-center space-x-3 text-left">
                                            <span className={`w-10 h-10 flex items-center justify-center text-white text-lg font-medium rounded-md ${employee.color}`}>{employee.initials}</span>
                                            <div>
                                                <p className="text-color-black text-sm font-normal">{employee.name}</p>
                                                <p className="text-xs font-normal text-gray-500">{employee.phone}</p>
                                            </div>
                                        </td>
                                        <td className="px-6 py-3 text-color-black text-sm font-normal">{employee.role}</td>
                                        <td className="px-4 py-3 text-color-black text-sm font-normal">{employee.shift}</td>
                                        <td className="px-4 py-3 flex justify-center">
                                            <span className={`${employee.statuscolor} rounded-md px-3 font-medium text-xs flex items-center justify-center py-1`}>
                                                <span className={`w-2 h-2 ${employee.dotcolor} rounded-full mr-2`}></span> {employee.status}
                                            </span>
                                        </td>
                                        <td className="px-4 py-3 relative">
                                            <button className="px-7 py-2 border border-[--cashier-main-color] text-xs font-medium cashier-main-text-color rounded-full hover:bg-[--cashier-main-color] hover:text-white"
                                                onClick={() => handleNotifyClick(index)}
                                            >Notify</button>


                                            {visibleRow === index && (
                                                <div className="absolute top-[100%] left-1/2 transform -translate-x-1/2 -translate-y-3 flex space-x-8 p-2 z-10">
                                                    <button className="rounded-full bg-gray-light-color border h-10 w-10 flex items-center justify-center notify-chat"
                                                        onClick={() => openModal()}
                                                    >
                                                        <PiChatsBold className="text-xl cursor-pointer" />
                                                    </button>
                                                    <div className="rounded-full bg-gray-light-color h-10 w-10  flex items-center justify-center border notify-bell">
                                                        <HiOutlineBellAlert className="text-xl cursor-pointer" />
                                                    </div>
                                                    <div className="rounded-full bg-gray-light-color h-10 w-10  flex items-center justify-center border notify-call">
                                                        <BsTelephone className="text-xl cursor-pointer" />
                                                    </div>

                                                </div>
                                            )}
                                        </td>
                                        <td className="px-4 py-3 text-color-black text-sm font-normal">{employee.task}</td>
                                    </tr>

                                ))}
                            </tbody>
                        </table>
                    </div>
                    {/* Table End */}
                </div>
                {/* Right Sidebar */}
                <div
                    className={`transition-all duration-300 ease-in-out relative rounded-l-3xl 
                `}
                >
                    <RightSidebar />
                </div>

            </div>


            <StaffDataModal
                isOpen={ModalOpen}
                closeModal={closeModal}
            />
        </>
    );

};

export default StaffData;

