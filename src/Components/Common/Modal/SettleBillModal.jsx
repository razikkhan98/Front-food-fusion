import React from 'react'

// Import Third Party Components
import { Dialog } from '@headlessui/react';

// import React Icons
import { RxCross2 } from 'react-icons/rx';

const SettleBillModal = ({ isOpen, closeModal }) => {
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
                <div className="bg-white p-6 rounded-2xl shadow-lg z-20 Success-modal">
                    {/* Close Button */}
                    <div className="flex justify-end">
                        <button
                            onClick={handleModalClose}
                            className="flex justify-center items-center bg-color-gray h-9 w-9 rounded-full"
                        >
                            <RxCross2 className="text-color-gray text-lg cursor-pointer" />
                        </button>
                    </div>




                </div>
            </Dialog>
        </>
    )
}

export default SettleBillModal;