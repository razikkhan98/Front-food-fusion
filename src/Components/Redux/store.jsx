import { configureStore } from "@reduxjs/toolkit";
import tableBookingReducer from "./Slice/Order/tableBookingSlice";
import tableDetailsReducer from "./Slice/Table/tableDetailSlice";
export const store = configureStore({
  reducer: {
    tableBooking: tableBookingReducer,
    tableDetails: tableDetailsReducer,

  },
});
