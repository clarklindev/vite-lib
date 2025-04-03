import { ProgressLoader } from 'lib/components';

const ProgressLoaderExample = () => {
    return (
        <>
            <div className="flex flex-col gap-10">
                <ProgressLoader progress={25} size={35} color="red" />

                <ProgressLoader progress={50} size={35} color="red" />

                <ProgressLoader progress={75} size={35} color="red" />

                <ProgressLoader progress={100} size={35} color="red" />
            </div>
        </>
    );
};

export default ProgressLoaderExample;
