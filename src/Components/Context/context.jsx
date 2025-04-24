// Context API files

import { createContext, useState } from "react";

export const UseContext = createContext();

export const UseProvider = ({ children }) => {
  const [UserAuth, setUserAuth] = useState();
  const [CustomerDetailsCnxt, setCustomerDetailsCnxt] = useState();

  return (
    <UseContext.Provider value={{ UserAuth, setUserAuth,CustomerDetailsCnxt, setCustomerDetailsCnxt }}>
      {children}
    </UseContext.Provider>
  );
};
