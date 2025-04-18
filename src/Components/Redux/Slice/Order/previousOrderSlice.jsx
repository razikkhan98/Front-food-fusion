// cartReducer.js
import { createSlice } from "@reduxjs/toolkit";
import { PreviousOrderActRedux } from "../../Action/Order/previousOrderAction";

export const initialState = {
  PreviousOrder: [],
};
const previousOrderSlice = createSlice({
  name: "previousOrder",
  initialState,
  reducers: {
    PreviousOrderActRedux,
  },
});

export const { PreviousOrderActRedux: PreviousOrderRedux } =
  previousOrderSlice.actions;

export default previousOrderSlice.reducer;
