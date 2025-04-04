import React from 'react';
import { cn } from 'lib/utils/cn';
import { Divider, Heading } from 'lib/components';

type CardProps = React.HTMLProps<HTMLDivElement> & {
    children?: React.ReactNode;
    heading?: string
};

const Card = ({ className, children }: CardProps) => {
    return (
        <div data-component={Card.displayName} className={cn('border-black border rounded-lg min-h-auto mb-4', className)}>
            {children}
        </div>
    );
};

const title = ({children, className}: {children:string, className?:string})=>{
    return (<div className="flex flex-col justify-center">
        <Heading variation="h1" size="M" className={cn('px-2', className)}>
            {children}
        </Heading>
        <Divider/>
    </div>
    )
}


const cardContent = ({children, className}:{className?:string, children:React.ReactElement | string})=>{
    return <div className={cn('px-2 py-2', className)}>
        {children}
    </div>
}

Card.Title = title;
title.displayName = "Card.Title";

Card.Content = cardContent;
cardContent.displayName = "Card.Content";

Card.displayName = 'Card';
export { Card };


// ------------------------------------------------------------------------------------------------------------------------------------------------
// Card is a div tag so we use data-component="Card" to differentiate it from classes which will become random generated characters
