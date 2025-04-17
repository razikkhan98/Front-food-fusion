import React, { useEffect, useState } from "react";

// Common Componets
import LeftSideNavbar from "../../Common/SideNavbar/leftSideNavbar.jsx";
import RightSidebar from "../../Common/SideNavbar/rightSideNavbar.jsx";
import TableCard from "../../Common/TableCard/tableCard.jsx";
import Navbar from "../../Common/Navbar/navbar.jsx";
import ChatBot from "../../Common/ChatBot/chatbot.jsx";

// Import third Party components
import { toast } from "react-toastify";

// Import Images
import bell from "../../Assets/Images/navbar-img/bell.svg";
import magnify from "../../Assets/Images/navbar-img/MagnifyingGlass.svg";
import useApi from "../../utils/Api/api.jsx";

// Json
// const HomeButtons = [
//   { btn_name: "Ground Floor", btn_color: "bg-[--cashier-very-light-color]" },
//   { btn_name: "First Floor", btn_color: "bg-transparent" },
//   { btn_name: "Second Floor", btn_color: "bg-transparent" },
// ];

const TableDataJson = [
  {
    tables: {
      "Ground Floor": {
        tables: [
          "Table 1",
          "Table 2",
          "Table 3",
          "Table 4",
          "Table 5",
          "Table 6",
          "Table 7",
          "Table 8",
        ],
      },
      "First Floor": {
        tables: [
          "Table 1",
          "Table 2",
          "Table 3",
          "Table 4",
          "Table 5",
          "Table 6",
        ],
      },
      "Second Floor": {
        tables: [
          "Table 1",
          "Table 2",
          "Table 3",
          "Table 4",
          "Table 5",
          "Table 6",
          "Table 7",
          "Table 8",
          "Table 9",
        ],
      },
    },
  },
];

const HomeIcons = [
  { nav_img: magnify, nav_imgname: "magnify" },
  { nav_img: bell, nav_imgname: "bell" },
];
const HomeHeading = ["Book Table"];
const Table = () => {
  // ========
  // States
  // ========
  const [CurrentTab, setCurrentTab] = useState();
  // to set floor name for navbar
  const [FloorNames, setFloorNames] = useState();
  // to set floor wise avilable tables
  const [FloorWiseTables, setFloorWiseTables] = useState();
  const [BookedTableDtl, setBookedTableDtl] = useState();
  const { request, error } = useApi();
  // ========
  // functions
  // ========

  const fetchAllTable = async () => {
    try {
      const response = await request(
        "GET",
        "/food-fusion/cashier/getAllFloors"
      );
      const BookTableResponse = await request(
        "GET",
        "/food-fusion/cashier/todayorder"
      );
      if (BookTableResponse[0]?.dine) {
        setBookedTableDtl(BookTableResponse[0]?.dine);
      }
      if (response?.success) {
        const FloorsName = response?.data?.map((i) => i?.floorName) || [];
        setFloorNames(FloorsName);
        setCurrentTab(FloorsName[0] || []);
        const FloorWiseTable = response?.data?.map((i) => i?.tables) || [];
        setFloorWiseTables(FloorWiseTable?.flat());
      } else {
        toast.error(error?.message || "Failed to load tables", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          // theme: "colored",
        });
      }
    } catch (error) {}
  };

  // ===============
  // UseEffect
  // ===============
  useEffect(() => {
    fetchAllTable();
  }, []);

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
          {/* Navbar */}
          <div className="border-b ">
            <Navbar
              buttons={FloorNames?.map((floorName, index) => {
                return {
                  btn_name: floorName,
                  btn_color:
                    index === 0
                      ? "bg-[--cashier-very-light-color]"
                      : "bg-transparent",
                };
              })}
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
              {FloorWiseTables?.map((i, index) => (
                <>
                  {i?.totalChairs <= 3 &&
                  String(i?.floorName) == String(CurrentTab) ? (
                    <>
                      <TableCard
                        tableStatus={i?.tablestatus}
                        tableNo={i?.tableNumber}
                        tableDetail={i}
                      />
                    </>
                  ) : (
                    <>
                      {BookedTableDtl?.filter((booked) => booked?.customerId == i?.customerId )?.map((item)=>
                      <>
                      <TableCard
                        tableStatus={item?.status}
                        tableNo={item?.tableNumber}
                        tableDetail={item}
                      />
                    </>
                      )}
                    </>
                  )}
                </>
              ))}
            </div>
            {/* -------- for 4 member table ---------- */}
            <hr className="mt-3 mb-1" />
            <h2 className="text-base font-semibold my-3">
              Table for 4 members
            </h2>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(168px,168px))]">
              {FloorWiseTables?.map((i, index) => (
                <>
                  {i?.totalChairs <= 4 &&
                  String(i?.floorName) == String(CurrentTab) ? (
                    <TableCard
                      tableStatus={i?.tablestatus}
                      tableNo={i?.tableNumber}
                      tableDetail={i}
                    />
                  ) : (
                    <></>
                  )}
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
            <div className="grid grid-cols-[repeat(auto-fill,minmax(168px,168px))]">
              {FloorWiseTables?.map((i, index) => (
                <>
                  {i?.totalChairs >= 5 &&
                  String(i?.floorName) == String(CurrentTab) ? (
                    <TableCard
                      tableStatus={i?.tablestatus}
                      tableNo={i?.tableNumber}
                      tableDetail={i}
                    />
                  ) : (
                    <></>
                  )}
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
