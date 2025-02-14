import React, { useState } from "react";

// Import common Components
import RightSidebar from "../../Common/SideNavbar/rightSideNavbar";
import Navbar from "../../Common/Navbar/navbar";
import ChatBot from "../../Common/ChatBot/chatbot";
import LeftSideNavbar from "../../Common/SideNavbar/leftSideNavbar";

// Import third Party component
import { MdOutlineKeyboardDoubleArrowLeft, MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

// Import Images
import bell from "../../Assets/Images/navbar-img/bell.svg";
import magnify from "../../Assets/Images/navbar-img/MagnifyingGlass.svg";
import InvoiceCards from "../../Common/InvoiceCards/invoicecards";
import InvoiceReceipt from "../../Common/InvoiceReceipt/invoicereceipt";

// Json
const InvoiceButtons = [
    { btn_name: "All", btn_color: "bg-orange-100" },
    { btn_name: "Dine In", btn_color: "bg-transparent" },
    { btn_name: "Take Away", btn_color: "bg-transparent" },
    { btn_name: "Online Orders", btn_color: "bg-transparent" },
];
const InvoiceIcons = [
    { nav_img: magnify },
    { nav_img: bell },
];
const AllInvoice = () => {
    // ========
    // State
    // ========
    const [isRightSidebarOpen, setIsRightSidebarOpen] = useState(false);


    // ========
    // Functions
    // ========
    const toggleRightSidebar = () => {
        setIsRightSidebarOpen(!isRightSidebarOpen);
    };
    return (
        <>
            <div className="flex h-screen overflow-hidden">
                {/* Left Sidebar */}
                <LeftSideNavbar />
                <ChatBot />


                {/* Main Content here */}
                <div className={`flex-grow p-6 transition-all duration-300 flex flex-col justify-center`}>
                    <Navbar buttons={InvoiceButtons} icons={InvoiceIcons} />
                    <div className="overflow-auto h-full hidden-scroll">
                        <div className="grid grid-cols-6 grid-rows-1">
                            <div
                                className="col-span-4"
                            >
                                <h2 className="text-base font-semibold mt-2">Today</h2>
                                {[1, 2, 3, 4, 5,].map((i, index) => (
                                    <>
                                        <InvoiceCards />
                                    </>
                                ))}
                            </div>
                            <div className="col-span-2 col-start-5 mt-3">
                                <InvoiceReceipt />
                            </div>
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
export default AllInvoice;