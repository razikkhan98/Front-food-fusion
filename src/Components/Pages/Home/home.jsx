import React, { useEffect, useState } from "react";

// Import Third Party componets
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

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
import Button from "../../Common/Button/button.jsx";
import Plus from "../../Assets/Images/sidebarImg/Plus.svg";
import useApi from "../../utils/Api/api.jsx";

// Json

const HomeButtons = [
  {
    btn_key: "dine",
    btn_name: "Dine In",
    btn_color: "bg-[--cashier-very-light-color]",
  },
  { btn_key: "takeaway", btn_name: "Take Away", btn_color: "bg-transparent" },
  { btn_key: "delivery", btn_name: "Delivery", btn_color: "bg-transparent" },
];
const HomeIcons = [{ nav_img: magnify }, { nav_img: bell }];
const HomeHeading = ["Booked Table"];

const Home = ({tableDetailsFromRedux}) => {
  // --------
  // State
  // --------
  const numberOfModals = 2; // Define the number of modals
  const initialModalsState = Array(numberOfModals).fill(true); // Create an array filled with `true`
  const { request } = useApi();

  const [modalsOpen, setModalsOpen] = useState(initialModalsState);
  const [CurrentTab, setCurrentTab] = useState("Dine In");
  const [WorkingTable, setWorkingTable] = useState();

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

  //
  const fetchAllTable = async () => {
    try {
      const response = await request("GET", "/food-fusion/cashier/todayorder");
      if (response) {
        if (CurrentTab == "Dine In") {
          return setWorkingTable(response[0]?.dine);
        }
        if (CurrentTab == "Take Away") {
          return setWorkingTable(response[0]?.takeaway);
        }
        if (CurrentTab == "Delivery") {
          return setWorkingTable(response[0]?.delivery);
        }
      }
    } catch (error) {}
  };

  // ===============
  // UseEffect
  // ===============
  useEffect(() => {
    setWorkingTable()
    fetchAllTable();
  }, [CurrentTab]);

  // ===========---------------------
  // Effect to fetch data on mount
  useEffect(() => {
    fetchAllTable();
  }, []);

  return (
    <div className="flex h-dvh overflow-hidden">
      {/* Left Sidebar */}
      <LeftSideNavbar />

      {/* Chatbot  */}
      <ChatBot />

      {/* Main Content Area */}
      <div className={`flex-grow py-4 px-9 transition-all duration-300 overflow-scroll hidden-scroll`}>
        <div className="border-b">
          <Navbar
            buttons={HomeButtons}
            icons={HomeIcons}
            pageHeading={HomeHeading}
            btn_add={"Create New Order"}
            selectedTab={setCurrentTab}
          />
        </div>

        <div className="overflow-auto h-5/6 hidden-scroll">
          <div className="flex items-center justify-end my-3">
            {/* <h2 className="text-base font-semibold">Dine In</h2> */}
            {/* <NavLink
              to={"/order"}
            >
              <button className="w-full cashier-main-bg-color text-white py-2 px-4 rounded-full font-medium text-base flex items-center justify-center">
                <img src={Plus} className="me-2 h-5 w-5" alt="Loading" /> Create
                New Order
              </button>
            </NavLink> */}
          </div>
          <div className="grid grid-cols-[repeat(auto-fill,minmax(168px,168px))]">
            {WorkingTable?.map((i, index) => (
              <>
                <TableCard
                  tableStatus={i?.status}
                  tableNo={i?.tableNumber}
                  tableDetail={i}
                />
              </>
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
        {/* {[...Array(numberOfModals)]?.map((i, index) => (
          <AutoOrderPopupModal
            key={index}
            isOpen={modalsOpen[index]}
            closeModal={() => closeModal(index)}
            modalIndex={index}
            modalId={i}
          />
        ))} */}
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  tableDetailsFromRedux: state?.tableBooking,
});

export default connect(mapStateToProps, {})(Home);
