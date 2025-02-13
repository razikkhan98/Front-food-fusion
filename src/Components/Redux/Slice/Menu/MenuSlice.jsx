// cartReducer.js
import { createSlice } from "@reduxjs/toolkit";
import { AddMenuActRedux } from "../../Action/Menu/MenuAction"
export const initialState = {
  Menu: [],
};
const MenuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    AddMenuActRedux,
  },
});

export const { AddMenuActRedux: AddMenuRedux } = MenuSlice.actions;

export default MenuSlice.reducer;
