// cartReducer.js
import { createSlice } from "@reduxjs/toolkit";
import { TableBookingAct } from "../../Action/TableBooking/tableBookingAction";
export const initialState = {
  TableBooking: [],
};
const tableBookingSlice = createSlice({
  name: "tableBooking",
  initialState,
  reducers: {
    TableBookingAct,
  },
});

export const { TableBookingAct: TableBooking } = tableBookingSlice.actions;

export default tableBookingSlice.reducer;
