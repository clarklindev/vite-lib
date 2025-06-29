import { forwardRef } from 'react';
import type { ButtonHTMLAttributes } from 'react';

import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from 'lib/utils';

const buttonVariants = cva([
    'box-border',
    'inline-flex',
    'items-center',
    'justify-center',
    'cursor-pointer',
    'font-medium',
    'transition-all',
    'duration-200',
    'ease-in-out',
    'select-none',
    'whitespace-nowrap',
    'disabled:pointer-events-none',
    'disabled:opacity-50',
    'active:scale-[0.98]'
], {
    variants: {
        intent: {
            default: '',
            primary: [
                'bg-gradient-to-r from-blue-600 to-blue-700',
                'text-white',
                'border-transparent',
                'shadow-lg shadow-blue-500/25',
                'hover:from-blue-700 hover:to-blue-800',
                'hover:shadow-xl hover:shadow-blue-500/30',
                'focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
                'dark:from-blue-500 dark:to-blue-600',
                'dark:hover:from-blue-600 dark:hover:to-blue-700'
            ],
            secondary: [
                'bg-gradient-to-r from-gray-100 to-gray-200',
                'text-gray-900',
                'border border-gray-300',
                'shadow-sm',
                'hover:from-gray-200 hover:to-gray-300',
                'hover:shadow-md',
                'focus:ring-2 focus:ring-gray-500 focus:ring-offset-2',
                'dark:from-gray-700 dark:to-gray-800',
                'dark:text-gray-100',
                'dark:border-gray-600',
                'dark:hover:from-gray-600 dark:hover:to-gray-700'
            ],
            success: [
                'bg-gradient-to-r from-green-600 to-green-700',
                'text-white',
                'border-transparent',
                'shadow-lg shadow-green-500/25',
                'hover:from-green-700 hover:to-green-800',
                'hover:shadow-xl hover:shadow-green-500/30',
                'focus:ring-2 focus:ring-green-500 focus:ring-offset-2'
            ],
            danger: [
                'bg-gradient-to-r from-red-600 to-red-700',
                'text-white',
                'border-transparent',
                'shadow-lg shadow-red-500/25',
                'hover:from-red-700 hover:to-red-800',
                'hover:shadow-xl hover:shadow-red-500/30',
                'focus:ring-2 focus:ring-red-500 focus:ring-offset-2'
            ],
            warning: [
                'bg-gradient-to-r from-amber-500 to-amber-600',
                'text-white',
                'border-transparent',
                'shadow-lg shadow-amber-500/25',
                'hover:from-amber-600 hover:to-amber-700',
                'hover:shadow-xl hover:shadow-amber-500/30',
                'focus:ring-2 focus:ring-amber-500 focus:ring-offset-2'
            ],
            outlined: [
                'bg-transparent',
                'text-gray-700',
                'border-2 border-gray-300',
                'hover:bg-gray-50',
                'hover:border-gray-400',
                'hover:shadow-sm',
                'focus:ring-2 focus:ring-gray-500 focus:ring-offset-2',
                'dark:text-gray-300',
                'dark:border-gray-600',
                'dark:hover:bg-gray-800',
                'dark:hover:border-gray-500'
            ],
            ghost: [
                'bg-transparent',
                'text-gray-700',
                'border-transparent',
                'hover:bg-gray-100',
                'hover:text-gray-900',
                'focus:ring-2 focus:ring-gray-500 focus:ring-offset-2',
                'dark:text-gray-300',
                'dark:hover:bg-gray-800',
                'dark:hover:text-gray-100'
            ],
            link: [
                'bg-transparent',
                'text-blue-600',
                'border-transparent',
                'underline-offset-4',
                'hover:underline',
                'hover:text-blue-700',
                'focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
                'dark:text-blue-400',
                'dark:hover:text-blue-300'
            ],
            plain: 'border-transparent outline-none ring-transparent',
            text: 'border-transparent underline',
            icon: [
                'bg-transparent',
                'border-transparent',
                'hover:bg-gray-100',
                'focus:ring-2 focus:ring-gray-500 focus:ring-offset-2',
                'dark:hover:bg-gray-800'
            ]
        },

        size: {
            xs: 'h-7 px-2 text-xs',
            sm: 'h-8 px-3 text-sm',
            md: 'h-10 px-4 text-sm',
            lg: 'h-11 px-6 text-base',
            xl: 'h-12 px-8 text-base',
            icon: 'h-10 w-10'
        },

        borderRadius: {
            none: 'rounded-none',
            sm: 'rounded-sm',
            md: 'rounded-md',
            lg: 'rounded-lg',
            xl: 'rounded-xl',
            full: 'rounded-full'
        },

        fullWidth: {
            true: 'w-full',
            false: 'w-auto'
        }
    },

    compoundVariants: [
        {
            intent: 'icon',
            size: 'xs',
            class: 'h-7 w-7'
        },
        {
            intent: 'icon',
            size: 'sm',
            class: 'h-8 w-8'
        },
        {
            intent: 'icon',
            size: 'lg',
            class: 'h-11 w-11'
        },
        {
            intent: 'icon',
            size: 'xl',
            class: 'h-12 w-12'
        }
    ],

    defaultVariants: {
        intent: 'primary',
        size: 'md',
        borderRadius: 'md',
        fullWidth: false
    }
});

export type ButtonVariants = VariantProps<typeof buttonVariants>;
export interface ButtonProps extends ButtonVariants, Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'color'> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
    const { 
        intent = 'primary', 
        size, 
        borderRadius, 
        fullWidth,
        className, 
        onClick, 
        onFocus, 
        onBlur, 
        children, 
        ...rest 
    } = props;

    const classes = cn(buttonVariants({ intent, size, borderRadius, fullWidth }), className);

    return (
        <button
            data-component={Button.displayName}
            className={classes}
            role="button"
            tabIndex={0}
            onClick={onClick}
            onFocus={onFocus}
            onBlur={onBlur}
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