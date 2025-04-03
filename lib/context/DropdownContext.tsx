import React, { createContext, useContext, useState } from 'react';
import { useFocus } from 'lib/customhooks';

// Create a Context
const DropdownContext = createContext<{
    isFocused: boolean;
    onBlur: () => void;
    onFocus: () => void;
    isMenuOpen: boolean;
    setIsMenuOpen: (isOpen: boolean) => void;
    handleMouseOver: () => void;
    handleMouseLeave: () => void;
    dropdownRef: React.RefObject<React.ReactNode | HTMLElement> | null;
    setDropdownRef: (dropdownRef: React.RefObject<React.ReactNode | HTMLElement>) => void;
    triggerRef: React.RefObject<React.ReactNode | HTMLElement> | null;
    setTriggerRef: (buttonRef: React.RefObject<React.ReactNode | HTMLElement>) => void;
    menuRef: React.RefObject<React.ReactNode | HTMLElement> | null;
    setMenuRef: (menuRef: React.RefObject<React.ReactNode | HTMLElement>) => void;
    menuAlign: string | null;
    setMenuAlign: (align: string) => void;
    menuOrientationX: string | null;
    setMenuOrientationX: (orientation: string) => void;
    menuOrientationY: string | null;
    setMenuOrientationY: (orientation: string) => void;
    menuBoundsObject: DOMRect;
    setMenuBoundsObject: (obj: DOMRect) => void;
    triggerBoundsObject: DOMRect;
    setTriggerBoundsObject: (obj: DOMRect) => void;
    autoAdjust: boolean;
    setAutoAdjust: (autoAdjust: boolean) => void;
    id: string | null;
    setId: (id: string) => void;
    layoutContainer: null | (HTMLElement | React.ReactElement);
    setLayoutContainer: (element: HTMLElement | React.ReactElement) => void;
    hoverMode: boolean;
    setHoverMode: (hoverMode: boolean) => void;
}>({
    isFocused: false,
    onBlur: () => {},
    onFocus: () => {},
    isMenuOpen: false,
    setIsMenuOpen: (_) => {},
    handleMouseOver: () => {},
    handleMouseLeave: () => {},
    dropdownRef: null,
    setDropdownRef: (_) => {},
    triggerRef: null,
    setTriggerRef: (_) => {},
    menuRef: null,
    setMenuRef: (_) => {},
    menuOrientationX: null,
    menuAlign: null,
    setMenuAlign: (_) => {},
    setMenuOrientationX: (_) => {},
    menuOrientationY: null,
    setMenuOrientationY: (_) => {},
    menuBoundsObject: {} as DOMRect,
    setMenuBoundsObject: (_) => {},
    triggerBoundsObject: {} as DOMRect,
    setTriggerBoundsObject: (_) => {},
    autoAdjust: true,
    setAutoAdjust: (_) => {},
    id: null,
    setId: (_) => {},
    layoutContainer: null,
    setLayoutContainer: (_) => {},
    hoverMode: false,
    setHoverMode: (_) => {}
});

// Custom Hook to Access the Context
export const useDropdown = () => {
    return useContext(DropdownContext);
};

type DropdownContextProviderProps = {
    children: React.ReactNode;
};
// Create a Context Provider
export const DropdownContextProvider = ({ children }: DropdownContextProviderProps) => {
    const { isFocused, onBlur, onFocus } = useFocus();
    const [triggerRef, setTriggerRef] = useState<React.RefObject<React.ReactNode | HTMLElement> | null>(null);
    const [menuRef, setMenuRef] = useState<React.RefObject<React.ReactNode | HTMLElement> | null>(null);
    const [dropdownRef, setDropdownRef] = useState<React.RefObject<React.ReactNode | HTMLElement> | null>(null);
    const [menuAlign, setMenuAlign] = useState<string | null>(null);
    const [menuOrientationX, setMenuOrientationX] = useState<null | string>(null);
    const [menuOrientationY, setMenuOrientationY] = useState<null | string>(null);
    const [menuBoundsObject, setMenuBoundsObject] = useState<DOMRect>({} as DOMRect);
    const [triggerBoundsObject, setTriggerBoundsObject] = useState<DOMRect>({} as DOMRect);
    const [autoAdjust, setAutoAdjust] = useState<boolean>(true);
    const [id, setId] = useState<null | string>(null);
    const [layoutContainer, setLayoutContainer] = useState<null | (HTMLElement | React.ReactElement)>(null);
    const [hoverMode, setHoverMode] = useState<boolean>(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMouseOver = () => {
        onFocus();
        setIsMenuOpen(true);
    };

    const handleMouseLeave = async () => {
        onBlur();
    };

    return (
        <DropdownContext.Provider
            value={{
                isFocused,
                onBlur,
                onFocus,
                isMenuOpen,
                setIsMenuOpen,
                handleMouseOver,
                handleMouseLeave,
                dropdownRef,
                setDropdownRef,
                triggerRef,
                setTriggerRef,
                menuRef,
                setMenuRef,
                menuAlign,
                setMenuAlign,
                menuOrientationX,
                setMenuOrientationX,
                menuOrientationY,
                setMenuOrientationY,
                menuBoundsObject,
                setMenuBoundsObject,
                triggerBoundsObject,
                setTriggerBoundsObject,
                autoAdjust,
                setAutoAdjust,
                id,
                setId,
                layoutContainer,
                setLayoutContainer,
                hoverMode,
                setHoverMode
            }}
        >
            {children}
        </DropdownContext.Provider>
    );
};
