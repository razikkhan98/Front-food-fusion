import React, { useState } from "react";
import LeftSideNavbar from "../../Common/SideNavbar/leftSideNavbar.jsx";
import RightSidebar from "../../Common/SideNavbar/rightSideNavbar.jsx";


// import Icon
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
const Home = () => {
  const [isRightSidebarOpen, setIsRightSidebarOpen] = useState(false);

  const toggleRightSidebar = () => {
    setIsRightSidebarOpen(!isRightSidebarOpen);
  };

  return (
    <div className="flex h-screen overflow-hidden">
    {/* Left Sidebar */}
    <LeftSideNavbar />

    {/* Main Content Area */}
    <div className={`flex-grow p-4 transition-all duration-300`}>
    <h1>Table</h1>
      <div className={`grid ${isRightSidebarOpen == true ? "grid-cols-4" : "grid-cols-5" } gap-4`}>
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} onClick={toggleRightSidebar} className="bg-white rounded-lg shadow-md p-4 w-56">
            <h2>Card {i}</h2>
            <p>Some content for card {i}</p>
          </div>
        ))}
      </div>
    </div>

    {/* Right Sidebar */}
    <div
      className={`bg-gray-200 transition-all duration-300 ease-in-out relative rounded-l-3xl ${
        isRightSidebarOpen ? "w-80" : "w-9"
      }`}
    >
        {/* <button
          onClick={toggleRightSidebar}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded absolute top-1/2 "
        >
          {isRightSidebarOpen ? "Close" : "Open"}
        </button> */}
        <span className="bg-blue-700 hover:bg-blue-700 font-bold p-1 rounded-full absolute top-1/2 -left-5"  onClick={toggleRightSidebar}>
          {/* <img src={Toggle} alt="Loading" /> */}
          <MdOutlineKeyboardDoubleArrowLeft className='text-3xl text-white font-semibold' />
        </span>
      
      <RightSidebar/>
    </div>
  </div>

  );
};
export default Home;
