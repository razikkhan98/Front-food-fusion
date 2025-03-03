import React, { useState } from "react";

// Common Componets
import LeftSideNavbar from "../../Common/SideNavbar/leftSideNavbar";
import ChatBot from "../../Common/ChatBot/chatbot";
import RightSidebar from "../../Common/SideNavbar/rightSideNavbar";
import Navbar from "../../Common/Navbar/navbar";

// Import React-Icons
// import { FaCalendarAlt } from "react-icons/fa";

// Import Images
import bell from "../../Assets/Images/navbar-img/bell.svg";
import magnify from "../../Assets/Images/navbar-img/MagnifyingGlass.svg";
import Sort from "../../Assets/Images/navbar-img/SortAscending.svg";
import ScheduleCards from "../../Common/ScheduleCards/schedulecards";
import ScheduleForm from "../../Common/ScheduleForm/scheduleform";
// import Calendar from "../../Assets/icons/calendar-tick.svg";

// Json
const ScheduleButtons = [
  { btn_name: "New Order", btn_color: "bg-[--cashier-very-light-color]" },
  {
    btn_name: "Ongoing",
    btn_color: "bg-transparent",
    // btn_path: "/scheduleongoing",
  },
  { btn_name: "Completed", btn_color: "bg-transparent" },
];
const ScheduleIcons = [{ nav_img: magnify },{nav_imgname:"sort", nav_img: Sort },, { nav_img: bell }];
const ScheduleHeading = ["Schedule Order"];
const Schedule = () => {
  // -----------
  // State
  // ------------
  const [CurrentTab, setCurrentTab] = useState();
  console.log("CurrentTab: ", CurrentTab);

  // ------------
  // Function
  // ------------

  return (
    <>
      <div className="flex h-screen overflow-hidden">
        {/* Left Sidebar */}
        <LeftSideNavbar />
        <ChatBot />

        {/* Main Content Area */}
        <div
          className={`flex-grow py-4 px-9 transition-all duration-300 h-full overflow-auto hidden-scroll`}
        >
          <div className="border-b">
            <Navbar
              buttons={ScheduleButtons}
              icons={ScheduleIcons}
              pageHeading={ScheduleHeading}
              selectedTab={setCurrentTab}
            />
          </div>

          {CurrentTab === "New Order" ? (
            <ScheduleForm />
          ) : CurrentTab === "Ongoing" ? (
            <>
              <p className="my-5 text-color-black text-base font-medium">
                Today
              </p>
              <div className="grid grid-cols-[repeat(auto-fill,minmax(336px,336px))]">
                {[1, 2, 3, 4, 5, 6, 7]?.map((i, index) => (
                  <ScheduleCards
                    scheduleStatus={index === 3 ? "Delivery" :
                      "Dine In"
                    }
                    orderType={"Pickup"}
                  />
                ))}
              </div>
            </>
          ) : CurrentTab === "Completed" ? (
            <>
              <p className="my-5 text-color-black text-base font-medium">
                Today
              </p>
              <div className="grid grid-cols-[repeat(auto-fill,minmax(336px,336px))]">
                {[1, 2, 3, 4, 5, 6, 7]?.map((i, index) => (
                  <ScheduleCards
                      scheduleStatus={"Completed"}
                      orderStatus={index === 1 ? "cancel" :
                      "complete"
                    }
                      orderType={"Dine In"}
                  />
                ))}
              </div>
            </>
          ) : (
            <ScheduleForm />
          )}
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

export default Schedule;
