// import { useTheme } from 'lib/context/ThemeContext';

type TextProps = {
    lineHeight?: string;
    color?: string;
    marginBottom?: string;

    children?: any;
    className?: string;
};
const rootStyles = getComputedStyle(document.documentElement);

const Text = ({
    lineHeight: propsLineHeight, //rename as propsLineHeight
    color: propsColor, //rename as propsColor
    marginBottom: propsMarginBottom, //rename as propsMarginBottom

    children,
    className,
    ...rest
}: TextProps) => {
    //defaults
    let lineHeight = 'leading-7';
    let color = rootStyles.getPropertyValue('--input-text-color').trim();
    let marginBottom = 'mb-0';

    //theme
    // let { theme } = useTheme();
    // if (theme) {
        // lineHeight = theme.Text.lineHeight;
        // color = theme.Text.color;
        // marginBottom = theme.Text.marginBottom;
    // }

    //props
    if (propsLineHeight) {
        lineHeight = propsLineHeight;
    }
    if (propsColor) {
        color = propsColor;
    }
    if (propsLineHeight) {
        marginBottom = propsLineHeight;
    }

    return (
        <p data-component={Text.displayName} className={[lineHeight, color, marginBottom, className].join(' ')} {...rest}>
            {children}
        </p>
    );
};

// ------------------------------------------------------------------------------------------------------------------------------------------------

Text.displayName = 'Text';
export { Text };
