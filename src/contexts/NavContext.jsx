import { createContext, useState } from "react";

export const NavContext = createContext();

export const NavProvider = ({ children }) => {
  const [skipNavInfo, setSkipNavInfo] = useState([
    { id: "end-nav", contentName: "Content" },
  ]);

  return (
    <NavContext.Provider value={{ skipNavInfo, setSkipNavInfo }}>
      {children}
    </NavContext.Provider>
  );
};
