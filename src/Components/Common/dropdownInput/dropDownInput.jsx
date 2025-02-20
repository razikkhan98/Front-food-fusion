import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";

// Role JSON Data
const orders = [
  {
    table: "Table 1",
    orderNo: "#1001",
    time: "15 Min",
    items: ["1x Pizza", "2x Coke"],
  },
  {
    table: "Table 2",
    orderNo: "#1002",
    time: "10 Min",
    items: ["2x Samosa", "1x Chowmein", "2x Cold Coffee", "2x Cold Coffee", "2x Cold Coffee"],
  },
  {
    table: "Table 3",
    orderNo: "#1003",
    time: "20 Min",
    items: ["1x Burger", "1x Fries"],
  },
  {
    table: "Table 4",
    orderNo: "#1004",
    time: "5 Min",
    items: ["3x Pasta", "2x Lemonade"],
  },
];

const DropDownInput = () => {
  // ==========  
  // State 
  // ============
  const [inputValue, setInputValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);


  // ==========  
  // Functions 
  // ============ 

  // Filter options based on the input value
  const filteredOptions = orders.filter((order) =>
    order.table.toLowerCase().includes(inputValue.toLowerCase())
  );

  // Handle selection
  const handleSelect = (order) => {
    setInputValue(order.table);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      {/* Search Input   */}
      <div className={`flex items-center bg-transparent border rounded-full px-4 py-2 w-full max-w-md hover:bg-white ${inputValue?.length > 0 ? "relative z-10 bg-white border-[#EAEAEA] border-[1px]" : "" }`}>
        <span className="">
        <IoSearch className="text-light-gray-color h-5 w-5" />
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
           <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-4.35-4.35M16.5 12.5a6 6 0 1 0-12 0 6 6 0 0 0 12 0z"
              />
          </svg> */}
        </span>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onFocus={() => setIsOpen(true)}
          onBlur={() => setIsOpen(false)} // Optional: You can keep the dropdown open by managing this state differently
          placeholder="Table or Order status"
          className="bg-transparent text-gray-400 text-base font-normal placeholder-gray-400 focus:outline-none focus:ring-0 border-none ml-2 w-full"
        />
      </div>

      {/* Search Card  */}
      {isOpen && inputValue && (
        <div className="absolute left-0 text-sm w-full max-h-60 py-4 px-3 bg-white top-5 rounded-b-[32px] shadow-md overflow-scroll hidden-scroll">
          {filteredOptions.length > 0 ? (
            filteredOptions.map((order, index) => (
              <div className="cursor-pointer pt-1" onMouseDown={() => handleSelect(order)}>
                <div className="flex justify-between border-b py-2">
                  <span className="font-medium">Order Details :</span>
                  <span className="font-semibold">{order.table}</span>
                </div>
                <div className="flex justify-between border-b py-2">
                  <span className="text-gray-400">Order No:</span>
                  <span className="text-left">{order.orderNo}</span>
                </div>
                <div className="flex justify-between border-b py-2">
                  <span className="text-gray-400">Time:</span>
                  <span className="text-left">{order.time}</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-gray-400">Items :</span>
                  <ol className="list-decimal pl-5 h-16 hidden-scroll overflow-y-auto">
                    {order.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ol>
                </div>
              </div>
            ))
          ) : (
            <p className="px-4 py-2 text-gray-500">No results found</p>
          )}
        </div>
      )}

    </div>
  );
};

export default DropDownInput;
