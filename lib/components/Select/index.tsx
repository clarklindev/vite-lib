import React from 'react';

import { Icon } from 'lib/components';
import { ChevronDownIcon } from 'lib/icons';

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
      min-w-180  
      h-[var(--input-height)] 
      border 
      border-[var(--border-color)]
      bg-[var(--input-background-color)] 
      `}
        >
            {children}
        </div>
    );
};

type SelectElementProps = {
    savedData: any;
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    children: React.ReactNode[];
};

const SelectElement = (props: SelectElementProps) => {
    const { savedData, onChange, children } = props;

    return (
        <select
            className={`
      box-border   
      appearance-none  
      m-0  
      w-full  
      h-full  
      outline-none  
      cursor-pointer  
      bg-transparent  
      px-2  
      text-[var(--input-text-color)] 
      
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
        <option className="bg-[var(--input-background-color)] text-[var(--text)]" value={value}>
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
