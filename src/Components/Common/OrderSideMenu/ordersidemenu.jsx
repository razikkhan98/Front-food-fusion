import React, { useContext, useState } from "react";

// Common Components
import Button from "../Button/button";

// Import React-Icons
import { FaCircleExclamation } from "react-icons/fa6";

// Import Images
import percentage from "../../Assets/Images/menuPageImages/svgs/percentage.svg";
import rewardpoint from "../../Assets/Images/menuPageImages/svgs/rewardpoint.svg";
import notePencil from "../../Assets/Images/menuPageImages/svgs/PencilSimple.svg";
import sellpercent from "../../Assets/Images/menuPageImages/svgs/SealPercent.svg";
import IncrementDecrementFunctionality from "../IncrementDecrementFunctionality/incrementDecrementFunctionality";
import { UseContext } from "../../Context/context";
import { MenuItemsJson } from "../../Assets/Json/menuItem.jsx";

// role  Json
const DiscountData = [
  {
    icon: <img className="w-5 h-5" src={percentage} alt="Loading" />,
    text: "Discount & Offers",
    textColor: "text-color-black",
  },
  {
    icon: <img className="w-5 h-5" src={rewardpoint} alt="Loading" />,
    text: "Reward Points",
    textColor: "text-light-gray-color",
  },
  {
    icon: <FaCircleExclamation className="text-[--yellow-color]" />,
    text: "Payment Pending",
    textColor: "text-color-black",
  },
];

const OrdertypeData = [
  { label: "Dine In", isActive: true },
  { label: "Take Away", isActive: false },
  { label: "Delivery", isActive: false },
];

const OrderSideMenu = ({ OrderData }) => {
 const { CustomerDetailsCnxt } = useContext(UseContext);
  // =========
  // States
  // ==========
    const [orderData, setOrderData] = useState({
      customerUid: CustomerDetailsCnxt?.customerUid, // replace with actual uid if needed
      floorName: CustomerDetailsCnxt?.floorName,
      tableNumber: CustomerDetailsCnxt?.tableNumber,
      categories: [],
    });
  
  // ===============
  // Functions
  // ================
  
  // function to get total amount
  const calculateTotalAmount = () => {
    let total = 0;
    OrderData?.forEach((item) => {
      total += item?.subcategoriesAmount * item?.quantity;
    });
    return total;
  };

  // Create Menu or Order place API
    const HandleCreateMenuAPI = async () => {
      try {
        // HandleGetPrevAddMenuGetAPI();
        for (const menuItem of OrderData) {
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
            extraAddon: menuItem?.extraAddon, // Add logic if you have extra addons
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
              console.log("check for existing subcategory with new item: ", {
                ...orderData,
                categories: updatedCategories,
              });
            } else {
              // Subcategory exists, do not add it again; do nothing
              console.log("Subcategory: ");
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
            console.log("new subcategory: ", {
              ...orderData,
              categories: [...orderData.categories, newCategory],
            });
          }
        }
      } catch (error) {
        console.error("Error while creating menu: ", error);
      }
    };

  return (
    <>
      {/* Order SideMenu Start */}
      <div className="h-full py-3 orderside-menu ms-1 mt-3 ">
        <div className="max-w-sm mx-auto grid  grid-cols-1 grid-rows-3 bg-white shadow-2xl rounded-2xl h-full">
          <div>
            <div className="cashier-light-bg-color rounded-t-2xl p-3">
              <div className="flex justify-between text-sm font-semibold text-gray-700">
                <span className="text-color-gray text-sm font-medium">
                  For: <span className="text-color-black">Mr. Rahul Vijay</span>
                </span>
                <span className="text-color-gray text-sm font-medium px-2">
                  Table No<span className="text-color-black ms-2">12</span>{" "}
                </span>
              </div>
              <div className="flex justify-between text-center mt-1 text-sm">
                <span className="text-color-gray text-sm font-medium">
                  {/* Order No: <span className="text-color-black">#123</span> */}
                </span>
                <div className="mx-2 text-xs font-normal bg-white px-2 py-1 rounded-lg">
                  05:22
                </div>
              </div>
            </div>

            <div className="flex justify-between orderside-menu-status my-3 mx-2 py-2 ps-2 rounded-md">
              {OrdertypeData.map((option, index) => (
                <button
                  key={index}
                  className={`px-2 text-sm font-normal text-center rounded-md ${
                    option.isActive
                      ? "bg-white text-color-black"
                      : "text-light-gray-color"
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>

            <div className="flex justify-between mt-6 border-b pb-4 text-sm px-4">
              {DiscountData.map((item, index) => (
                <span key={index} className="flex">
                  <span className="text-yellow-500 -mt-2">{item.icon}</span>
                  <span className={`text-sm font-medium ${item.textColor}`}>
                    {item.text}
                  </span>
                </span>
              ))}
            </div>
            <div className="mt-4 mx-3 space-y-4 h-60 hidden-scroll overflow-y-scroll">
              {OrderData?.map((item, index) => (
                <div key={index} className="border-b pb-3">
                  <div className="flex justify-between">
                    <span className="font-medium text-sm text-color-black">
                      {index + 1}. {item?.subcategoriesName}
                    </span>
                    {/* <span className="flex items-center text-sm justify-center rounded cashier-light-bg-color p-0.5">
                      <button className="bg-white px-2 rounded">-</button>
                      <span className="mx-2">{item?.quantity}</span>
                      <button className="bg-white px-2 rounded">+</button>
                    </span> */}
                    <IncrementDecrementFunctionality
                      ItemId={item?.orderID}
                      // GetQuantity={GetQuantity}
                      prevCount={item?.quantity}
                      isOptionSelected={true}
                    />
                  </div>
                  <div className="flex justify-between items-end">
                    <p className="flex w-3/4 text-light-gray-color text-sm font-normal mt-2">
                      <span className="bg-gray-100 h-5 w-5 rounded-full flex justify-center items-center me-5">
                        <img className="w-3" src={notePencil} alt="Loading" />
                      </span>
                      <span>
                        <span className="font-medium"> Notes:</span>{" "}
                        {(item?.extraAddon && Array.isArray(item.extraAddon) && item.extraAddon[0]?.addonNotes) ?? []}
                      </span>
                    </p>
                    <div className="text-right font-medium text-base text-color black mt-2">
                      ₹ {item?.subcategoriesAmount}
                    </div>
                  </div>
                </div>
              ))}
              <div className="mt-4 flex justify-between items-center px-3 py-1 bg-gray-50 rounded-md">
                <span className="text-color-black flex text-sm font-normal">
                  <img src={sellpercent} className="me-2" alt="Loading" /> Food
                  Fest Friday (-20%)
                </span>
                <button className="text-xs text-color-black">Apply</button>
              </div>

              <div className="mt-5 text-right px-4">
                <div className="text-light-gray-color text-sm flex justify-between font-medium my-1">
                  {`Subtotal (${OrderData?.length} items)`}:{" "}
                  <span className="text-color-black text-base font-medium">
                  ₹{calculateTotalAmount() || 0}
                  </span>
                </div>
                <div className="text-light-gray-color text-sm flex justify-between my-1">
                  Tax (10%):{" "}
                  <span className="text-color-black text-base font-medium">
                    ₹ 0
                  </span>
                </div>
                <div className="text-light-gray-color text-sm flex justify-between my-1 pb-2">
                  Discount applied:{" "}
                  <span className="text-color-black text-base font-medium">
                    - ₹ 0
                  </span>
                </div>
                <div className="flex justify-between pt-2 border-t-2 border-dashed">
                  <span>Total </span>
                  <span className="text-color-black text-base font-medium">
                    ₹{calculateTotalAmount() || 0}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 pb-3 bg-white text-center rounded-b-2xl px-4 flex items-end row-start-3 align-baseline">
            <div>
              <Button title="Generate Order" />
              <Button onClick={() => HandleCreateMenuAPI()} title="Send To Kitchen" />
              <Button title="Save & Settle Bill" />
              {/* <Button title="Generate Invoice" /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderSideMenu;
