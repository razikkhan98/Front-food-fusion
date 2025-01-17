import React, { useState } from "react";
import LeftSideNavbar from "../../Common/SideNavbar/leftSideNavbar.jsx";
import RightSidebar from "../../Common/SideNavbar/rightSideNavbar.jsx";

// import img
import Toggle from "../../Assets/Images/sidebarImg/toggle.png";
import TableCard from "../../Common/TableCard/tableCard.jsx";
import Navbar from "../../Common/Navbar/navbar.jsx";
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
        <Navbar/>
        {/* -------- for 2 member table ---------- */}
        <hr className="mt-3 mb-1"/>
        <h2 className="text-base font-semibold">Table for 2 members</h2>
        <div
          className={`grid ${
            isRightSidebarOpen == true ? "grid-cols-4" : "grid-cols-6"
          } gap-4`}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <>
              {/* <div key={i} onClick={toggleRightSidebar} className="bg-white rounded-lg shadow-md p-4 ">
              <h2>Card {i}</h2>
              <p>Some content for card {i}</p>
            </div> */}
              <TableCard />
            </>
          ))}
        </div>
        {/* -------- for 4 member table ---------- */}
        <hr className="mt-3 mb-1" />
        <h2 className="text-base font-semibold">Table for 4 members</h2>
        <div
          className={`grid ${
            isRightSidebarOpen == true ? "grid-cols-4" : "grid-cols-6"
          } gap-4`}
        >
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <>
              <TableCard />
            </>
          ))}
        </div>
        {/* -------- for family member table ---------- */}
        <hr className="mt-3 mb-1" />
        <div className="flex justify-between">
        <span className="text-base font-semibold">Table for family members</span>
        <span className="text-sm font-light ">Max Capacity 12 members</span>

        </div>
        <div
          className={`grid ${
            isRightSidebarOpen == true ? "grid-cols-4" : "grid-cols-6"
          } gap-4`}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
            <>
              <TableCard />
            </>
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
        <span
          className="bg-blue-700 hover:bg-blue-700 font-bold p-3 rounded-full absolute top-1/2 -left-5"
          onClick={toggleRightSidebar}
        >
          <img src={Toggle} alt="Loading" />
        </span>

        <RightSidebar />
      </div>
    </div>
  );
};
export default Home;
