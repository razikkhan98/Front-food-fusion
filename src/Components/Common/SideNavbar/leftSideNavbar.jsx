import React from "react";
import logo from "../../Assets/Images/logo/logo.png";
import userImg from "../../Assets/Images/logo/userImg.png";
import menu from "../../Assets/icons/menu-board-icon.png";
import CircleIcons from "../CircleIcons/circleIcons";
import { NavLink } from "react-router-dom";

const LeftSideNavbar = () => {
  return (
    <div>
      <div className="lg:w-64 md:w-40 bg-white flex-none h-screen rounded-r-3xl shadow-[rgba(0,0,0,0.15)_1.95px_1.95px_2.6px]">
        <div className="flex pt-10 justify-center">
          <img src={logo} className="h-8 w-8" alt="Loading" />
          <h1 className="lg:text-2xl md:text-base mx-2 drop-shadow-md font-bold text-gray-800">FOOD SKILL</h1>
        </div>
        <div className="grid my-5 text-center justify-center">
          <div className="text-center flex justify-center">
            <img src={userImg} className="rounded-full" alt="Loading" />
          </div>
          <h5 className="font-semibold">Admin Panel</h5>
          <h6>Cashier</h6>
        </div>
        <ul className="my-3">
          <NavLink to={"/home"}>
            <li className="flex cursor-pointer lg:text-base md:text-xs font-medium items-center hover:bg-[--cashier-main-color] hover:text-white hover:rounded-full lg:mx-10 md:mx-6 text-center my-3"><CircleIcons icon={menu} />Home</li>
          </NavLink>
          <NavLink to={"/table"}>
            <li className="flex cursor-pointer items-center lg:text-base md:text-sm font-medium hover:bg-[--cashier-main-color] hover:text-white hover:rounded-full lg:mx-10 md:mx-6 text-center my-3"><CircleIcons icon={menu} />Table</li>
          </NavLink>
          <NavLink to={"/menu"}>
            <li className="flex cursor-pointer items-center lg:text-base md:text-sm font-medium hover:bg-[--cashier-main-color] hover:text-white hover:rounded-full lg:mx-10 md:mx-6 text-center my-3"><CircleIcons icon={menu} />Menu</li>
          </NavLink>
          <NavLink to={"/order"}>
            <li className="flex cursor-pointer items-center lg:text-base md:text-sm font-medium hover:bg-[--cashier-main-color] hover:text-white hover:rounded-full lg:mx-10 md:mx-6 text-center my-3"><CircleIcons icon={menu} />Orders</li>
          </NavLink>
          <li className="flex cursor-pointer items-center lg:text-base md:text-xs font-medium hover:bg-[--cashier-main-color] hover:text-white hover:rounded-full lg:mx-10 md:mx-6 text-center my-3"><CircleIcons icon={menu} />Schedule</li>
          <NavLink to={"/staffdata"}>
            <li className="flex cursor-pointer items-center lg:text-base md:text-xs font-medium hover:bg-[--cashier-main-color] hover:text-white hover:rounded-full lg:mx-10 md:mx-6 text-center my-3"><CircleIcons icon={menu} />Staff Data</li>
          </NavLink>
          <li className="flex cursor-pointer items-center lg:text-base md:text-xs font-medium hover:bg-[--cashier-main-color] hover:text-white hover:rounded-full lg:mx-10 md:mx-6 text-center my-3"><CircleIcons icon={menu} />Settings</li>
          <li className="flex cursor-pointer items-center lg:text-base md:text-xs font-medium hover:bg-[--cashier-main-color] hover:text-white hover:rounded-full lg:mx-10 md:mx-6 text-center my-3"><CircleIcons icon={menu} />Logout</li>
        </ul>
      </div>
    </div>
  );
};

export default LeftSideNavbar;
