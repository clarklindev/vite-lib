import { useState, createContext, useContext, ReactNode, ReactElement, useEffect, useRef } from 'react';

// Define the context types
interface PopoverContextType {
    isVisible: boolean;
    togglePopover: () => void;
}

// Create a default value for the context
const PopoverContext = createContext<PopoverContextType | undefined>(undefined);

interface PopoverProps {
    children: ReactNode;
}

interface TriggerProps {
    children: ReactNode;
}

interface ContentProps {
    children: ReactNode;
}

const Popover = ({ children }: PopoverProps): ReactElement => {
    const [isVisible, setIsVisible] = useState(false);

    const togglePopover = () => {
        setIsVisible((prev) => !prev);
    };

    return (
        <PopoverContext.Provider value={{ isVisible, togglePopover }}>
            <div className="popover-container">{children}</div>
        </PopoverContext.Provider>
    );
};

Popover.Trigger = ({ children }: TriggerProps): ReactElement => {
    const context = useContext(PopoverContext);

    // If context is not available, throw an error
    if (!context) {
        throw new Error('Popover.Trigger must be used within a Popover');
    }

    const { togglePopover } = context;

    return <div onClick={togglePopover}>{children}</div>;
};

Popover.Content = ({ children }: ContentProps): ReactElement | null => {
    const context = useContext(PopoverContext);
    const contentRef = useRef<HTMLDivElement | null>(null);

    // If context is not available, throw an error
    if (!context) {
        throw new Error('Popover.Content must be used within a Popover');
    }

    const { isVisible, togglePopover } = context;

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (contentRef.current && !contentRef.current.contains(event.target as Node)) {
                togglePopover();
            }
        };

        // Attach the click event listener
        document.addEventListener('mousedown', handleClickOutside);

        // Cleanup the event listener on unmount
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [togglePopover]);

    return isVisible ? (
        <div className="popover-content absolute z-1000" ref={contentRef}>
            {children}
        </div>
    ) : null;
};

export { Popover };
