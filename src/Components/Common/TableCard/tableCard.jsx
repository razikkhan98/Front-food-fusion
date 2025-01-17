import React from "react";
import warning from "../../Assets/Images/TableImages/dine.svg";
import Table from "../../Assets/Images/TableImages/tableImg.svg";
import recipt from "../../Assets/Images/TableImages/recipt.svg";

const TableCard = () => {
  return (
    <>
      {/* // ------- blank table ------- */}
      {/* <div className=" flex items-center">
        <div className=" p-4 bg-white border border-black rounded-2xl w-5/6 ">
          <div className="flex justify-center mt-1 mb-3">
            <img className="w-11/12" src={Table} alt="" />
          </div>
        </div>
      </div> */}

      <div className=" flex items-center ">
        <div className=" px-3 py-2 bg-white rounded-2xl shadow-lg cashier-light-bg-color  w-5/6">
          <div className="flex justify-between">
            <div>
              <span className="bg-white rounded-lg px-2 hidden">22:10</span>
            </div>
            <img src={warning} alt="" />
          </div>
          <div className="flex justify-center mt-1 mb-1">
            <img className="w-12" src={Table} alt="" />
          </div>
          {/* <div className="flex justify-between">
            <div>
              <h2 className="text-sm ">Table 11</h2>
              <p className="text-sm font-semibold">Mr Rohan</p>
            </div>
            <div className="bg-[#ffffff4d] p-2 rounded-lg h-full">
              <img className="" src={recipt} alt="" />
            </div>
          </div> */}
          <div className="text-center">
             <span className="text-sm">Table 7 <span className="font-semibold">Mr Admin</span></span>
             <h5 className="text-sm font-semibold text-red-700">Reserved</h5>
         </div>
        </div>
      </div>
    </>
  );
};

export default TableCard;
