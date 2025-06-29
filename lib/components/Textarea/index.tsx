// import { useTheme } from 'lib/context/ThemeContext';

type TextareaProps = {
    children?: any;
    className?: string;
};
const Textarea = ({
    children,
    className = 'w-full p-4 min-h-[150px] border border-gray-400/50 resize-none focus:outline-none focus:ring-1 focus:ring-gray-300 focus:border-gray-400 text-base rounded-xl scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100',
    ...rest
}: TextareaProps) => {
    //defaults

    // //theme
    // let { theme } = useTheme();
    // if (theme) {
    //   color = theme.Textarea.color;
    //   rows = theme.Textarea.rows;
    // }

    return (
        <textarea data-component={Textarea.displayName} className={[className].join(' ')} {...rest}>
            {children}
        </textarea>
    );
};

// ------------------------------------------------------------------------------------------------------------------------------------------------

Textarea.displayName = 'Textarea';
export { Textarea };
