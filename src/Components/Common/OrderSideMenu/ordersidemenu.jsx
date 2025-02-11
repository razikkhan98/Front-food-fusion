import React from "react";
import Button from "../button/button";
import { FaCircleExclamation, FaPen } from "react-icons/fa6";
import percentage from "../../Assets/Images/menuPageImages/svgs/percentage.svg";
import rewardpoint from "../../Assets/Images/menuPageImages/svgs/rewardpoint.svg";
import notePencil from "../../Assets/Images/menuPageImages/svgs/PencilSimple.svg";
import sellpercent from "../../Assets/Images/menuPageImages/svgs/SealPercent.svg";

const OrderSideMenu = () => {
  return (
    <>
      <div className=" h-full py-3 ">
        <div className="max-w-sm mx-auto grid  grid-cols-1 grid-rows-3 bg-white shadow-2xl rounded-2xl h-full">
          <div>
            <div className="cashier-light-bg-color rounded-t-2xl p-2">
              <div className="flex justify-between text-sm font-semibold text-gray-700">
                <span>
                  For: <span className="font-bold">Mr. Rahul Vijay</span>
                </span>
                <span className=" px-2">Table No 12</span>
              </div>
              <div className="flex justify-between text-center mt-1 text-sm">
                <span>
                  Order No: <span className="font-bold">#123</span>
                </span>
                <div className=" mx-2 bg-white px-2 py-1 rounded-lg">05:22</div>
              </div>
            </div>

            <div className="flex justify-between cashier-light-bg-color my-3 mx-2 p-1 rounded-md">
              <button className="px-2 text-center bg-white rounded-md">
                Dine In
              </button>
              <button className="px-2 text-center  text-slate-400 ">
                Take Away
              </button>
              <button className="px-2 text-center  text-slate-400 ">
                Delivery
              </button>
            </div>

            <div className="flex justify-between mt-2 border-b pb-2 text-sm px-4 ">
              <span className="flex  space-x-1">
                <span className="text-red-500">
                  <img src={percentage} alt="" />
                </span>
                <span className="">Discount & Offers</span>
              </span>
              <span className="flex  space-x-1">
                <span className="text-yellow-500">
                  {" "}
                  <img src={rewardpoint} alt="" />
                </span>
                <span>Reward Points</span>
              </span>
              <span className="flex  space-x-1">
                <span className="text-yellow-500">
                  <FaCircleExclamation className="text-[--yellow-color]" />
                </span>
                <span>Payment Pending</span>
              </span>
            </div>

            <div className="mt-4 space-y-4 px-4 h-[40vh] hidden-scroll overflow-y-scroll">
              {[
                { name: "Veg Pizza", qty: 2, price: 360 },
                { name: "French Fries", qty: 1, price: 180 },
                { name: "Vegetable Soup", qty: 2, price: 360 },
              ].map((item, index) => (
                <div key={index} className="border-b pb-2">
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-700">
                      {index + 1}. {item.name}
                    </span>
                    <span className="flex items-center justify-center rounded cashier-light-bg-color p-0.5">
                      <button className="bg-white px-2 rounded">-</button>
                      <span className="mx-2">{item.qty}</span>
                      <button className="bg-white px-2 rounded">+</button>
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="flex w-3/4 text-gray-500">
                      <img className="w-3 me-1" src={notePencil} alt="" />
                      Make it more cheesy
                    </span>
                    <div className="text-right font-semibold mt-2">
                      ₹ {item.price}
                    </div>
                  </div>
                </div>
              ))}
              <div className="mt-4 flex justify-between items-center px-4">
                <span className="text-gray-700 flex">
                  <img src={sellpercent} alt="" /> Food Fest Friday (-20%)
                </span>
                <button className="">Apply</button>
              </div>

              <div className="mt-4 text-right px-4">
                <div className="text-gray-700 flex justify-between my-1">
                  Subtotal (3 items):{" "}
                  <span className="text-black font-semibold">₹ 900</span>
                </div>
                <div className="text-gray-700 flex justify-between my-1">
                  Tax (10%):{" "}
                  <span className="text-black font-semibold">₹ 90</span>
                </div>
                <div className="text-gray-700 flex justify-between my-1 pb-2">
                  Discount applied:{" "}
                  <span className="text-black font-semibold">- ₹ 90</span>
                </div>
                <div className="flex justify-between pt-2 border-t-2 border-dashed">
                  <span>Total </span>
                  <span className="text-black font-semibold">₹ 792</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 pb-3 text-center mx-4 flex items-end row-start-3 align-baseline">
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
