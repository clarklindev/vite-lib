import React, { createContext, useContext, useState } from 'react';

interface TabContextProps {
  selectedTabId: string | undefined;
  setSelectedTabId: (id: string) => void;
}

const TabsContext = createContext<TabContextProps>({
  selectedTabId: undefined,
  setSelectedTabId: _ => {},
});

export const useTabs = () => {
  return useContext(TabsContext);
};

type TabsContextProviderProps = {
  children: React.ReactNode;
};
export const TabsContextProvider = ({ children }: TabsContextProviderProps) => {
  const [selectedTabId, setSelectedTabId] = useState<string | undefined>(undefined);

  return (
    <TabsContext.Provider
      value={{
        selectedTabId,
        setSelectedTabId,
      }}>
      {children}
    </TabsContext.Provider>
  );
};
