import React from "react";
import logo from "../../Assets/Images/logo/logo.png";
import userImg from "../../Assets/Images/logo/userImg.png";
import menu from "../../Assets/icons/menu-board-icon.png";
import CircleIcons from "../CircleIcons/circleIcons";
import { NavLink } from "react-router-dom";

const LeftSideNavbar = () => {
  return (
    <div>
      <div className="w-64 bg-white flex-none h-screen rounded-r-3xl shadow-[rgba(0,0,0,0.15)_1.95px_1.95px_2.6px]">
        <div className="flex pt-10 justify-center">
          <img src={logo} alt="" />
          <h1 className="text-2xl mx-2 drop-shadow-md font-bold text-gray-800">FOOD SKILL</h1>
        </div>
        <div className="grid my-5 text-center justify-center ">
          <div className="text-center flex justify-center">
            <img src={userImg} className="rounded-full" alt="" />
          </div>
          <h5 className="font-semibold">Admin Panel</h5>
          <h6>Cashier</h6>
        </div>
        <ul className="my-3">
          <li className="flex cursor-pointer items-center hover:bg-[--cashier-main-color] hover:text-white hover:rounded-full mx-10 text-center my-3"><CircleIcons icon={menu} />Home</li>
          <li className="flex cursor-pointer items-center hover:bg-[--cashier-main-color] hover:text-white hover:rounded-full mx-10 text-center my-3"><CircleIcons icon={menu} />Table</li>
          <NavLink to={"/menu"}>
            <li className="flex cursor-pointer items-center hover:bg-[--cashier-main-color] hover:text-white hover:rounded-full mx-10 text-center my-3"><CircleIcons icon={menu} />Menu</li>
          </NavLink>
          <li className="flex cursor-pointer items-center hover:bg-[--cashier-main-color] hover:text-white hover:rounded-full mx-10 text-center my-3"><CircleIcons icon={menu} />Orders</li>
          <li className="flex cursor-pointer items-center hover:bg-[--cashier-main-color] hover:text-white hover:rounded-full mx-10 text-center my-3"><CircleIcons icon={menu} />Schedule</li>
          <li className="flex cursor-pointer items-center hover:bg-[--cashier-main-color] hover:text-white hover:rounded-full mx-10 text-center my-3"><CircleIcons icon={menu} />Staff Data</li>
          <li className="flex cursor-pointer items-center hover:bg-[--cashier-main-color] hover:text-white hover:rounded-full mx-10 text-center my-3"><CircleIcons icon={menu} />Settings</li>
          <li className="flex cursor-pointer items-center hover:bg-[--cashier-main-color] hover:text-white hover:rounded-full mx-10 text-center my-3"><CircleIcons icon={menu} />Logout</li>
        </ul>  
      </div>
    </div>
  );
};

export default LeftSideNavbar;
