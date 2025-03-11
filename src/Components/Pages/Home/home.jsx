import React, { useState } from "react";


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
import AutoOrderPopupModal from "../../Common/AutoOrderPopupModal/AutoOrderPopupModal.jsx";

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
    const [CurrentTab, setCurrentTab] = useState();
      // const [isOpen, setIsOpen] = useState(true);
      const [modalsOpen, setModalsOpen] = useState([true, true, true]); // Each index corresponds to a modal

      
      // ---------
      // Functions
      // ---------


      const closeModal = (index) => {
        setModalsOpen((prev) => {
          const newModalsOpen = [...prev];
          newModalsOpen[index] = false; // Close the specific modal
          return newModalsOpen;
        });
      };

  return (
    <div className="flex h-dvh overflow-hidden">
      {/* Left Sidebar */}
      <LeftSideNavbar />

      {/* Chatbot  */}
      <ChatBot />

      {/* Main Content Area */}
      <div className={`flex-grow py-4 px-9 transition-all duration-300`}>
        <div className="border-b">
          <Navbar icons={HomeIcons} pageHeading={HomeHeading} selectedTab={setCurrentTab} />
        </div>

        <div className="overflow-auto h-5/6 hidden-scroll">
          <h2 className="text-base font-semibold my-3">Dine In</h2>
          <div
            className="grid grid-cols-[repeat(auto-fill,minmax(168px,168px))]"
          >
            {tableDetailsFromRedux?.TableBooking?.map((i, index) => (
              <TableCard tableDetail={i} />
            ))}
            <div className=" p-4 w-56"></div>
          </div>
        </div>
      </div>


      {/* Right Sidebar */}
      <div
        className={`transition-all duration-300 ease-in-out relative rounded-l-3xl`}
      >
        <RightSidebar />

      </div>
      <div className="auto-modal-background">
        {/* Auto popup modal */}
        {[1,2,3]?.map((i,index)=>
        <AutoOrderPopupModal
        key={index}
          isOpen={modalsOpen[index]}
          closeModal={() => closeModal(index)}
          modalIndex={index}
          modalId={i}
        />
        )}
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  tableDetailsFromRedux: state?.tableBooking,
});

export default connect(mapStateToProps, {})(Home);
