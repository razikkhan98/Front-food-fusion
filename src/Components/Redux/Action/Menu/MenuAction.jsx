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
