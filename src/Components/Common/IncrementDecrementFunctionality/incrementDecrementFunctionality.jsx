import React, { useContext, useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import {
  ChangeInputItemQuantityRedux,
  DecreaseItemQuantityRedux,
  GetAddOnsRedux,
  IncreaseItemQuantityRedux,
} from "../../Redux/Slice/Menu/MenuSlice";
import { UseContext } from "../../Context/context";

const IncrementDecrementFunctionality = ({
  prevCount,
  GetQuantity,
  AddonKey,
  ItemId,
  MenuFromRedux,
  updateQuantity,
  isOptionSelected,
}) => {
  const [count, setCount] = useState(1);
  const dispatch = useDispatch();
  const { CustomerDetailsCnxt } = useContext(UseContext);
  
  // Filter Previous order with customerId
  const FilterPrevOrdCustmId = MenuFromRedux?.Menu?.filter((i)=>i?.customerID == CustomerDetailsCnxt?._id)
  
  const increment = () => {
    const newCount = count + 1;
    setCount((prevCount) => prevCount + 1);
    if (AddonKey !== "addOnQuantity") {
      dispatch(IncreaseItemQuantityRedux(ItemId));
    } else {
      GetQuantity({count:newCount,id:ItemId});
      updateQuantity(ItemId, newCount);
      // dispatch(GetAddOnsRedux(count));
    }
  };

  const decrement = () => {
    const newCount = count > 0 ? count - 1 : 0; // Avoid negative values
    setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0)); // avoid negative values
    if (AddonKey !== "addOnQuantity") {
      dispatch(DecreaseItemQuantityRedux(ItemId));
    } else {
      GetQuantity({count:newCount,id:ItemId});
      updateQuantity(ItemId, newCount);
      // dispatch(GetAddOnsRedux(count));
    }
  };

  // const handleInputChange = (e) => {
  //   const value = Number(e?.target?.value);
  //   const payload = {
  //     value,
  //     ItemId,
  //   };
  //   console.log('payload: ', payload);
  //   dispatch(ChangeInputItemQuantityRedux(payload));
  //   // Ensure that we only set numerical values
  //   if (value === "" || /^[0-9]*$/.test(value)) {
  //     setCount(value === "" ? 0 : parseInt(value, 10)); // Set to 0 if input is empty
  //   }
  // };

  // USEEFFECT

  const handleInputChange = (e) => {
    const value = Number(e?.target?.value);
    if (value > 0) {
      setCount(value);
      updateQuantity(ItemId, value); // Update quantity in the parent component
    }
  };

  return (
    <div className="w-24 h-8 rounded-md flex justify-evenly items-center bg-[--cashier-light-color]">
      <button
        className={`bg-white w-6 h-6 text-base rounded hover:bg-slate-50 ${!isOptionSelected ? "cursor-not-allowed" : ""}`}
        onClick={decrement}
        disabled={!isOptionSelected}
      >
        -
      </button>
      <input
        type="text"
        // console.log('prevCount: ', prevCount);
        value={
          AddonKey !== "addOnQuantity"
            ? FilterPrevOrdCustmId?.find((i) => i?.orderID == ItemId)
                ?.quantity
            : count
        }
        // value={count}
        onChange={handleInputChange}
        readOnly
        className="bg-transparent focus-visible:border-0 focus-visible:ring-0   border-0  w-6 text-center"
      />
      <button
      className={`bg-white w-6 h-6 text-base rounded hover:bg-slate-50 ${!isOptionSelected ? "cursor-not-allowed" : ""}`}
      onClick={increment}
      disabled={!isOptionSelected}
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
