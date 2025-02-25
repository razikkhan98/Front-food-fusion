import React from "react";


// Common Components
import Button from "../Button/button";


// Import React-Icons
import { FaCircleExclamation } from "react-icons/fa6";

// Import Images 
import percentage from "../../Assets/Images/menuPageImages/svgs/percentage.svg";
import rewardpoint from "../../Assets/Images/menuPageImages/svgs/rewardpoint.svg";
import notePencil from "../../Assets/Images/menuPageImages/svgs/PencilSimple.svg";
import sellpercent from "../../Assets/Images/menuPageImages/svgs/SealPercent.svg";


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


const OrderSideMenu = () => {
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
                <span className="text-color-gray text-sm font-medium px-2">Table No<span className="text-color-black ms-2">12</span> </span>
              </div>
              <div className="flex justify-between text-center mt-1 text-sm">
                <span className="text-color-gray text-sm font-medium">
                  Order No: <span className="text-color-black">#123</span>
                </span>
                <div className="mx-2 text-xs font-normal bg-white px-2 py-1 rounded-lg">05:22</div>
              </div>
            </div>

            <div className="flex justify-between orderside-menu-status my-3 mx-2 py-2 ps-2 rounded-md">
              {OrdertypeData.map((option, index) => (
                <button
                  key={index}
                  className={`px-2 text-sm font-normal text-center rounded-md ${option.isActive ? "bg-white text-color-black" : "text-light-gray-color"
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
                  <span className={`text-sm font-medium ${item.textColor}`}>{item.text}</span>
                </span>
              ))}
            </div>
            <div className="mt-4 mx-3 space-y-4 h-96 hidden-scroll overflow-y-scroll">
              {[
                { name: "Veg Pizza", qty: 2, price: 360 },
                { name: "French Fries", qty: 1, price: 180 },
                { name: "Vegetable Soup", qty: 2, price: 360 },
                { name: "Veg Pizza", qty: 2, price: 360 },
                { name: "French Fries", qty: 1, price: 180 },
                { name: "Vegetable Soup", qty: 2, price: 360 },
              ].map((item, index) => (
                <div key={index} className="border-b pb-3">
                  <div className="flex justify-between">
                    <span className="font-medium text-sm text-color-black">
                      {index + 1}. {item.name}
                    </span>
                    <span className="flex items-center text-sm justify-center rounded cashier-light-bg-color p-0.5">
                      <button className="bg-white px-2 rounded">-</button>
                      <span className="mx-2">{item.qty}</span>
                      <button className="bg-white px-2 rounded">+</button>
                    </span>
                  </div>
                  <div className="flex justify-between items-end">
                    <p className="flex w-3/4 text-light-gray-color text-sm font-normal mt-2">
                      <span className="bg-gray-100 h-5 w-5 rounded-full flex justify-center items-center me-5">
                        <img className="w-3" src={notePencil} alt="Loading" />
                      </span>
                      <span>
                        <span className="font-medium"> Notes:</span> Make it more cheesy
                      </span>
                    </p>
                    <div className="text-right font-medium text-base text-color black mt-2">
                      ₹ {item.price}
                    </div>
                  </div>
                </div>
              ))}
              <div className="mt-4 flex justify-between items-center px-3 py-1 bg-gray-50 rounded-md">
                <span className="text-color-black flex text-sm font-normal">
                  <img src={sellpercent} className="me-2" alt="Loading" /> Food Fest Friday (-20%)
                </span>
                <button className="text-xs text-color-black">Apply</button>
              </div>

              <div className="mt-5 text-right px-4">
                <div className="text-light-gray-color text-sm flex justify-between font-medium my-1">
                  Subtotal (3 items):{" "}
                  <span className="text-color-black text-base font-medium">₹ 900</span>
                </div>
                <div className="text-light-gray-color text-sm flex justify-between my-1">
                  Tax (10%):{" "}
                  <span className="text-color-black text-base font-medium">₹ 90</span>
                </div>
                <div className="text-light-gray-color text-sm flex justify-between my-1 pb-2">
                  Discount applied:{" "}
                  <span className="text-color-black text-base font-medium">- ₹ 90</span>
                </div>
                <div className="flex justify-between pt-2 border-t-2 border-dashed">
                  <span>Total </span>
                  <span className="text-color-black text-base font-medium">₹ 792</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 pb-3 bg-white text-center rounded-b-2xl px-4 flex items-end row-start-3 align-baseline">
            <div>
              <Button title="Generate Order" />
              <Button title="Send To Kitchen" />
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
