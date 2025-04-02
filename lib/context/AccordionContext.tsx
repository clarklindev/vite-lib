import React, { useState, createContext, useContext } from 'react';

const AccordionContext = createContext<{
    indexes: Array<number>;
    setIndexes: (arr: Array<number>) => void;
    multiOpen: boolean;
    setMultiOpen: (show: boolean) => void;
}>({
    indexes: [],
    setIndexes: (_) => {},
    multiOpen: false,
    setMultiOpen: (_) => {}
});

export const useAccordion = () => {
    return useContext(AccordionContext);
};

export const AccordionContextProvider = ({ children }: { children: React.ReactNode | string }) => {
    const [indexes, setInternalIndexes] = useState<number[]>([]);
    const [multiOpen, setMultiOpen] = useState(false);

    const setIndexes = (indexes: Array<number>) => {
        console.log('setIndexes: ', indexes);
        setInternalIndexes(indexes);
    };

    return <AccordionContext.Provider value={{ indexes, setIndexes, multiOpen, setMultiOpen }}>{children}</AccordionContext.Provider>;
};
