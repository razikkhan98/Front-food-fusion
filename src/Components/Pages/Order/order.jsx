import React, { useEffect, useState } from "react";

// Common Components
import LeftSideNavbar from "../../Common/SideNavbar/leftSideNavbar.jsx";
import RightSidebar from "../../Common/SideNavbar/rightSideNavbar.jsx";
import { connect, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import { TableBookingRedux } from "../../Redux/Slice/Order/tableBookingSlice.jsx";

// import React-icons
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";

// import img
import ChatBot from "../../Common/ChatBot/chatbot.jsx";
import Navbar from "../../Common/Navbar/navbar.jsx";
import bell from "../../Assets/Images/navbar-img/bell.svg";
import { TableNoRedux } from "../../Redux/Slice/Table/tableDetailSlice.jsx";
// Json
const customerData = [
  {
    customer_name: "John Doe",
    customer_mobile_no: "+1234567890",
    customer_orderType: "Online",
    customer_email: "johndoe@example.com",
  },
  {
    customer_name: "Jane Smith",
    customer_mobile_no: "+9876543210",
    customer_orderType: "Takeaway",
    customer_email: "janesmith@example.com",
  },
  {
    customer_name: "Alice Johnson",
    customer_mobile_no: "+1122334455",
    customer_orderType: "Dine In",
    customer_email: "alicejohnson@example.com",
  },
  {
    customer_name: "Robert Brown",
    customer_mobile_no: "+9988776655",
    customer_orderType: "Delivery",
    customer_email: "robertbrown@example.com",
  },
];
const OrderIcons = [{ nav_img: bell }];
const Order = ({ tableNoFromRedux ,tableDetailsFromRedux}) => {
  // console.log('tableDetailsFromRedux: ', tableDetailsFromRedux?.TableBooking);
  // ==========
  // UseFrom
  // ============
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm();

  // ==========
  // State
  // ============
  const [isRightSidebarOpen, setIsRightSidebarOpen] = useState(false);
  const [orderDetailState, setorderDetailState] = useState();

  // ==========
  // Functions
  // ============

  //  get table no from URL
  const params = useParams();
  const dispatch = useDispatch();

  const toggleRightSidebar = () => {
    setIsRightSidebarOpen(!isRightSidebarOpen);
  };

  const nameInptField = watch("name");
  const numberInptField = watch("number");
  const orderTypeInptField = watch("orderType");
  const emailInptField = watch("email");
  const deliveryAddressInptField = watch("deliveryAddress");

  const onSubmit = (data) => {
    const payload = {
      tableNo:
        data?.orderType == "Takeaway" || data?.orderType == "Delivery"
          ? ""
          : params.tableNo || data?.tableNo,
      customerName: data?.name,
      customerEmail: data?.email,
      customerPhone: data?.number,
      orderType: data?.orderType,
      deliveryAddress: data?.deliveryAddress,
      orderStatus: "reserve",
    };
    dispatch(TableBookingRedux(payload));
    dispatch(
      TableNoRedux(
        data?.orderType == "Takeaway" || data?.orderType == "Delivery"
          ? ""
          : data?.tableNo
      )
    );
  };

  // Filter Functionality
  const filterInpFildFromPrevOrder = tableDetailsFromRedux?.TableBooking?.filter((i)=>{
    return Number(i?.tableNo) == params.tableNo
  })

  //==========
  // useEffect
  // ============

  useEffect(() => {
    setValue("name", filterInpFildFromPrevOrder[0]?.customerName);
    setValue("number", filterInpFildFromPrevOrder[0]?.customerPhone);
    setValue("email", filterInpFildFromPrevOrder[0]?.customerEmail);
    setValue("orderType", filterInpFildFromPrevOrder[0]?.orderType);
    setValue("deliveryAddress", filterInpFildFromPrevOrder[0]?.deliveryAddress);
    setValue("tableNo", filterInpFildFromPrevOrder[0]?.tableNo || params.tableNo || tableNoFromRedux?.tableNo);
  }, []);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Left Sidebar */}
      <LeftSideNavbar />

      {/* Chatbot Section start */}
      <ChatBot />
      {/* Chatbot Section End */}

      {/* Main Content Area */}
      <div className={`flex-grow py-2 px-6 transition-all duration-300`}>
        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 ">
          <span className="mr-2">Book Table</span> &gt;{" "}
          <span className="ml-2">Generate Order</span>
        </div>
        <Navbar icons={OrderIcons} />

        {/* Order Details */}
        <div className="bg-white rounded-lg border shadow-md p-6 mt-2">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-2 gap-6 lg:grid-cols-3">
              {/* Name */}
              <div>
                <label className="text-black font-medium text-sm">Name</label>
                <input
                  type="text"
                  placeholder="Customer's name here"
                  className={`w-full mt-1 p-2 border rounded-lg  bg-${
                    nameInptField ? "" : "gray-200"
                  } focus-visible:bg-white`}
                  {...register("name")}
                />
                {errors?.customer_name && (
                  <span className="text-red-600">
                    {errors?.customer_name?.message}
                  </span>
                )}
                {/* {filteredCustomers?.length > 0 && (
                  <ul className="absolute left-72 top-48 w-3/12 h-32 overflow-y-scroll mt-2 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
                    {filteredCustomers.map((customer, index) => (
                      <li
                        key={index}
                        className="p-2 hover:bg-gray-200 cursor-pointer"
                        onClick={() => handleSelectCustomer(customer)}
                      >
                        {customer?.customer_name} - {customer?.customer_mobile_no}
                      </li>
                    ))}
                  </ul>
                )} */}
              </div>
              {/* Contact No */}
              <div>
                <label className="text-black font-medium text-sm">
                  Contact No
                </label>
                <input
                  type="text"
                  placeholder="Customer's contact no here"
                  className={`w-full mt-1 p-2 border rounded-lg  bg-${
                    numberInptField ? "" : "gray-200"
                  } focus-visible:bg-white`}
                  {...register("number")}
                />
                {errors.customer_mobile_no && (
                  <p className="text-red-500 text-xs">
                    {errors.customer_mobile_no.message}
                  </p>
                )}
              </div>
              {/* Order Type */}
              <div>
                <label className="text-black font-medium text-sm">
                  Order Type
                </label>
                <select
                  className={`w-full mt-1 p-2 border rounded-lg  bg-${
                    orderTypeInptField ? "" : "gray-200"
                  } focus-visible:bg-white`}
                  {...register("orderType")}
                >
                  <option value="">Select Order Type</option>
                  <option value="Dine In">Dine In</option>
                  <option value="Takeaway">Take Away</option>
                  <option value="Delivery">Delivery</option>
                </select>
                {errors.customer_orderType && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.customer_orderType.message}
                  </p>
                )}
              </div>
              {/* Email */}
              <div>
                <label className="text-black font-medium text-sm">
                  E-mail (Optional)
                </label>
                <input
                  type="email"
                  placeholder="Customer's E-mail ID here"
                  className={`w-full mt-1 p-2 border rounded-lg  bg-${
                    emailInptField ? "" : "gray-200"
                  } focus-visible:bg-white`}
                  {...register("email")}
                />
                {errors.customer_email && (
                  <p className="text-red-500 text-xs">
                    {errors.customer_email.message}
                  </p>
                )}
              </div>
              {/* Table No if Dine In */}
              {orderTypeInptField == "Dine In" || orderTypeInptField == "" ? (
                <div>
                  <label className="text-black font-medium text-sm block">
                    Table No
                  </label>
                  <select
                    className="w-1/4 mt-1 p-2 border rounded-lg focus-visible:bg-white"
                    {...register("tableNo")}
                  >
                    <option value={""}>Table No.</option>
                    <option value={"1"}>1</option>
                    <option value={"2"}>2</option>
                    <option value={"3"}>3</option>
                    <option value={"4"}>4</option>
                    <option value={"5"}>5</option>
                    <option value={"6"}>6</option>
                    <option value={"7"}>7</option>
                    <option value={"8"}>8</option>
                  </select>
                </div>
              ) : orderTypeInptField == "Delivery" ? (
                <>
                  {/* delivery address if delivery */}
                  <div>
                    <label className="text-black font-medium text-sm">
                      Delivery Address
                    </label>
                    <input
                      type="text"
                      placeholder="Customer's Address here"
                      className={`w-full mt-1 p-2 border rounded-lg  bg-${
                        orderTypeInptField ? "" : "gray-200"
                      } focus-visible:bg-white`}
                      {...register("deliveryAddress")}
                    />
                    {/* {errors.deliveryaddress && (
                <p className="text-red-500 text-xs">{errors.deliveryaddress.message}</p>
              )} */}
                  </div>
                </>
              ) : (
                <></>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex mt-6 space-x-4">
              {/* <Button title={"View previous Orders"}/> */}
              {/* <Button title={"Save"}/> */}
              <NavLink to={"/previousorder"}>
                <button
                  className={`px-6 py-2 ${
                    nameInptField && numberInptField && orderTypeInptField
                      ? "border-cashier cashier-main-text-color hover:text-white hover:bg-[--cashier-main-color]"
                      : "text-gray-600 bg-gray-50 opacity-50 cursor-not-allowed"
                  } rounded-full border border-gray-400`}
                  disabled={
                    !(nameInptField || numberInptField || orderTypeInptField)
                  } // Disable the button if none of the fields are filled
                >
                  View Previous Orders
                </button>
              </NavLink>
              <button
                className={`px-7 py-2 ${
                  nameInptField && orderTypeInptField
                    ? "cashier-main-bg-color text-white"
                    : "bg-gray-400 text-gray-700 opacity-50 cursor-not-allowed"
                } text-gray-600 rounded-full`}
                type="submit"
              >
                Save
              </button>
            </div>
          </form>
        </div>

        {/* Add Item Section */}
        <div className="mt-6 flex items-center justify-between">
          <button className="px-10 py-2 bg-purple-btn text-white rounded-full">
            Add Item
          </button>
          <div className="w-1/2 relative">
            <input
              type="text"
              placeholder="Search for items"
              className="w-full py-2 pl-10 pr-4 cashier-light-bg-color opacity-60 border-2 border-[--cashier-main-color] rounded-full focus:outline-none focus:ring-1 focus:ring-[--cashier-main-color]"
            />
            <svg
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              width="20"
              height="20"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-4.35-4.35M16.5 10.5a6 6 0 1 0-12 0 6 6 0 0 0 12 0z"
              />
            </svg>
          </div>
        </div>

        <div className="bg-white rounded-xl border shadow-md mt-3 h-48 hidden-scroll overflow-auto">
          {/* Table */}
          <table className="w-full">
            <thead>
              <tr className="cashier-bg-table-color text-center text-sm text-black rounded-t-2xl">
                <th className="border-b rounded-ss-xl p-3">S.No.</th>
                <th className="border-b p-3">Item's Name</th>
                <th className="border-b p-3">Notes/Add Ons</th>
                <th className="border-b p-3">Quantity</th>
                <th className="border-b p-3">Price</th>
                <th className="border-b rounded-tr-xl p-3">Amount</th>
              </tr>
            </thead>
            <tbody>
              {/* Placeholder for dynamic items */}
              <tr className="border-b">
                <td className="py-4 text-center text-gray-400" colSpan="6">
                  No items added.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Footer Buttons */}
        <div className="flex gap-7 mt-6">
          {/* <Button title={" Generate Invoice"}/>
          <Button title={"Send to Kitchen"}/> */}
          <button className="px-8 py-2 bg-gray-100 text-gray-500 rounded-full border border-gray-300">
            Generate Invoice
          </button>
          <button className="px-8 py-2 bg-gray-300 text-gray-600 rounded-full">
            Send To Kitchen
          </button>
        </div>
      </div>

      {/* Right Sidebar */}
      <div
        className={`bg-gray-200 transition-all duration-300 ease-in-out relative rounded-l-3xl ${
          isRightSidebarOpen ? "w-80" : "w-7"
        }`}
      >
        <span
          className="bg-purple-btn hover:bg-blue-700 font-bold p-1 cursor-pointer rounded-full absolute top-1/2 -left-5"
          onClick={toggleRightSidebar}
        >
          {/* <img src={Toggle} alt="Loading" /> */}
          <MdOutlineKeyboardDoubleArrowLeft className="text-3xl text-white font-semibold" />
        </span>

        <RightSidebar />
        {/* <FoodCard/> */}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  tableNoFromRedux: state?.tableDetails,
  tableDetailsFromRedux: state?.tableBooking
});

export default connect(mapStateToProps, {})(Order);
