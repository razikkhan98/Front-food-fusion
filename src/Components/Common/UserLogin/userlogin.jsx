import React, { useState } from "react";
import logo from "../../Assets/Images/logo/logo-svg.svg";
import admin from "../../Assets/Images/Login-img/admin.png";
import chef from "../../Assets/Images/Login-img/chef.png";
import billing from "../../Assets/Images/Login-img/cashier.png";
import staff from "../../Assets/Images/Login-img/staff.png";
import captain from "../../Assets/Images/Login-img/captain.png";
import UserLoginModal from "../Modal/userloginModal";
// import { useNavigate } from "react-router-dom";
const UserLogin = () => {
  //   const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedUser, setselectedUser] = useState();
  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  const onSubmit = async (data) => {
    console.log('data: ', data);
    // let payload = {
    //     code:data?.selecteuser,
    //   }

  }

  return (
    <>
      <div className="h-screen flex justify-center items-center">
        <div className="grid grid-cols-1 grid-rows-3 gap-1">
          <div className="flex justify-center items-center mb-20">
            <img
              className="w-auto h-28 inline me-5"
              src={logo}
              alt="food-fusion"
            />
            <span className="food-fusion cashier-main-text-color text-5xl ms-1 font-bold">
              FOOD FUSION
            </span>
          </div>
          <div className=" text-center items-center flex justify-center">
            <span
              onClick={() => {
                setselectedUser({
                  name: "bg-[--admin-color]",
                  image: "admin",
                  path: "/admin/dashboard",
                });
                openModal();
              }}
              className="mx-5 cursor-default font-medium text-3xl transform transition-transform duration-300 hover:scale-125"
            >
              <div className="h-24 w-24 flex justify-center items-center bg-[--admin-color] rounded-xl mb-1">
                <img
                  className=" w-[72px] m-auto p-2"
                  src={admin}
                  alt="Loading"
                />
              </div>
              Admin
            </span>
            <span
              onClick={() => {
                setselectedUser({
                  name: "bg-[--cashier-color]",
                  image: "cashier",
                  path: "/home",
                });
                openModal();
              }}
              className="mx-5 cursor-default font-medium text-3xl transform transition-transform duration-300 hover:scale-125"
            >
              <div className="h-24 w-24 flex justify-center items-center bg-[--cashier-color] rounded-xl mb-1">
                <img
                  className="w-[72px] m-auto p-2"
                  src={billing}
                  alt="Loading"
                />
              </div>
              Cashier
            </span>
            <span
              onClick={() => {
                setselectedUser({
                  name: "bg-[--staff-color]",
                  image: "staff",
                  path: "/home",
                });
                openModal();
              }}
              className="mx-5 cursor-default font-medium text-3xl transform transition-transform duration-300 hover:scale-125"
            >
              <div className="h-24 w-24 flex justify-center items-center bg-[--staff-color] rounded-xl mb-1">
                <img
                  className="w-[72px] m-auto p-2"
                  src={staff}
                  alt="Loading"
                />
              </div>
              Staff
            </span>
            <span
              onClick={() => {
                setselectedUser({
                  name: "bg-[--captain-color]",
                  image: "captain",
                  path: "/home",
                });
                openModal();
              }}
              className="mx-5 cursor-default font-medium text-3xl transform transition-transform duration-300 hover:scale-125"
            >
              <div className="h-24 w-24 flex justify-center items-center bg-[--captain-color] rounded-xl mb-1">
                <img
                  className="w-[72px]  m-auto p-2"
                  src={captain}
                  alt="Loading"
                />
              </div>
              Captain
            </span>
            <span
              onClick={() => {
                setselectedUser({
                  name: "bg-[--chef-color]",
                  image: "chef",
                  path: "/home",
                });
                openModal();
              }}
              className="mx-5 cursor-default font-medium text-3xl transform transition-transform duration-300 hover:scale-125"
            >
              <div className="h-24 w-24 flex justify-center items-center bg-[--chef-color] rounded-xl mb-1">
                <img
                  className="w-[72px] m-auto rounded-xl p-2"
                  src={chef}
                  alt="Loading"
                />
              </div>
              Chef
            </span>
          </div>
        </div>
      </div>
      {/* Modal */}
      <UserLoginModal
        isOpen={isOpen}
        closeModal={closeModal}
        selectedUser={selectedUser}
        onSubmit={onSubmit}
      />
    </>
  );
};

export default UserLogin;
