import React from 'react'

// Import Third Party Components
import { Dialog } from '@headlessui/react';

// import React Icons
import { RxCross2 } from 'react-icons/rx';

//Import Common Components
import Button from '../Button/button';

// import image 
import tick from '../../Assets/Images/schedule-img/Success-icon.svg'

const BillSettleSuccessModal = ({ isOpen, closeModal, image, title, description, buttonTexts }) => {


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
                <div className="bg-white p-6 rounded-2xl shadow-lg z-20 settle-bill-modal">
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
                        <img src={tick} className='mb-3' alt="Loading" />
                        <p className='text-2xl font-semibold text-color-black'>Bill Settled Successfully!</p>
                        <p className='text-sm font-medium text-color-gray mt-3'>The Bill for Order No. 1234,  has been settled successfully.</p>
                        <hr className='w-full my-6' />
                        <div className='w-full px-4'>
                            <ul>
                                <li className='flex justify-between'><span className='text-sm font-normal text-color-gray'>Reference No</span><span className='text-sm font-medium'>000001234567</span></li>
                                <li className='flex justify-between mt-3'><span className='text-sm font-normal text-color-gray'>Table No</span><span className='text-sm font-medium'>02</span></li>
                                <li className='flex justify-between mt-3'><span className='text-sm font-normal text-color-gray'>Amount Received</span><span className='text-sm font-medium'>₹500</span></li>
                                <li className='flex justify-between mt-3'><span className='text-sm font-normal text-color-gray'>Date & Time</span><span className='text-sm font-medium'>17-12-2024; 13:22:16</span></li>
                                <li className='flex justify-between mt-3'><span className='text-sm font-normal text-color-gray'>Payment Mode</span><span className='text-sm font-medium'>Bank Transfer</span></li>
                            </ul>
                        </div>


                    </div>


                </div>
            </Dialog>

        </>
    )
}

export default BillSettleSuccessModal;