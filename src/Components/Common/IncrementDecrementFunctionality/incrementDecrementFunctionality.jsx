import React, { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import {
  ChangeInputItemQuantityRedux,
  DecreaseItemQuantityRedux,
  IncreaseItemQuantityRedux,
} from "../../Redux/Slice/Menu/MenuSlice";

const IncrementDecrementFunctionality = ({
  prevCount,
  GetQuantity,
  AddonKey,
  ItemId,
  MenuFromRedux,
}) => {
  const [count, setCount] = useState(1);
  const dispatch = useDispatch();

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
    if (AddonKey !== "addOnQuantity") {
      dispatch(IncreaseItemQuantityRedux(ItemId));
    } else {
      // GetQuantity(count);
    }
  };

  const decrement = () => {
    setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0)); // avoid negative values
    if (AddonKey !== "addOnQuantity") {
      dispatch(DecreaseItemQuantityRedux(ItemId));
    } else {
      // GetQuantity(count);
    }
  };

  const handleInputChange = (e) => {
    const value = Number(e?.target?.value);
    const payload = {
      value,
      ItemId,
    };
    dispatch(ChangeInputItemQuantityRedux(payload));
    // Ensure that we only set numerical values
    if (value === "" || /^[0-9]*$/.test(value)) {
      setCount(value === "" ? 0 : parseInt(value, 10)); // Set to 0 if input is empty
    }
  };

  // USEEFFECT

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
        // console.log('prevCount: ', prevCount);
        value={
          AddonKey !== "addOnQuantity"
            ? MenuFromRedux?.Menu?.find((i) => i?.customerID == ItemId)
                ?.quantity
            : count
        }
        // value={count}
        // onChange={handleInputChange}
        readOnly
        className="bg-transparent focus-visible:border-0 focus-visible:ring-0   border-0  w-6 text-center"
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

const mapStateToProps = (state) => ({
  MenuFromRedux: state?.menu,
});

export default connect(mapStateToProps, {})(IncrementDecrementFunctionality);
