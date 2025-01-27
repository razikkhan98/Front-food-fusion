// import React, { useState } from "react";
// import { Dialog } from "@headlessui/react";
// import { useForm } from "react-hook-form";
// // import Button from "../Button/button";
// import admin from "../../Assets/Images/Login-img/admin.png";
// import chef from "../../Assets/Images/Login-img/chef.png";
// import billing from "../../Assets/Images/Login-img/cashier.png";
// import staff from "../../Assets/Images/Login-img/staff.png";
// import captain from "../../Assets/Images/Login-img/captain.png";
// import { RxCross2 } from "react-icons/rx";
// import { NavLink } from "react-router-dom";

// // import Loader from "../buttonLoader/buttonLoader";

// const UserLoginModal = ({ isOpen, closeModal, selectedUser, onSubmit }) => {
//   const { register, handleSubmit, reset } = useForm();
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleModalClose = () => {
//     reset();
//     closeModal();
//   };

//   /**
//    *
//    *
//    *
//    * */

//   const onSubmitHandler = async (data) => {
//     setIsSubmitting(true); // Show loader

//     await onSubmit(data);

//     // After submitting, stop showing the loader
//     setIsSubmitting(false);
//   };

//   const setUserImage = () => {
//     let img = "";
//     switch (selectedUser?.image) {
//       case "admin":
//         img = { img: admin, bg: selectedUser?.name };
//         break;
//       case "cashier":
//         img = { img: billing, bg: selectedUser?.name };
//         break;
//       case "staff":
//         img = { img: staff, bg: selectedUser?.name };
//         break;
//       case "captain":
//         img = { img: captain, bg: selectedUser?.name };
//         break;
//       case "chef":
//         img = { img: chef, bg: selectedUser?.name };
//         break;
//     }
//     return img;
//   };

//   return (
//     <>
//       <Dialog
//         open={isOpen}
//         onClose={handleModalClose}
//         className="fixed inset-0 z-10 flex items-center justify-center"
//       >
//         <div
//           className="fixed inset-0 bg-black bg-opacity-50"
//           aria-hidden="true"
//           onClick={handleModalClose}
//         />
//         <div className="relative bg-white p-6 rounded-2xl shadow-lg z-20">
//           <div className="flex justify-end">
//             <div className="flex justify-center items-center bg-gray-200 h-9 w-9 rounded-full">
//             <RxCross2 className="text-gray-400 text-lg cursor-pointer" onClick={handleModalClose}/>
//             </div>
//           </div>
//           <div className={`h-[108px] w-[108px] shadow-xl text-center m-auto rounded-full ${setUserImage()?.bg}`}>
//             <img
//               src={setUserImage()?.img}
//               className={`my-3  p-4`}
//               alt="Loading"
//             />
//           </div>
//           <form
//             className="text-center"
//             onSubmit={handleSubmit(onSubmitHandler)}
//           >
//             <div className="m-5">
//               <label className="block pt-4 text-black-200 font-normal">
//                 Please enter your code
//                 <input
//                   className={`${setUserImage()?.bg} block w-full rounded-full my-2 opacity-60 border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
//                   type="text"
//                   id="selectuser"
//                   {...register("selecteuser")}
//                 />
//               </label>
//             </div>
//             <div className="flex justify-center">
//              <NavLink to={"/home"}>
//              <button
//                 className="bg-blue-500 flex items-center justify-center text-white px-4 py-2 rounded"
//                 type="submit"
//               >
//                 <span className={isSubmitting ? "me-2" : ""}>Submit</span>
//               </button>
//              </NavLink>
//             </div>
//           </form>
//         </div>
//       </Dialog>
//     </>
//   );
// };
// export default UserLoginModal;

import React, { useState } from "react";

// Third party components
import { Dialog } from "@headlessui/react";
import { useForm } from "react-hook-form";
import { RxCross2 } from "react-icons/rx";

const UserLoginModal = ({ isOpen, closeModal, selectedUser, onSubmit }) => {
  // ==========  
  // UseFrom 
  // ============
  const { register, handleSubmit, reset } = useForm();

  
  // ==========  
  // State 
  // ============ 

  const [isSubmitting, setIsSubmitting] = useState(false);

  // ==========  
  // Functions 
  // ============ 


  // Close the modal and reset the form
  const handleModalClose = () => {
    reset();
    closeModal();
  };

  // Submit the form
  const onSubmitHandler = async (data) => {
    setIsSubmitting(true);

    await onSubmit(data);

    setIsSubmitting(false);
  };

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
          <div className="m-5">
            <label className="block pt-4 text-gray-600 font-normal">
              Please enter your code
              <input
                className={`block w-full rounded-full my-2 opacity-60 border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${selectedUser?.bgClass}`}
                type="text"
                {...register("userCode")}
              />
            </label>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              className="bg-blue-500 flex items-center justify-center text-white px-4 py-2 rounded disabled:opacity-50"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </Dialog>
  );
};

export default UserLoginModal;
