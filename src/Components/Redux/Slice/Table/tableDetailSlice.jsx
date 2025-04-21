// cartReducer.js
import { createSlice } from "@reduxjs/toolkit";
import {
  TableCustomerIdActRedux,
  TableNoActRedux,
} from "../../Action/Table/tableDetailAction";
export const initialState = {
  TableNo: "",
  CustomerDetail: {},
  TableDetails: [],
};
const tableDetailsSlice = createSlice({
  name: "tableDetails",
  initialState,
  reducers: {
    TableNoActRedux,
    TableCustomerIdActRedux,
  },
});

export const {
  TableNoActRedux: TableNoRedux,
  TableCustomerIdActRedux: TableCustomerIdRedux,
} = tableDetailsSlice.actions;

export default tableDetailsSlice.reducer;
