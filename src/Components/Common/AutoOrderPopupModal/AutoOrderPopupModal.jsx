import React, { useState } from "react";
// Third party components
import { Dialog } from "@headlessui/react";
import { useForm } from "react-hook-form";
import { RxCross2 } from "react-icons/rx";
// import { NavLink } from "react-router-dom";
// import 'animate.css';

// import images
import swiggy from "../../Assets/Images/navbar-img/swiggy.png";
import OrderProcessModal from "./OrderProcessModal";

const AutoOrderPopupModal = ({ isOpen, closeModal, modalIndex, modalId }) => {
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
  const [ProcessModal, setProcessModal] = useState(false);
  const [selectedOrder, setselectedOrder] = useState();

  // ==========
  // Functions
  // ============

  // Modal Array for modal width design
  const ModalArray = [1, 2, 3];

  // Close the modal and reset the form
  const handleModalClose = () => {
    reset();
    closeModal();
  };

  // Submit the form
  const onSubmitHandler = async (payload) => {
    // await onSubmit(payload);
  };

  const clossProcessModal = () => setProcessModal(false);
  const AcceptOrdProcessModal = (id) => {
    setselectedOrder({
      id,
      status: "Accept",
    });
    setProcessModal(true);
  };
  const DeclineOrdProcessModal = (id) => {
    setselectedOrder({
      id,
      status: "Decline",
    });
    setProcessModal(true);
  };

  return (
    <>
      <Dialog
        open={isOpen}
        onClose={handleModalClose}
        className={`fixed inset-0 z-10 flex items-center justify-center  ${
          modalIndex == 0 ? "auto-modal-background" : ""
        }`}
      >
        {/* Overlay */}
        <div
          className="fixed inset-0"
          aria-hidden="true"
          onClick={handleModalClose}
        />

        {/* Modal Content */}
        <div
          className={`bg-white p-6 rounded-2xl border-light-gray-color z-20  relative mx-auto login-modal`}
          style={{ marginTop: `${modalIndex * 20}px` }}
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
          <div className="w-14 h-14 m-auto">
            <img
              className="uppercase rounded-md bg-white p-2 text-base font-normal text-light-gray-color text-center border w-full h-14"
              src={swiggy}
              alt=""
            />
          </div>
          <div className="text-center mt-4">
            <h5 className="text-2xl font-semibold">
              New Order Received from Swiggy
            </h5>
            <p className="text-xs font-normal mt-2">
              Prepare deliciously! Review details and take action now.
            </p>
          </div>
          {/* item table */}
          <div className="auto-online-order-scroll pr-3 h-48 overflow-y-scroll">
            <table className="w-full border border-l-0 border-r-0 rounded-xl mt-5">
              <thead className="sticky top-0 bg-white mt-0 z-20">
                <tr className=" text-center">
                  <th className="text-light-gray-color px-6 py-3 font-normal text-sm text-start ">
                    Item Name
                  </th>
                  <th className="text-light-gray-color px-4 py-3 font-normal text-sm">
                    Qty
                  </th>
                  <th className="text-light-gray-color px-4 py-3 font-normal text-sm text-end">
                    Price
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white">
                <tr className="border-t text-center">
                  <td className="px-6 py-3 text-color-black text-xs text-color-gray font-normal text-start">
                    Item Name
                  </td>
                  <td className="px-4 py-3 text-color-black text-xs text-color-gray font-normal">
                    7
                  </td>
                  <td className="px-4 py-3 text-color-black text-xs text-color-gray font-normal text-end">
                    ₹700
                  </td>
                </tr>
                <tr className="border-t text-center">
                  <td className="px-6 py-3 text-color-black text-xs text-color-gray font-normal text-start">
                    Item Name
                  </td>
                  <td className="px-4 py-3 text-color-black text-xs text-color-gray font-normal">
                    7
                  </td>
                  <td className="px-4 py-3 text-color-black text-xs text-color-gray font-normal text-end">
                    ₹700
                  </td>
                </tr>
                <tr className="border-t text-center">
                  <td className="px-6 py-3 text-color-black text-xs text-color-gray font-normal text-start">
                    Item Name
                  </td>
                  <td className="px-4 py-3 text-color-black text-xs text-color-gray font-normal">
                    7
                  </td>
                  <td className="px-4 py-3 text-color-black text-xs text-color-gray font-normal text-end">
                    ₹700
                  </td>
                </tr>
                <tr className="border-t text-center">
                  <td className="px-6 py-3 text-color-black text-xs text-color-gray font-normal text-start">
                    Item Name
                  </td>
                  <td className="px-4 py-3 text-color-black text-xs text-color-gray font-normal">
                    7
                  </td>
                  <td className="px-4 py-3 text-color-black text-xs text-color-gray font-normal text-end">
                    ₹700
                  </td>
                </tr>
                <tr className="border-t text-center">
                  <td className="px-6 py-3 text-color-black text-xs text-color-gray font-normal text-start">
                    Item Name
                  </td>
                  <td className="px-4 py-3 text-color-black text-xs text-color-gray font-normal">
                    7
                  </td>
                  <td className="px-4 py-3 text-color-black text-xs text-color-gray font-normal text-end">
                    ₹700
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* Modal Footer */}
          <div className="mt-7">
            <p className="text-xs text-light-gray-color font-normal">
              <span className="text-color-red">Note:</span> Declining the order
              may affect the restaurant’s performance metrics.
            </p>
          </div>
          <div class="flex mt-4 justify-between">
            <button
              onClick={() => DeclineOrdProcessModal(modalId)}
              class="px-8 py-2.5 w-56 bg-white  text-base font-medium rounded-full border-cashier-1 cashier-main-text-color"
            >
              Decline
            </button>
            <button
              onClick={() => AcceptOrdProcessModal(modalId)}
              class="px-8 py-2.5 w-56  text-base font-medium rounded-full cashier-main-bg-color text-white"
            >
              Accept
            </button>
          </div>
        </div>
      </Dialog>
      <OrderProcessModal
        isOpen={ProcessModal}
        closeModal={clossProcessModal}
        order={selectedOrder}
      />
    </>
  );
};

export default AutoOrderPopupModal;
