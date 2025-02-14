import React from "react";

// Third party components
import { Dialog } from "@headlessui/react";
import { useForm } from "react-hook-form";
import { RxCross2 } from "react-icons/rx";
// import { NavLink } from "react-router-dom";

// Images
// import admin from "../../Assets/Images/Login-img/admin.png";
// import staff from "../../Assets/Images/Login-img/staff.png";
// import chef from "../../Assets/Images/Login-img/chef.png";
// import billing from "../../Assets/Images/Login-img/cashier.png";
// import captain from "../../Assets/Images/Login-img/captain.png";

const UserLoginModal = ({ isOpen, closeModal, selectedUser, onSubmit }) => {
  // ==========  
  // UseFrom 
  // ============
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  // ==========  
  // State 
  // ============ 


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
    console.log('payload: ', payload);
    await onSubmit(payload);
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
      <div className="bg-white p-6 rounded-2xl shadow-lg z-20 w-[450px]">
        {/* Close Button */}
        <div className="flex justify-end">
          <button
            onClick={handleModalClose}
            className="flex justify-center items-center bg-color-gray h-9 w-9 rounded-full"
          >
            <RxCross2 className="text-color-gray text-lg cursor-pointer" />
          </button>
        </div>

        {/* User Image */}
        <div
          className={`h-[108px] w-[108px] shadow-xl text-center m-auto rounded-full ${selectedUser?.bgClass}`}
        >
          <img
            src={selectedUser?.image}
            className="my-3 p-4"
            alt={selectedUser?.image}
          />

        </div>
        <div className="poppins-medium text-2xl text-color-black text-center my-3">
          {selectedUser?.label}
        </div>

        {/* Login Form */}
        <form className="text-center mt-8" onSubmit={handleSubmit(onSubmitHandler)}>
          <label className="poppins-regular text-2xl text-color-gray">
            Please enter your code
          </label>

          <div className="relative">
            <input
              className={`${selectedUser?.bgClass} opacity-60 w-full rounded-full my-4 border-0 py-3 text-center tracking-widest font-normal text-2xl text-color-black sm:text-sm`}
              type="text"
              id="code"
              {...register("code", { required: "Code is required" })}
            />
            {/* Arrow Button */}
            {/* <NavLink to={"/home"}> */}
            <button type="submit" className={`absolute right-2 top-1/2 transform -translate-y-1/2 rounded-full bg-gray-100 p-1 text-gray-600 ${errors.code ? "top-[38px]" : ""}`}>
              <svg
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-7-7l7 7-7 7" />
              </svg>
            </button>
            {errors.code && <p className="text-red-500 text-sm">{errors.code.message}</p>}
            {/* </NavLink> */}
          </div>

        </form>
      </div>
    </Dialog>
  );
};

export default UserLoginModal;
