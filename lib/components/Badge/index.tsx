import React from 'react';
import { cva } from 'class-variance-authority';
import type { VariantProps } from 'class-variance-authority';

const badge = cva([`inline-block px-2 py-1 bg-blue-500 rounded-xl text-xs uppercase`], {
    variants: {
        intent: {
            contained: 'bg-gray-300 text-gray-700 border-gray-300',
            outline: `light:text-black dark:text-gray-300 border border-gray-800 dark:border-white bg-transparent`
        }
    },
    defaultVariants: {
        intent: 'outline'
    }
});

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement>, VariantProps<typeof badge> {}

const Badge = ({ className, children, intent }: BadgeProps) => {
    return (
        <span data-component={Badge.displayName} className={[badge({ intent, className }), className].join(' ')}>
            {children}
        </span>
    );
};

Badge.displayName = 'Badge';
export { Badge };
