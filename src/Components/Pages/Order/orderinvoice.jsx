import React, { useState } from "react";

// Import common Components
import RightSidebar from "../../Common/SideNavbar/rightSideNavbar";
import Navbar from "../../Common/Navbar/navbar";
import ChatBot from "../../Common/ChatBot/chatbot";
import LeftSideNavbar from "../../Common/SideNavbar/leftSideNavbar";
import InvoiceCards from "../../Common/InvoiceCards/invoicecards";
import InvoiceReceipt from "../../Common/InvoiceReceipt/invoicereceipt";

// Import third Party component
// import { MdOutlineKeyboardDoubleArrowLeft, MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

// Import Images
import bell from "../../Assets/Images/navbar-img/bell.svg";
import magnify from "../../Assets/Images/navbar-img/MagnifyingGlass.svg";
import Sort from "../../Assets/Images/navbar-img/SortAscending.svg";
import Pagination from "../../Common/Pagination/pagination";

// Json

const InvoiceButtons = [
  { btn_name: "All", btn_color: "bg-[--cashier-very-light-color]" },
  { btn_name: "Dine In", btn_color: "bg-transparent" },
  { btn_name: "Take Away", btn_color: "bg-transparent" },
  { btn_name: "Online Orders", btn_color: "bg-transparent" },
];
const InvoiceIcons = [
  { nav_img: magnify },
  { nav_img: Sort },
  { nav_img: bell },
];
const InvoiceHeading = ["Orders", "All Invoices"];
const AllInvoice = () => {
  // ========
  // State
  // ========

  const [CurrentTab, setCurrentTab] = useState();
  console.log("CurrentTab: ", CurrentTab);

  // ========
  // Functions
  // ========

  return (
    <>
      <div className="flex h-screen overflow-hidden">
        {/* Left Sidebar */}
        <LeftSideNavbar />
        <ChatBot />

        {/* Main Content here */}
        <div
          className={`flex-grow py-4 px-9 transition-all duration-300 overflow-scroll hidden-scroll`}
        >
          <div className="border-b">
            <Navbar
              buttons={InvoiceButtons}
              icons={InvoiceIcons}
              pageHeading={InvoiceHeading}
              btn_purple={"See All Invoices"}
            />
          </div>
          <div className="grid grid-cols-6 grid-rows-1">
            <div className="col-span-4">
              <div className="overflow-auto invoice-card-scroll md:h-2/5 hidden-scroll">
                <h2 className="text-base font-semibold mt-2">Today</h2>
                {[1, 2, 3, 4, 5, 6].map((i, index) => (
                  <>
                    <div className={index === 0 ? "card-box-shadow" : " "}>
                      <InvoiceCards />
                    </div>
                  </>
                ))}
              </div>

              {/* Pagination Buttons Start */}
              <Pagination />
            </div>
            <div className="col-span-2 col-start-5 mt-3">
              <InvoiceReceipt />
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
export default AllInvoice;
