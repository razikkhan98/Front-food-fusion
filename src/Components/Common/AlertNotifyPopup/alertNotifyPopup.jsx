import React, { useEffect } from "react";

const AlertNotifyPopup = ({ text, icon, isOpen, onClose }) => {
  return (
    <div>
      {isOpen && (
        <div className="fixed bottom-7 notify-alert-position z-50 transition-all rounded-xl card-box-shadow duration-300 ease-in-out">
          <div className="flex justify-between items-center bg-white h-14 rounded-xl">
            <div className="text-base font-medium mx-6">{text}</div>
            <div>
              <img className="w-4 h-4 mx-6 my-5" src={icon} alt="" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AlertNotifyPopup;
