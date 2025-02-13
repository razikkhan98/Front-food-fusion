import React, { useEffect, useState } from "react";

const IncrementDecrementFunctionality = ({prevCount , GetQuantity,ItemId}) => {
  const [count, setCount] = useState(1);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);

  };

  const decrement = () => {
    setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0)); // avoid negative values
  };

  const handleInputChange = (e) => {
    const value = e.target.value;

    // Ensure that we only set numerical values
    if (value === "" || /^[0-9]*$/.test(value)) {
      setCount(value === "" ? 0 : parseInt(value, 10)); // Set to 0 if input is empty
  }
  };

  // Useeffects
  useEffect(() => {
    GetQuantity({ count, ItemId });
  }, [count, ItemId]);

  return (
    <div className="w-24 h-8 rounded-md flex justify-evenly items-center bg-[--cashier-light-color]">
      <button
        onClick={decrement}
        className="bg-white w-6 h-6 text-base rounded hover:bg-slate-50"
      >
        -
      </button>
      <input
        type="text"
        value={count}
        onChange={handleInputChange}
        className="bg-transparent focus-visible:border-0 w-6 text-center"
      />
      <button
        onClick={increment}
        className="bg-white w-6 h-6 text-base rounded hover:bg-slate-50"
      >
        +
      </button>
    </div>
  );
};

export default IncrementDecrementFunctionality;
