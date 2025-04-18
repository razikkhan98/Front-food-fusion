import { configureStore } from "@reduxjs/toolkit";
import tableBookingReducer from "./Slice/Order/tableBookingSlice";
import tableDetailsReducer from "./Slice/Table/tableDetailSlice";
import previousOrderReducer from "./Slice/Order/previousOrderSlice";
import menuReducer from "./Slice/Menu/MenuSlice";
export const store = configureStore({
  reducer: {
    tableBooking: tableBookingReducer,
    tableDetails: tableDetailsReducer,
    menu: menuReducer,
    previousOrder: previousOrderReducer,
  },
});
