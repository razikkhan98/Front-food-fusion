import React from "react";

import bell from "../../Assets/Images/navbar-img/bell.svg";
import magnify from "../../Assets/Images/navbar-img/MagnifyingGlass.svg";

const Navbar = () => {
  return (
    <div>
      <div class="flex gap-4 border-b pb-3">
        <button
          type="button"
          class="bg-orange-100 text-gray-600 font-semibold hover:text-black py-1 px-4 border border-orange-100 hover:border-transparent rounded-full"
        >
          Ground Floor
        </button>
        <button
          type="button"
          class="bg-transparent hover:bg-orange-100 text-gray-600 font-semibold hover:text-black py-1 px-4 border border-orange-100 hover:border-transparent rounded-full"
        >
          First Floor
        </button>
        <button
          type="button"
          class="bg-transparent hover:bg-orange-100 text-gray-600 font-semibold hover:text-black py-1 px-4 border border-orange-100 hover:border-transparent rounded-full"
        >
          Second Floor
        </button>
        <div class="flex gap-4 ml-auto">
          <div class="cashier-light-bg-color rounded-full p-2">
            <img src={magnify} alt="" />
          </div>
          <div class="cashier-light-bg-color rounded-full p-2">
            <img src={bell} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
