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
import {
  MdOutlineKeyboardDoubleArrowLeft,
  MdOutlineKeyboardDoubleArrowRight,
} from "react-icons/md";
import { IoSearch } from "react-icons/io5";

// Import third Party components
import { toast } from "react-toastify";

// import img
import ChatBot from "../../Common/ChatBot/chatbot.jsx";
import Navbar from "../../Common/Navbar/navbar.jsx";
import bell from "../../Assets/Images/navbar-img/bell.svg";
import { TableNoRedux } from "../../Redux/Slice/Table/tableDetailSlice.jsx";
import AutoSuggestSearch from "../../Common/AutoSuggestSearchBar/autoSuggestSearch.jsx";
import IncrementDecrementFunctionality from "../../Common/IncrementDecrementFunctionality/incrementDecrementFunctionality.jsx";
import { AddMenuRedux } from "../../Redux/Slice/Menu/MenuSlice.jsx";
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
const OrderHeading = ["Book Table", "Generate Order"];
const Order = ({ tableNoFromRedux, tableDetailsFromRedux, MenuFromRedux }) => {
  console.log('MenuFromRedux: ', MenuFromRedux?.Menu);
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
  const [autoSearchFillValue, setautoSearchFillValue] = useState();
    const [CurrentTab, setCurrentTab] = useState();
    console.log('CurrentTab: ', CurrentTab);

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
        data?.orderType === "Takeaway" || data?.orderType === "Delivery"
          ? ""
          : params.tableNo || data?.tableNo,
      customerName: data?.name,
      customerEmail: data?.email,
      customerPhone: data?.number,
      orderType: data?.orderType,
      deliveryAddress: data?.deliveryAddress,
      orderStatus: "reserve",
    };
    try {
      dispatch(TableBookingRedux(payload));
      dispatch(
        TableNoRedux(
          data?.orderType === "Takeaway" || data?.orderType === "Delivery"
            ? ""
            : data?.tableNo
        )
      );
  
      // Success Toaster
      toast.success("Table booked successfully!");
    } catch (error) {
      // Error Toaster
      toast.error("Failed to book the table. Please try again.");
    }
  };

  // function to get total amount 
  const calculateTotalAmount = () => {
    let total = 0;
    MenuFromRedux?.Menu?.forEach(item => {
      total += item?.subcategoriesAmount * item?.quantity;
    });
    return total;
  };


  // Filter Functionality
  const filterInpFildFromPrevOrder =
    tableDetailsFromRedux?.TableBooking?.filter((i) => {
      return Number(i?.tableNo) == params.tableNo;
    });

  // Auto Search Input Field
  const HandleAutoSearchInp = (e) => {
    setautoSearchFillValue(e.target.value);
  };
    const GetQuantity = (data) => {
      const payload = {
        customerID: data?.ItemId,
        menuID: 0,
        floorName: "",
        tableNumber: 0,
        orderID: 0,
        categoriesName: "",
        subcategoriesName: "",
        subcategoriesAmount: 0,
        subcategoriesType: "",
        quantity: data?.count,
        totalAmount: 0,
        totalitemTax: 0,
        discount: "",
        addonNotes: "",
        addonName: "",
        addonAmount: 0,
        addonQuantity: 0,
      };
      dispatch(AddMenuRedux(payload));
      // return setIncrDecrQuantity(data);
    };

  //==========
  // useEffect
  // ============

  useEffect(() => {
    setValue("name", filterInpFildFromPrevOrder[0]?.customerName);
    setValue("number", filterInpFildFromPrevOrder[0]?.customerPhone);
    setValue("email", filterInpFildFromPrevOrder[0]?.customerEmail);
    setValue("orderType", filterInpFildFromPrevOrder[0]?.orderType);
    setValue("deliveryAddress", filterInpFildFromPrevOrder[0]?.deliveryAddress);
    setValue(
      "tableNo",
      filterInpFildFromPrevOrder[0]?.tableNo ||
        params.tableNo ||
        tableNoFromRedux?.tableNo
    );
  }, []);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Left Sidebar */}
      <LeftSideNavbar />

      {/* Chatbot Section start */}
      <ChatBot />
      {/* Chatbot Section End */}

      {/* Main Content Area */}
      <div className={`flex-grow py-4 px-9 transition-all duration-300 h-full overflow-auto hidden-scroll`}>
        <Navbar icons={OrderIcons} pageHeading={OrderHeading} selectedTab={setCurrentTab}/>

        {/* Order Details */}
        <div className="bg-white rounded-lg border p-6 mt-2">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-2 gap-6 lg:grid-cols-3">
              {/* Name */}
              <div>
                <label className="text-color-black font-medium text-sm">Name</label>
                <input
                  type="text"
                  placeholder="Customer's name here"
                  className={`w-full mt-1 text-base text-color-black font-medium px-2 py-3 border-gray-color rounded-lg  ${
                    nameInptField ? "" : "bg-light-color font-xs font-normal border-light-color"
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
                        className="px-2 py-3 hover:bg-gray-200 cursor-pointer"
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
                <label className="text-color-black font-medium text-sm">
                  Contact No
                </label>
                <input
                  type="text"
                  placeholder="Customer's contact no here"
                  className={`w-full mt-1 px-2 text-color-black py-3 border-gray-color rounded-lg ${
                    numberInptField ? "" : "bg-light-color font-xs font-normal border-light-color"
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
                <label className="text-color-black font-medium text-sm">
                  Order Type
                </label>
                <select
                  className={`w-full mt-1 px-2 py-3 border-gray-color text-base font-medium rounded-lg ${
                    orderTypeInptField ? "" : "bg-light-color font-xs font-normal border-light-color"
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
                <label className="text-color-black font-medium text-sm">
                  E-mail (Optional)
                </label>
                <input
                  type="email"
                  placeholder="Customer's E-mail ID here"
                  className={`w-full mt-1 px-2 py-3 border-gray-color text-base font-medium rounded-lg ${
                    emailInptField ? "" : "bg-light-color font-xs font-normal border-light-color"
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
                  <label className="text-color-black font-medium text-sm block">
                    Table No
                  </label>
                  <select
                    className="w-2/5 mt-2 px-2 py-3 border-gray-color rounded-lg text-base font-medium focus-visible:bg-white"
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
                      className={`w-full mt-1 px-2 text-color-black py-3 border-gray-color text-base font-medium rounded-lg ${
                        orderTypeInptField ? "" : "bg-light-color font-xs font-normal border-light-color"
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
                  className={`px-6 py-2 text-base font-medium ${
                    nameInptField && numberInptField && orderTypeInptField
                      ? "border-cashier cashier-main-text-color hover:text-white hover:bg-[--cashier-main-color]"
                      : "text-light-gray-color bg-white opacity-50 cursor-not-allowed"
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
                    : "btn-bg-gray-color text-light-gray-color cursor-not-allowed"
                } text-white rounded-full`}
                type="submit"
              >
                Save
              </button>
            </div>
          </form>
        </div>

        {/* Add Item Section */}
        <div className="my-8 flex items-center justify-between">
         <NavLink to={"/menu"}>
         <button className="px-10 py-2 text-base font-normal bg-purple-btn text-white rounded-full">
            Add Item
          </button>
         </NavLink>
          <div className={`${isRightSidebarOpen ? "w-[537px]transition-all duration-300 ease-in-out" : "w-[849px] transition-all duration-300 ease-in-out"} bg-white  relative`}>
            <input
              type="text"
              placeholder="Search for items"
              onChange={HandleAutoSearchInp}
              className="w-full py-2 pl-10 pr-4 z-20 relative navbar-icon-bg-color border-2 border-[--cashier-main-color] rounded-full focus:outline-none  focus:ring-[--cashier-main-color] hover:bg-[--select-section] focus-within:bg-[--select-section]"
            />
            <AutoSuggestSearch inputValue={autoSearchFillValue} />
            <IoSearch className="absolute left-3 top-1/2 z-20 transform -translate-y-1/2 text-color-gray" />

            {/* <svg
              className="absolute left-3 top-1/2 z-20 transform -translate-y-1/2 text-gray-500"
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
                d="M21 21l-4.35-4.35M16.5 12.5a6 6 0 1 0-12 0 6 6 0 0 0 12 0z"
              />
            </svg> */}
          </div>
        </div>

        <div className="bg-white rounded-xl border shadow-md mt-3 h-48 hidden-scroll overflow-auto">
          {/* Table */}
          <table className="w-full">
            <thead className="bg-white">
              <tr className="cashier-bg-table-color text-center text-color-black rounded-t-2xl">
                <th className="border-b rounded-ss-xl p-3 text-sm font-medium">S.No.</th>
                <th className="border-b p-3 text-sm font-medium">Item's Name</th>
                <th className="border-b p-3 text-sm font-medium">Notes/Add Ons</th>
                <th className="border-b p-3 text-sm font-medium">Quantity</th>
                <th className="border-b p-3 text-sm font-medium">Price</th>
                <th className="border-b rounded-tr-xl p-3 text-sm font-medium">Amount</th>
              </tr>
            </thead>
            <tbody>
              {/* Placeholder for dynamic items */}
              {MenuFromRedux?.Menu?.map((item, index) => 
              <>
                <tr className="border-b">
                  <td className="py-4 text-center text-sm font-normal text-[--gray-color] ">
                    {++index}
                  </td>
                  <td className="py-4 text-center text-sm font-normal text-[--gray-color] ">
                    {item?.subcategoriesName}
                  </td>
                  <td className="py-4 text-center text-sm font-normal text-[--gray-color] ">
                    {item?.addonNotes || '-'}
                  </td>
                  <td className="py-4 text-center ">
                  <IncrementDecrementFunctionality
                        ItemId={item?.customerID}
                        GetQuantity={GetQuantity}
                        prevCount={item?.quantity}
                      />
                  </td>
                  <td className="py-4 text-center text-sm font-normal text-[--gray-color] ">
                    ₹ {item?.subcategoriesAmount}
                  </td>
                  <td className="py-4 text-center text-sm font-normal">
                    ₹ {item?.subcategoriesAmount * item?.quantity }
                  </td>
                </tr>
                </>
              )}
                {MenuFromRedux?.Menu?.length > 0 ? <tr>
                  <td className="py-4 text-center"></td>
                  <td className="py-4 text-center"></td>
                  <td className="py-4 text-center"></td>
                  <td className="py-4 text-center"></td>
                  <td className="py-4 text-center">Total</td>
                  <td className="py-4 text-center text-sm font-medium">₹ {calculateTotalAmount() || 0}</td>
                </tr> : <></>}
            </tbody>
          </table>
        </div>

        {/* Footer Buttons */}
        <div className="flex gap-7 mt-8">
          {/* <Button title={" Generate Invoice"}/>
          <Button title={"Send to Kitchen"}/> */}
          <NavLink to={"/allinvoice"}>
            <button className="px-8 py-2.5 bg-white text-light-gray-color text-base font-medium rounded-full border-light-gray">
              Generate Invoice
            </button>
          </NavLink>
          <NavLink to={"/sendtokitchen"}>
            <button className="px-8 py-2.5 text-light-gray-color btn-bg-gray-color text-base font-medium rounded-full">
              Send To Kitchen
            </button>
          </NavLink>
        </div>
      </div>

      {/* Right Sidebar */}
      <div
        className={`transition-all duration-300 ease-in-out relative rounded-l-3xl ${
          isRightSidebarOpen ? "w-[360px]" : "w-7"
        }`}
      >
        <span
          className="bg-[--purple-color] w-11 h-11 flex justify-center items-center hover:bg-[--purple-color] cursor-pointer font-bold p-1 rounded-full absolute top-1/2 -left-5"
          onClick={toggleRightSidebar}
        >
          {/* <img src={Toggle} alt="Loading" /> */}
          {isRightSidebarOpen ? (
            <MdOutlineKeyboardDoubleArrowRight className="text-3xl text-white font-semibold" />
          ) : (
            <MdOutlineKeyboardDoubleArrowLeft className="text-3xl text-white font-semibold" />
          )}
        </span>

        <RightSidebar />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  tableNoFromRedux: state?.tableDetails,
  tableDetailsFromRedux: state?.tableBooking,
  MenuFromRedux: state?.menu,
});

export default connect(mapStateToProps, {})(Order);
