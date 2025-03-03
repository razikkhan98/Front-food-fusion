import React from "react";


// images
import sort from "../../Assets/Images/navbar-img/SortAscending.svg";


const NavbarSortModal = ({ isOpen, onClose }) => {
  // ==========
  // State
  // ==========

  // ==========
  // function
  // ==========

  return (
    <div className="">
      {/* Modal Component */}
      {isOpen && (
        <div className="fixed notification-modal top-28 right-14 z-50 transition-all overflow-hidden duration-300 ease-in-out">
          <div className="absolute right-0 mt-2 w-40  h-44 bg-white rounded-lg border shadow-lg">
            <div className="m-2">
                <div className="flex justify-between items-center">
                    <span className="text-color-gray text-sm font-medium">Sort BY</span>
                    <span className="w-6 h-6 flex justify-center items-center rounded-full bg-color-gray">
                        <img className="w-3 h-3" src={sort} alt="" />
                    </span>
                </div>
                <hr className="mt-2" />
             <div className="text-sm font-normal text-color-gray hover:text-black schedule-popup-hover mt-2 py-2 px-1">Payment mode</div>
             <hr />
             <div className="text-sm font-normal text-color-gray hover:text-black schedule-popup-hover mt-2 py-2 px-1">Successful</div>
             <hr />
             <div className="text-sm font-normal text-color-gray hover:text-black schedule-popup-hover mt-2 py-2 px-1">Cancelled</div>
            </div>
          </div>
        </div>
        // </div>
      )}

      {/* Optional: Overlay */}
      {isOpen && <div onClick={onClose} className="fixed inset-0 z-40"></div>}
    </div>
  );
};

export default NavbarSortModal;
