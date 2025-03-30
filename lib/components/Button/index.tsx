// lib/components/Button/index.tsx
import styles from "./styles.module.css";

export function Button(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
    const { className, children, ...restProps } = props;
    return (
        <button
            className={`text-red-400 ${className} ${styles.button}`}
            {...restProps}
        >
            {children}
        </button>
    );
}
