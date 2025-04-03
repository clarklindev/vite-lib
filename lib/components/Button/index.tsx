import { forwardRef } from 'react';
import type { ButtonHTMLAttributes } from 'react';

import { cva, type VariantProps } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const buttonVariants = cva(['box-border', 'inline-flex', 'items-center', 'cursor-pointer'], {
    variants: {
        intent: {
            default: '',
            primary: 'bg-black dark:bg-white text-white dark:text-black border-transparent hover:bg-gray-800 dark:hover:bg-gray-300',
            secondary: 'bg-white text-gray-800 border-gray-400 hover:bg-gray-100',
            contained: 'bg-gray-300 text-gray-700 border-gray-300 hover:bg-gray-400',
            outlined: `text-gray-800 dark:text-gray-300 border border-gray-800 dark:border-white bg-transparent hover:bg-black hover:text-white dark:hover:text-black dark:hover:bg-white`,
            plain: 'border-transparent outline-none ring-transparent',
            text: 'border-transparent underline',
            icon: 'border-transparent'
        },

        padding: {
            default: '',
            none: 'py-0 px-0',
            S: 'py-3 px-1',
            M: 'py-3 px-2',
            L: 'py-3 px-3',
            XL: 'py-3 px-4'
        },

        borderRadius: {
            default: 'rounded-md',
            none: 'rounded-none',
            sm: 'rounded-sm',
            md: 'rounded-md',
            lg: 'rounded-lg',
            xl: 'rounded-xl'
        },

        fontsize: {
            default: '',
            small: 'text-sm',
            medium: 'text-base'
        },

        focus: {
            default: 'none',
            border: 'focus:outline-none focus:border-black'
        }
    },

    compoundVariants: [],

    //if no intent is passed in, use below..
    defaultVariants: {
        intent: 'primary',
        fontsize: 'default',
        focus: 'default',
        padding: 'XL',
        borderRadius: 'default'
    }
});

export interface ButtonVariants extends VariantProps<typeof buttonVariants> {}
export interface ButtonProps extends ButtonVariants, Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'color'> {} // omit 'color' if you use it in your variants

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
    const { intent = 'primary', padding, fontsize, focus, className, borderRadius, onClick, onFocus, onBlur, children, ...rest } = props;

    const classes = twMerge(buttonVariants({ intent, fontsize, padding, focus, borderRadius }), className);

    return (
        <button
            data-component={Button.displayName}
            className={classes}
            role="button"
            tabIndex={0}
            onClick={onClick}
            onFocus={onFocus} // Pass onFocus
            onBlur={onBlur} // Pass onBlur
            aria-label={rest['aria-label'] ?? 'Button'}
            {...rest}
            ref={ref}
        >
            {children}
        </button>
    );
});

Button.displayName = 'Button';
export { Button };
