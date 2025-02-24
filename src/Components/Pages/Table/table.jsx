import React, { useState } from "react";
import LeftSideNavbar from "../../Common/SideNavbar/leftSideNavbar.jsx";
import RightSidebar from "../../Common/SideNavbar/rightSideNavbar.jsx";
import TableCard from "../../Common/TableCard/tableCard.jsx";
import Navbar from "../../Common/Navbar/navbar.jsx";
// import Icon
import {
  MdOutlineKeyboardDoubleArrowLeft,
  MdOutlineKeyboardDoubleArrowRight,
} from "react-icons/md";
import ChatBot from "../../Common/ChatBot/chatbot.jsx";

// Import Images
import bell from "../../Assets/Images/navbar-img/bell.svg";
import magnify from "../../Assets/Images/navbar-img/MagnifyingGlass.svg";

// Json
const HomeButtons = [
  { btn_name: "Ground Floor", btn_color: "bg-[--cashier-very-light-color]" },
  { btn_name: "First Floor", btn_color: "bg-transparent" },
  { btn_name: "Second Floor", btn_color: "bg-transparent" },
];
const TableDataJson = [
  {
    "tables": {
      "Ground Floor": {
        "tables": [
          "Table 1",
          "Table 2",
          "Table 3",
          "Table 4",
          "Table 5",
          "Table 6",
          "Table 7",
          "Table 8"
        ]
      },
      "First Floor": {
        "tables": [
          "Table 1",
          "Table 2",
          "Table 3",
          "Table 4",
          "Table 5",
          "Table 6"
        ]
      },
      "Second Floor": {
        "tables": [
          "Table 1",
          "Table 2",
          "Table 3",
          "Table 4",
          "Table 5",
          "Table 6",
          "Table 7",
          "Table 8",
          "Table 9"
        ]
      }
    }
  }
]

const HomeIcons = [{ nav_img: magnify }, { nav_img: bell }];
const HomeHeading = ["Book Table"];
const Table = () => {
  // ========
  // States
  // ========
  const [isRightSidebarOpen, setIsRightSidebarOpen] = useState(false);
  const [CurrentTab, setCurrentTab] = useState();
  // ========
  // functions
  // ========


  // functions for table filter 


  return (
    <>
      <div className="flex h-screen overflow-hidden">
        {/* Left Sidebar */}
        <LeftSideNavbar />
        <ChatBot />
        {/* Main Content Area */}
        <div className={`flex-grow py-4 px-9 transition-all duration-300`}>
          {/* Navbar */}
          <div className="border-b">
            <Navbar
              buttons={HomeButtons}
              icons={HomeIcons}
              pageHeading={HomeHeading}
              selectedTab={setCurrentTab}
            />
          </div>

          {/* -------- for 2 member table ---------- */}
          {/* <hr className="mt-3 mb-1" /> */}

          <div className="overflow-auto h-5/6 hidden-scroll">
            <h2 className="text-base font-semibold my-3">
              Table for 2 members
            </h2>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(168px,168px))]">

              {[1, 2, 3, 4, 5, 6, 7,8,9,10,11,12,13,14,15,16].map((i, index) => (
                <>
                  {/* <div key={i} onClick={toggleRightSidebar} className="bg-white rounded-lg shadow-md p-4 ">
              <h2>Card {i}</h2>
              <p>Some content for card {i}</p>
            </div> */}
                  <TableCard tableStatus={"blank"} index={index} tableNo={i} />
                </>
              ))}
            </div>
            {/* -------- for 4 member table ---------- */}
            <hr className="mt-3 mb-1" />
            <h2 className="text-base font-semibold my-3">
              Table for 4 members
            </h2>
            <div
              className="grid grid-cols-[repeat(auto-fill,minmax(168px,168px))]">
              {[1, 2, 3, 4, 5, 6].map((i, index) => (
                <>
                  <TableCard tableStatus={"blank"} index={index} tableNo={i} />
                </>
              ))}
            </div>
            {/* -------- for family member table ---------- */}
            <hr className="mt-3 mb-1" />
            <div className="flex justify-between my-3">
              <span className="text-base font-semibold">
                Table for family members
              </span>
              <span className="text-sm font-light ">
                Max Capacity 12 members
              </span>
            </div>
            <div
              className="grid grid-cols-[repeat(auto-fill,minmax(168px,168px))]">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i, index) => (
                <>
                  <TableCard tableStatus={"blank"} index={index} tableNo={i} />
                </>
              ))}
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div
          className={`transition-all duration-300 ease-in-out relative rounded-l-3xl`}
        >
          <RightSidebar />
        </div>
      </div>
    </>
  );
};

export default Table;
