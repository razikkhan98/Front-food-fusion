// import React, { useState } from "react";
// import logo from "../../Assets/Images/logo/logo-svg.svg";
// import admin from "../../Assets/Images/Login-img/admin.png";
// import chef from "../../Assets/Images/Login-img/chef.png";
// import billing from "../../Assets/Images/Login-img/cashier.png";
// import staff from "../../Assets/Images/Login-img/staff.png";
// import captain from "../../Assets/Images/Login-img/captain.png";
// import UserLoginModal from "../Modal/userloginModal";
// // import { useNavigate } from "react-router-dom";
// const UserLogin = () => {
//   //   const navigate = useNavigate();
//   const [isOpen, setIsOpen] = useState(false);
//   const [selectedUser, setselectedUser] = useState();
//   const openModal = () => {
//     setIsOpen(true);
//   };

//   const closeModal = () => setIsOpen(false);

//   const onSubmit = async (data) => {
//     console.log('data: ', data);
//     // let payload = {
//     //     code:data?.selecteuser,
//     //   }

//   }

//   return (
//     <>
//       <div className="h-screen flex justify-center items-center">
//         <div className="grid grid-cols-1 grid-rows-3 gap-1">
//           <div className="flex justify-center items-center mb-20">
//             <img
//               className="w-auto h-28 inline me-5"
//               src={logo}
//               alt="food-fusion"
//             />
//             <span className="food-fusion cashier-main-text-color text-5xl ms-1 font-bold">
//               FOOD FUSION
//             </span>
//           </div>
//           <div className=" text-center items-center flex justify-center">
//             <span
//               onClick={() => {
//                 setselectedUser({
//                   name: "bg-[--admin-color]",
//                   image: "admin",
//                   path: "/admin/dashboard",
//                 });
//                 openModal();
//               }}
//               className="mx-5 cursor-default font-medium text-3xl transform transition-transform duration-300 hover:scale-125"
//             >
//               <div className="h-24 w-24 flex justify-center items-center bg-[--admin-color] rounded-xl mb-1">
//                 <img
//                   className=" w-[72px] m-auto p-2"
//                   src={admin}
//                   alt="Loading"
//                 />
//               </div>
//               Admin
//             </span>
//             <span
//               onClick={() => {
//                 setselectedUser({
//                   name: "bg-[--cashier-color]",
//                   image: "cashier",
//                   path: "/home",
//                 });
//                 openModal();
//               }}
//               className="mx-5 cursor-default font-medium text-3xl transform transition-transform duration-300 hover:scale-125"
//             >
//               <div className="h-24 w-24 flex justify-center items-center bg-[--cashier-color] rounded-xl mb-1">
//                 <img
//                   className="w-[72px] m-auto p-2"
//                   src={billing}
//                   alt="Loading"
//                 />
//               </div>
//               Cashier
//             </span>
//             <span
//               onClick={() => {
//                 setselectedUser({
//                   name: "bg-[--staff-color]",
//                   image: "staff",
//                   path: "/home",
//                 });
//                 openModal();
//               }}
//               className="mx-5 cursor-default font-medium text-3xl transform transition-transform duration-300 hover:scale-125"
//             >
//               <div className="h-24 w-24 flex justify-center items-center bg-[--staff-color] rounded-xl mb-1">
//                 <img
//                   className="w-[72px] m-auto p-2"
//                   src={staff}
//                   alt="Loading"
//                 />
//               </div>
//               Staff
//             </span>
//             <span
//               onClick={() => {
//                 setselectedUser({
//                   name: "bg-[--captain-color]",
//                   image: "captain",
//                   path: "/home",
//                 });
//                 openModal();
//               }}
//               className="mx-5 cursor-default font-medium text-3xl transform transition-transform duration-300 hover:scale-125"
//             >
//               <div className="h-24 w-24 flex justify-center items-center bg-[--captain-color] rounded-xl mb-1">
//                 <img
//                   className="w-[72px]  m-auto p-2"
//                   src={captain}
//                   alt="Loading"
//                 />
//               </div>
//               Captain
//             </span>
//             <span
//               onClick={() => {
//                 setselectedUser({
//                   name: "bg-[--chef-color]",
//                   image: "chef",
//                   path: "/home",
//                 });
//                 openModal();
//               }}
//               className="mx-5 cursor-default font-medium text-3xl transform transition-transform duration-300 hover:scale-125"
//             >
//               <div className="h-24 w-24 flex justify-center items-center bg-[--chef-color] rounded-xl mb-1">
//                 <img
//                   className="w-[72px] m-auto rounded-xl p-2"
//                   src={chef}
//                   alt="Loading"
//                 />
//               </div>
//               Chef
//             </span>
//           </div>
//         </div>
//       </div>
//       {/* Modal */}
//       <UserLoginModal
//         isOpen={isOpen}
//         closeModal={closeModal}
//         selectedUser={selectedUser}
//         onSubmit={onSubmit}
//       />
//     </>
//   );
// };

// export default UserLogin;

import React, { useState } from "react";

// Images
import Logo from "../../Assets/Images/logo/logo-svg.svg";
import Admin from "../../Assets/Images/Login-img/admin.png";
import Chef from "../../Assets/Images/Login-img/chef.png";
import Cashier from "../../Assets/Images/Login-img/cashier.png";
import Staff from "../../Assets/Images/Login-img/staff.png";
import Captain from "../../Assets/Images/Login-img/captain.png";

// Common
import UserLoginModal from "../Modal/userloginModal";

// Third party components
// import useApi from "../hooks/useApi";

// Role JSON Data
const users = [
  {
    name: "admin",
    label: "Admin",
    image: Admin,
    bgClass: "bg-[--admin-color]",
    path: "/admin/dashboard",
  },
  {
    name: "cashier",
    label: "Cashier",
    image: Cashier,
    bgClass: "bg-[--cashier-color]",
    path: "/home",
  },
  {
    name: "staff",
    label: "Staff",
    image: Staff,
    bgClass: "bg-[--staff-color]",
    path: "/home",
  },
  {
    name: "captain",
    label: "Captain",
    image: Captain,
    bgClass: "bg-[--captain-color]",
    path: "/home",
  },
  {
    name: "chef",
    label: "Chef",
    image: Chef,
    bgClass: "bg-[--chef-color]",
    path: "/home",
  },
];

const UserLogin = () => {
  
  // ==========  
  // State 
  // ============
  // const { request, loading, error } = useApi();
  const [name, setName] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

   

  // ==========  
  // Function 
  // ============ 

  // Open Modal for user login function
  const openModal = (user) => {
    setSelectedUser(user);
    setIsOpen(true);
  };

  // Close Modal for user login function
  const closeModal = () => setIsOpen(false);

  // Handle form submission
  const onSubmit = async (data) => {
    console.log("data: ", data);
    
    // e.preventDefault(e);
    // const response = await request("POST", "/users", { name });

    // if (response) {
    //   alert("User created successfully!");
    //   setName("");
    // }
  };

  // ======= 
  // Api Functions 
  // ========= 

  

  // ======= 
  // UseEffect 
  // ========= 

  return (
    <>
    <section>
      <div className="h-screen flex justify-center items-center">
        <div className="grid grid-cols-1 grid-rows-4 gap-1">
          {/* Logo & Title */}
          <div className="row-span-2 flex justify-center items-center mb-20">
            <img
              className="w-[108px] h-[108px] inline me-5"
              src={Logo}
              alt="Food Fusion Logo"
            />
            <span className="cashier-main-text-color text-6xl ms-1 montserrat-alternates-semibold" style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}>
              FOOD FUSION
            </span>
          </div>

          {/* User Selection */}
          <div className="row-span-2 row-start-3 text-center flex justify-center">
            {users.map((user) => (
              <span
                key={user.name}
                onClick={() => openModal(user)}
                className="mx-8 cursor-pointer font-medium text-3xl transform transition-transform duration-300 hover:scale-125"
              >
                <div
                  className={`h-[120px] w-[120px] flex justify-center items-center ${user.bgClass} rounded-[16px] mb-1`}
                >
                  <img
                    className="w-[72px] m-auto p-2"
                    src={user.image}
                    alt={user.label}
                  />
                </div>
                <div className="poppins-medium text-3xl text-color-black">
                {user.label}
                </div>
               
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* User Login Modal */}
      {selectedUser && (
        <UserLoginModal
          isOpen={isOpen}
          closeModal={closeModal}
          selectedUser={selectedUser}
          onSubmit={onSubmit}
        />
      )}
      </section>
    </>
  );
};

export default UserLogin;
