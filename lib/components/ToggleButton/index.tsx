import { ToggleContextProvider, useToggle } from 'lib/context/ToggleContext';
import React, { useEffect } from 'react';

enum ToggleEnum {
    ON = 'true',
    OFF = 'false'
}

type EnumType = Record<string, string | number>;

const ToggleButton = ({ render, enumObj }: { render: (current: string) => React.ReactNode; enumObj?: EnumType }) => {
    return (
        <ToggleContextProvider>
            <Component render={render} enumObj={enumObj} />
        </ToggleContextProvider>
    );
};

const Component = ({ render, enumObj }: { render: (current: string) => React.ReactNode; enumObj?: EnumType }) => {
    const { iterateEnum, setEnum, current } = useToggle();

    useEffect(() => {
        setEnum(enumObj ? enumObj : ToggleEnum);
    }, []);

    return (
        <div data-component={ToggleButton.name} className={ToggleButton.name}>
            <label
                className={`
        inline-flex 
        cursor-pointer
      `}
            >
                <input
                    type="checkbox"
                    checked={current === ToggleEnum.ON}
                    onChange={iterateEnum}
                    className={`
            border-0 
            clip-rect-0 
            clip-path-inset-1/2
            h-0 
            m-(-1)
            overflow-hidden 
            hidden
            p-0 
            absolute 
            whitespace-nowrap 
            w-1`}
                />
                {current && render(current)}
            </label>
        </div>
    );
};

ToggleButton.displayName = 'ToggleButton';
export { ToggleButton };
// ------------------------------------------------------------------------------------------------------------------------------------------------
