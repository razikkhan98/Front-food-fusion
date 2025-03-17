import React, { useState } from 'react'

// Import Third Party Components
import { Dialog } from '@headlessui/react';

// import React Icons
import { RxCross2 } from 'react-icons/rx';
import Button from '../Button/button';
import SettleBillModal from './SettleBillModal';

// Images 
import Recipt from "../../Assets/Images/modal/receipt.png";


const GenerateInvoiceModal = ({ isOpen, closeModal }) => {
  // ============
  // State
  // ============


  const [settleBillModalOpen, setSettleBillModalOpen] = useState(false);


  // ===========
  // Function
  // =============

  // Open Modal for user login function
  const openSettleBillModal = () => setSettleBillModalOpen(true);
  const closeSettleBillModal = () => setSettleBillModalOpen(false);


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
        <div className="bg-white p-6 rounded-2xl shadow-lg z-20 invoice-modal">
          {/* Close Button */}
          <div className="flex justify-between">
            <p className='text-2xl font-semibold'>Generate Invoice</p>
            <button
              onClick={handleModalClose}
              className="flex justify-center items-center bg-color-gray h-9 w-9 rounded-full"
            >
              <RxCross2 className="text-color-gray text-lg cursor-pointer" />
            </button>
          </div>

          <div className='flex justify-center mb-14'>
            <img src={Recipt} alt="Loading" />
          </div>

          {/* <button className='w-full py-2 cashier-main-text-color text-base font-medium rounded-full border-[--cashier-main-color] border-2 my-1 hover:bg-[--cashier-main-color] hover:text-white'>Save & Settle Bill</button> */}
          <Button title={"Save & Settle Bill"} onClick={openSettleBillModal} />
        </div>

      </Dialog>

      <SettleBillModal
        isOpen={settleBillModalOpen}
        closeModal={closeSettleBillModal}
      />
    </>
  )
}

export default GenerateInvoiceModal;