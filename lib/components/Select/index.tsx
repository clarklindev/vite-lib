import React from 'react';

import { Icon } from 'lib/components';
import { HiChevronDown as ChevronDownIcon } from 'react-icons/hi2';

const Select = ({ children }: { children: React.ReactNode }) => {
    return (
        <div
            data-component={Select.displayName}
            className={`
      relative 
      flex 
      flex-grow 
      rounded-md
      w-full 
      items-center 
      min-h-12    
      h-[var(--input-height)] 
      border 
      border-[var(--border-color)]
      `}
        >
            {children}
        </div>
    );
};

type SelectElementProps = {
    savedData;
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    children: React.ReactNode[];
};

const SelectElement = (props: SelectElementProps) => {
    const { savedData, onChange, children } = props;

    return (
        <select
            className={`
                appearance-none         
                rounded-md
                border-gray-400/50
                box-border   
                m-0  
                w-full  
                h-full  
                outline-none  
                cursor-pointer  
                px-2  
      `}
            value={savedData}
            onChange={(event: React.ChangeEvent<HTMLSelectElement>) => onChange(event)}
        >
            {children
                ? children.map((each) => {
                      return each;
                  })
                : null}
        </select>
    );
};

const SelectOption = ({ children, value }: { children: React.ReactNode; value: string }) => {
    return (
        <option
            className={`
                dark:bg-black		
                dark:text-white`}
            value={value}
        >
            {children}
        </option>
    );
};

const SelectIcon = ({ children }: { children?: React.ReactNode }) => {
    return (
        <div className="pointer-events-none absolute right-2">
            {children ? (
                children
            ) : (
                <Icon size="M">
                    <ChevronDownIcon />
                </Icon>
            )}
        </div>
    );
};

// ------------------------------------------------------------------------------------------------------------------------------------------------

Select.SelectElement = SelectElement;
SelectElement.displayName = 'Select.SelectElement';

Select.SelectIcon = SelectIcon;
SelectIcon.displayName = 'Select.SelectIcon';

Select.SelectOption = SelectOption;
SelectOption.displayName = 'Select.SelectOption';

Select.displayName = 'Select';
export { Select };
