import React, { useState, createContext, useContext, useEffect } from 'react';

type EnumType = Record<string, string | number>;

const ToggleContext = createContext<{
  setEnum: (enumObject: EnumType) => void;
  iterateEnum: () => void;
  current: keyof EnumType | undefined;
  setCurrent: (enumVal: string) => void;
}>({
  setEnum: _ => {},
  iterateEnum: () => {},
  current: undefined,
  setCurrent: (_: string) => {},
});

export const useToggle = () => {
  return useContext(ToggleContext);
};

export const ToggleContextProvider = ({ children }: { children: React.ReactNode | string }) => {
  const [enumObj, setEnumObj] = useState<EnumType>({});

  //stores a value of enumObj
  const [current, setCurrent] = useState<keyof typeof enumObj>(); //sets initial value to first in enumObj

  useEffect(() => {
    setCurrent(Object.keys(enumObj)[0]);
  }, [enumObj]);

  //a generic function that takes an enum as a type parameter
  const setEnum = (enumObject: EnumType): void => {
    setEnumObj(enumObject);
  };

  const iterateEnum = () => {
    if (enumObj) {
      const enumValues = Object.keys(enumObj);
      if (current) {
        const currentIndex = enumValues.indexOf(current);
        const nextIndex = (currentIndex + 1) % enumValues.length;
        setCurrent(enumValues[nextIndex]);
      }
    }
  };

  return (
    <ToggleContext.Provider value={{ setEnum, iterateEnum, current, setCurrent }}>{children}</ToggleContext.Provider>
  );
};
