// cartReducer.js
import { createSlice } from "@reduxjs/toolkit";
import { TableNoActRedux } from "../../Action/Table/tableDetailAction";
export const initialState = {
  TableNo: "",
  TableDetails: [],
};
const tableDetailsSlice = createSlice({
  name: "tableDetails",
  initialState,
  reducers: {
    TableNoActRedux,
  },
});

export const { TableNoActRedux: TableNoRedux } = tableDetailsSlice.actions;

export default tableDetailsSlice.reducer;
