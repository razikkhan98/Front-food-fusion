import React, { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import {
  ChangeInputItemQuantityRedux,
  DecreaseItemQuantityRedux,
  IncreaseItemQuantityRedux,
} from "../../Redux/Slice/Menu/MenuSlice";

const OrderProcessTime = ({
  prevCount,
  GetQuantity,
  AddonKey,
  ItemId,
  MenuFromRedux,
}) => {
  const [count, setCount] = useState(5);
  const dispatch = useDispatch();

  const increment = () => {
    setCount((prevCount) => prevCount + 5);
    // if (AddonKey !== "addOnQuantity") {
    //   dispatch(IncreaseItemQuantityRedux(ItemId));
    // } else {
    //   // GetQuantity(count);
    // }
  };

  const decrement = () => {
    setCount((prevCount) => (prevCount > 0 ? prevCount - 5 : 0)); // avoid negative values
    // if (AddonKey !== "addOnQuantity") {
    //   dispatch(DecreaseItemQuantityRedux(ItemId));
    // } else {
    //   // GetQuantity(count);
    // }
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
    <div className="leftside-panel h-20 order-process rounded-xl flex justify-evenly items-center bg-[--cashier-light-color]">
      <button
        onClick={decrement}
        className="bg-white  h-6 text-3xl font-normal rounded-lg hover:bg-slate-50"
      >
        -
      </button>
      <input
        type="text"
        // console.log('prevCount: ', prevCount);
        // value={
        //   AddonKey !== "addOnQuantity"
        //     ? MenuFromRedux?.Menu?.find((i) => i?.customerID == ItemId)
        //         ?.quantity
        //     : count
        // }
        value={`${count } min`}
        // onChange={handleInputChange}
        // readOnly
        className="bg-transparent focus-visible:border-0 focus-visible:ring-0 text-2xl font-medium  border-0  w-6 text-center"
      />
      <button
        onClick={increment}
        className="bg-white w-6 h-6 text-3xl font-normal rounded-lg hover:bg-slate-50"
      >
        +
      </button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  MenuFromRedux: state?.menu,
});

export default connect(mapStateToProps, {})(OrderProcessTime);
