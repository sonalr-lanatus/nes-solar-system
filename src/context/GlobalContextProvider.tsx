import React, { useEffect, useState } from "react";

export const GlobalContext = React.createContext<ContextType>({
  stickyHeader: false,
  setStickyHeader: (param) => {},
  handleStickyNavbar: () => {},
});

const GlobalContextProvider: React.FC<GlobalContextType> = ({ children }) => {
  const [stickyHeader, setStickyHeader] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setStickyHeader(true);
    } else {
      setStickyHeader(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
  });

  return (
    <GlobalContext.Provider
      value={{ stickyHeader, setStickyHeader, handleStickyNavbar }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;

export interface GlobalContextType {
  children: React.ReactNode;
}

export type ContextType = {
  handleStickyNavbar: () => void;
  stickyHeader: boolean;
  setStickyHeader: (param: boolean) => void;
};
