import React from 'react';

type CheckboxGroupProps = {
    direction: string;
    spacing: string;
    children: React.ReactNode;
};

const CheckboxGroup = ({ spacing = '5', direction, children }: CheckboxGroupProps) => {
    return (
        <div
            data-component="CheckboxGroup"
            className={[
                'relative',
                'inline-flex',
                direction === 'column' ? `flex-col space-y-${spacing}` : '',

                direction === 'column-reverse' ? `flex-col-reverse space-y-${spacing} space-y-reverse` : '',

                direction === 'row' ? `flex-row space-x-${spacing}` : '',

                direction === 'row-reverse' ? `flex-row-reverse space-x-${spacing} space-x-reverse` : ''
            ].join(' ')}
        >
            {children}
        </div>
    );
};

CheckboxGroup.displayName = 'CheckboxGroup';
export { CheckboxGroup };
