import React from 'react';

enum FlexAssociation {
    left = 'relative inline-flex flex-row-reverse items-center content-center',
    right = 'relative inline-flex flex-row items-center content-center',
    top = 'relative inline-flex flex-col-reverse items-center content-center',
    bottom = 'relative inline-flex flex-col items-center content-center'
}

const getFlexGap = (direction: keyof typeof FlexAssociation, num: string) => {
    return `${FlexAssociation[direction]} gap-${num}`;
};

type LabelProps = {
    label: string;
    children: React.ReactNode;
    labelDirection?: keyof typeof FlexAssociation;
    gap?: string;
    labelClickable?: boolean;
    className?: string;
};

const Label = ({
    labelDirection = 'right',
    labelClickable = true,
    gap = '2',

    label = '',
    className = '',
    children
}: LabelProps) => {
    const Component = labelClickable ? 'label' : 'div';

    const flexClasses = `${getFlexGap(labelDirection, gap)} ${labelClickable ? 'cursor-pointer' : 'cursor-default'}`;

    return (
        <Component data-component={Label.name} className={[flexClasses, className].join(' ')}>
            <div>{children}</div>
            <span>{label}</span>
        </Component>
    );
};

Label.displayName = 'Label';
export { Label };
// -----------------------------------------------------------------------------------------------------------------------------
