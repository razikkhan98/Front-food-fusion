import { configureStore } from "@reduxjs/toolkit";
import tableBookingReducer from "./TableBooking/tableBookingSlice";
export const store = configureStore({
  reducer: {
    tableBooking: tableBookingReducer,

  },
});
