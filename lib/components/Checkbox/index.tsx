import React, { useEffect, useRef } from 'react';

import { Icon } from '..';

type Size = 'XS' | 'S' | 'M' | 'L' | 'XL' | '2XL' | '3XL' | '4XL' | '5XL' | '6XL' | '7XL' | '8XL' | '9XL' | '10XL';

type CheckboxProps = {
    checked: boolean;
    name: string;
    label?: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    size?: Size | null;
    indeterminate?: boolean;
    border?: boolean;
};

const Checkbox = ({ checked, name, label = '', onChange, size = 'XL', indeterminate = false, border = true }: CheckboxProps) => {
    const inputRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        if (inputRef?.current) {
            inputRef.current.indeterminate = indeterminate;
        }
    }, [indeterminate]);

    return (
        <label data-component={Checkbox.name}>
            <input
                type="checkbox"
                className={`
        hidden
        h-0
        w-0
        overflow-hidden
        absolute
        top-0
        left-0
        `}
                checked={checked}
                ref={inputRef}
                onChange={onChange}
                name={name}
            />

            <div
                className={`
        cursor-pointer
        overflow-hidden 
        rounded-md
        bg-[var(--clr-background)]
        bg-[var(input-background-color)]
      `}
            >
                {indeterminate ? (
                    <Icon size={size}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={border ? 'red' : 'none'} strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="1" y="1" width="22" height="22" rx="3" ry="3" />
                            <line x1="8" y1="12" x2="16" y2="12" strokeWidth="2" />
                        </svg>
                    </Icon>
                ) : checked ? (
                    <Icon size={size}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="red" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
                            {border && <rect x="1" y="1" width="22" height="22" rx="3" ry="3" />}
                            <line x1="6" y1="12" x2="10" y2="16" strokeWidth="2" />
                            <line x1="10" y1="16" x2="18" y2="8" strokeWidth="2" />
                        </svg>
                    </Icon>
                ) : (
                    <Icon size={size}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={border ? 'red' : 'none'} strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="1" y="1" width="22" height="22" rx="3" ry="3" />
                        </svg>
                    </Icon>
                )}
            </div>
            <span>{label}</span>
        </label>
    );
};

Checkbox.displayName = 'Checkbox';
export { Checkbox };
