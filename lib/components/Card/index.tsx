import type { ReactNode } from 'react';
import React from 'react';
import { Divider } from 'lib/components';

type CardProps = React.HTMLProps<HTMLDivElement> & {
    children?: React.ReactNode;
    heading?: string;
};

const Card = ({ className, children }: CardProps) => {
    return <div className={['border border-gray-400/50 rounded-lg min-h-auto mb-4', className].filter(Boolean).join(' ')}>{children}</div>;
};

type TitleProps = {
    children: ReactNode;
    className?: string;
};

const title = ({ children, className }: TitleProps) => {
    return (
        <div className="flex flex-col justify-center">
            <div className={['text-xl py-2 px-2', className].filter(Boolean).join(' ')}>{children}</div>
            <Divider />
        </div>
    );
};

const cardContent = ({ children, className }: { className?: string; children: React.ReactNode }) => {
    return <div className={['py-2 px-2', className].filter(Boolean).join(' ')}>{children}</div>;
};

Card.Title = title;
title.displayName = 'Card.Title';

Card.Content = cardContent;
cardContent.displayName = 'Card.Content';

Card.displayName = 'Card';
export { Card };

// ------------------------------------------------------------------------------------------------------------------------------------------------
// Card is a div tag so we use data-component="Card" to differentiate it from classes which will become random generated characters
