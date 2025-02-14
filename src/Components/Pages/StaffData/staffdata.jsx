import React, { useState } from "react";
// Common Components
import LeftSideNavbar from "../../Common/SideNavbar/leftSideNavbar.jsx";
import RightSidebar from "../../Common/SideNavbar/rightSideNavbar.jsx";


// Images
import Navbar from "../../Common/Navbar/navbar.jsx";
import Toggle from "../../Assets/Images/sidebarImg/toggle.png";
import bell from "../../Assets/Images/navbar-img/bell.svg";
import magnify from "../../Assets/Images/navbar-img/MagnifyingGlass.svg";
import Sort from "../../Assets/Images/navbar-img/SortAscending.svg";
import ChatBot from "../../Common/ChatBot/chatbot.jsx";
import { MdOutlineKeyboardDoubleArrowLeft, MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
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

        shift: "Morning",

        status: "Present",

        statuscolor: "text-light-green bg-light-green",

        task: "-",

        color: "bg-dark-green-color",

        dotcolor: "bg-green-color",
    },

    {

        initials: "SK",

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

        initials: "RK",

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

        initials: "SK",

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

        initials: "SK",

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
]
const StaffData = () => {
    // ==========  
    // State 
    // ============ 
    const [isRightSidebarOpen, setIsRightSidebarOpen] = useState(false);


    // ==========  
    // Function 
    // ============

    // Open & Close Function For RightSide Panel 
    const toggleRightSidebar = () => {
        setIsRightSidebarOpen(!isRightSidebarOpen);
    };

    return (
        <div className="flex h-screen overflow-hidden">
            {/* Left Sidebar */}
            <LeftSideNavbar />
            <ChatBot />
            {/* Main Content Area */}
            <div className={`flex-grow py-4 px-9 transition-all duration-300`}>


                {/* <Navbar /> */}
                <Navbar icons={StaffIcons} pageHeading={StaffHeading} />

                {/* Table Start */}
                <div className="bg-white mt-4 border rounded-xl overflow-auto h-3/4 hidden-scroll">
                    <table className="w-full border rounded-xl shadow-md">
                        <thead className="sticky top-0 bg-white">
                            <tr className="cashier-bg-table-color text-center">
                                <th className="px-6 py-3 font-normal text-sm text-left w-[20%]">Employee Name</th>
                                <th className="px-4 py-3 font-normal text-sm w-[15%]">Role</th>
                                <th className="px-4 py-3 font-normal text-sm w-[15%]">Shift</th>
                                <th className="px-4 py-3 font-normal text-sm w-[15%]">Status</th>
                                <th className="px-4 py-3 font-normal text-sm w-[15%]">Notify</th>
                                <th className="px-4 py-3 font-normal text-sm w-[20%">Assigned Task</th>
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
                                    <td className="px-4 py-3">
                                        <button className="px-3 py-1 border border-[--cashier-main-color] cashier-main-text-color rounded-full hover:bg-[--cashier-main-color] hover:text-white">Notify</button>
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

    );

};

export default StaffData;

