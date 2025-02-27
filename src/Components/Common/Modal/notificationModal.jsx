// import React, { useState } from "react";

// // Third party components
// import { Dialog } from "@headlessui/react";
// import { RxCross2 } from "react-icons/rx";
// import { NavLink } from "react-router-dom";

// // images
// import inLarge from "../../Assets/icons/inLarge.svg";

// const NotificationModal = ({ isOpen, onClose }) => {
//   // ==========
//   // State
//   // ============
//   const [selectedItems, setSelectedItems] = useState({});
//   const [notes, setNotes] = useState("");

//   // ==========
//   // Functions
//   // ============

//   return (
//     <Dialog
//       open={isOpen}
//       onClose={onClose}
//       className="relative inset-0 z-10 flex items-center justify-center"
//     >
//       {/* Overlay */}
//       <div
//         className=" inset-0 bg-black bg-opacity-50"
//         aria-hidden="true"
//         // onClick={handleModalClose}
//       />

//       {/* Modal Content */}
//       <div className="absolute inset-0 flex items-center justify-center z-50">
//         <div className="bg-white rounded-2xl shadow-lg notification-modal">
//           <div className="h-36 bg-[--cashier-light-color] rounded-t-2xl py-6 px-4">
//             <div className="flex justify-between items-center">
//               <NavLink className="flex justify-center items-center bg-white h-9 w-9 rounded-full">
//                 <img
//                   className="w-full h-5 text-color-gray text-lg cursor-pointer"
//                   src={inLarge}
//                   alt=""
//                 />
//               </NavLink>
//               <button
//                 onClick={onClose}
//                 className="flex justify-center items-center bg-white h-9 w-9 rounded-full"
//               >
//                 <RxCross2 className="text-color-gray text-lg cursor-pointer" />
//               </button>
//             </div>
//             <div className="mt-9 flex justify-between">
//               <button className="px-5 py-2 rounded-lg text-[--gray-color] text-sm font-normal">
//                 General Notifications
//               </button>
//               <button className="px-5 py-2 bg-white text-[--black-color] rounded-lg text-sm font-normal">
//                 Online Deliveries
//               </button>
//             </div>
//           </div>
//           {/* <div className="h-48 overflow-scroll hidden-scroll"></div> */}
//           {/* <hr /> */}
//         </div>
//       </div>
//     </Dialog>
//   );
// };

// export default NotificationModal;

import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { NavLink } from "react-router-dom";

// images
import inLarge from "../../Assets/icons/inLarge.svg";
import zomato from "../../Assets/Images/navbar-img/zomato.png";
import swiggy from "../../Assets/Images/navbar-img/swiggy.png";
import Button from "../Button/button";

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

const NotificationModal = ({ isOpen, onClose }) => {
  // ==========
  // State
  // ==========

  // ==========
  // function
  // ==========

  return (
    <div className="">
      {/* Modal Component */}
      {isOpen && (
        <div className="fixed notification-modal notification-modal-box rounded-2xl bg-white top-28 right-14 z-50 transition-all overflow-hidden duration-300 ease-in-out">
          <div className="h-36 bg-[--cashier-light-color] rounded-t-2xl py-6 px-4 mb-1">
            <div className="flex justify-between items-center">
              <NavLink className="flex justify-center items-center bg-white h-9 w-9 rounded-full">
                <img
                  className="w-full h-5 text-color-gray text-lg cursor-pointer"
                  src={inLarge}
                  alt=""
                />
              </NavLink>
              <button
                onClick={onClose}
                className="flex justify-center items-center bg-white h-9 w-9 rounded-full"
              >
                <RxCross2 className="text-color-gray text-lg cursor-pointer" />
              </button>
            </div>
            <div className="mt-9 flex justify-between">
              <button className="px-5 py-2 rounded-lg text-[--gray-color] text-sm font-normal">
                General Notifications
              </button>
              <button className="px-5 py-2 bg-white text-[--black-color] rounded-lg text-sm font-normal">
                Online Deliveries
              </button>
            </div>
          </div>
          {/* Notification Content */}
          <div className="overflow-scroll hidden-scroll notification-modal-content">
          {notifications?.map((i, index) => (
            <>
              <div className="p-4 border-b border-gray-200">
                <div className="flex items-star">
                  <div className="mr-3">
                    <img
                      className="w-10 h-10 rounded p-1 border"
                      src={i?.icon}
                      alt="Icon"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <div className="text-base font-normal text-[--black-color]">
                        {i?.title}
                      </div>
                      <div className="text-[--gray-color] text-exs font-normal ">
                        {i?.time}
                      </div>
                    </div>
                    <p className="text-[--gray-color] text-xs font-normal">
                      {i?.description}
                    </p>
                <div className={`flex mt-4 ${index == 0 ? "" : 'hidden'}`}>
                <button
                    className={`px-4 py-1 me-6  border-cashier text-xs font-normal cashier-main-text-color rounded-full`}
                    type="submit"
                  >
                    Decline
                  </button>
                  <button
                    className={`px-4 py-1 text-xs font-normal cashier-main-bg-color text-white rounded-full`}
                    type="submit"
                  >
                    Accept
                  </button>
                </div>
                  </div>
                </div>
              </div>
            </>
          ))}
          </div>
          {/* <div className="h-48 overflow-scroll hidden-scroll"></div> */}
          {/* <hr /> */}
        </div>
        // </div>
      )}

      {/* Optional: Overlay */}
      {isOpen && (
        <div 
          onClick={onClose}
          className="fixed inset-0 z-40"
        ></div>
      )}
    </div>
  );
};

export default NotificationModal;
