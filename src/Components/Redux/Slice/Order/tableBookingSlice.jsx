// cartReducer.js
import { createSlice } from "@reduxjs/toolkit";
import { TableBookingActRedux } from "../../Action/Order/tableBookingAction";
export const initialState = {
  TableBooking: [],
};
const tableBookingSlice = createSlice({
  name: "tableBooking",
  initialState,
  reducers: {
    TableBookingActRedux,
  },
});

export const { TableBookingActRedux: TableBookingRedux } = tableBookingSlice.actions;

export default tableBookingSlice.reducer;
