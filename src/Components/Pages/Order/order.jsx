import React, { useState } from "react";
import LeftSideNavbar from "../../Common/SideNavbar/leftSideNavbar.jsx";
import RightSidebar from "../../Common/SideNavbar/rightSideNavbar.jsx";
import { connect, useDispatch } from "react-redux";

// import img
// import Toggle from '../../Assets/Images/sidebarImg/toggle.png'
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
import Button from "../../Common/button/button.jsx";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import Navbar from "../../Common/Navbar/navbar.jsx";
import { useParams } from "react-router-dom";
import { TableBooking } from "../../Common/Redux/TableBooking/tableBookingSlice.jsx";
// import FoodCard from "../../Common/Test/menuItems.jsx";
const Order = () => {
  const {
    register,
    handleSubmit,
    setValue,watch,
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
      <div className={`flex-grow p-4 transition-all duration-300`}>
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
        <div className="bg-white rounded-lg shadow-md p-6 ">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-2 gap-6 lg:grid-cols-3">
              {/* Name */}
              <div>
                <label className="text-black font-medium text-sm">Name</label>
                <input
                  type="text"
                  placeholder="Customer's name here"
                  className={`w-full mt-1 p-2 border rounded-lg  bg-${nameInptField ? "" :"gray-200"} focus-visible:bg-white`}
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
                  className={`w-full mt-1 p-2 border rounded-lg  bg-${numberInptField ? "" :"gray-200"} focus-visible:bg-white`}
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
                  className={`w-full mt-1 p-2 border rounded-lg  bg-${orderTypeInptField ? "" :"gray-200"} focus-visible:bg-white`}
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
                  className={`w-full mt-1 p-2 border rounded-lg  bg-${emailInptField ? "" :"gray-200"} focus-visible:bg-white`}
                  {...register("email")}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs">{errors.email.message}</p>
                )}
              </div>
              {/* Table No */}
              <div>
                <label className="text-black font-medium text-sm block">Table No</label>
                <select className="w-1/4 mt-1 p-2 border rounded-lg focus-visible:bg-white"
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
              <button className={`px-7 py-2 ${ nameInptField && numberInptField && orderTypeInptField ? "cashier-main-bg-color text-white" : "bg-gray-400 text-gray-700 opacity-50 cursor-not-allowed"} text-gray-600 rounded-full`}
                type="submit"
              >
                Save
              </button>
            </div>
          </form>
        </div>

        {/* Add Item Section */}
        <div className="mt-6 bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <button className="px-10 py-2 bg-purple-500 text-white rounded-full">
              Add Item
            </button>
            <div className="w-1/3">
              <input
                type="text"
                placeholder="Search for items"
                className="w-full py-2 px-4 cashier-light-bg-color border-2 border-[--cashier-main-color] rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
          </div>

          {/* Table */}
          <table className="w-full mt-6 border-collapse">
            <thead>
              <tr className="text-left text-sm text-gray-500">
                <th className="border-b pb-2">S.No.</th>
                <th className="border-b pb-2">Item's Name</th>
                <th className="border-b pb-2">Notes/Add Ons</th>
                <th className="border-b pb-2">Quantity</th>
                <th className="border-b pb-2">Price</th>
                <th className="border-b pb-2">Amount</th>
              </tr>
            </thead>
            <tbody>
              {/* Placeholder for dynamic items */}
              <tr>
                <td className="py-4 text-center text-gray-400" colSpan="6">
                  No items added.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Footer Buttons */}
        <div className="flex justify-between mt-6">
          {/* <Button title={" Generate Invoice"}/>
          <Button title={"Send to Kitchen"}/> */}
          <button className="px-6 py-2 bg-gray-100 text-gray-500 rounded-lg border border-gray-300">
            Generate Invoice
          </button>
          <button className="px-6 py-2 bg-gray-300 text-gray-600 rounded-lg">
            Send To Kitchen
          </button>
        </div>
      </div>

      {/* Right Sidebar */}
      <div className={`bg-gray-200 transition-all duration-300 ease-in-out relative rounded-l-3xl ${isRightSidebarOpen ? "w-80" : "w-7"}`}
      >
        <span
          className="bg-blue-700 hover:bg-blue-700 font-bold p-1 cursor-pointer rounded-full absolute top-1/2 -left-5"
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
