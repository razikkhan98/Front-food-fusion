export const AddMenuActRedux = (state, action) => {
  const existingItemIndex = state.Menu?.findIndex(
    (i) => i?.customerID === action.payload.customerID
  );

  if (existingItemIndex !== -1) {
    // If the item already exists in the menu, we can just update it
    // Modify the existing item as needed (for example, updating quantity)
    state.Menu[existingItemIndex] = {
      ...state.Menu[existingItemIndex],
      quantity: action.payload.quantity, // Update the quantity or other properties as needed
    };
  } else {
    // If the item does not exist, we can push the new item
    state.Menu.push(action.payload);
  }
};

export const IncreaseItemQuantityActRedux = (state, action) => {
  const existingItemIndex = state?.Menu?.findIndex(
    (i) => i?.customerID === action?.payload
  );
  if (existingItemIndex !== -1) {
    state.Menu[existingItemIndex] = {
      ...state?.Menu[existingItemIndex],
      quantity: state?.Menu[existingItemIndex]?.quantity + 1,
    };
  }
};

export const DecreaseItemQuantityActRedux = (state, action) => {
  const existingItemIndex = state?.Menu?.findIndex(
    (i) => i?.customerID === action?.payload
  );

  if (existingItemIndex !== -1) {
    if (state?.Menu[existingItemIndex]?.quantity > 1) {
      state.Menu[existingItemIndex] = {
        ...state.Menu[existingItemIndex],
        quantity: state?.Menu[existingItemIndex]?.quantity - 1,
      };
    } else {
      // If quantity is 1, remove the item from the menu
      state?.Menu?.splice(existingItemIndex, 1);
    }
  }
};
export const ChangeInputItemQuantityActRedux = (state, action) => {
  const existingItemIndex = state?.Menu?.findIndex(
    (i) => i?.customerID === action?.payload?.ItemId
  );

  if (existingItemIndex !== -1) {
    if (action?.payload?.value > 1) {
      state.Menu[existingItemIndex] = {
        ...state.Menu[existingItemIndex],
        quantity: action?.payload?.value,
      };
    } else {
      // If quantity is 1, remove the item from the menu
      state?.Menu?.splice(existingItemIndex, 1);
    }
  }
};
