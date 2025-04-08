type SpinnerProps = {
    size?: string;
    color?: string;
};

const Spinner = ({ size = `5` }: SpinnerProps) => {
    return (
        <div
            data-component={Spinner.displayName}
            style={{
                width: `${size}px`,
                height: `${size}px`
            }}
        >
            <svg className="mr-3 w-10 h-10 animate-spin" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <circle className="stroke-gray-400" cx="12" cy="12" r="10" fill="none" strokeWidth="1" />
                <circle className="stroke-white dark:stroke-black" cx="12" cy="12" r="10" fill="none" strokeWidth="1" strokeDasharray="63.66" strokeDashoffset="31.83" />
            </svg>
        </div>
    );
};

Spinner.displayName = 'Spinner';
export { Spinner };
// ------------------------------------------------------------------------------------------------------------------------------------------------
