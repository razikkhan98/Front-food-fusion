import { configureStore } from "@reduxjs/toolkit";
import tableBookingReducer from "./Slice/TableBooking/tableBookingSlice";
export const store = configureStore({
  reducer: {
    tableBooking: tableBookingReducer,

  },
});
