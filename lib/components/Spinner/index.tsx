type SpinnerProps = {
    size?: string;
    color?: string;
};

const Spinner = ({ size = `5`, color = 'white' }: SpinnerProps) => {
    return (
        <div
            data-component={Spinner.displayName}
            style={{
                width: `${size}px`,
                height: `${size}px`
            }}
        >
            <div
                className={[`w-full h-full border-2 b-solid`, `border-${color}-600`, `border-t-transparent rounded-full animate-spin-fast`].join(' ')} //order matters
            />
        </div>
    );
};

Spinner.displayName = 'Spinner';
export { Spinner };
// ------------------------------------------------------------------------------------------------------------------------------------------------
