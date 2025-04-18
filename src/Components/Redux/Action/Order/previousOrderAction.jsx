export const PreviousOrderActRedux = (state, action) => {
  state.PreviousOrder?.splice(0,state.PreviousOrder?.length)
    state.PreviousOrder = state.PreviousOrder.concat(action.payload);
  };
  
