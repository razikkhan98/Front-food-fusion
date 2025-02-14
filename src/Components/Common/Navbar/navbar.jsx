import React from "react";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";


const Navbar = ({ pageHeading = [], buttons = [], icons = [] }) => {
  return (
    <div>
      {pageHeading.length > 0 && (
        <div className="text-sm text-gray-500 mb-2 flex items-center">
          {pageHeading.length === 1 ? (
            <span className="mr-2 font-medium text-base text-color-black flex items-center"> <span className="text-color-gray me-2"><IoIosArrowBack /></span> {pageHeading[0]}</span> // Show "< Table" if only one
          ) : (
            pageHeading.map((heading, index) => (
              <span
                key={index}
                className={`font-medium text-base flex items-center ${index === 0 ? "text-color-gray" : "text-black "}`}
              >
                {heading} {index < pageHeading.length - 1 && <span className="text-color-gray mx-2"> <IoIosArrowForward /></span>}
              </span>
            ))
          )}
        </div>
      )}
      <div class="flex gap-4 border-b pb-3">
        {buttons.length > 0 &&
          buttons.map((floor, index) => (
            <button
              key={index}
              type="button"
              className={`${floor.btn_color} hover:bg-orange-100 text-gray-600 font-semibold hover:text-black py-1 px-4 border border-orange-100 hover:border-transparent rounded-full`}
            >
              {floor.btn_name}
            </button>
          ))}

        {icons.length > 0 && (
          <div className="flex gap-4 ml-auto">
            {icons.map((item, index) => (
              <div key={index} className="cashier-light-bg-color rounded-full p-2">
                <img src={item.nav_img} alt={item.alt} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
