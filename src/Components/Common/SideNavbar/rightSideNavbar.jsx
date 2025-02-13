import React, { useState } from "react";

// import images
import edit from '../../Assets/Images/sidebarImg/edit.svg'
import call from '../../Assets/Images/sidebarImg/call.svg'
import trash from '../../Assets/Images/sidebarImg/Trash.svg'
import clendar from '../../Assets/Images/sidebarImg/calendar-tick.svg'
import openSchedule from '../../Assets/Images/sidebarImg/openSchedule.svg'
import closeSchedule from '../../Assets/Images/sidebarImg/openSchedule.svg'

// Third Party Components
import { NavLink } from "react-router-dom";
// Common
import DropDownInput from "../dropdownInput/dropDownInput";

// Json
const tableData = [
  { count: 6, label: "Active Tables", color: "bg-green-400" },
  { count: 3, label: "Available Tables", color: "bg-yellow-400" },
  { count: 20, label: "Reservations", color: "bg-red-400" },
];
const orders = [
  {
    name: "Mr. Rahul Vijay",
    bookingId: "123456789",
    dateTime: "10-12-2024; 5 PM",
    bookingFor: 7,
  },
  {
    name: "Mr. Rahul Vijay",
    bookingId: "123456789",
    dateTime: "10-12-2024; 5 PM",
    bookingFor: 7,
  },
  {
    name: "Mr. Rahul Vijay",
    bookingId: "123456789",
    dateTime: "10-12-2024; 5 PM",
    bookingFor: 7,
  },
];

const RightSidebar = () => {
  // ==========  
  // State 
  // ============ 
  const [isOpen, setIsOpen] = useState(true);


  // ==========  
  // Functions 
  // ============ 

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="h-screen">
      {/* Sidebar */}
      <div className="cashier-light-bg-color h-full rounded-l-3xl p-6 shadow-md z-0">
        {/* Create New Order Button */}
        <NavLink to={"/order"}>
          <button className="w-full cashier-main-bg-color text-white py-2 px-4 rounded-full font-semibold">
            + Create New Order
          </button>
        </NavLink>

        <div className="my-2 py-2 px-5 bg-[#ffffff4d] rounded-xl">
          <div className="text-center">
            <DropDownInput />
          </div>
          <div>
            {tableData.map((item, index) => (
              <div key={index} className="mt-3">
                <span
                  className={`md:w-10 md:h-10 md:pt-2 h-8 w-8 pt-1.5 text-center text-base inline-block rounded-full ${item.color} shadow-xl font-normal`}
                >
                  {item.count}
                </span>{" "}
                <span className="font-normal ms-4 lg:text-base md:text-sm">
                  {item.label}
                </span>
                {index !== tableData.length - 1 && (
                  <hr className="h-[1px] my-2 bg-white border-white" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Schedule New Order Button */}
        <button className="w-full text-base font-medium bg-[#ffffff4d] py-2 mb-3 mt-2 px-4 rounded-full border-white border">
          + Schedule New Order
        </button>

        {/* Scheduled Orders */}
        <div className="w-full max-w-md mx-auto px-2 pt-1 pb-1  bg-[#ffffff4d] rounded-lg shadow-md">
          {/* Accordion Header */}
          <div
            onClick={toggleAccordion}
            className="flex justify-between items-center cursor-pointer py-2"
          >
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-[#dc143c1a] rounded-full">
                <img className="h-5 w-5" src={clendar} alt="Loading" />
              </div>
              <h2 className="font-normal text-base">Scheduled Orders</h2>
            </div>

            <img className="me-2" src={isOpen ? openSchedule : closeSchedule} alt="Loading" />
          </div>

          {/* Schedule Accordion Content */}
          {isOpen && (
            <div className="h-96 overflow-auto hidden-scroll">
              {orders.map((order, index) => (
                <div key={index}>
                  <hr className="h-[1px] bg-white my-0 border-white" />
                  <div className="px-2 my-2 flex justify-between rounded-lg">
                    {/* Booking Details */}
                    <div>
                      {[
                        { label: "Name", value: order.name },
                        { label: "Booking ID", value: order.bookingId },
                        { label: "Date & Time", value: order.dateTime },
                        { label: "Booking for", value: order.bookingFor },
                      ].map((item, i) => (
                        <div key={i} className="flex justify-between items-center my-2">
                          <p className="text-xs flex items-center">
                            {item.label}: <span className="font-medium text-sm ps-1">{item.value}</span>
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Action Icons */}
                    <div className="">
                      <div className="w-6 h-6 my-2 bg-[#ffffff66] rounded-full flex items-center justify-center"><img className="w-100 h-4" src={edit} alt="Loading" /></div>
                      <div className="w-6 h-6 my-4 bg-[#ffffff66] rounded-full flex items-center justify-center"><img className="w-100 h-4" src={call} alt="Loading" /></div>
                      <div className="w-6 h-6 my-2 bg-[#ffffff66] rounded-full flex items-center justify-center"><img className="w-100 h-4" src={trash} alt="Loading" /></div>
                    </div>
                  </div>
                  {/* <hr className="h-[1px] bg-white my-0 border-white" /> */}
                </div>
              ))}
            </div>
          )}
        </div>

      </div>

      {/* Main Content */}
      {/* <div className="flex-1 p-6">Main Content Here</div> */}
    </div>
  );
};

export default RightSidebar;
