// lib/components/Label/index.tsx
import styles from './styles.module.css'

export function Label(props: React.LabelHTMLAttributes<HTMLLabelElement>) {
    const { className, ...restProps } = props

    return <label className={`${className} ${styles.button}`} {...restProps} />
}