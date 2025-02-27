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


    // ============
    // Function
    // =============

    // Function to handle modal close
    const handleModalClose = () => {
        closeModal();
    };

    return (
        <>
            <Dialog
                open={isOpen}
                onClose={handleModalClose}
                className="fixed inset-0 z-10 flex items-center justify-center"
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

                        <div className={`flex items-center rounded-full p-2 bg-blue-light-color border-blue-color mt-6`}>
                            <PiChatsBold className="text-4xl pe-1 mx-2 border-e text-blue-color border-[--blue-color]"/>
                            <input
                                type="text"
                                placeholder="Type here or select"
                                className="w-full outline-none bg-transparent rounded-full"
                            />
                            <button type="submit">
                                <p className="text-blue-color text-base font-medium mr-2">Send</p>
                            </button>
                        </div>


                    </div>
                </div>
            </Dialog>
        </>
    )
}

export default StaffDataModal