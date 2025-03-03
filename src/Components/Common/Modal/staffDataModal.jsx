import { Dialog } from '@headlessui/react'
import React, { useState } from 'react'


// Import React Icons
import { RxCross2 } from "react-icons/rx";

import Call from '../../Assets/Images/sidebarImg/call.svg';
import { PiChatsBold } from 'react-icons/pi';
const StaffDataModal = ({ isOpen, closeModal }) => {
    // ===========
    // State
    // ============
    const [inputText, setInputText] = useState('');
    const [isDropdownVisible, setDropdownVisible] = useState(false);
    // const [selectedText, setSelectedText] = useState('');

    // ============
    // Function
    // =============

    // Function to handle modal close
    const handleModalClose = () => {
        closeModal();
    };


    const suggestions = [
        "Some or all items in the order are out of stock.",
        "Insufficient staff to prepare or manage the order at the moment.",
        "Unable to fulfill the order due to overwhelming demand or capacity issues.",
        "Some or all items in the order are out of stock.",
    ];

    // Handle input change
    const handleInputChange = (e) => {
        setInputText(e.target.value);
        setDropdownVisible(e.target.value.length > 0); // Show dropdown when typing
    };

    // Handle selection from dropdown
    const handleSelectSuggestion = (text) => {
        setInputText(text);
        setDropdownVisible(false); // Hide dropdown after selection
    };


    return (
        <>
            <Dialog
                open={isOpen}
                onClose={handleModalClose}
                className="fixed inset-0 z-10 flex items-center justify-center z-30"
            >
                {/* Overlay */}
                <div className="fixed inset-0 bg-black bg-opacity-50" aria-hidden="true" onClick={handleModalClose} />

                {/* Modal Content */}
                <div className="schedule-contact-modal bg-white p-6 rounded-2xl shadow-lg z-20 h-auto">
                    {/* Close Button */}
                    <div className="flex justify-end">
                        <button onClick={handleModalClose} className="flex justify-center items-center bg-color-gray h-9 w-9 rounded-full">
                            <RxCross2 className="text-color-gray text-lg cursor-pointer" />
                        </button>
                    </div>

                    <div className='text-center'>
                        <p className='text-2xl font-semibold mb-3'>Send Personal Text</p>
                        <p className='text-sm font-normal text-color-gray'>Send a text to the Admin</p>
                        </div>

                        <div className='relative  mt-6'>

                            <div className={`flex items-center rounded-full p-2 bg-blue-light-color border-blue-color relative`}>
                                <PiChatsBold className="text-4xl pe-1 mx-2 border-e text-blue-color border-[--blue-color]" />
                                <input
                                    type="text"
                                    placeholder="Type here or select"
                                    value={inputText}
                                    onChange={handleInputChange}
                                    className="w-full outline-none bg-transparent rounded-full"
                                />
                                <button type="submit">
                                    <p className="text-blue-color text-base font-medium mr-2">Send</p>
                                </button>
                            </div>

                            {isDropdownVisible && (
                                <ul className="absolute left-0 top-12 h-48 overflow-y-scroll hidden-scroll w-full bg-white rounded-t-0 border-gray-300 rounded-xl mt-2">
                                    {suggestions
                                        .filter((s) => s.toLowerCase().includes(inputText.toLowerCase()))
                                        .map((suggestion, index) => (
                                            <li
                                                key={index}
                                                onClick={() => handleSelectSuggestion(suggestion)}
                                                className={`px-4 py-3 my-2 mx-3 text-gray-700 text-xs font-normal text-color-black cursor-pointer ${index % 2 === 0 ? "dropdown-list-light-color" : "dropdown-list-color"}`}
                                            >
                                                {suggestion}
                                            </li>
                                        ))}
                                </ul>
                            )}

                        </div>



                </div>
            </Dialog>
        </>
    )
}

export default StaffDataModal