// lib/components/Button/index.tsx
import { cn } from '../../utils/cn'; // Assuming you have a cn utility

export function Button(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
    const { className, children, ...restProps } = props;
    return (
        <button
            className={cn(
                'text-red-400 hover:text-red-800', // base styles
                className // allow overrides
            )}
            {...restProps}
        >
            {children}
        </button>
    );
}
