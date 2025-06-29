import React, { createContext, useContext, useState } from 'react';

// Create a Context
const MenuContext = createContext({
  isOpen: false,
  toggleMenu: () => {},
  closeMenu: () => {},
});

type MenuProviderProps = {
  children: React.ReactNode;
};

// Create a Context Provider
export const MenuContextProvider = ({ children }: MenuProviderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    console.log('toggle');
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return <MenuContext.Provider value={{ isOpen, toggleMenu, closeMenu }}>{children}</MenuContext.Provider>;
};

// Custom Hook to Access the Context
export const useMenu = () => {
  return useContext(MenuContext);
};
