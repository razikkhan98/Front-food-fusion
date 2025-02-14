import React, { useState } from "react";

// import Icon
import {
  MdOutlineKeyboardDoubleArrowLeft,
  MdOutlineKeyboardDoubleArrowRight,
} from "react-icons/md";

// Import Third Party componets
import { connect } from "react-redux";

// Import Common Components
import TableCard from "../../Common/TableCard/tableCard.jsx";
import ChatBot from "../../Common/ChatBot/chatbot.jsx";
import RightSidebar from "../../Common/SideNavbar/rightSideNavbar.jsx";
import LeftSideNavbar from "../../Common/SideNavbar/leftSideNavbar.jsx";
import Navbar from "../../Common/Navbar/navbar.jsx";


// Import Images
import bell from "../../Assets/Images/navbar-img/bell.svg";
import magnify from "../../Assets/Images/navbar-img/MagnifyingGlass.svg";

// Json
const HomeIcons = [
  { nav_img: magnify },
  { nav_img: bell },
];
const HomeHeading = [
  "Booked Table"
]

const Home = ({ tableDetailsFromRedux }) => {
  // --------
  // State
  // --------
  const [isRightSidebarOpen, setIsRightSidebarOpen] = useState(false);


  // ---------
  // Functions
  // ---------
  const toggleRightSidebar = () => {
    setIsRightSidebarOpen(!isRightSidebarOpen);
  };


  return (
    <div className="flex h-screen overflow-hidden">
      {/* Left Sidebar */}
      <LeftSideNavbar />

      {/* Chatbot  */}
      <ChatBot />

      {/* Main Content Area */}
      <div className={`flex-grow py-4 px-9 transition-all duration-300`}>
        <Navbar icons={HomeIcons} pageHeading={HomeHeading} />
        <div
          className={`grid ${isRightSidebarOpen === true ? "grid-cols-4" : "grid-cols-5"
            } gap-4`}
        >
          {tableDetailsFromRedux?.TableBooking?.map((i, index) => (
            <TableCard tableDetail={i} />
          ))}
          <div className=" p-4 w-56"></div>
        </div>
      </div>

      {/* Right Sidebar */}
      <div
        className={`transition-all duration-300 ease-in-out relative rounded-l-3xl ${isRightSidebarOpen ? "w-[360px]" : "w-7"
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
  );
};
const mapStateToProps = (state) => ({
  tableDetailsFromRedux: state?.tableBooking,
});

export default connect(mapStateToProps, {})(Home);
