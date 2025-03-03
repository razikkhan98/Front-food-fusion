import React, { useState } from "react";

// Third party components
import { Dialog } from "@headlessui/react";
import { useForm } from "react-hook-form";
import { RxCross2 } from "react-icons/rx";
import IncrementDecrementFunctionality from "../IncrementDecrementFunctionality/incrementDecrementFunctionality";

// Images

const AddOnsModal = ({ isOpen, onClose, onSubmitFunc,addOns }) => {
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
  const [selectedItems, setSelectedItems] = useState({});
  const [notes, setNotes] = useState("");

  // ==========
  // Functions
  // ============

  // Close the modal and reset the form
  const handleModalClose = () => {
    reset();
  };

  const handleCheckboxChange = (item) => {
    setSelectedItems((prevState) => ({
      ...prevState,
      [item]: !prevState[item],
    }));
  };

  //
    const onSubmit = () => {
      onClose()
      onSubmitFunc()
    }

  return (
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
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="bg-white rounded-2xl shadow-lg p-6 addons-modal">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold">Recommendations</h2>
            <button
              onClick={onClose}
              className="flex justify-center items-center bg-color-gray h-9 w-9 rounded-full"
            >
              <RxCross2 className="text-color-gray text-lg cursor-pointer" />
            </button>
          </div>
          <p className="text-sm font-normal text-[--gray-color] my-2">
            Looks like the below recommended items will be required with the
            item you have just added!!
          </p>
          <div className="h-56 overflow-scroll hidden-scroll">
            {addOns?.map((item, index) => (
              <label key={index} className="flex my-6 items-center">
                <input
                  type="checkbox"
                  // checked={!!selectedItems[index]} // Check if add-on is selected
                  onChange={() => handleCheckboxChange(item?.option)}
                  className="w-4 h-4 me-3"
                />
                <span className="flex-grow text-base font-normal">
                  {item.option}
                </span>
                {item.price > 0 ? (
                  <>
                    <span className="cashier-main-text-color text-sm font-normal me-3">
                      ₹ {item.price}
                    </span>
                    <IncrementDecrementFunctionality
                      AddonKey={"addOnQuantity"} // Pass add-on ID
                      // quantity={addOnQuantities[item.id] || 0} // Pass current quantity, default to 0
                      // onQuantityChange={handleQuantityChange}/
                    />
                  </>
                ) : (
                  <span className="text-[--cashier-main-color] text-sm font-normal">
                    Free
                  </span>
                )}
              </label>
            ))}
          </div>
          <hr />
          <div className="mt-4">
            <span className="block text-color-gray mb-3 mt-5 text-sm font-normal">
              Additional notes (If any)
            </span>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full bg-gray-light-color ps-5 text-xs font-normal p-2 mt-1 focus-visible:border-0 hidden-scroll rounded-xl resize-none"
              placeholder="Type Here"
            />
          </div>
          <button
            className="w-full mt-6 cashier-main-bg-color text-base text-white py-2 px-4 rounded-full font-medium"
            onClick={onSubmit}
          >
            Save & Proceed
          </button>
        </div>
      </div>
    </Dialog>
  );
};

export default AddOnsModal;
