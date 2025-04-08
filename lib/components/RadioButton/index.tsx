import React from 'react';

import { Icon } from 'lib/components';

type Size = 'XS' | 'S' | 'M' | 'L' | 'XL' | '2XL' | '3XL' | '4XL' | '5XL' | '6XL' | '7XL' | '8XL' | '9XL' | '10XL';

type RadioButtonProps = {
    checked: boolean;
    name: string;
    label?: string;
    size?: Size | null;
    spacing?: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const RadioButton = ({ checked, name, label, onChange, size = 'XL', spacing = '2' }: RadioButtonProps) => {
    return (
        <label
            data-component={RadioButton.name}
            className={`
flex 
flex-row 
items-center 
w-full 
h-full 
gap-${spacing}
    `}
        >
            <input
                type="radio"
                checked={checked}
                onChange={onChange}
                name={name}
                className={`
border-0 
border-box
clip-[rect(0 0 0 0)] 
clip-path-[inset(50%)] 
h-0 
w-0 
m-n1 
hidden
overflow-hidden 
p-0 
absolute 
whitespace-nowrap
        `}
            />
            <div
                className={`
flex 
items-center
justify-items-center 
relative 
box-border 
cursor-pointer 
rounded-full
border-[var(--border)]
bg-gray-400/50
      `} // bg-[var(input-background-color)]
            >
                <Icon size={size}>
                    {checked ? (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 30 30">
                            <circle cx="15" cy="15.5" r="8" fill="currentColor"></circle>
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
                            <circle cx="15" cy="15.5" r="8" stroke="var(--clr-foreground)" strokeWidth={1}></circle>
                        </svg>
                    )}
                </Icon>
            </div>
            {label}
        </label>
    );
};

RadioButton.displayName = 'RadioButton';
export { RadioButton };
