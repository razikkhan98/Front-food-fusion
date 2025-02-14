import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

// IMPORT IMAGES
import logo from "../../Assets/Images/logo/logo.png";
import userImg from "../../Assets/Images/logo/userImg.png";
import CircleIcons from "../CircleIcons/circleIcons";
import Home from "../../Assets/icons/House.svg";
import Home_light from "../../Assets/icons/House-white.svg";
import Menu from "../../Assets/icons/menu-board.svg";
import Menu_light from "../../Assets/icons/menu-board-white.svg";
import Order from "../../Assets/icons/task-square.svg";
import Order_light from "../../Assets/icons/task-square-white.svg";
import Shedule from "../../Assets/icons/calendar-tick.svg";
import Shedule_light from "../../Assets/icons/calendar-tick-white.svg";
import Staff from "../../Assets/icons/UsersThree.svg";
import Staff_light from "../../Assets/icons/UsersThree-white.svg";
import Setting from "../../Assets/icons/GearSix.svg";
import Setting_light from "../../Assets/icons/GearSix-white.svg";
import Logout from "../../Assets/icons/logout.svg";
import Logout_light from "../../Assets/icons/logout-white.svg";

// Json items
const navItems = [
  { to: "/home", icon: Home, iconHover: Home_light, label: "Home" },
  { to: "/table", icon: Menu, iconHover: Menu_light, label: "Table" },
  { to: "/menu", icon: Menu, iconHover: Menu_light, label: "Menu" },
  { to: "/order", icon: Order, iconHover: Order_light, label: "Orders" },
  {
    to: "/schedule",
    icon: Shedule,
    iconHover: Shedule_light,
    label: "Schedule",
  },
  {
    to: "/staffdata",
    icon: Staff,
    iconHover: Staff_light,
    label: "Staff Data",
  },
  {
    to: "/settings",
    icon: Setting,
    iconHover: Setting_light,
    label: "Settings",
  },
  { to: "/logout", icon: Logout, iconHover: Logout_light, label: "Logout" },
];
const LeftSideNavbar = () => {
  // States
  const [hoveredItem, setHoveredItem] = useState(null);

  // navigations
  const Location = useLocation();

  // Functions


  return (
    <div>
      <div className="lg:w-64 md:w-40 bg-white flex-none h-screen rounded-r-3xl shadow-[rgba(0,0,0,0.15)_1.95px_1.95px_2.6px]">
        <div className="flex pt-10 justify-center">
          <img src={logo} className="h-8 w-8" alt="Loading" />
          <h1 className="lg:text-2xl md:text-base mx-2 drop-shadow-md font-bold text-gray-800">
            FOOD SKILL
          </h1>
        </div>
        <div className="grid my-5 text-center justify-center">
          <div className="text-center flex justify-center">
            <img src={userImg} className="rounded-full" alt="Loading" />
          </div>
          <h5 className="font-semibold">Admin Panel</h5>
          <h6>Cashier</h6>
        </div>
        <ul className="my-3">
          {navItems.map((item, index) => (
            <NavLink key={index} to={item?.to}>
              <li
                onMouseOver={() => setHoveredItem(item?.label)}
                onMouseOut={() => setHoveredItem(null)}
                className={`flex cursor-pointer ${
                  item?.to == Location?.pathname
                    ? "sidebar-li-active bg-[--cashier-main-color] text-white rounded-full"
                    : ""
                } sidebar-li  items-center lg:text-base md:text-xs font-medium hover:bg-[--cashier-main-color] hover:text-white hover:rounded-full lg:mx-10 md:mx-6 text-center my-4`}
              >
                <CircleIcons
                  icon={
                    hoveredItem === item?.label ||
                    item?.to == Location?.pathname
                      ? item?.iconHover
                      : item?.icon
                  }
                />
                {item?.label}
              </li>
            </NavLink>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LeftSideNavbar;
