// cartReducer.js
import { createSlice } from "@reduxjs/toolkit";
import {
  AddMenuActRedux,
  ChangeInputItemQuantityActRedux,
  DecreaseItemQuantityActRedux,
  GetAddOnsActRedux,
  IncreaseItemQuantityActRedux,
} from "../../Action/Menu/MenuAction";
export const initialState = {
  Menu: [],
  AddOnsData:[],
};
const MenuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    AddMenuActRedux,
    IncreaseItemQuantityActRedux,
    DecreaseItemQuantityActRedux,
    ChangeInputItemQuantityActRedux,
    GetAddOnsActRedux,
  },
});

export const {
  AddMenuActRedux: AddMenuRedux,
  IncreaseItemQuantityActRedux: IncreaseItemQuantityRedux,
  DecreaseItemQuantityActRedux: DecreaseItemQuantityRedux,
  ChangeInputItemQuantityActRedux:ChangeInputItemQuantityRedux,
  GetAddOnsActRedux:GetAddOnsRedux,
} = MenuSlice.actions;

export default MenuSlice.reducer;
