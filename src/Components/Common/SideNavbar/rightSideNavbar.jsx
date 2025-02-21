import React, { useState } from "react";

// import images
import edit from '../../Assets/Images/sidebarImg/edit.svg'
import call from '../../Assets/Images/sidebarImg/call.svg'
import trash from '../../Assets/Images/sidebarImg/Trash.svg'
import clendar from '../../Assets/Images/sidebarImg/calendar-tick.svg'
import openSchedule from '../../Assets/Images/sidebarImg/openSchedule.svg'
import closeSchedule from '../../Assets/Images/sidebarImg/closeSchedule.svg'
import Plus from "../../Assets/Images/sidebarImg/Plus.svg";
import PlusBlack from "../../Assets/Images/sidebarImg/Plus-black.svg";
// Third Party Components
import { NavLink } from "react-router-dom";
// Common
import DropDownInput from "../DropdownInput/dropDownInput";

// Json
const tableData = [
  { count: 6, label: "Active Tables", color: "bg-green-status-color" },
  { count: 3, label: "Available Tables", color: "bg-[--yellow-color]" },
  { count: 20, label: "Reservations", color: "bg-[--red-color] text-white" },
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
  console.log('isOpen: ', isOpen);


  // ==========  
  // Functions 
  // ============ 

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="h-screen rightside-panel">
      {/* Sidebar */}
      <div className="cashier-light-bg-color h-full rounded-l-3xl p-6 shadow-md z-0">
        {/* Create New Order Button */}
        <NavLink to={"/order"}>
          <button className="w-full cashier-main-bg-color text-white py-2 px-4 rounded-full font-medium text-base flex items-center justify-center">
            <img src={Plus} className="me-2 h-5 w-5" alt="Loading" /> Create New Order
          </button>
        </NavLink>

        <div className="mt-5 py-2 px-5 bg-[#ffffff4d] rounded-2xl">
          <div className="text-center mb-8 mt-5">
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
                  <hr className="my-2 bg-white border-white" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Schedule New Order Button */}
        <button className="w-full text-base font-medium bg-[#ffffff4d] py-2 my-5 px-4 rounded-full border-white border flex items-center justify-center">
          <img src={PlusBlack} className="me-2 h-5 w-5" alt="Loading" />  Schedule New Order
        </button>

        {/* Scheduled Orders */}
        <div className="w-full max-w-md mx-auto px-2 pt-1 pb-1  bg-[#ffffff4d] rounded-2xl shadow-md">
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
            <div className="h-80 overflow-auto hidden-scroll">
              {orders.map((order, index) => (
                <div key={index}>
                  <hr className="bg-white my-0 border-white" />
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
                      <div className="w-6 h-6 my-3 bg-[#ffffff66] rounded-full flex items-center justify-center"><img className="w-100 h-4" src={edit} alt="Loading" /></div>
                      <div className="w-6 h-6 my-4 bg-[#ffffff66] rounded-full flex items-center justify-center"><img className="w-100 h-4" src={call} alt="Loading" /></div>
                      <div className="w-6 h-6 my-3 bg-[#ffffff66] rounded-full flex items-center justify-center"><img className="w-100 h-4" src={trash} alt="Loading" /></div>
                    </div>
                  </div>
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
