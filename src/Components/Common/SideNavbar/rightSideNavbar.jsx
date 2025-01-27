import React, { useState } from "react";

// import images
import edit from '../../Assets/Images/sidebarImg/edit.svg'
import call from '../../Assets/Images/sidebarImg/call.svg'
import trash from '../../Assets/Images/sidebarImg/Trash.svg'
import clendar from '../../Assets/Images/sidebarImg/calendar-tick.svg'
import openSchedule from '../../Assets/Images/sidebarImg/openSchedule.svg'
import closeSchedule from '../../Assets/Images/sidebarImg/openSchedule.svg'
import { NavLink } from "react-router-dom";
import DropDownInput from "../DropdownInput/dropDownInput";



const RightSidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

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
            <DropDownInput/>
          </div>
          <div className="mt-2.5">
            <span className="  w-9 h-9 pt-1.5 text-center inline-block  rounded-full bg-green-400 shadow-xl font-semibold">
              6
            </span>{" "}
            <span className="font-semibold ms-4 lg:text-base md:text-sm">Active Tables</span>
          </div>
          <hr className="h-[2px] my-2 bg-white border-white" />
          <div className="mt-3">
            <span className="  w-9 h-9 pt-1.5 text-center inline-block  rounded-full bg-yellow-400 shadow-xl font-semibold">
              3
            </span>{" "}
            <span className="font-semibold ms-4 lg:text-base md:text-sm">Available Tables</span>
          </div>
          <hr className="h-[1.5px] my-2 bg-white border-white" />
          <div className="mt-3">
            <span className="  w-9 h-9 pt-1.5 text-center inline-block  rounded-full bg-red-400 shadow-xl font-semibold">
              20
            </span>{" "}
            <span className="font-semibold ms-4 lg:text-base md:text-sm">Reservations</span>
          </div>
        </div>

        {/* Schedule New Order Button */}
        <button className="w-full bg-[#ffffff4d] py-2 mb-3 mt-2 px-4 rounded-full border-white border-2">
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
                <img src={clendar} alt="" />
              </div>
              <h2 className="font-semibold text-lg">Scheduled Orders</h2>
            </div>
            {/* <i
              className={`fas ${
                isOpen ? "fa-chevron-up" : "fa-chevron-down"
              } text-gray-600`}
            ></i> */}
            <img src={isOpen ? openSchedule : closeSchedule} alt="" />
          </div>

          {/* Accordion Content */}
          {isOpen && (
            <div className="">
              {/* First Order */}
              <hr className="h-[2px] bg-white my-0 border-white" />
              <div className="px-2  my-2 flex  justify-between  rounded-lg">
                <div className="">
                  <div className="flex justify-between items-center my-2">
                    <div>
                      <p className="text-sm">
                        Name:{" "}
                        <span className="font-medium">Mr. Rahul Vijay</span>
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center my-2">
                    <div>
                      <p className="text-sm">
                        Booking ID:{" "}
                        <span className="font-medium">123456789</span>
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center my-2">
                    <div>
                      <p className="text-sm">
                        Date & Time:{" "}
                        <span className="font-medium">10-12-2024; 5 PM</span>
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center my-2">
                    <div>
                      <p className="text-sm">
                        Booking for: <span className="font-medium">7</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="">
                <div className="w-7 h-7 my-1 bg-[#ffffff66] rounded-full flex items-center justify-center"><img className="w-100" src={edit} alt="" /></div>
                <div className="w-7 h-7 my-1 bg-[#ffffff66] rounded-full flex items-center justify-center"><img className="w-100" src={call} alt="" /></div>
                <div className="w-7 h-7 my-1 bg-[#ffffff66] rounded-full flex items-center justify-center"><img className="w-100" src={trash} alt="" /></div>
                </div>
              </div>
              <hr className="h-[2px] bg-white my-0 border-white" />

              {/* Second Order */}
              <div className="px-2  my-2 flex  justify-between  rounded-lg">
                <div className="">
                  <div className="flex justify-between items-center my-2">
                    <div>
                      <p className="text-sm">
                        Name:{" "}
                        <span className="font-medium">Mr. Rahul Vijay</span>
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center my-2">
                    <div>
                      <p className="text-sm">
                        Booking ID:{" "}
                        <span className="font-medium">123456789</span>
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center my-2">
                    <div>
                      <p className="text-sm">
                        Date & Time:{" "}
                        <span className="font-medium">10-12-2024; 5 PM</span>
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center my-2">
                    <div>
                      <p className="text-sm">
                        Booking for: <span className="font-medium">7</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="">
                <div className="w-7 h-7 my-1 bg-[#ffffff66] rounded-full flex items-center justify-center"><img className="w-100" src={edit} alt="" /></div>
                <div className="w-7 h-7 my-1 bg-[#ffffff66] rounded-full flex items-center justify-center"><img className="w-100" src={call} alt="" /></div>
                <div className="w-7 h-7 my-1 bg-[#ffffff66] rounded-full flex items-center justify-center"><img className="w-100" src={trash} alt="" /></div>
                </div>
              </div>
              <hr className="h-[2px] bg-white my-0 border-white" />
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
