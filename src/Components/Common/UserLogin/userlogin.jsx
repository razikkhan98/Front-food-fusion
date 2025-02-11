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
import useApi from "../../utils/Api/api";

// Third party components
import { toast } from "react-toastify";

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
  const { request } = useApi();
  // const [name, setName] = useState("");
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
    console.log('data:----------------main ', data);

    const response = await request("POST", "/food-fusion/cashier/staff/login", { name: data.selectedUser, code: data.code, });

    if (response) {
      // alert("User login successful!");
      toast.success("User Login Successfully", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      closeModal();
    }
  };

  // ======= 
  // Api Functions 
  // ========= 



  // ======= 
  // UseEffect 
  // ========= 

  return (
    <>
      <div className="h-screen flex justify-center items-center">
        <div className="grid grid-cols-1 grid-rows-4 gap-1">
          {/* Logo & Title */}
          <div className="row-span-2 flex justify-center items-center mb-20">
            <img
              className="w-auto h-24 inline me-5"
              src={Logo}
              alt="Food Fusion Logo"
            />
            <span className="food-fusion text-shadow-xl uppercase cashier-main-text-color text-6xl ms-1 font-bold">
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
                  className={`h-24 w-24 flex justify-center items-center ${user.bgClass} rounded-xl mb-1`}
                >
                  <img
                    className="w-20 m-auto p-2"
                    src={user.image}
                    alt={user.label}
                  />
                </div>
                {user.label}
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
    </>
  );
};

export default UserLogin;
