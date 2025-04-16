import React, { useContext } from "react";
import dine from "../../Assets/Images/TableImages/dine.svg";
import Table from "../../Assets/Images/TableImages/tableImg.svg";
import recipt from "../../Assets/Images/TableImages/recipt.svg";
import warning from "../../Assets/Images/TableImages/warning.svg";
import calender from "../../Assets/Images/TableImages/calendar-tick.svg";
import tick from "../../Assets/Images/TableImages/tick.svg";
import { Link, useNavigate } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import { TableNoRedux,TableCustomerIdRedux } from "../../Redux/Slice/Table/tableDetailSlice";
import useApi from "../../utils/Api/api";
import { UseContext } from "../../Context/context";

const TableCard = ({ tableNo, index, tableStatus, tableBooking, tableDetail }) => {
  const dispatch = useDispatch();
  const { request, error } = useApi();
  const { setCustomerDetailsCnxt } = useContext(UseContext);
  const Navigate = useNavigate()
  // =========
  // Function
  // =========
  const HandleTableNo = async(table_no,customer_id) => {
    dispatch(TableNoRedux(table_no));
    try {
      const response = await request(
        "GET",
        `/food-fusion/cashier//getCustomerById/${customer_id}`
      );
      if(response?.success){
        setCustomerDetailsCnxt(response?.data)
       return Navigate(`/order/${tableNo}`)
      }
      setCustomerDetailsCnxt()
      Navigate(`/order/${tableNo}`)
    } catch (error) {}
  };

  return (
    <>
      {/* // ------- booked table ------- */}
      {tableStatus === "book" || tableDetail?.orderStatus === "book" ? (
        <>
          <div className=" flex items-center m-3 w-36">
            <Link onClick={() => HandleTableNo(tableNo,tableDetail?.customerId)} className="" 
            // to={`/order/${tableDetail?.tableNo || tableNo}`}
            >
              <div className="px-3 py-2 bg-white rounded-2xl shadow-lg cashier-light-bg-color h-full table-card">
                <div className="flex justify-between">
                  <div>
                    <span className="bg-white rounded-lg px-2 hidden">
                      22:10
                    </span>
                  </div>
                  <img src={tick} alt="Loading" />
                </div>
                <div className="flex justify-center mt-1 mb-3">
                  <img className="w-16" src={Table} alt="Loading" />
                </div>
                <div className="flex justify-between">
                  <div>
                    <h2 className="text-xs ">Table {tableDetail?.tableNo || "7"}</h2>
                    <p className="text-xs font-medium truncate w-32">{tableDetail?.customerName || "MR Rohan"}</p>
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
      ) : tableStatus === "Order pending" ? (
        <>
          {/* ------- pending table ------- */}
          <div className=" flex items-center m-3 w-36">
            <Link onClick={() => HandleTableNo(tableNo,tableDetail?.customerId)} className="" 
            // to={`/order/${tableNo}`}
            >
              <div className="px-3 py-2 bg-white rounded-2xl shadow-lg cashier-light-bg-color h-full table-card">
                <div className="flex justify-between">
                  <div>
                    <span className="bg-white text-xs font-medium rounded-lg px-2 hidden">
                      22:10
                    </span>
                  </div>
                  <img src={warning} alt="Loading" />
                </div>
                <div className="flex justify-center mt-1 mb-5">
                  <img className="w-16" src={Table} alt="Loading" />
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
                <div className="text-center my-2 truncate w-32">
                  <span className="text-xs truncate">
                    T{tableNo || tableDetail?.tableNumber}{" - "}
                    <span className="font-medium text-xs">{tableDetail?.customerName}</span>
                  </span>
                  {/* <h5 className="text-sm font-semibold text-red-700">
                    Reserved
                  </h5> */}
                </div>
              </div>
            </Link>
          </div>
        </>
      ) : tableStatus === "Order making" ? (
        <>
          {/* ------- process table ------- */}
          <div className=" flex items-center m-3 w-36">
            <Link onClick={() => HandleTableNo(tableNo,tableDetail?.customerId)} className=""
            //  to={`/order/${tableNo}`}
            >
              <div className=" px-3 py-2 bg-white rounded-2xl shadow-lg cashier-light-bg-color h-full table-card">
                <div className="flex justify-between my-1">
                  <div>
                    <span className="bg-white rounded-lg px-2">22:10</span>
                  </div>
                  <img src={dine} alt="Loading" />
                </div>
                <div className="flex justify-center mt-1 mb-3">
                  <img className="w-16" src={Table} alt="Loading" />
                </div>
                <div className="text-center my-3 truncate w-32">
                  <span className="text-xs">
                    T{tableNo}{" - "}
                    <span className="font-medium text-xs">{tableDetail?.customerName}</span>
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </>
      ) : tableStatus === "reserve" || tableDetail?.orderStatus === "reserve" ? (
        <>
          {/* ------- reserve table ------- */}
          <div className="flex items-center m-3 w-36">
            <Link onClick={() => HandleTableNo(tableNo,tableDetail?.customerId)} className="" 
            // to={`/order/${tableDetail?.tableNo || tableNo}`}
            >
              <div className="px-3 py-2 bg-white rounded-2xl shadow-lg cashier-light-bg-color h-full table-card">
                <div className="flex justify-between">
                  <div>
                    <span className="bg-white rounded-lg px-2 hidden">
                      22:10
                    </span>
                  </div>
                  <img src={calender} alt="Loading" />
                </div>
                <div className="flex justify-center mt-1 mb-3">
                  <img className="w-16" src={Table} alt="Loading" />
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
                <div className="text-center truncate w-32">
                  <span className="text-xs">
                    Table {tableDetail?.tableNo || "7"}{" "}
                    <span className="font-medium text-xs">{tableDetail?.customerName || "MR Rohan"}</span>
                  </span>
                  <h5 className="text-xs font-semibold text-red-700">
                    Reserved
                  </h5>
                </div>
              </div>
            </Link>
          </div>
        </>
      ) : (
        <div className="flex items-center m-3 w-36">
          <Link
            className=""
            // to={`/order/${tableNo}`}

            onClick={() => HandleTableNo(tableNo)}
          >
            <div className="py-2 px-1 bg-white border border-black rounded-2xl table-card">
              <div className="flex justify-center mt-1 ">
                <img src={Table} className="table-img mx-2" alt="Loading" />
              </div>
              <div className="text-center my-2">
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
