// lib/components/Input/index.tsx
import styles from './styles.module.css';
import { cn } from 'lib/utils/cn';

export function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
    const { className, ...restProps } = props;

    return <input className={cn(styles.input, 'w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500', className)} {...restProps} />;
}
