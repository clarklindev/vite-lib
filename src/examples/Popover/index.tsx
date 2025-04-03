import { Popover } from 'lib/components';

const PopoverExample = () => {
    return (
        <>
            <Popover>
                <Popover.Trigger>
                    <button>Click to Toggle Popover</button>
                </Popover.Trigger>
                <Popover.Content>
                    <div>
                        <p>This is the content of the popover!</p>
                    </div>
                </Popover.Content>
            </Popover>
        </>
    );
};

export default PopoverExample;
