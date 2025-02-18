import React from 'react'

// Third party components
import { Dialog } from "@headlessui/react";
import { RxCross2 } from "react-icons/rx";


// Import Images
import Call from '../../Assets/Images/sidebarImg/call.svg';
import Whatsapp from "../../Assets/Images/schedule-img/whatsapp.svg";
import Gmail from "../../Assets/Images/schedule-img/gmail_symbol.svg.svg";
const ScheduleContactModal = ({ isOpen, closeModal, selectedItems }) => {


    // ==========  
    // State 
    // ============ 

    // ==========  
    // Functions 
    // ============ 


    // Close the modal and reset the form
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
                <div
                    className="fixed inset-0 bg-black bg-opacity-50"
                    aria-hidden="true"
                    onClick={handleModalClose}
                />

                {/* Modal Content */}
                <div className="bg-white p-6 rounded-2xl shadow-lg z-20 w-[422px] h-[225px]">
                    {/* Close Button */}
                    <div className="flex justify-end">
                        <button
                            onClick={handleModalClose}
                            className="flex justify-center items-center bg-color-gray h-9 w-9 rounded-full"
                        >
                            <RxCross2 className="text-color-gray text-lg cursor-pointer" />
                        </button>
                    </div>

                    <div className='text-center'>
                        <p className='text-2xl font-semibold'>Contact the customer</p>
                        <p className='text-sm font-normal text-color-gray my-5'>Choose an option to contact the customer</p>

                        <div className='flex justify-evenly'>

                            <button className='rounded-full px-4 py-2 text-xs font-medium bg-light-green text-color-green border-green-color flex items-center justify-center'>
                                <img src={Call} className='me-2 w-3 h-3' alt="Loading" />
                                Call</button>
                            <button className='rounded-full px-4 py-2 text-xs font-medium bg-whatsapp-light-green text-whatspp-green-color border-whatsapp-green flex items-center justify-center'>
                                <img src={Whatsapp} className='me-2 w-4 h-4' alt="Loading" />
                                Whatsapp</button>
                            <button className='rounded-full px-4 py-2 text-xs font-medium bg-blue-light-color text-blue-color border-blue-color flex items-center justify-center'>
                                <img src={Gmail} className='me-2 h-3 w-4' alt="Loading" />
                                Gmail</button>

                        </div>
                    </div>

                </div>
            </Dialog>

        </>
    )
}

export default ScheduleContactModal;