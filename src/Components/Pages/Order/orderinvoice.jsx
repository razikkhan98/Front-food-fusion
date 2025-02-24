import React, { useState } from "react";

// Import common Components
import RightSidebar from "../../Common/SideNavbar/rightSideNavbar";
import Navbar from "../../Common/Navbar/navbar";
import ChatBot from "../../Common/ChatBot/chatbot";
import LeftSideNavbar from "../../Common/SideNavbar/leftSideNavbar";
import InvoiceCards from "../../Common/InvoiceCards/invoicecards";
import InvoiceReceipt from "../../Common/InvoiceReceipt/invoicereceipt";

// Import third Party component
import { MdOutlineKeyboardDoubleArrowLeft, MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

// Import Images
import bell from "../../Assets/Images/navbar-img/bell.svg";
import magnify from "../../Assets/Images/navbar-img/MagnifyingGlass.svg";
import Sort from "../../Assets/Images/navbar-img/SortAscending.svg";

// Json

const invoices = Array.from({ length: 25 }, (_, i) => i + 1);
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
    const [isRightSidebarOpen, setIsRightSidebarOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(5); // Default rows per page      
    const [CurrentTab, setCurrentTab] = useState();
      console.log('CurrentTab: ', CurrentTab);


    // ========
    // Functions
    // ========
    const toggleRightSidebar = () => {
        setIsRightSidebarOpen(!isRightSidebarOpen);
    };


    // ======== Pagination Logic ========
    const indexOfLastInvoice = currentPage * rowsPerPage;
    const indexOfFirstInvoice = indexOfLastInvoice - rowsPerPage;
    const currentInvoices = invoices.slice(indexOfFirstInvoice, indexOfLastInvoice);
    const totalPages = Math.ceil(invoices.length / rowsPerPage);

    const handleNext = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    const handlePrevious = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };
    return (
        <>
            <div className="flex h-screen overflow-hidden">
                {/* Left Sidebar */}
                <LeftSideNavbar />
                <ChatBot />


                {/* Main Content here */}
                <div className={`flex-grow py-4 px-9 transition-all duration-300`}>
                    <div className="border-b">
                        <Navbar buttons={InvoiceButtons} icons={InvoiceIcons} pageHeading={InvoiceHeading} btn_purple={"See All Invoices"}/>
                    </div>
                    <div className="grid grid-cols-6 grid-rows-1">
                        <div
                            className="col-span-4"
                        >
                            <div className="overflow-auto xl:h-[75vh] lg:h-[65vh] md:h-[60vh] hidden-scroll">
                                <h2 className="text-base font-semibold mt-2">Today</h2>
                                {currentInvoices.map((i, index) => (
                                    <>
                                        <div className={index === 0 ? "card-box-shadow" : " "}>
                                            <InvoiceCards />
                                        </div>
                                    </>
                                ))}
                            </div>

                            {/* Pagination Buttons Start */}
                            <div className='flex items-center mt-3'>
                                <div className='flex items-center justify-between mr-7'>
                                    <p className='me-3'>Rows per page</p>
                                    <div>
                                        <select
                                            className=" mt-2 px-2 py-2 border-gray-color rounded-lg text-base font-medium focus-visible:bg-white"
                                            value={rowsPerPage}
                                            onChange={(e) => {
                                                setRowsPerPage(Number(e.target.value));
                                                setCurrentPage(1); // Reset to first page
                                            }}
                                        >
                                            {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                                                <option key={num} value={num}>
                                                    {num}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                                {/* Pagination Buttons */}
                                <div className="flex items-center">
                                    <button
                                        className={`px-3 py-1 bg-white border rounded-lg mr-3 text-sm font-medium ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
                                            }`}
                                        onClick={handlePrevious}
                                        disabled={currentPage === 1}
                                    >
                                        Previous
                                    </button>
                                    <button
                                        className={`px-3 py-1 bg-white border rounded-lg text-sm font-medium ${currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
                                            }`}
                                        onClick={handleNext}
                                        disabled={currentPage === totalPages}
                                    >
                                        Next
                                    </button>
                                </div>
                            </div>

                        </div>
                        <div className="col-span-2 col-start-5 mt-3">
                            <InvoiceReceipt />
                        </div>
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

        </>

    );

};
export default AllInvoice;