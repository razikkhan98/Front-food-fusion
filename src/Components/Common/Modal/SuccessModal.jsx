import React from 'react'

// Import Third Party Components
import { Dialog } from '@headlessui/react';

// import React Icons
import { RxCross2 } from 'react-icons/rx';

//Import Common Components
import Button from '../Button/button';


const SuccessModal = ({ isOpen, closeModal, image, title, description, buttonTexts }) => {


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

                    <div className='flex flex-col items-center justify-center text-center'>
                        <img src={image} className='mb-3' alt="Loading" />
                        <p className='text-2xl font-semibold text-color-black'>{title}</p>
                        <p className='text-sm font-medium text-color-gray mt-3'>{description}</p>
                        <div className='mt-6'>
                            {buttonTexts?.map((btn, index) => (
                                <button key={index} className='w-80 py-2 cashier-main-text-color text-base font-medium rounded-full border-[--cashier-main-color] border-2 my-1 hover:bg-[--cashier-main-color] hover:text-white' >
                                {btn}
                                </button>
                            ))}
                        </div>


                    </div>


                </div>
            </Dialog>

        </>
    )
}

export default SuccessModal;