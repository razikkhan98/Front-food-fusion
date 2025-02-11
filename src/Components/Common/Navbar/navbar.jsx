import React from "react";


const Navbar = ({ buttons = [], icons = [] }) => {
  return (
    <div>
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

        {/* <div class="flex gap-4 ml-auto">
          <div class="cashier-light-bg-color rounded-full p-2">
            <img src={magnify} alt="Loading" />
          </div>
          <div class="cashier-light-bg-color rounded-full p-2">
            <img src={bell} alt="Loading" />
          </div>
        </div> */}
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
