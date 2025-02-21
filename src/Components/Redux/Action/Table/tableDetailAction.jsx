export const TableNoActRedux = (state, action) => {
    state.TableNo = action?.payload;
  };
  
  export const TableDetailActRedux = (state, action) => {
    // state.TableNo = action?.payload;
    console.log('action?.payload: ', action?.payload);
  };
  