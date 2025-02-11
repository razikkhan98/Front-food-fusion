import React, { useState } from "react";
import LeftSideNavbar from "../../Common/SideNavbar/leftSideNavbar.jsx";
import RightSidebar from "../../Common/SideNavbar/rightSideNavbar.jsx";


// import Icon
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
import ChatBot from "../../Common/ChatBot/chatbot.jsx";
import { connect } from "react-redux";
import TableCard from "../../Common/TableCard/tableCard.jsx";
const Home = ({tableDetailsFromRedux}) => {
  const [isRightSidebarOpen, setIsRightSidebarOpen] = useState(false);

  const toggleRightSidebar = () => {
    setIsRightSidebarOpen(!isRightSidebarOpen);
  };

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Left Sidebar */}
      <LeftSideNavbar />
      <ChatBot />

      {/* Main Content Area */}
      <div className={`flex-grow p-4 transition-all duration-300`}>
        <h1>Table</h1>
        <div className={`grid ${isRightSidebarOpen === true ? "grid-cols-4" : "grid-cols-5"} gap-4`}>
          {tableDetailsFromRedux?.TableBooking?.map((i,index) => (
            <TableCard tableDetail={i} />
          ))}
          <div  className=" p-4 w-56">
            </div>
        </div>
        
      </div>

      {/* Right Sidebar */}
      <div
        className={`transition-all duration-300 ease-in-out relative rounded-l-3xl ${isRightSidebarOpen ? "w-80" : "w-7"
          }`}
      >
        <span className="bg-blue-700 hover:bg-blue-700 cursor-pointer font-bold p-1 rounded-full absolute top-1/2 -left-5" onClick={toggleRightSidebar}>
          {/* <img src={Toggle} alt="Loading" /> */}
          <MdOutlineKeyboardDoubleArrowLeft className='text-3xl text-white font-semibold' />
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