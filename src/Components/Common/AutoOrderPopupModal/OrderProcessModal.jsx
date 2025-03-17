import React, { useState } from "react";
// Third party components
import { Dialog } from "@headlessui/react";
import { useForm } from "react-hook-form";
import { RxCross2 } from "react-icons/rx";
// import { NavLink } from "react-router-dom";

// import images
import swiggy from "../../Assets/Images/navbar-img/swiggy.png";
import OrderProcessTime from "../OrderProcessTime/orderProcessTime";
import AutoOrderProcessDropdown from "../AutoSuggestSearchBar/OrderProcess";

const options = [
  "Apple",
  "Banana",
  "Orange",
  "Grape",
  "Strawberry",
  "Blueberry",
  "Watermelon",
  "Pineapple",
  "Mango",
  "Peach",
];

const OrderProcessModal = ({ isOpen, closeModal, order }) => {
  // ==========
  // UseFrom
  // ============
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // ==========
  // State
  // ============
  const [declineOpt, setdeclineOpt] = useState()

  // ==========
  // Functions
  // ============

  // Close the modal and reset the form
  const handleModalClose = () => {
    reset();
    closeModal();
  };

  // Submit the form
  const onSubmitHandler = async (payload) => {
    // await onSubmit(payload);
  };



  return (
    <Dialog
      open={isOpen}
      onClose={handleModalClose}
      className={`fixed inset-0 z-10 flex items-center justify-center ${isOpen ? 'backdrop-brightness-50' : ''}`}
    >
      {/* Overlay */}
      <div
        className="fixed inset-0"
        aria-hidden="true"
        onClick={handleModalClose}
      />

      {/* Modal Content */}
      <div
        className={`bg-white p-6 rounded-2xl border-light-gray-color z-20 login-modal relative  mx-auto`}
      >
        {/* Close Button */}
        <div className="flex justify-between items-center">
          <div class="text-light-green h-full text-xs font-medium bg-light-green px-2 py-1 rounded-md inline-block">
            Prepaid
          </div>
          <button
            onClick={handleModalClose}
            className="flex justify-center items-center bg-color-gray h-9 w-9 rounded-full"
          >
            <RxCross2 className="text-color-gray text-lg cursor-pointer" />
          </button>
        </div>

        {/* Modal Body */}
        {order?.status == "Accept" ? (
          <div className="w-14 h-14 m-auto">
            <img
              className="uppercase rounded-md bg-white p-2 text-base font-normal text-light-gray-color text-center border w-full h-14"
              src={swiggy}
              alt=""
            />
          </div>
        ) : (
          <div className="w-14 h-14 m-auto">
            {/* <img
              className="uppercase rounded-md bg-white p-2 text-base font-normal text-light-gray-color text-center border w-full h-14"
              src={swiggy}
              alt=""
            /> */}
          </div>
        )}
        <div className="text-center mt-4">
          {order?.status == "Accept" ? (
            <h5 className="text-2xl font-semibold">Promised Prep Time</h5>
          ) : (
            <h2 className="text-2xl font-semibold">Order Declined!!</h2>
          )}
          {order?.status == "Accept" ? (
            <p className="text-xs font-normal mt-2">
              Pick up will be scheduled accordingly!
            </p>
          ) : (
            <>
              <p className="text-xs font-normal mt-2">
                Looks like you have just declined an online order.
              </p>
              <p className="text-xs font-normal">
                Please Enter a valid reason for the decline.
              </p>
            </>
          )}
        </div>
        {order?.status == "Accept" ? (
          <div className="flex justify-center mt-12 mb-16">
            <OrderProcessTime />
          </div>
        ) : (
          <div className="mt-7 mb-24 flex justify-center">
            <AutoOrderProcessDropdown selectedOption={setdeclineOpt} options={options} />
          </div>
        )}
        {/* Modal Footer */}
        {order?.status == "Accept" ? (
          <div class={`flex mt-4  justify-center`}>
            <button
              onClick={handleModalClose}
              class="px-8 py-2.5 w-full  text-base font-medium rounded-full cashier-main-bg-color text-white"
            >
              Confirm
            </button>
          </div>
        ) : (
          <div class={`flex mt-4  justify-between`}>
            <button class="px-8 py-2.5 w-56 bg-white text-base font-medium rounded-full border-cashier-1 cashier-main-text-color">
              Go Back
            </button>
            <button
              class={`px-8 py-2.5 w-56  text-base font-medium rounded-full  text-white ${
                declineOpt
                  ?
                  "cashier-main-bg-color"
                  :
                  "btn-bg-gray-color text-light-gray-color cursor-not-allowed"
              }`}
            >
              Submit
            </button>
          </div>
        )}
      </div>
    </Dialog>
  );
};

export default OrderProcessModal;
