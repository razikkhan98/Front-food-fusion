import React from "react";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { NavLink } from "react-router-dom";


const Navbar = ({ pageHeading = [], buttons = [], icons = [], btn_purple }) => {
  return (
    <div>
      {pageHeading?.length > 0 && (
        <div className="text-sm my-3 flex items-center">
          {pageHeading.length === 1 ? (
            <span className="mr-2 font-medium text-base text-color-black flex items-center"> <IoIosArrowBack className="text-color-gray me-2 text-xl" /> {pageHeading[0]}</span> // Show "< Table" if only one
          ) : (
            pageHeading.map((heading, index) => (
              <span
                key={index}
                className={`font-medium text-base flex items-center ${index === 0 ? "text-color-gray" : "text-black "}`}
              >
                {heading} {index < pageHeading.length - 1 && <IoIosArrowForward  className="text-color-gray mx-2 text-xl"/>}
              </span>
            ))
          )}
        </div>
      )}
      <div class="flex gap-4 pb-3">
        {buttons?.length > 0 &&
          buttons.map((floor, index) => (
            <NavLink to={floor.btn_path}>
              <button
                key={index}
                type="button"
                className={`${floor.btn_color} hover:bg-orange-100 text-gray-600 font-semibold hover:text-black py-1 px-4 border border-orange-100 hover:border-transparent rounded-full`}
              >
                {floor.btn_name}
              </button>

            </NavLink>
          ))}

        {icons?.length > 0 && (
          <div className="flex gap-4 ml-auto">
            {icons.map((item, index) => (
              <div key={index} className="navbar-icon-bg-color rounded-full p-2 z-0">
                <img src={item.nav_img} alt={item.alt} />
              </div>
            ))}
          </div>
        )}

        {btn_purple?.length > 0 &&
          (
            <button className="px-7 py-2.5 text-sm font-medium text-purple-color border-purple-color hover:bg-[--purple-color] hover:text-white rounded-full">{btn_purple}</button>

          )}
      </div>
    </div>
  );
};

export default Navbar;
