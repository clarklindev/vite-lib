import React, { useState } from 'react';
import { cn } from '../../utils/cn';

type CardProps = React.HTMLProps<HTMLDivElement> & {
    children?: React.ReactNode;
};

const Card = ({ className, ...props }: CardProps) => {
    const [loading] = useState(false);
    return (
        <div
            data-component={Card.displayName}
            className={cn('text-white border-[var(--border-color)] border rounded-lg min-h-auto p-10', className, {
                'bg-gray-400': loading
            })}
            {...props}
        />
    );
};

Card.displayName = 'Card';
export { Card };

// ------------------------------------------------------------------------------------------------------------------------------------------------
// Card is a div tag so we use data-component="Card" to differentiate it from classes which will become random generated characters
