import React, { useState } from "react";
import LeftSideNavbar from "../../Common/SideNavbar/leftSideNavbar.jsx";
import RightSidebar from "../../Common/SideNavbar/rightSideNavbar.jsx";
import { useDispatch } from "react-redux";

// import img
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
// import { TableBooking } from "../../Common/Redux/TableBooking/tableBookingSlice.jsx";
import { TableBooking } from "../../Redux/Slice/TableBooking/tableBookingSlice.jsx"

const Order = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [isRightSidebarOpen, setIsRightSidebarOpen] = useState(false);

  //  get table no from URL
  const params = useParams()
  const dispatch = useDispatch();

  const toggleRightSidebar = () => {
    setIsRightSidebarOpen(!isRightSidebarOpen);
  };

  const nameInptField = watch('name')
  const numberInptField = watch('number')
  const orderTypeInptField = watch('orderType')
  const emailInptField = watch('email')


  const onSubmit = (data) => {
    const payload = {
      tableNo: params.tableNo,
      customerName: data?.name,
      customerEmail: data?.email,
      customerPhone: data?.number,
      orderTotal: data?.orderType,
      orderStatus: "book",
    }
    dispatch(TableBooking(payload));
  };

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Left Sidebar */}
      <LeftSideNavbar />

      {/* Main Content Area */}
      <div className={`flex-grow py-2 px-6 transition-all duration-300`}>
        {/* <Navbar /> */}
        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 mb-4">
          <span className="mr-2">Book Table</span> &gt;{" "}
          <span className="ml-2">Generate Order</span>
        </div>

        {/* Order Header */}
        <div className="flex justify-between items-center mb-4">
          <span className="text-gray-800 font-medium text-lg">
            Order Number - #123
          </span>
          <button className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
            <span className="text-gray-500">🔔</span>
          </button>
        </div>

        {/* Order Details */}
        <div className="bg-white rounded-lg border shadow-md p-6 ">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-2 gap-6 lg:grid-cols-3">
              {/* Name */}
              <div>
                <label className="text-black font-medium text-sm">Name</label>
                <input
                  type="text"
                  placeholder="Customer's name here"
                  className={`w-full mt-1 p-2 border rounded-lg  bg-${nameInptField ? "" : "gray-200"} focus-visible:bg-white`}
                  {...register("name")}
                />
                {errors.name && (
                  <p className="text-red-500 text-xs">{errors.name.message}</p>
                )}
              </div>
              {/* Contact No */}
              <div>
                <label className="text-black font-medium text-sm">Contact No</label>
                <input
                  type="text"
                  placeholder="Customer's contact no here"
                  className={`w-full mt-1 p-2 border rounded-lg  bg-${numberInptField ? "" : "gray-200"} focus-visible:bg-white`}
                  {...register("number")}
                />
                {errors.number && (
                  <p className="text-red-500 text-xs">
                    {errors.number.message}
                  </p>
                )}
              </div>
              {/* Order Type */}
              <div>
                <label className="text-black font-medium text-sm">Order Type</label>
                <select
                  className={`w-full mt-1 p-2 border rounded-lg  bg-${orderTypeInptField ? "" : "gray-200"} focus-visible:bg-white`}
                  {...register("orderType")}
                >
                  <option value="">Select Order Type</option>
                  <option value="Dine In">Dine In</option>
                  <option value="Takeaway">Takeaway</option>
                  <option value="Delivery">Delivery</option>
                </select>
                {errors.orderType && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.orderType.message}
                  </p>
                )}
              </div>
              {/* Email */}
              <div>
                <label className="text-black font-medium text-sm">E-mail (Optional)</label>
                <input
                  type="email"
                  placeholder="Customer's E-mail ID here"
                  className={`w-full mt-1 p-2 border rounded-lg  bg-${emailInptField ? "" : "gray-200"} focus-visible:bg-white`}
                  {...register("email")}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs">{errors.email.message}</p>
                )}
              </div>
              {/* Table No */}
              <div>
                <label className="text-black font-medium text-sm block">Table No</label>
                <select className="w-1/2 mt-1 p-2 border rounded-lg focus-visible:bg-white"
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                </select>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex mt-6 space-x-4">
              {/* <Button title={"View previous Orders"}/> */}
              {/* <Button title={"Save"}/> */}
              <NavLink to={"/previousorder"}>
                <button className="px-6 py-2 text-gray-400 bg-gray-50 rounded-full border border-gray-300">
                  View Previous Orders
                </button>
              </NavLink>
              <button className={`px-7 py-2 ${nameInptField && numberInptField && orderTypeInptField ? "cashier-main-bg-color text-white" : "bg-gray-400 text-gray-700 opacity-50 cursor-not-allowed"} text-gray-600 rounded-full`}
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
      <div className={`bg-gray-200 transition-all duration-300 ease-in-out relative rounded-l-3xl ${isRightSidebarOpen ? "w-80" : "w-7"}`}
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
export default Order;
