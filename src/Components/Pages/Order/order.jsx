import React, { useContext, useEffect, useState } from "react";

// Common Components
import LeftSideNavbar from "../../Common/SideNavbar/leftSideNavbar.jsx";
import RightSidebar from "../../Common/SideNavbar/rightSideNavbar.jsx";
import { connect, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import { TableBookingRedux } from "../../Redux/Slice/Order/tableBookingSlice.jsx";
import useApi from "../../utils/Api/api";

// import React-icons
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
import { UseContext } from "../../Context/context.jsx";
// Json
import { MenuItemsJson } from "../../Assets/Json/menuItem.jsx";
import { Oval } from "react-loader-spinner";
import { PreviousOrderRedux } from "../../Redux/Slice/Order/previousOrderSlice.jsx";
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
const Order = ({
  tableNoFromRedux,
  tableDetailsFromRedux,
  MenuFromRedux,
  CustomerDetailRedux,
  GetPreviousOrderRedux,
}) => {
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
  const { CustomerDetailsCnxt } = useContext(UseContext);

  // ==========
  // State
  // ============
  const [isRightSidebarOpen, setIsRightSidebarOpen] = useState(false);
  const [prevOrdLoader, setprevOrdLoader] = useState(false);
  const [autoSearchFillValue, setautoSearchFillValue] = useState();
  // to set floor name for navbar
  const [FloorNames, setFloorNames] = useState();
  // to set floor wise avilable tables
  const [FloorWiseTables, setFloorWiseTables] = useState();
  const [CurrentTab, setCurrentTab] = useState();
  const [SelectedFloor, setSelectedFloor] = useState();
  const [orderData, setOrderData] = useState({
    customerUid: CustomerDetailsCnxt?.customerUid, // replace with actual uid if needed
    floorName: CustomerDetailsCnxt?.floorName,
    tableNumber: CustomerDetailsCnxt?.tableNumber,
    categories: [],
  });

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

  const { request, loading, error } = useApi();

  // Filter Previous orders with customerId;
  const FilterPrevOrdCustmId = MenuFromRedux?.Menu?.filter(
    (i) => i?.customerID == CustomerDetailsCnxt?._id
  );

  // Get Selected Floor
  const handleFloorChange = (event) => {
    const { value } = event.target;
    setSelectedFloor(value);
  };

  const onSubmit = async (data) => {
    const payload = {
      tableNumber:
        data?.orderType === "Takeaway" || data?.orderType === "Delivery"
          ? ""
          : data?.tableNo || params.tableNo,
      customerName: data?.name,
      customerEmail: data?.email,
      customerNumber: data?.number,
      floorName: data?.floor,
      orderType: data?.orderType,
      deliveryAddress: data?.deliveryAddress,
      orderStatus: "reserve",
    };

    try {
      // API call to create customer
      const response = await request(
        "POST",
        "/food-fusion/cashier/createCustomer",
        payload
      );

      if (response?.success) {
        dispatch(TableBookingRedux(payload));
        dispatch(
          TableNoRedux(
            data?.orderType === "Takeaway" || data?.orderType === "Delivery"
              ? ""
              : data?.tableNo
          )
        );

        toast.success(response?.message);
      } else {
        toast.error(error?.message || "Failed to book the table.");
      }
    } catch (error) {
      console.error("Booking error:", error);
      toast.error("Failed to book the table. Please try again.");
    }
  };

  // function to get total amount
  const calculateTotalAmount = () => {
    let total = 0;
    FilterPrevOrdCustmId?.forEach((item) => {
      total += item?.subcategoriesAmount * item?.quantity;
    });
    return total;
  };

  // Filter Functionality
  const filterInpFildFromPrevOrder =
    tableDetailsFromRedux?.TableBooking?.filter((i) => {
      return Number(i?.tableNo) == params.tableNo;
    });
  const filterInpFildFromPrevOrderApi =
    tableDetailsFromRedux?.TableBooking?.filter((i) => {
      return Number(i?.tableNo) == params.tableNo;
    });

  // Auto Search Input Field
  const HandleAutoSearchInp = (e) => {
    setautoSearchFillValue(e.target.value);
  };
  const GetQuantity = (data) => {
    const payload = {
      customerID: CustomerDetailsCnxt?._id,
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

  const fetchAllTable = async () => {
    try {
      const response = await request(
        "GET",
        "/food-fusion/cashier/getAllFloors"
      );
      if (response?.success) {
        const FloorsName = response?.data?.map((i) => i?.floorName) || [];
        setFloorNames(FloorsName);
        // setCurrentTab(FloorsName[0] || []);
        const FloorWiseTable = response?.data?.map((i) => i?.tables) || [];
        setFloorWiseTables(FloorWiseTable?.flat());
      }
    } catch (error) {}
  };

  // Create Menu or Order place API
  // const HandleCreateMenuAPI = async () => {
  //   try {
  //     console.log('MenuFromRedux?.Menu: ', MenuFromRedux?.Menu);
  //     const category = MenuItemsJson?.find(({ subcategories }) =>
  //       subcategories?.some((sub) => sub?.name === MenuFromRedux?.Menu?.name)
  //   );
  //   console.log('category: ', category);
  //     const categoryName = category ? category?.category : "Uncategorized";

  //     // Find existing category in orderData
  //     const existingCategoryIndex = orderData?.categories?.findIndex(
  //       (cat) => cat?.categoriesName === categoryName
  //     );

  //     const subcategoryItem = {
  //       subcategoriesName: MenuFromRedux?.Menu?.name,
  //       subcategoriesAmount: MenuFromRedux?.Menu?.price,
  //       subcategoriesType: categoryName,
  //       quantity: 1,
  //       totalAmount: MenuFromRedux?.Menu?.price,
  //       totalItemTax: 0,
  //       discount: "",
  //       extraAddon: [],
  //     };

  //     if (existingCategoryIndex > -1) {
  //       // Category exists, add the subcategory to the existing category
  //       const updatedCategories = [...orderData?.categories];
  //       updatedCategories[existingCategoryIndex]?.subcategories?.push(
  //         subcategoryItem
  //       );
  //       setOrderData({ ...orderData, categories: updatedCategories });
  //       console.log('{ ...orderData, categories: updatedCategories }: ', { ...orderData, categories: updatedCategories });
  //       // const response = await request(
  //       //   "POST",
  //       //   "/food-fusion/cashier/createMenu",
  //       //   { ...orderData, categories: updatedCategories }
  //       // );
  //       // console.log("response: ", response);
  //     } else {
  //       // Category doesn't exist, create a new one with the subcategory
  //       const newCategory = {
  //         categoriesName: categoryName,
  //         subcategories: [subcategoryItem],
  //       };
  //       setOrderData({...orderData,categories: [...orderData.categories, newCategory],});
  //       console.log('{...orderData,categories: [...orderData.categories, newCategory],}: ', {...orderData,categories: [...orderData.categories, newCategory],});

  //       // const response = await request(
  //       //   "POST",
  //       //   "/food-fusion/cashier/createMenu",
  //       //   { ...orderData, categories: [...orderData?.categories, newCategory] }
  //       // );
  //       // console.log("response: ", response);
  //     }
  //   } catch (error) {}
  // };

  const HandleCreateMenuAPI = async () => {
    try {
      HandleGetPrevAddMenuGetAPI();
      for (const menuItem of MenuFromRedux?.Menu) {
        const category = MenuItemsJson?.find(({ subcategories }) =>
          subcategories?.some((sub) => sub?.name === menuItem.subcategoriesName)
        );
        const categoryName = category ? category?.category : "Uncategorized";

        // Find existing category in orderData
        const existingCategoryIndex = orderData?.categories?.findIndex(
          (cat) => cat?.categoriesName === categoryName
        );

        const subcategoryItem = {
          subcategoriesName: menuItem.subcategoriesName,
          subcategoriesAmount: menuItem.subcategoriesAmount,
          subcategoriesType: categoryName,
          quantity: menuItem.quantity,
          totalAmount: menuItem.totalAmount || menuItem.subcategoriesAmount, // Use the total amount from menuItem if exists
          totalItemTax: menuItem.totalitemTax, // Make sure to use the correct tax value
          discount: menuItem.discount,
          extraAddon: [], // Add logic if you have extra addons
        };

        if (existingCategoryIndex > -1) {
          // Category exists, check for existing subcategory
          const existingSubcategoryIndex = orderData.categories[
            existingCategoryIndex
          ].subcategories.findIndex(
            (sub) => sub.subcategoriesName === menuItem.subcategoriesName
          );

          if (existingSubcategoryIndex === -1) {
            // Subcategory doesn't exist, add it to the existing category
            const updatedCategories = [...orderData?.categories];
            updatedCategories[existingCategoryIndex]?.subcategories?.push(
              subcategoryItem
            );
            setOrderData({ ...orderData, categories: updatedCategories });
            // console.log("check for existing subcategory with new item: ", {
            //   ...orderData,
            //   categories: updatedCategories,
            // });
            // const response = await request(
            //   "POST",
            //   "/food-fusion/cashier/createMenu",
            //   { ...orderData, categories: updatedCategories }
            // );
            // console.log("response: ", response);
          } else {
            // Subcategory exists, do not add it again; do nothing
            // console.log("Subcategory: ");
          }
        } else {
          // Category doesn't exist, create a new one with the subcategory
          const newCategory = {
            categoriesName: categoryName,
            subcategories: [subcategoryItem],
          };
          setOrderData({
            ...orderData,
            categories: [...orderData.categories, newCategory],
          });
          // console.log("new subcategory: ", {
          //   ...orderData,
          //   categories: [...orderData.categories, newCategory],
          // });
                  const response = await request(
          "POST",
          "/food-fusion/cashier/createMenu",
          { ...orderData, categories: [...orderData?.categories, newCategory] }
        );
        console.log("response: ", response);
        if(response?.success){
          toast.success("Order Placed Successfully");
        }
        }
      }
    } catch (error) {
      console.error("Error while creating menu: ", error);
    }
  };

  const HandleGetPrevAddMenuGetAPI = async () => {
    try {
      const response = await request("GET", "/food-fusion/cashier/getAllMenu");

      const options = response?.data[0]?.categories?.flatMap(
        (item) => item.subcategories
      );
    } catch (error) {}
  };

  // Check if Customer have previous order record using mobile number
  const HandleGetPrevOrdersGetAPI = async (customerNumber) => {
    try {
      dispatch(PreviousOrderRedux([]));
      if (
        customerNumber?.target?.value?.length == 10 ||
        customerNumber?.length == 10
      ) {
        setprevOrdLoader(true);
        const response = await request(
          "GET",
          `/food-fusion/cashier/getPreviousOrder/${
            customerNumber?.target?.value || customerNumber
          }`
        );
        if (response?.status !== 400) {
          setprevOrdLoader(false);
          return dispatch(PreviousOrderRedux(response?.data));
        }
        setprevOrdLoader(false);
      }
    } catch (error) {
      setprevOrdLoader(false);
    }
  };

  //==========
  // useEffect
  // ============

  useEffect(() => {
    setValue("name", CustomerDetailsCnxt?.customerName);
    setValue("number", CustomerDetailsCnxt?.customerNumber);
    setValue("email", CustomerDetailsCnxt?.customerEmail);
    setValue("orderType", CustomerDetailsCnxt?.orderType);
    setValue("deliveryAddress", CustomerDetailsCnxt?.deliveryAddress);
    setValue("floor", CustomerDetailsCnxt?.floorName);
    setValue(
      "tableNo",
      CustomerDetailsCnxt?.tableNumber ||
        params.tableNo ||
        tableNoFromRedux?.tableNo
    );
    setSelectedFloor(CustomerDetailsCnxt?.floorName);
    fetchAllTable();
  }, []);

  // Fetch Previous order details

  useEffect(() => {
    HandleGetPrevOrdersGetAPI(numberInptField);
  }, [numberInptField]);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Left Sidebar */}
      <LeftSideNavbar />

      {/* Chatbot Section start */}
      <ChatBot />
      {/* Chatbot Section End */}

      {/* Main Content Area */}
      <div
        className={`flex-grow py-4 px-9 transition-all duration-300 h-full overflow-auto hidden-scroll me-6`}
      >
        <Navbar
          icons={OrderIcons}
          pageHeading={OrderHeading}
          selectedTab={setCurrentTab}
        />

        {/* Order Details */}
        <div className="bg-white rounded-lg border p-6 mt-2">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-2 gap-6 lg:grid-cols-3">
              {/* Name */}
              <div>
                <label className="text-color-black font-medium text-sm">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Customer's name here"
                  className={`w-full mt-1 text-base text-color-black font-medium px-2 py-3 border-gray-color rounded-lg  ${
                    nameInptField
                      ? ""
                      : "bg-light-color text-sm font-normal border-light-color py-3.5"
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
                    numberInptField
                      ? ""
                      : "bg-light-color text-sm font-normal border-light-color py-3.5"
                  } focus-visible:bg-white`}
                  {...register("number")}
                  onChange={HandleGetPrevOrdersGetAPI}
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
                  className={`custom-select w-full mt-1 px-2 py-3 border-gray-color text-base font-medium rounded-lg ${
                    orderTypeInptField
                      ? ""
                      : "bg-light-color font-xs font-normal border-light-color"
                  } focus-visible:bg-white`}
                  value={CustomerDetailsCnxt?.orderType}
                  {...register("orderType")}
                >
                  {/* <option value="">Select Order Type</option> */}
                  <option value="Dine in">Dine In</option>
                  <option value="Take away">Take Away</option>
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
                    emailInptField
                      ? ""
                      : "bg-light-color text-sm font-normal border-light-color py-3.5"
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
              {orderTypeInptField == "Dine in" ||
              CustomerDetailsCnxt?.orderType == "Dine in" ||
              orderTypeInptField == "" ? (
                <>
                  <div>
                    <label className="text-color-black font-medium text-sm block">
                      Floor's
                    </label>
                    <select
                      className="custom-select w-full mt-2 px-2 py-3 border-gray-color rounded-lg text-base font-medium focus-visible:bg-white"
                      {...register("floor")}
                      value={SelectedFloor}
                      onChange={handleFloorChange}
                    >
                      <option value={""}>Select Floor</option>
                      {FloorNames?.map((i) => (
                        <option value={i}>{i}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="text-color-black font-medium text-sm block">
                      Table No
                    </label>
                    <select
                      className="custom-select w-2/5 mt-2 px-2 py-3 border-gray-color rounded-lg text-base font-medium focus-visible:bg-white"
                      value={CustomerDetailsCnxt?.tableNumber}
                      {...register("tableNo")}
                    >
                      <option value={CustomerDetailsCnxt?.tableNumber || ""}>
                        {CustomerDetailsCnxt?.tableNumber || "Table No."}
                      </option>
                      {FloorWiseTables?.filter(
                        (i) =>
                          i?.floorName == SelectedFloor &&
                          i?.tablestatus == "empty"
                      )?.map((i) => (
                        <>
                          <option value={i?.tableNumber}>
                            {i?.tableNumber}
                          </option>
                        </>
                      ))}
                    </select>
                  </div>
                </>
              ) : orderTypeInptField == "Delivery" ? (
                <>
                  {/* delivery address if delivery */}
                  <div>
                    <label className="text-color-black font-medium text-sm">
                      Delivery Address
                    </label>
                    <input
                      type="text"
                      placeholder="Customer's Address here"
                      className={`w-full mt-1 px-2 text-color-black py-3 border-gray-color text-base font-medium rounded-lg ${
                        orderTypeInptField
                          ? ""
                          : "bg-light-color font-xs font-normal border-light-color"
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
              <NavLink
                to={
                  GetPreviousOrderRedux?.PreviousOrder?.length > 0
                    ? "/previousorder"
                    : ""
                }
              >
                <button
                  className={` ps-6 pe-4 py-2 flex text-base font-medium ${
                    GetPreviousOrderRedux?.PreviousOrder?.length > 0
                      ? "border-cashier cashier-main-text-color hover:text-white hover:bg-[--cashier-main-color]"
                      : "text-light-gray-color bg-white cursor-not-allowed"
                  } rounded-full border border-gray-400`}
                  disabled={GetPreviousOrderRedux?.PreviousOrder?.length < 0} // Disable the button if none of the fields are filled
                >
                  View Previous Orders
                  <span className="ms-2 flex justify-center items-center">
                    <Oval
                      visible={prevOrdLoader}
                      height="25"
                      width="25"
                      color={`#d79555`}
                      secondaryColor=""
                      strokeWidth="5"
                      strokeWidthSecondary="5"
                      ariaLabel="oval-loading"
                      wrapperStyle={{}}
                      wrapperClass=""
                    />
                  </span>
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
            <button className="px-10 w-44 py-3 text-sm font-medium bg-purple-btn text-white rounded-full">
              Add Item
            </button>
          </NavLink>
          <div className={`bg-white rounded-full relative w-full ms-8`}>
            <input
              type="text"
              placeholder="Search for items"
              onChange={HandleAutoSearchInp}
              className={`w-full py-2 pl-10 pr-4 z-50 relative  border-2 border-[--cashier-main-color] rounded-full focus:outline-none  focus:ring-[--cashier-main-color] ${
                autoSearchFillValue
                  ? "bg-[--select-section]"
                  : "navbar-icon-bg-color"
              } hover:bg-[--select-section] focus-within:bg-[--select-section]`}
            />
            <AutoSuggestSearch inputValue={autoSearchFillValue} />
            <IoSearch className="absolute left-3 top-1/2 z-20 transform -translate-y-1/2 text-color-gray" />
          </div>
        </div>

        <div className="bg-white rounded-xl border shadow-md mt-3 h-56 hidden-scroll overflow-auto">
          {/* Table */}
          <table className="w-full">
            <thead className="bg-white sticky top-0">
              <tr className="cashier-bg-table-color text-center text-color-black rounded-t-2xl">
                <th className="border-b rounded-ss-xl p-3 text-sm font-medium">
                  S.No.
                </th>
                <th className="border-b p-3 text-sm font-medium">
                  Item's Name
                </th>
                <th className="border-b p-3 text-sm font-medium">
                  Notes/Add Ons
                </th>
                <th className="border-b p-3 text-sm font-medium">Quantity</th>
                <th className="border-b p-3 text-sm font-medium">Price</th>
                <th className="border-b rounded-tr-xl p-3 text-sm font-medium">
                  Amount
                </th>
              </tr>
            </thead>
            <tbody>
              {/* Placeholder for dynamic items */}
              {FilterPrevOrdCustmId?.map((item, index) => (
                <>
                  <tr className="border-b">
                    <td className="py-3 text-center text-sm font-normal text-[--gray-color] ">
                      {++index}
                    </td>
                    <td className="py-3 text-center text-sm font-normal text-[--gray-color] ">
                      {item?.subcategoriesName}
                    </td>
                    <td className="py-3 text-center text-sm font-normal text-[--gray-color] ">
                      {item?.addonNotes || "-"}
                    </td>
                    <td className="py-3 text-center ">
                      <IncrementDecrementFunctionality
                        ItemId={item?.orderID}
                        GetQuantity={GetQuantity}
                        prevCount={item?.quantity}
                        isOptionSelected={true}
                      />
                    </td>
                    <td className="py-3 text-center text-sm font-normal text-[--gray-color] ">
                      ₹ {item?.subcategoriesAmount}
                    </td>
                    <td className="py-3 text-center text-sm font-normal">
                      ₹ {item?.subcategoriesAmount * item?.quantity}
                    </td>
                  </tr>
                </>
              ))}
              {FilterPrevOrdCustmId?.length > 0 ? (
                <tr>
                  <td className="py-3 text-center"></td>
                  <td className="py-3 text-center"></td>
                  <td className="py-3 text-center"></td>
                  <td className="py-3 text-center"></td>
                  <td className="py-3 text-center">Total</td>
                  <td className="py-3 text-center text-sm font-medium">
                    ₹ {calculateTotalAmount() || 0}
                  </td>
                </tr>
              ) : (
                <></>
              )}
            </tbody>
          </table>
        </div>

        {/* Footer Buttons */}
        <div className="flex gap-7 mt-8">
          {/* <Button title={" Generate Invoice"}/>
          <Button title={"Send to Kitchen"}/> */}
          <NavLink to={"/allinvoice"}>
            <button
              className={`px-8 py-2.5  bg-white  lg:text-base  text-xs font-medium rounded-full ${
                FilterPrevOrdCustmId?.length > 0
                  ? "border-cashier cashier-main-text-color"
                  : "border-light-gray text-light-gray-color"
              }`}
            >
              Generate Invoice
            </button>
          </NavLink>
          <NavLink
          // to={"/sendtokitchen"}
          >
            <button
              className={`px-8 py-2.5  lg:text-base  text-xs font-medium rounded-full ${
                FilterPrevOrdCustmId?.length > 0
                  ? "cashier-main-bg-color text-white"
                  : "text-light-gray-color btn-bg-gray-color"
              }`}
              onClick={() => HandleCreateMenuAPI()}
            >
              Send To Kitchen
            </button>
          </NavLink>
        </div>
      </div>

      {/* Right Sidebar */}
      <div
        className={`transition-all duration-300 ease-in-out relative rounded-l-3xl`}
      >
        <RightSidebar />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  CustomerDetailRedux: state?.tableDetails,
  tableNoFromRedux: state?.tableDetails,
  tableDetailsFromRedux: state?.tableBooking,
  MenuFromRedux: state?.menu,
  GetPreviousOrderRedux: state?.previousOrder,
});

export default connect(mapStateToProps, {})(Order);
