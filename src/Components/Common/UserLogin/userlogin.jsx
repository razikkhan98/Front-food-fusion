import React, { useContext, useState } from "react";

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
import { useNavigate } from "react-router-dom";
import { UseContext } from "../../Context/context";

// Role JSON Data
const users = [
  {
    name: "Admin",
    label: "Admin",
    image: Admin,
    bgClass: "bg-[--admin-color]",
    path: "/admin/dashboard",
  },
  {
    name: "Cashier",
    label: "Cashier",
    image: Cashier,
    bgClass: "bg-[--cashier-color]",
    path: "/home",
  },
  {
    name: "Staff",
    label: "Staff",
    image: Staff,
    bgClass: "bg-[--staff-color]",
    path: "/home",
  },
  {
    name: "Captain",
    label: "Captain",
    image: Captain,
    bgClass: "bg-[--captain-color]",
    path: "/home",
  },
  {
    name: "Chef",
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
  const { request, error } = useApi();
  const { setUserAuth } = useContext(UseContext);

  // const [name, setName] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const navigate = useNavigate();

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
    const response = await request("POST", "/food-fusion/cashier/staff/login", {
      role: selectedUser?.name,
      code: data.code,
    });

    if (response?.success) {
      toast.success(response?.message, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setUserAuth(response);
      sessionStorage?.setItem("User", JSON?.stringify(response));
      closeModal();
      await request("GET", "/food-fusion/cashier/getAllFloors");
      navigate("/table");
    } else {
      toast.error(error?.message || "Login failed. Please try again.", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        // theme: "colored",
      });
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
      {/* <section> */}
      <div
        className=" flex justify-center items-center"
        style={{ height: window?.screen?.height }}
      >
        <div className="grid grid-cols-1 grid-rows-6 gap-1">
          {/* Logo & Title */}
          <div className="row-span-2 flex justify-center items-center mb-32">
            <img
              className="logo inline me-5"
              src={Logo}
              alt="Food Fusion Logo"
            />
            <span
              className="cashier-main-text-color text-6xl ms-3 montserrat-alternates-semibold"
              style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
            >
              FOOD FUSION
            </span>
          </div>

          {/* User Selection */}
          <div className="row-span-2 row-start-3 text-center flex justify-center items-center lg:items-start">
            {users.map((user) => (
              <span
                key={user.name}
                onClick={() => openModal(user)}
                className="lg:mx-10 mx-5 cursor-pointer font-medium text-3xl transform ease-in-out transation-transform duration-100 hover:scale-150"
              >
                <div
                  className={`user-box flex justify-center items-center ${user.bgClass} rounded-[16px] mb-3`}
                >
                  <img
                    className="lg:w-20 w-16 m-auto p-2"
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
      {/* </section> */}
    </>
  );
};

export default UserLogin;
