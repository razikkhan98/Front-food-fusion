export const TableBookingAct = (state, action) => {
    state.TableBooking?.push(action?.payload);
  };
  
  // export const GetTableNo = (state, action) => {
  //   state.TableNo = action?.payload;
  // };
  