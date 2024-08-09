import { useState } from "react";
import { AppContext } from "./AppContext";

export const Provider = ({ children }) => {
  const [addCart, setAddCart] = useState([]);
  const value = { addCart, setAddCart };
  console.log(addCart);
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
