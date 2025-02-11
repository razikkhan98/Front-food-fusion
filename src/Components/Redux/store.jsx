import { configureStore } from "@reduxjs/toolkit";
import tableBookingReducer from "./Slice/Order/tableBookingSlice";
export const store = configureStore({
  reducer: {
    tableBooking: tableBookingReducer,

  },
});
