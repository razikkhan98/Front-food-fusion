import React, { useState } from 'react'
import LeftSideNavbar from '../../Common/SideNavbar/leftSideNavbar.jsx'
import RightSidebar from "../../Common/SideNavbar/rightSideNavbar.jsx";
import TableCard from "../../Common/TableCard/tableCard.jsx";
import Navbar from "../../Common/Navbar/navbar.jsx";
// import Icon
import { MdOutlineKeyboardDoubleArrowLeft, MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import ChatBot from '../../Common/ChatBot/chatbot.jsx';


// Import Images
import bell from "../../Assets/Images/navbar-img/bell.svg";
import magnify from "../../Assets/Images/navbar-img/MagnifyingGlass.svg";

// Json
const HomeButtons = [
  { btn_name: "Ground Floor", btn_color: "bg-orange-100" },
  { btn_name: "First Floor", btn_color: "bg-transparent" },
  { btn_name: "Second Floor", btn_color: "bg-transparent" },
];
const HomeIcons = [
  { nav_img: magnify},
  { nav_img: bell },
];
const HomeHeading =[
  "Book Table"
]
const Table = () => {
  const [isRightSidebarOpen, setIsRightSidebarOpen] = useState(false);

  const toggleRightSidebar = () => {
    setIsRightSidebarOpen(!isRightSidebarOpen);
  };

  return (
    <>

      <div className="flex h-screen overflow-hidden">
        {/* Left Sidebar */}
        <LeftSideNavbar />
        <ChatBot />
        {/* Main Content Area */}
        <div className={`flex-grow py-4 px-9 transition-all duration-300`}>
          <Navbar buttons={HomeButtons} icons={HomeIcons}  pageHeading={HomeHeading}/>
          {/* -------- for 2 member table ---------- */}
          {/* <hr className="mt-3 mb-1" /> */}

          <div className="overflow-auto h-full hidden-scroll">
            <h2 className="text-base font-semibold my-3">Table for 2 members</h2>
            <div
              className={`grid ${isRightSidebarOpen === true ? "md:grid-cols-2 lg:grid-cols-4" : "md:grid-cols-3 lg:grid-cols-6"
                } gap-4`}
            >
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i, index) => (
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
            <h2 className="text-base font-semibold my-3">Table for 4 members</h2>
            <div
              className={`grid ${isRightSidebarOpen === true ? "md:grid-cols-2 lg:grid-cols-4" : "md:grid-cols-3 lg:grid-cols-6"
                } gap-4`}
            >
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
              <span className="text-sm font-light ">Max Capacity 12 members</span>
            </div>
            <div
              className={`grid ${isRightSidebarOpen === true ? "md:grid-cols-2 lg:grid-cols-4" : "md:grid-cols-3 lg:grid-cols-6"
                } gap-4`}
            >
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
        className={`transition-all duration-300 ease-in-out relative rounded-l-3xl ${
          isRightSidebarOpen ? "w-[360px]" : "w-7"
        }`}
      >
        <span
          className="bg-[--purple-color] w-11 h-11 flex justify-center items-center hover:bg-[--purple-color] cursor-pointer font-bold p-1 rounded-full absolute top-1/2 -left-5"
          onClick={toggleRightSidebar}
        >
          {/* <img src={Toggle} alt="Loading" /> */}
          {isRightSidebarOpen ? (
            <MdOutlineKeyboardDoubleArrowRight className="text-3xl text-white font-semibold" />
          ) : (
            <MdOutlineKeyboardDoubleArrowLeft className="text-3xl text-white font-semibold" />
          )}
        </span>

        <RightSidebar />
      </div>
      </div>
    </>
  );
};

export default Table;
