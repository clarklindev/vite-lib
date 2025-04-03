import { forwardRef, InputHTMLAttributes, HTMLAttributes } from 'react';
import { VariantProps, cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const InputVariants = cva(
    `items-center 
  box-border
  cursor-text
  focus:outline-none
  border-none
  rounded-md
  h-12
  max-h-12
  px-2
  gap-2
  bg-[var(--input-background-color)]
  overflow-hidden`,
    {
        variants: {
            variant: {
                default: `border 
          border-solid 
          flex
          items-center
          border-[var(--border-color)]`,
                unstyled: `bg-transparent
          border-0 
          border-transparent 
          px-0 
          rounded-none`
            }
        },
        defaultVariants: {
            variant: 'default'
        }
    }
);

interface InputProps extends HTMLAttributes<HTMLDivElement> {
    variants?: VariantProps<typeof InputVariants>;
}

const Input = ({ className, variants, children, ...props }: InputProps) => {
    const classes = twMerge(InputVariants({ ...variants }), className);

    return (
        <div data-component={Input.displayName} className={classes} {...props}>
            {children}
        </div>
    );
};

interface InputElementProps extends InputHTMLAttributes<HTMLInputElement> {}

const InputElement = forwardRef<HTMLInputElement, InputElementProps>(({ onChange, value, placeholder = '', className, readOnly = false, type = 'text', ...props }, ref) => {
    return (
        <input
            ref={ref}
            type={type}
            onChange={onChange}
            value={value}
            placeholder={placeholder}
            readOnly={readOnly}
            className={twMerge(
                `border-none
      focus:outline-none
      flex
      h-full
      w-full
      bg-transparent`,
                readOnly &&
                    `text-neutral-300
      cursor-default
      select-none
      `,
                className
            )}
            {...props}
        />
    );
});

InputElement.displayName = 'Input.InputElement';
Input.InputElement = InputElement;

Input.displayName = 'Input';
export { Input };
