import React from 'react';

type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface HeadingProps extends React.HTMLAttributes<HTMLElement> {
    as: HeadingTag;
    className?: string;
    children: React.ReactNode;
}

const baseClasses = 'pt-4 pb-4 whitespace-pre-wrap break-word';

const Heading: React.FC<HeadingProps> = ({ as, className = '', children, ...rest }) => {
    const Tag = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(as) ? as : 'h1'; // Fallback for safety

    return (
        <Tag data-component="Heading" className={[baseClasses, className].filter(Boolean).join(' ')} {...rest}>
            {children}
        </Tag>
    );
};

export { Heading, type HeadingProps };
