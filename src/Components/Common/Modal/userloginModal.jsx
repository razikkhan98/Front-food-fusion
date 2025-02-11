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

const   UserLoginModal = ({ isOpen, closeModal, selectedUser, onSubmit }) => {
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
      <div className="relative bg-white p-6 rounded-2xl shadow-lg z-20 w-96">
        {/* Close Button */}
        <div className="flex justify-end">
          <button
            onClick={handleModalClose}
            className="flex justify-center items-center bg-gray-200 h-9 w-9 rounded-full"
          >
            <RxCross2 className="text-gray-400 text-lg cursor-pointer" />
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

        {/* Login Form */}
        <form className="text-center" onSubmit={handleSubmit(onSubmitHandler)}>
          <div className="relative m-5">
            <label className="block pt-4 text-gray-600 font-normal">
              Please enter your code
            </label>

            <div className="relative">
              <input
                className={`${selectedUser?.bgClass} opacity-60 w-full rounded-full my-2 border-0 py-2 pl-4 pr-12 text-gray-900 sm:text-sm`}
                type="text"
                id="code"
                {...register("code", { required: "Code is required" })}
              />
              {errors.code && <p className="text-red-500 text-sm">{errors.code.message}</p>}
              {/* Arrow Button */}
              {/* <NavLink to={"/home"}> */}
              <button type="submit" className="absolute right-2 top-1/2 transform -translate-y-1/2 rounded-full bg-gray-100 p-1 text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-7-7l7 7-7 7" />
                </svg>
              </button>
              {/* </NavLink> */}
            </div>
          </div>


          {/* Submit Button */}
          <div className="flex justify-center">

          </div>
        </form>
      </div>
    </Dialog>
  );
};

export default UserLoginModal;
