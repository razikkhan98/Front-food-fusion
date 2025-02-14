// cartReducer.js
import { createSlice } from "@reduxjs/toolkit";
import {
  AddMenuActRedux,
  ChangeInputItemQuantityActRedux,
  DecreaseItemQuantityActRedux,
  IncreaseItemQuantityActRedux,
} from "../../Action/Menu/MenuAction";
export const initialState = {
  Menu: [],
};
const MenuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    AddMenuActRedux,
    IncreaseItemQuantityActRedux,
    DecreaseItemQuantityActRedux,
    ChangeInputItemQuantityActRedux,
  },
});

export const {
  AddMenuActRedux: AddMenuRedux,
  IncreaseItemQuantityActRedux: IncreaseItemQuantityRedux,
  DecreaseItemQuantityActRedux: DecreaseItemQuantityRedux,
  ChangeInputItemQuantityActRedux:ChangeInputItemQuantityRedux,
} = MenuSlice.actions;

export default MenuSlice.reducer;
