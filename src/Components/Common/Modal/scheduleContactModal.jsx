import React, { useState } from 'react';

// Import Third Party Components
import { Dialog } from "@headlessui/react";

// Import React Icons
import { RxCross2 } from "react-icons/rx";

// Import Images
import Call from '../../Assets/Images/sidebarImg/call.svg';
import Whatsapp from "../../Assets/Images/schedule-img/whatsapp.svg";
import Gmail from "../../Assets/Images/schedule-img/gmail_symbol.svg";
import Copy from "../../Assets/Images/schedule-img/copy-icon.svg";

// Role Json 
const contactOptions = [
    {
        name: "Call",
        img: Call,
        color: "bg-light-green text-color-green border-green-color"

    },
    {
        name: "Whatsapp",
        img: Whatsapp,
        color: "bg-whatsapp-light-green text-whatsapp-green border-whatsapp-green",
    },
    {
        name: "Gmail",
        img: Gmail,
        color: "bg-blue-light-color border-blue-color text-blue-color",

    }
];

const optionColors = {
    Call: "bg-light-green border-green-color",
    Whatsapp: "bg-whatsapp-light-green border-whatsapp-green",
    Gmail: "bg-blue-light-color border-blue-color"
};
const ScheduleContactModal = ({ isOpen, closeModal }) => {
    // ===========
    // State
    // ============
    const [selectedOption, setSelectedOption] = useState(null);
    const [inputValue, setInputValue] = useState('');

// ============
// Function
// =============

    // Function to handle option click
    const handleOptionClick = (option) => {
        setSelectedOption(option);
    };

    // Function to handle modal close
    const handleModalClose = () => {
        setSelectedOption(null); // Reset selection when closing
        setInputValue(''); // Clear input field
        closeModal();
    };

    return (
        <Dialog
            open={isOpen}
            onClose={handleModalClose}
            className="fixed inset-0 z-10 flex items-center justify-center"
        >
            {/* Overlay */}
            <div className="fixed inset-0 bg-black bg-opacity-50" aria-hidden="true" onClick={handleModalClose} />

            {/* Modal Content */}
            <div className="bg-white p-6 rounded-2xl shadow-lg z-20 w-[427px] h-auto">
                {/* Close Button */}
                <div className="flex justify-end">
                    <button onClick={handleModalClose} className="flex justify-center items-center bg-color-gray h-9 w-9 rounded-full">
                        <RxCross2 className="text-color-gray text-lg cursor-pointer" />
                    </button>
                </div>

                <div className='text-center'>
                    <p className='text-2xl font-semibold'>Contact the customer</p>

                    <p className='text-sm font-normal text-gray-500 my-5'>
                        {selectedOption === "Call" ? "Call the customer to inform/ ask about the schedule"
                            : selectedOption === "Whatsapp" ? "Send a text via WhatsApp"
                                : selectedOption === "Gmail" ? "Send a mail to inform the customer"
                                    : 'Choose an option to contact the customer'}
                    </p>

                    {selectedOption ? (
                        // Show input field when an option is selected
                        <div className={`flex items-center rounded-full p-3 ${optionColors[selectedOption]}`}>
                            {selectedOption === "Call" && <img src={Call} className="w-6 h-6 mr-2 border-e pe-2 border-[#94D82D]" alt="Call" />}
                            {selectedOption === "Whatsapp" && <img src={Whatsapp} className="w-6 h-6 mr-2 border-e pe-2 border-[--whatsapp-green-color]" alt="Whatsapp" />}
                            {selectedOption === "Gmail" && <img src={Gmail} className="w-6 h-5 mr-2 border-e pe-2 border-[--blue-color]" alt="Gmail" />}

                            <input
                                type="text"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                placeholder="Type here..."
                                className="w-full outline-none bg-transparent rounded-full"
                            />
                            <button type="submit">
                                {selectedOption === "Call" && <img src={Copy} className="h-7 w-7" alt="Loading" />}
                                {selectedOption === "Whatsapp" && <p className="text-whatspp-green-color text-base font-medium mr-2">Send</p>}
                                {selectedOption === "Gmail" && <p className="text-blue-color text-base font-medium mr-2">Send</p>}

                            </button>
                        </div>
                    ) : (
                        // Show buttons when no option is selected
                        <div className='flex justify-evenly'>
                            {contactOptions.map((option) => (
                                <button
                                    key={option.name}
                                    onClick={() => handleOptionClick(option.name)}
                                    className={`rounded-full px-4 py-2 text-xs font-medium ${option.color} flex items-center justify-center`}
                                >
                                    <img src={option.img} className='me-2 w-4 h-4' alt={option.name} />
                                    {option.name}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </Dialog>
    );
};

export default ScheduleContactModal;
