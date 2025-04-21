export const TableNoActRedux = (state, action) => {
  state.TableNo = action?.payload;
};

// Find Customer with Customer Id
export const TableCustomerIdActRedux = async (state, action) => {
  state.CustomerDetail = action?.payload;
  console.log('state.CustomerDetail: ', state.CustomerDetail);
};


export const TableDetailActRedux = (state, action) => {
  // state.TableNo = action?.payload;
  console.log("action?.payload: ", action?.payload);
};
