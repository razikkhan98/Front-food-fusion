import React from "react";
import dine from "../../Assets/Images/TableImages/dine.svg";
import Table from "../../Assets/Images/TableImages/tableImg.svg";
import recipt from "../../Assets/Images/TableImages/recipt.svg";
import warning from "../../Assets/Images/TableImages/warning.svg";
import calender from "../../Assets/Images/TableImages/calendar-tick.svg";
import tick from "../../Assets/Images/TableImages/tick.svg";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const TableCard = ({ tableNo, index,tableStatus, tableBooking }) => {
  console.log('index,tableStatus: ', index,tableStatus);
  console.log("tableBooking: ", tableBooking?.TableBooking);
  return (
    <>
      {/* // ------- booked table ------- */}
      {tableStatus == "book" ? (
        <>
          <div className=" flex items-center ">
            <Link className="w-5/6 h-full" to={`/order/${tableNo}`}>
              <div className=" px-3 py-2 bg-white rounded-2xl shadow-lg cashier-light-bg-color h-full ">
                <div className="flex justify-between">
                  <div>
                    <span className="bg-white rounded-lg px-2 hidden">
                      22:10
                    </span>
                  </div>
                  <img src={tick} alt="" />
                </div>
                <div className="flex justify-center mt-1 mb-3">
                  <img className="w-12" src={Table} alt="" />
                </div>
                <div className="flex justify-between">
            <div>
            <h2 className="text-sm ">Table 11</h2>
            <p className="text-sm font-semibold">Mr Rohan</p>
            </div>
            <div className="bg-[#ffffff4d] p-2 rounded-lg h-full">
            <img className="" src={recipt} alt="" />
            </div>
            </div>
                {/* <div className="text-center">
                  <span className="text-sm">
                    Table {tableNo}{" "}
                    <span className="font-semibold">Mr Admin</span>
                  </span>
                  <h5 className="text-sm font-semibold text-red-700">
                    Reserved
                  </h5>
                </div> */}
              </div>
            </Link>
          </div>
        </>
      ) : tableStatus == "pending" ? (
        <>
          {/* ------- pending table ------- */}
          <div className=" flex items-center ">
            <Link className="w-5/6 h-full" to={`/order/${tableNo}`}>
              <div className=" px-3 py-2 bg-white rounded-2xl shadow-lg cashier-light-bg-color h-full  ">
                <div className="flex justify-between">
                  <div>
                    <span className="bg-white rounded-lg px-2 hidden">
                      22:10
                    </span>
                  </div>
                  <img src={warning} alt="" />
                </div>
                <div className="flex justify-center mt-1 mb-5">
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
                <div className="text-center my-3">
                  <span className="text-sm">
                    Table {tableNo}{" "}
                    <span className="font-semibold">Mr Admin</span>
                  </span>
                  {/* <h5 className="text-sm font-semibold text-red-700">
                    Reserved
                  </h5> */}
                </div>
              </div>
            </Link>
          </div>
        </>
      ) : tableStatus == "process" ? (
        <>
          {/* ------- process table ------- */}
          <div className=" flex items-center ">
            <Link className="w-5/6 h-full" to={`/order/${tableNo}`}>
              <div className=" px-3 py-2 bg-white rounded-2xl shadow-lg cashier-light-bg-color h-full  ">
                <div className="flex justify-between my-1">
                  <div>
                    <span className="bg-white rounded-lg px-2">
                      22:10
                    </span>
                  </div>
                  <img src={dine} alt="" />
                </div>
                <div className="flex justify-center mt-1 mb-3">
                  <img className="w-12" src={Table} alt="" />
                </div>
                <div className="text-center my-3">
                  <span className="text-sm">
                    Table {tableNo}{" "}
                    <span className="font-semibold">Mr Admin</span>
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </>
      ) : tableStatus == "reserve" ? (
        <>
          {/* ------- reserve table ------- */}
          <div className=" flex items-center ">
            <Link className="w-5/6 h-full" to={`/order/${tableNo}`}>
              <div className=" px-3 py-2 bg-white rounded-2xl shadow-lg cashier-light-bg-color h-full  ">
                <div className="flex justify-between">
                  <div>
                    <span className="bg-white rounded-lg px-2 hidden">
                      22:10
                    </span>
                  </div>
                  <img src={calender} alt="" />
                </div>
                <div className="flex justify-center mt-1 mb-3">
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
                  <span className="text-sm">
                    Table {tableNo}{" "}
                    <span className="font-semibold">Mr Admin</span>
                  </span>
                  <h5 className="text-sm font-semibold text-red-700">
                    Reserved
                  </h5>
                </div>
              </div>
            </Link>
          </div>
        </>
      ) : (
        <div className=" flex items-center">
          <Link className="w-5/6 h-full" to={`/order/${tableNo}`}>
            <div className="py-1 px-4 bg-white border border-black rounded-2xl ">
              <div className="flex justify-center mt-1 ">
                <img className="w-11/12" src={Table} alt="" />
              </div>
              <div className="text-center">
                <span className="">Table {tableNo}</span>
              </div>
            </div>
          </Link>
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  tableBooking: state?.tableBooking,
});

export default connect(mapStateToProps, {})(TableCard);
