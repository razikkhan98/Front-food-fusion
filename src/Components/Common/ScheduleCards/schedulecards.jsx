import React, { useState } from "react";

// Common Components
import Button from "../Button/button";
import ScheduleContactModal from "../../Common/Modal/scheduleContactModal";

// Import Images
import edit from "../../Assets/Images/sidebarImg/edit.svg";
import call from "../../Assets/Images/sidebarImg/call.svg";
import trash from "../../Assets/Images/sidebarImg/Trash.svg";
import Cancel from "../../Assets/Images/schedule-img/cancel.svg";
import Tick from "../../Assets/Images/schedule-img/tick.svg";

// Import React Icons
import { IoIosArrowForward } from "react-icons/io";
import SuccessModal from "../Modal/SuccessModal";

const ScheduleCards = ({ scheduleStatus, orderType, orderStatus }) => {
  // ===========
  // State
  // ===========

  const [isOpen, setIsOpen] = useState(false);
  const [ModalOpen, setModalOpen] = useState(false);
  const [DeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState(null);
  // Open Modal for user login function
  const openModal = () => {
    setSelectedItems();
    setModalOpen(true);
  };
  const OpenDeleteModal = () => {
    setDeleteModalOpen(true);
  };

  // Close Modal for user login function
  const closeModal = () => {
    setModalOpen(false);
    setDeleteModalOpen(false);
  };

  return (
    <>

      {scheduleStatus === "Dine In" ? (
        <>
          <div className="relative bg-white shadow-md rounded-xl p-4 w-80">
            {/* Booking Details */}
            <div className="font-medium text-color-black mb-3">
              <p className="text-xs py-1">
                Name: <span className="text-sm">Mr. Rahul Vijay</span>
              </p>
              <p className="text-xs py-1">
                Booking ID: <span className="text-sm">1234567</span>
              </p>
              <p className="text-xs py-1">
                Date & Time: <span className="text-sm">10-12-25</span>
              </p>
            </div>

            {/* Button (Placeholder) */}
            <div className="border-b pb-2">
              <Button title={"Generate Order"} />
            </div>

            {/* Dine In Badge & Guests Count */}
            <div className="flex justify-between items-center mt-3">
              <span className="bg-light-green text-light-green px-3 py-1 text-xs font-medium rounded-md">
                Dine In
              </span>
              <div className="flex items-center gap-1 text-light-green">
                <span className="font-medium text-xs text-color-black">4</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  className="w-4 h-4"
                >
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5.5 5a5.5 5.5 0 1 1 11 0H2.5z" />
                </svg>
              </div>
            </div>

            {/* Dropdown Menu */}
            <div className="absolute top-3 right-3">
              <div className="relative">
                <button
                  className="px-2 rounded-full bg-light-color font-bold text-light-gray-color"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  ⋮
                </button>

                {/* Dropdown Items */}

                {isOpen && (
                  <div className="absolute right-0 mt-2 w-40 h-32 bg-white border rounded-lg shadow-lg">
                    <div className="m-2">
                      <button className="flex items-center gap-2 w-full px-4 border-b py-2 text-color-gray hover:text-black text-sm font-medium schedule-popup-hover">
                        <img src={call} className="w-3 h-3" alt="call" />{" "}
                        Contact
                      </button>
                      <button className="flex items-center gap-2 w-full border-b px-4 py-2 text-color-gray hover:text-black text-sm font-medium schedule-popup-hover">
                        <img src={edit} className="w-3 h-3" alt="edit" /> Edit
                      </button>
                      <button className="flex items-center gap-2 w-full px-4 py-2 text-sm text-color-gray hover:text-black font-medium schedule-popup-hover">
                        <img src={trash} className="w-4 h-4" alt="Trash" />{" "}
                        Cancel
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </>
      ) : scheduleStatus === "Delivery" || scheduleStatus === "Pickup" ? (
        <>
          <div className="relative bg-white shadow-md rounded-xl p-4 m-3 invoice-receipt">
            {/* Booking Details */}
            <div className="font-medium text-color-black mb-3">
              <p className="text-xs py-1">
                Name: <span className="text-sm">Mr. Rahul Vijay</span>
              </p>
              <p className="text-xs py-1">
                Booking ID: <span className="text-sm">1234567</span>
              </p>
              <p className="text-xs py-1">
                Date & Time: <span className="text-sm">10-12-25</span>
              </p>
              <div className="relative group w-full">
                <p className="text-xs py-2 w-full overflow-hidden text-ellipsis line-clamp-2">
                  <span> Address:</span>
                  <span className="text-sm">
                    15, Kashish Colony, Civil Lines Indore, MP, 324452
                  </span>
                </p>
                {/* Tooltip (Hidden by Default, Shows on Hover) */}
                <span className="absolute left-0 bottom-full w-max max-w-xs bg-light-gray-color text-white text-xs p-2 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-50">
                  15, Kashish Colony, Civil Lines Indore, MP, 324452
                </span>
              </div>
            </div>

            {/* Dine In Badge & Guests Count */}
            <div className="flex justify-between items-center mt-3 border-t pt-3">
              <div>
                {orderType === "Delivery" && (
                  <span className="bg-light-orange-color text-color-orange px-3 py-1 text-xs font-medium rounded-md me-3">
                    Delivery
                  </span>
                )}
                {orderType === "Pickup" && (
                  <span className="bg-light-pink-color text-color-pink px-3 py-1 text-xs font-medium rounded-md me-3">
                    Pick Up
                  </span>
                )}
                <span className="bg-light-purple-color text-purple-color px-3 py-1 text-xs font-medium rounded-md">
                  COD
                </span>
              </div>
              <div className="flex items-center text-color-black text-xs font-medium">
                <p>Order Details</p>
                <IoIosArrowForward className="text-lg" />
              </div>
            </div>

            {/* Dropdown Menu */}
            <div className="absolute top-3 right-3">
              <div className="relative">
                <button
                  className="px-2 rounded-full bg-light-color font-bold text-light-gray-color"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  ⋮
                </button>

                {/* Dropdown Items */}

                {isOpen && (
                  <div className="absolute right-0 mt-2 w-40 h-32 bg-white border rounded-lg shadow-lg">
                    <div className="m-2">
                      <button
                        className="flex items-center gap-2 w-full px-4 border-b py-2 text-color-gray hover:text-black text-sm font-medium schedule-popup-hover"
                        onClick={() => openModal()}
                      >
                        <img src={call} className="w-3 h-3" alt="call" />{" "}
                        Contact
                      </button>
                      <button className="flex items-center gap-2 w-full border-b px-4 py-2 text-color-gray hover:text-black text-sm font-medium schedule-popup-hover">
                        <img src={edit} className="w-3 h-3" alt="edit" /> Edit
                      </button>
                      <button
                        onClick={() => OpenDeleteModal()}
                        className="flex items-center gap-2 w-full px-4 py-2 text-sm text-color-gray hover:text-black font-medium schedule-popup-hover"
                      >
                        <img src={trash} className="w-4 h-4" alt="Trash" />{" "}
                        Cancel
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </>
      ) : scheduleStatus === "Completed" ? (
        <>
          <div className="relative bg-white shadow-md rounded-xl p-4 m-3 invoice-receipt h-56">
            {/* Booking Details */}
            <div className="font-medium text-color-black mb-3">
              <p className="text-xs py-1">
                Name: <span className="text-sm">Mr. Rahul Vijay</span>
              </p>
              <p className="text-xs py-1">
                Booking ID: <span className="text-sm">1234567</span>
              </p>
              <p className="text-xs py-1">
                Date & Time: <span className="text-sm">10-12-25</span>
              </p>
            </div>

            {/* Button (Placeholder) */}
            <div className="border-b pb-2">
              <Button title={"Order-Details"} />
            </div>

            {/* Dine In Badge & Guests Count */}
            <div className="flex justify-between items-center mt-3">
              <div>
                {orderType === "Dine In" && (
                  <span className="bg-light-green text-light-green px-3 py-1 text-xs font-medium rounded-md me-3">
                    Dine In
                  </span>
                )}
                {orderType === "Delivery" && (
                  <span className="bg-light-orange-color text-color-orange px-3 py-1 text-xs font-medium rounded-md me-3">
                    Delivery
                  </span>
                )}
                {orderType === "Pickup" && (
                  <span className="bg-light-pink-color text-color-pink px-3 py-1 text-xs font-medium rounded-md me-3">
                    Pick Up
                  </span>
                )}
                <span className="bg-light-purple-color text-purple-color px-3 py-1 text-xs font-medium rounded-md">
                  Cash Payment
                </span>
              </div>
              {orderType === "Dine In" && (
                <div className="flex items-center gap-1 text-light-green">
                  <span className="font-medium text-xs text-color-black">
                    4
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    className="w-4 h-4"
                  >
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5.5 5a5.5 5.5 0 1 1 11 0H2.5z" />
                  </svg>
                </div>
              )}
            </div>

            {/* Dropdown Menu */}
            <div className="absolute top-3 right-3">
              {orderStatus === "complete" && (
                <img src={Tick} alt="Loading" className="w-5 h-5" />
              )}
              {orderStatus === "cancel" && (
                <img src={Cancel} alt="Loading" className="w-5 h-5" />
              )}
            </div>
          </div>
        </>
      ) : (
        <> </>
      )}

      <ScheduleContactModal
        isOpen={ModalOpen}
        closeModal={closeModal}
        selectedItems={selectedItems}
      />

      <SuccessModal
        isOpen={DeleteModalOpen}
        closeModal={closeModal}
        // image={Tick}
        title={"Cancel Scheduled?"}
        description={"Are you sure want to cancel the schedule?"}
        buttonTexts={["Yes, Cancel", "No Don't Cancel"]}
      />
    </>
  );
};

export default ScheduleCards;
