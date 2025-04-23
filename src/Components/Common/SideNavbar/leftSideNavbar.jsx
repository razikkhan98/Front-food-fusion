import React, { useContext, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

// IMPORT IMAGES
import logo from "../../Assets/Images/logo/logo-svg.svg";
import userImg from "../../Assets/Images/logo/userImg.png";
import CircleIcons from "../CircleIcons/circleIcons";
import Home from "../../Assets/icons/House.svg";
import Home_light from "../../Assets/icons/House-white.svg";
import Menu from "../../Assets/icons/menu-board.svg";
import Menu_light from "../../Assets/icons/menu-board-white.svg";
import Dinner_Table from "../../Assets/icons/dinner-table.svg";
import Dinner_Table_light from "../../Assets/icons/dinner-table_light.svg";
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
import { UseContext } from "../../Context/context";

// Json items
const navItems = [
  { to: "/home", icon: Home, iconHover: Home_light, label: "Home" },
  {
    to: "/table",
    icon: Dinner_Table,
    iconHover: Dinner_Table_light,
    label: "Table",
  },
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
  { to: "/", icon: Logout, iconHover: Logout_light, label: "Logout" },
];
const LeftSideNavbar = () => {
  const UserDetails = JSON?.parse(sessionStorage?.getItem("User") ?? "{}");
  // States
  const [hoveredItem, setHoveredItem] = useState(null);
  const { UserAuth } = useContext(UseContext);

  // navigations
  const Location = useLocation();

  // Functions

  return (
    <div>
      <div className="leftside-panel ps-5 md:w-40 bg-white flex-none h-screen rounded-r-3xl shadow-[rgba(0,0,0,0.15)_1.95px_1.95px_2.6px]">
        <div className="flex pt-6 justify-center items-center">
          <img src={logo} className="h-8 w-8" alt="Loading" />
          <h1 className="lg:text-xl md:text-base mx-2 right-sidebar-dropshadow montserrat-alternates-semibold cashier-main-text-color">
            FOOD FUSION
          </h1>
        </div>
        <div className="grid mt-7 text-center justify-center">
          <div className="text-center flex justify-center">
            <img src={userImg} className="rounded-full" alt="Loading" />
          </div>
          <h5 className="text-sm font-medium mt-2">
            {UserAuth?.user?.fullname || UserDetails?.user?.fullname}
          </h5>
          <h6 className="text-sm font-normal ">
            {UserAuth?.user?.role || UserDetails?.user?.role}
          </h6>
        </div>
        <ul className="my-3 h-2/3 overflow-scroll hidden-scroll">
          {navItems.map((item, index) => (
            <NavLink className="grid justify-center" key={index} to={item?.to}>
              <li
                onMouseOver={() => setHoveredItem(item?.label)}
                onMouseOut={() => setHoveredItem(null)}
                className={`flex cursor-pointer ${
                  item?.to == Location?.pathname?.split('/').slice(0, 2).join('/')
                    ? "sidebar-li-active bg-[--cashier-main-color] text-white rounded-full"
                    : ""
                } sidebar-li items-center lg:text-base md:text-xs font-medium hover:bg-[--cashier-main-color] hover:text-white hover:rounded-full  text-center my-[14px]`}
              >
                <CircleIcons
                  icon={
                    hoveredItem === item?.label ||
                    item?.to == Location?.pathname?.split('/').slice(0, 2).join('/')
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
