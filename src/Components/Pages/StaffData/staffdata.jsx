import React, { useState } from "react";
import LeftSideNavbar from "../../Common/SideNavbar/leftSideNavbar.jsx";
import RightSidebar from "../../Common/SideNavbar/rightSideNavbar.jsx";
// Images
import Toggle from "../../Assets/Images/sidebarImg/toggle.png";

const employees = [

    {

        initials: "DJ",

        name: "Dollar Jain",

        phone: "+91-9715555555",

        role: "Admin",

        shift: "Morning",

        status: "Present",

        task: "-",

        color: "bg-green-500"

    },

    {

        initials: "SK",

        name: "Shumaila Khan",

        phone: "+91-9715555555",

        role: "Cashier",

        shift: "Morning",

        status: "Present",

        task: "Orders & Payments",

        color: "bg-purple-400"

    }

];

const StaffData = () => {
    const [isRightSidebarOpen, setIsRightSidebarOpen] = useState(false);

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
                <div className="overflow-x-auto">
                    <table className="min-w-full border rounded-lg shadow-md">
                        <thead>
                            <tr className="bg-orange-100 text-left">
                                <th className="px-4 py-3">Employee Name</th>
                                <th className="px-4 py-3">Role</th>
                                <th className="px-4 py-3">Shift</th>
                                <th className="px-4 py-3">Status</th>
                                <th className="px-4 py-3">Notify</th>
                                <th className="px-4 py-3">Assigned Task</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white">

                            {employees.map((employee, index) => (
                                <tr key={index} className="border-t">
                                    <td className="px-4 py-3 flex items-center space-x-2">
                                        <span className={`w-10 h-10 flex items-center justify-center text-white font-bold rounded-full ${employee.color}`}>{employee.initials}</span>
                                        <div>
                                            <p className="font-medium text-gray-700">{employee.name}</p>
                                            <p className="text-sm text-gray-500">{employee.phone}</p>
                                        </div>
                                    </td>
                                    <td className="px-4 py-3 text-gray-700">{employee.role}</td>
                                    <td className="px-4 py-3 text-gray-700">{employee.shift}</td>
                                    <td className="px-4 py-3">
                                        <span className="text-green-600 font-semibold flex items-center">
                                            <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span> {employee.status}
                                        </span>
                                    </td>
                                    <td className="px-4 py-3">
                                        <button className="px-3 py-1 border border-orange-500 text-orange-500 rounded-full hover:bg-orange-100">Notify</button>
                                    </td>
                                    <td className="px-4 py-3 text-gray-700">{employee.task}</td>
                                </tr>

                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            {/* Right Sidebar */}
            <div
                className={`bg-gray-200 transition-all duration-300 ease-in-out relative rounded-l-3xl ${isRightSidebarOpen ? "w-80" : "w-7"
                    }`}
            >
                {/* <button
            onClick={toggleRightSidebar}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded absolute top-1/2 "
          >
            {isRightSidebarOpen ? "Close" : "Open"}
          </button> */}
                <span
                    className="bg-blue-700 hover:bg-blue-700 font-bold p-3 cursor-pointer rounded-full absolute top-1/2 -left-5"
                    onClick={toggleRightSidebar}
                >
                    <img src={Toggle} alt="Loading" />
                </span>

                <RightSidebar />
            </div>

        </div>


    );

};

export default StaffData;

