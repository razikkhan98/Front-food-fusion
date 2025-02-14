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

        statuscolor: "text-green-600 bg-light-green",

        task: "-",

        color: "bg-green-500",

        dotcolor: "bg-green-500",
    },

    {

        initials: "SK",

        name: "Razik Khan",

        phone: "+91-9715555555",

        role: "Cashier",

        shift: "Morning",

        status: "On Leave",

        statuscolor: "text-red-600 bg-color-red",

        task: "Orders & Payments",

        color: "bg-purple-400",

        dotcolor: "bg-red-500",
    },
    {

        initials: "RK",

        name: "Shumaila Khan",

        phone: "+91-9715555555",

        role: "Cashier",

        shift: "Morning",

        status: "Present",

        statuscolor: "text-green-600 bg-light-green",

        task: "Orders & Payments",

        color: "bg-purple-400",

        dotcolor: "bg-green-500",

    },
    {

        initials: "SK",

        name: "Razik Khan",

        phone: "+91-9715555555",

        role: "Cashier",

        shift: "Morning",

        status: "On Leave",

        statuscolor: "text-red-600 bg-color-red",

        task: "Orders & Payments",

        color: "bg-purple-400",

        dotcolor: "bg-red-500",
    },
    {

        initials: "DJ",

        name: "Dollar Jain",

        phone: "+91-9715555555",

        role: "Admin",

        shift: "Morning",

        status: "Present",

        statuscolor: "text-green-600 bg-light-green",

        task: "-",

        color: "bg-green-500",

        dotcolor: "bg-green-500",
    },
    {

        initials: "SK",

        name: "Razik Khan",

        phone: "+91-9715555555",

        role: "Cashier",

        shift: "Morning",

        status: "On Leave",

        statuscolor: "text-red-600 bg-color-red",

        task: "Orders & Payments",

        color: "bg-purple-400",

        dotcolor: "bg-red-500",
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

            {/* Main Content Area */}
            <div className={`flex-grow p-4 transition-all duration-300`}>


                {/* <Navbar /> */}
                <Navbar icons={StaffIcons} pageHeading={StaffHeading} />

                {/* Table Start */}
                <div className="bg-white mt-4 border rounded-xl overflow-auto h-80">
                    <table className="w-full border rounded-xl shadow-md">
                        <thead>
                            <tr className="cashier-bg-table-color text-left">
                                <th className="px-6 py-3 font-medium">Employee Name</th>
                                <th className="px-4 py-3 font-medium">Role</th>
                                <th className="px-4 py-3 font-medium">Shift</th>
                                <th className="px-4 py-3 font-medium">Status</th>
                                <th className="px-4 py-3 font-medium">Notify</th>
                                <th className="px-4 py-3 font-medium">Assigned Task</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white">
                            {employees.map((employee, index) => (
                                <tr key={index} className="border-t text-left">
                                    <td className="px-6 py-3 flex items-center space-x-3">
                                        <span className={`w-10 h-10 flex items-center justify-center text-white font-bold rounded-md ${employee.color}`}>{employee.initials}</span>
                                        <div>
                                            <p className="font-medium text-gray-900">{employee.name}</p>
                                            <p className="text-sm text-gray-500">{employee.phone}</p>
                                        </div>
                                    </td>
                                    <td className="px-4 py-3 text-gray-900">{employee.role}</td>
                                    <td className="px-4 py-3 text-gray-900">{employee.shift}</td>
                                    <td className="px-4 py-3">
                                        <span className={`${employee.statuscolor} rounded-lg font-semibold flex items-center justify-center py-1`}>
                                            <span className={`w-2 h-2 ${employee.dotcolor} rounded-full mr-2`}></span> {employee.status}
                                        </span>
                                    </td>
                                    <td className="px-4 py-3">
                                        <button className="px-3 py-1 border border-[--cashier-main-color] cashier-main-text-color rounded-full hover:bg-[--cashier-main-color] hover:text-white">Notify</button>
                                    </td>
                                    <td className="px-4 py-3 text-gray-700">{employee.task}</td>
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

