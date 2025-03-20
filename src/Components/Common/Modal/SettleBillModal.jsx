import React, { useState } from "react";

// Import Third Party Components
import { Dialog } from "@headlessui/react";

// import React Icons
import { RxCross2 } from "react-icons/rx";
import Button from "../Button/button";

// import image
import scaner from '../../Assets/Images/previous/scaner.svg'
import BillSettleSuccessModal from "./billSettleSuccessModal";

const SettleBillModal = ({ isOpen, closeModal }) => {
  // ==========.
  // States
  // =========
  const [PayMode, setPayMode] = useState("Cash");
    const [paySuccess, setpaySuccess] = useState(false);
  // ==========
  // Functions
  // ============

  // Close the modal and reset the form
  const handleModalClose = () => {
    closeModal();
  };

    // handle payment success  Modal 
    const OpenPaymentSuccessModal = () => setpaySuccess(true);
    const closePaymentSuccessModal = () => setpaySuccess(false);
  return (
    <>
      <Dialog
        open={isOpen}
        onClose={handleModalClose}
        className="fixed inset-0 z-10 flex items-center justify-center"
      >
        {/* Overlay */}
        <div
          className="fixed inset-0 bg-black bg-opacity-50"
          aria-hidden="true"
          onClick={handleModalClose}
        />

        {/* Modal Content */}
        <div className="bg-white p-6 rounded-2xl shadow-lg z-20 settle-bill-modal">
          {/* Close Button */}
          <div className="flex justify-between">
            <p className="text-2xl font-semibold">Settle Bill</p>
            <button
              onClick={handleModalClose}
              className="flex justify-center items-center bg-color-gray h-9 w-9 rounded-full"
            >
              <RxCross2 className="text-color-gray text-lg cursor-pointer" />
            </button>
          </div>
          <p className="text-color-gray text-sm font-normal mt-1">
            Choose a payment mode
          </p>

          {/* payment Tab  */}
          <div>
            <div>
              <p className="my-5 text-color-gray text-sm font-medium">
                Payment Mode
              </p>

              <div className="flex space-x-10  border-b pb-5">
                {["Cash", "UPI", "Card", "Other", "Part"].map(
                  (option, index) => (
                    <label
                      key={index}
                      className="flex items-center cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="orderType"
                        className="hidden peer"
                        onChange={() => setPayMode(option)}
                      />
                      <div className="w-5 h-5 border-2  rounded-full flex items-center justify-center peer-checked:border-[--green-color] peer-checked:bg-[--green-color] ">
                        <div className="w-4 h-4 rounded-full border-2 border-white peer-checked:bg-[--green-color]"></div>
                      </div>
                      <span className="text-sm font-normal ml-2">{option}</span>
                    </label>
                  )
                )}
              </div>
            </div>
          </div>
          {/* Table No if Dine In */}
          {PayMode === "Cash" ? (
            <>
              <ul>
                <li className="flex mt-6">
                  <div className="w-2/5 text-sm font-medium text-color-gray">
                    Total Amount
                  </div>{" "}
                  <div className="text-base font-medium text-color-gray">
                    ₹ 425
                  </div>
                </li>
                <li className="flex mt-12">
                  <div className="w-2/5 text-sm font-medium text-color-gray">
                    Customer Paid
                  </div>{" "}
                  <div>
                    <input
                      className="border rounded-lg text-base font-medium px-3 h-9"
                      value={"₹ 500"}
                      type="text"
                      name=""
                      id=""
                    />
                  </div>
                </li>
                <li className="flex mt-12">
                  <div className="w-2/5 text-sm font-medium text-color-gray">
                    Return to customer
                  </div>{" "}
                  <div className="text-base font-medium">₹ 75</div>
                </li>
              </ul>
              <div className="mt-7">
                <Button onClick={()=>OpenPaymentSuccessModal()} title={"Save & Settle Bill"} />
              </div>
            </>
          ) : PayMode === "UPI" ? (
            <>
              <div className="grid grid-cols-2 grid-rows-1 gap-0">
                <div>
                  <div className="mt-6">
                    <span className="text-sm font-medium text-color-gray">Total Amount</span>
                    <span className="text-base font-medium ml-4">₹ 425</span>
                  </div>
                  <h3 className="text-sm font-medium text-color-gray mt-6">Saved Accounts</h3>
                  <div>
                    <label className="flex items-center cursor-pointer mt-3">
                      <input
                        type="radio"
                        name="upi1"
                        className="hidden peer"
                        // onChange={() => setPayMode(option)}
                      />
                      <div className="w-5 h-5 border-2  rounded-full flex items-center justify-center peer-checked:border-[--green-color] peer-checked:bg-[--green-color] ">
                        <div className="w-4 h-4 rounded-full border-2 border-white peer-checked:bg-[--green-color]"></div>
                      </div>
                      <span className="text-sm font-normal ml-2">
                        9876543210@SBI
                      </span>
                    </label>
                    <label className="flex items-center cursor-pointer mt-6">
                      <input
                        type="radio"
                        name="upi1"
                        className="hidden peer"
                        // onChange={() => setPayMode(option)}
                      />
                      <div className="w-5 h-5 border-2  rounded-full flex items-center justify-center peer-checked:border-[--green-color] peer-checked:bg-[--green-color] ">
                        <div className="w-4 h-4 rounded-full border-2 border-white peer-checked:bg-[--green-color]"></div>
                      </div>
                      <span className="text-sm font-normal ml-2">
                        9876543210@SBI
                      </span>
                    </label>
                  </div>
                </div>
                {/* <hr className=" w-0 h-44 border-light-gray-color mt-6" /> */}
                <div className="border-l pl-9   mt-6">
                    <img src={scaner} alt="" />
                </div>
              </div>
              <div className="flex space-x-5 mt-5">
                <Button title={"Save & Settle Bill"} />
                <Button title={"Share QR Code"} />
              </div>
            </>
          ) : PayMode === "Card" ? (
            <></>
          ) : (
            <></>
          )}
        </div>
      </Dialog>

      <BillSettleSuccessModal
      isOpen={paySuccess}
      closeModal={closePaymentSuccessModal}
      />
    </>
  );
};

export default SettleBillModal;
